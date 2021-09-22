# p2-iproject-server
Individual Portfolio Server


# link web app
server
https://h8-sepotipaigram-app.herokuapp.com



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
not needed
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
not needed
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
not needed
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
{
  "access_token": "<string>"
}
```

_Request Body_

```
not needed
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

### PUT /foods/:id

> edit food data by id

_Request Header_

```
{
  "access_token": "<string>"
}
```

_Request Body_

```
{
  "name": "<string>",
  "description": "<string>",
  "price": "<integer>"
  "CategoryId": "<integer>"
  "ImageUrl": "<file jpg/png/jpeg>"
}
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
    "id": 5,
    "name": "buju buneng",
    "description": "aaaaaaaaaaa",
    "price": 70000,
    "imgUrl": "https://ik.imagekit.io/o77c8cfipim/ars_WtvsK7ws_.png",
    "categoryId": 1,
    "authorId": 16,
    "status": "active"
    "updatedAt": "2021-08-31T16:13:17.268Z",
    "createdAt": "2021-08-31T16:13:17.268Z"
}
```

_Response (400 - Bad Request)_

```
{
    "message": [
        "name is required",
        "description is required",
        "price is required"
        "must be a number"
        "please input minimum price 30,000"
        "imgUrl is required"
        "should be an url format"
    ]
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
  "message": "Food data is not found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

### PATCH /foods/:id

> edit food status by id

_Request Header_

```
{
  "access_token": "<string>"
}
```

_Request Body_

```
{
  "status": "<string>",
}
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
    "id": 3,
    "name": "kue lope",
    "description": "kue lope",
    "price": 60000,
    "imgUrl": "https://ik.imagekit.io/o77c8cfipim/ars_oNqTJBlya.png",
    "authorId": 1,
    "categoryId": 5,
    "status": "archived",
    "createdAt": "2021-08-31T13:41:23.319Z",
    "updatedAt": "2021-09-06T12:52:26.520Z"
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
  "message": "Food data is not found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### DELETE /foods/:id
> delete food data by id

_Request Header_

```
{
  "access_token": "<string>"
}
```

_Request Body_

```
not needed
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
  "message": "Food data has been deleted"
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
  "message": "Food data is not found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

### POST /categories
> Create new category

_Request Header_

```
no needed
```

_Request Body_

```
{
  "name": "<string>",
}
```

_Response (201 - Created)_

```
{
    "id": 6,
    "name": "thai food",
    "updatedAt": "2021-08-31T16:44:20.819Z",
    "createdAt": "2021-08-31T16:44:20.819Z"
}
```

_Response (400 - Bad Request)_

```
{
    "message": [
        "name is required",
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

### GET /categories

> GET all categories

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
        "id": 1,
        "name": "salad",
        "createdAt": "2021-08-30T18:00:10.794Z",
        "updatedAt": "2021-08-30T18:00:10.794Z"
    },
    {
        "id": 2,
        "name": "dessert",
        "createdAt": "2021-08-30T18:00:24.516Z",
        "updatedAt": "2021-08-30T18:00:24.516Z"
    },
    {
        "id": 3,
        "name": "drink",
        "createdAt": "2021-08-30T18:00:40.764Z",
        "updatedAt": "2021-08-30T18:00:40.764Z"
    },
    ...
]
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

### GET /histories

> GET all histories

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
    "id": 7,
    "entityId": 3,
    "name": "kue lope",
    "description": "Food Data with id 3, status has been updated from active to archived",
    "updateBy": "icanseti@mail.com",
    "createdAt": "2021-09-06T12:52:26.523Z",
    "updatedAt": "2021-09-06T12:52:26.523Z"
  },
  {
    "id": 6,
    "entityId": 3,
    "name": "kue lope",
    "description": "Food Data with id 3, status has been updated from inactive to active",
    "updateBy": "icanseti@mail.com",
    "createdAt": "2021-09-06T12:52:02.054Z",
    "updatedAt": "2021-09-06T12:52:02.054Z"
  },
  {
    "id": 5,
    "entityId": 3,
    "name": "kue lope",
    "description": "Food Data with id 3, status has been updated from inactive to inactive",
    "updateBy": "icanseti@mail.com",
    "createdAt": "2021-09-06T12:51:13.845Z",
    "updatedAt": "2021-09-06T12:51:13.845Z"
  },
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
### POST /customers/favorites
> Create new category

_Request Header_

```
{
  "access_token": "<string>"
}
```

_Request Body_

```
{
  "UserId": "<integer>",
}
```

_Response (201 - Created)_

```
{
    "id": 1,
    "UserId": 36,
    "FoodId": 37,
    "updatedAt": "2021-09-15T05:26:34.907Z",
    "createdAt": "2021-09-15T05:26:34.907Z"
}
```

_Response (400 - Bad Request)_

