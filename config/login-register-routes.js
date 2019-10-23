const router = require('express').Router();
const  bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret = require('./secrets');


const login = async (req, res) => {
    if (!req.body.email)
      return res.status(422).json({
        msg: 'Please provide your email address to login.'
      })
  
    if (!req.body.password)
      return res.status(422).json({
        msg: 'Your password is required to login.'
      })
  
    try {
      const artist = await db('artists')
        .where('email', req.body.email)
        .first()
  
      if (artist) {
        const isAuthenticated = await bcrypt.compareSync(
          req.body.password,
          artist.password
        )
        if (isAuthenticated) {
          const token = generateToken(artist)
          const photos = await db('artists')
            .join('photos', 'artists.artistId', 'photos.artistId')
            .where('artists.artistId', artist.artistId)
            .orderBy('photos.createdAt', 'desc')
            .select(
              'photos.photoId',
              'src',
              'description',
              'alt',
              'likes',
              'createdAt'
            )
          res.status(200).json({
            msg: `Welcome back, ${artist.fname}!`,
            token,
            artistId: artist.artistId,
            fname: artist.fname,
            lname: artist.lname,
            email: artist.email,
            avatar: artist.avatar,
            photos
          })
        } else
          res
            .status(401)
            .send(`Uh, oh! Either your email or password is incorrect.`)
      } else {
        res.status(404).send(`You have not yet signed-up with us!`)
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({
        error,
        msg: `Something went wrong while logging you in.`
      })
    }
  }
  
  // routes
  router.post('/', login)

const signup = async (req, res) => {
    if (!req.body.fname)
      return res.status(422).json({
        msg: 'Your first name is required to signup.'
      })
  
    if (!req.body.email)
      return res.status(422).json({
        msg: 'Please provide your email address for signup.'
      })
  
    if (!req.body.password)
      return res.status(422).json({
        msg: 'A password is required to signup.'
      })
  
    try {
      // hash the original password, then hash the hash 2^10 times
      const hash = await bcrypt.hashSync(req.body.password, 10)
      const artist = {
        ...req.body,
        password: hash,
        artistId: faker.random.uuid()
      }
      const token = generateToken(artist)
      const newArtist = await db('artists').insert(artist, [
        'artistId',
        'fname',
        'lname',
        'email',
        'avatar'
      ])
  
      const data = await getPhotos(url)
  
      const photos = data.map(photo => ({
        src: photo.src,
        description: photo.description,
        alt: photo.alt,
        likes: photo.likes,
        createdAt: photo.createdAt,
        artistId: newArtist[0].artistId
      }))
  
      const newPhotos = await db('photos').insert(photos, [
        'photoId',
        'src',
        'description',
        'alt',
        'likes',
        'createdAt'
      ])
  
      res.status(201).json({
        msg: `Welcome, ${newArtist[0].fname}!`,
        token,
        ...newArtist[0],
        photos: newPhotos
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({
        msg:
          error.code === '23505'
            ? `You're already signed-up with us! Please login instead.`
            : `Something went wrong while signing you up!`,
        error
      })
    }
  }
  
  // middleware
  const startCaseName = (req, res, next) => {
    req.body.fname = startCase(toLower(req.body.fname))
    req.body.lname = startCase(toLower(req.body.lname))
    next()
  }
  
  // routes
  router.post('/', startCaseName, signup)
  
module.exports = router;