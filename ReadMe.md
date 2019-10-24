##BackEnd Art Portfolio##

*Art Portfolio Back End*

**This is the endpoints and notes for the backend portion of the Art Portfolio.**


##PUT /art/:id
https://art-po-bw.herokuapp.com/art/:id
Edit the caption of the artwork selected

*HEADERS*
Authorization : token
Content-Type : application/json
PARAMS
PATH VARIABLES
id1
**BODY raw**
{
	"caption": "Beauty"
}



/art/:id
**GET /art/:id**
https://art-po-bw.herokuapp.com/art/:id
To retrieve a specific piece of art. The id in the parameter is the art's id. NOT the artists id.

##HEADERS
Authorization : token
Content-Type : application/json
PARAMS
PATH VARIABLES
id2



/art
*GET /art*
https://art-po-bw.herokuapp.com/art
To retrieve art AFTER signing in. If you are not signed in and provide a token, you will not enter.

**HEADERS**
Content-Type : application/json
Authorization : token
##BODY raw
{

"username": "kevin",
"password": "hajflas"
}



##POST /auth/login
https://art-po-bw.herokuapp.com/auth/login
Here you will login with previously created username and password. You need to retrieve the token and use it to view the rest of the site.

*HEADERS*
Content-Type : application/json
*BODY raw*
{

"username": "kevin",
"password": "hajflas"
}



**POST auth/register**
https://art-po-bw.herokuapp.com/auth/register
Used to create a new user. Needs a username and password only.

##HEADERS
Authorization
Content-Type : application/json
**BODY raw**
{
	"username": "Arya22",
	"password": "1234"
}