```
{
    "message": [
        "UserId is required",
        "FoodId is required",
        "Food is already added to your favorite!",
        "Food data is not found"
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
### GET /customers/favorites

> GET all favorites

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
[
    {
        "id": 1,
        "UserId": 36,
        "FoodId": 37,
        "createdAt": "2021-09-15T05:26:34.907Z",
        "updatedAt": "2021-09-15T05:26:34.907Z",
        "Food": {
            "id": 37,
            "name": "anjay",
            "description": "dewa",
            "price": 100000,
            "imgUrl": "https://ik.imagekit.io/o77c8cfipim/ars_kPn963jksk-.png",
            "authorId": 1,
            "categoryId": 5,
            "status": "active",
            "createdAt": "2021-09-06T12:22:39.377Z",
            "updatedAt": "2021-09-06T12:22:39.377Z",
            "Category": {
                "id": 5,
                "name": "main course",
                "createdAt": "2021-08-30T18:00:59.969Z",
                "updatedAt": "2021-08-30T18:00:59.969Z"
            }
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
### POST /users/pub/register

> Create new customer

_Request Header_

```
no needed
```

_Request Body_

```
{
  "username": "<string>",
  "email": "<string>"
  "phoneNumber": "<string>"
  "address": "<string>"
  "password": "<integer>"
}
```

_Response (201 - Created)_

```
{
    "id": 17,
    "username": "udin2",
    "email": "udin2@mail.com",
    "role": "customer",
    "phoneNumber": "08564536",
    "address": "jakarta"
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
        "role is required",
        "phoneNumber is required",
        address is required

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

### POST /users/pub/login

> login customer

_Request Header_

```
not needed
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

### POST /users/pub/auth/google

> register or login customer with OAuth Google

_Request Header_

```
not needed
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
### GET /users/pub/data

> get user data

_Request Header_

```
{
  "access_token": "<string>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
    "id": 1,
    "username": "icanseti",
    "email": "icanseti@mail.com",
    "role": "customer",
    "iat": 1630410311

```

_Response (401 - Unauthorized)_

```
{
    "message": "invalid signature"
}

{
    "message": "jwt malformed"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```
---
### GET /customer/foods/:id
> get food data by id for customer

_Request Header_

```
{
  "access_token": "<string>"
}
```

_Request Body_

```
not needed
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
    "id": 37,
    "name": "anjay",
    "description": "dewa",
    "price": 100000,
    "imgUrl": "https://ik.imagekit.io/o77c8cfipim/ars_kPn963jksk-.png",
    "authorId": 1,
    "categoryId": 5,
    "status": "active",
    "createdAt": "2021-09-06T12:22:39.377Z",
    "updatedAt": "2021-09-06T12:22:39.377Z",
    "Category": {
        "id": 5,
        "name": "main course",
        "createdAt": "2021-08-30T18:00:59.969Z",
        "updatedAt": "2021-08-30T18:00:59.969Z"
    }
}
```

_Response (404 - Not found)_

```
{
  "message": "Food data is not found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```
---
### GET /customer/foods/filter?name=c&description=&category=&page=&size=
> get food data by filter for customer

_Request Header_

```
{
  "access_token": "<string>"
}
```

_Request Body_

```
not needed
```

_Request Params_

```
{
  "req.params.category": "<integer>"
  "req.params.page": "<integer>"
  "req.params.size": "<integer>"
  "req.params.name": "<string>"
  "req.params.description": "<string>"
}
```

_Response (200)_

```
{
    "totalItems": 3,
    "foods": [
        {
            "id": 4,
            "name": "strawberry juice",
            "description": "strawberry juice",
            "price": 45000,
            "imgUrl": "https://ik.imagekit.io/o77c8cfipim/cheese-cake_PaPB7PMOO7.jpg",
            "authorId": 1,
            "categoryId": 3,
            "status": "inactive",
            "createdAt": "2021-08-31T14:42:55.847Z",
            "updatedAt": "2021-09-08T16:54:30.001Z",
            "Category": {
                "id": 3,
                "name": "drink",
                "createdAt": "2021-08-30T18:00:40.764Z",
                "updatedAt": "2021-08-30T18:00:40.764Z"
            }
        },
        {
            "id": 34,
            "name": "cccccccccccc",
            "description": "dasdsadsa",
            "price": 100000,
            "imgUrl": "https://ik.imagekit.io/o77c8cfipim/kevin-mueller-Q-fL04RhuMg-unsplash_IW0wdV86_L.jpg",
            "authorId": 1,
            "categoryId": 4,
            "status": "inactive",
            "createdAt": "2021-09-06T07:15:10.064Z",
            "updatedAt": "2021-09-08T16:13:23.025Z",
            "Category": {
                "id": 4,
                "name": "starter",
                "createdAt": "2021-08-30T18:00:48.196Z",
                "updatedAt": "2021-08-30T18:00:48.196Z"
            }
        },
        {
            "id": 22,
            "name": "kiwi juice",
            "description": "kiwi juice",
            "price": 50000,
            "imgUrl": "https://ik.imagekit.io/o77c8cfipim/kiwi-juice_F6t8BM1hk.jpg",
            "authorId": 1,
            "categoryId": 3,
            "status": "active",
            "createdAt": "2021-09-02T12:42:10.394Z",
            "updatedAt": "2021-09-02T12:42:10.394Z",
            "Category": {
                "id": 3,
                "name": "drink",
                "createdAt": "2021-08-30T18:00:40.764Z",
                "updatedAt": "2021-08-30T18:00:40.764Z"
            }
        }
    ],
    "totalPages": 1,
    "currentPage": 1
    ...
}
```

_Response (404 - Not found)_

```
{
  "message": "Food data is not found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```
