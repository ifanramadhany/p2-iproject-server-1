# p2-iproject-server
Individual Portfolio Server


# link web app
server
https://h8-sepotipaigram-app.herokuapp.com

client
https://h8-sepotipaigram-new-app.web.app

---

# My Assets App Server

My Assets App is an application to manage your assets. This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints

---

### POST /users/register

> Create new user

_Request Header_

```
no needed
```

_Request Body_

```
{
  "username": "<string>",
  "email": "<string>",
  "password": "<integer>"
}
```

_Response (201 - Created)_

```
{
    "id": 1,
    "username": "amad1",
    "email": "amad1@mail.com",
    "profileUrl": "https://avatars.dicebear.com/api/bottts/amad1.svg"
}
```

_Response (400 - Bad Request)_

```
{
    "message": [
        "username already in use!",
        "username is required",
        "email address already in use!",
        "email is required",
        "should be an email format!",
        "password is required",
        "The password length should be 5 characters minimum.",
    ]
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### POST /users/login

> login user

_Request Header_

```
no needed
```

_Request Body_

```
{
  "email": "<string>",
  "password": "<integer>"
}
```

_Response (200)_

```
{
  "access_token": "<string>"
}
```

_Response (404 - Unauthorized)_

```
{
  "message": "Email / Password is wrong!"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### POST /users/auth/google

> register or login user with OAuth Google

_Request Header_

```
no needed
```

_Request Body_

```
{
  "idToken": "<string>"
}
```

_Response (200)_

```
{
  "access_token": "<string>"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---
### GET /users/data

> get user data

_Request Header_

```
{
  "access_token": "<string>"
}
```

_Request Body_

```
no needed
```

_Response (200)_

```
{
    "id": 1,
    "username": "amad1",
    "email": "amad1@mail.com",
    "profileUrl": "https://avatars.dicebear.com/api/bottts/amad1.svg"
}
```

_Response (401 - Unauthorized)_

```
{
    "message": "invalid signature"
}

{
    "message": "jwt malformed"
}

{
    "message": "Invalid Token"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

### PATCH /users/profile

> change profile picture

_Request Header_

```
{
  "access_token": "<string>"
}
```

_Request Body_

```
"profileUrl": "<file jpg/png/jpeg>"
```

_Response (200)_

```
{
    "message": "profileUrl has been updated",
    "profileUrl": "https://ik.imagekit.io/o77c8cfipim/kiwi-juice_QTgLue0-3.jpg"
}
```
_Response (400 - Bad Request)_

```
{
    "message": "File should be an Image format and maximum size is 1,525 mb"
}
```

_Response (401 - Unauthorized)_

```
{
    "message": "invalid signature"
}

{
    "message": "jwt malformed"
}

{
    "message": "Invalid Token"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### GET /posts

> Get all post data

_Request Header_

```
no needed
```

_Request Body_

```
no needed
```

_Response (200)_

```
[
    {
        "id": 3,
        "title": "Intentions",
        "artist": "Justin Bieber",
        "embedUrl": "https://widget.deezer.com/widget/dark/track/867433232",
        "caption": "ini lagu sangat mantab dewa",
        "like": 0,
        "UserId": 1,
        "createdAt": "2021-09-22T18:26:47.157Z",
        "updatedAt": "2021-09-22T18:26:47.157Z",
        "User": {
            "id": 1,
            "username": "amad1",
            "email": "amad1@mail.com",
            "profileUrl": "https://ik.imagekit.io/o77c8cfipim/kiwi-juice_QTgLue0-3.jpg",
            "createdAt": "2021-09-22T18:13:58.779Z",
            "updatedAt": "2021-09-22T18:18:36.379Z"
        }
    },
    {
        "id": 2,
        "title": "Swet Shop Boys",
        "artist": "Zayn Malik",
        "embedUrl": "https://widget.deezer.com/widget/dark/track/602973712",
        "caption": "ini lagu sangat mantab dewa",
        "like": 0,
        "UserId": 1,
        "createdAt": "2021-09-22T18:26:12.989Z",
        "updatedAt": "2021-09-22T18:26:12.989Z",
        "User": {
            "id": 1,
            "username": "amad1",
            "email": "amad1@mail.com",
            "profileUrl": "https://ik.imagekit.io/o77c8cfipim/kiwi-juice_QTgLue0-3.jpg",
            "createdAt": "2021-09-22T18:13:58.779Z",
            "updatedAt": "2021-09-22T18:18:36.379Z"
        }
    },
    {
        "id": 1,
        "title": "Older",
        "artist": "Conor Matthews",
        "embedUrl": "https://widget.deezer.com/widget/dark/track/867433232",
        "caption": "ini lagu sangat mantab dewa",
        "like": 0,
        "UserId": 1,
        "createdAt": "2021-09-22T18:24:17.595Z",
        "updatedAt": "2021-09-22T18:24:17.595Z",
        "User": {
            "id": 1,
            "username": "amad1",
            "email": "amad1@mail.com",
            "profileUrl": "https://ik.imagekit.io/o77c8cfipim/kiwi-juice_QTgLue0-3.jpg",
            "createdAt": "2021-09-22T18:13:58.779Z",
            "updatedAt": "2021-09-22T18:18:36.379Z"
        }
    }
    ...
]
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### GET /posts/:id

> Get all post data by id

_Request Header_

```
{
  "access_token": "<string>"
}
```

_Request Body_

```
no needed
```

_Response (200)_

```
{
    "id": 1,
    "title": "Older",
    "artist": "Conor Matthews",
    "embedUrl": "https://widget.deezer.com/widget/dark/track/867433232",
    "caption": "ini lagu sangat mantab dewa",
    "like": 0,
    "UserId": 1,
    "createdAt": "2021-09-22T18:24:17.595Z",
    "updatedAt": "2021-09-22T18:24:17.595Z",
    "User": {
        "id": 1,
        "username": "amad1",
        "email": "amad1@mail.com",
        "profileUrl": "https://avatars.dicebear.com/api/bottts/amad1.svg",
        "createdAt": "2021-09-22T18:13:58.779Z",
        "updatedAt": "2021-09-22T18:18:36.379Z"
    }
}
```

_Response (404 - Not found)_

```
{
  "message": "Post is not found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### POST /posts

> Create new post

_Request Header_

```
{
  "access_token": "<string>"
}
```

_Request Body_

```
{
  "title": "<string>",
  "artist": "<string>",
  "embedUrl": "<string url>"
  "caption": "<string>"
}
```

_Response (201 - Created)_

```
{
    "like": 0,
    "id": 3,
    "title": "Older",
    "artist": "Conor Matthews",
    "embedUrl": "https://widget.deezer.com/widget/dark/track/867433232",
    "caption": "ini lagu sangat mantab dewa",
    "UserId": 1,
    "updatedAt": "2021-09-22T16:49:57.149Z",
    "createdAt": "2021-09-22T16:49:57.149Z"
}
```

_Response (400 - Bad Request)_

```
{
    "message": [
        "title is required",
        "artist is required",
        "embedUrl is required",
        "embedUrl should be url format",
        "caption is required"
    ]
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```
---

### DELETE /posts/:id
> delete post data by id

_Request Header_

```
{
  "access_token": "<string>"
}
```

_Request Body_

```
no needed
```


_Request Params_

```
{
  "req.params.id": "<integer>"
}
```

_Response (200)_

```
{
  "message": "Post has been deleted"
}
```

_Response (403 - Unauthorized)_

```
{
  "message": "You have no access"
}
```

_Response (404 - Not found)_

```
{
  "message": "Post is not found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```
