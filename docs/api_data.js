define({ "api": [
  {
    "type": "post",
    "url": "/auth/",
    "title": "POST /auth/",
    "name": "PostAuth",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>The request code we get from 1st part of explicit Oauth2</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "ErrorResponse(OneAuth Server Error: POST)",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"success\": false,\n  \"code\": \"500\",\n  \"error\": {\n      \"message\": \"Could not post data to OneAuth API(OneAuth Server POST Error).\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "ErrorResponse(Database Error: FIND)",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"success\": false,\n  \"code\": \"500\",\n  \"error\": {\n      \"message\": \"Could not find in OneAuth Table(Database Error: FIND).\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "ErrorResponse(OneAuth Server Error: GET)",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"success\": false,\n  \"code\": \"500\",\n  \"error\": {\n      \"message\": \"Could not get details from OneAuth API(OneAuth Server Error: GET).\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "ErrorResponse(Database Error: CREATE)",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"success\": false,\n  \"code\": \"500\",\n  \"error\": {\n      \"message\": \"Could not create in OneAuth Table(Database Error: CREATE).\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "ErrorResponse(Unauthorized)",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"success\": false,\n  \"code\": \"500\",\n  \"error\": {\n      \"message\": \"Accessible to only CB employees(Unauthorized)\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "SuccessResponse(User Exists)",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"code\": \"200\",\n  \"token\": \"Random Token\"\n\n}",
          "type": "json"
        },
        {
          "title": "SuccessResponse(New User)",
          "content": "HTTP/1.1 201 Created\n{\n  \"success\": true,\n  \"code\": \"201\",\n  \"token\": \"Random Token\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routers/api/auth.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "https://cb-leadtracker.herokuapp.com/api/auth/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/centres/add",
    "title": "POST /centres/add",
    "name": "AddCentre",
    "group": "Centres",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Centre</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SuccessResponse",
          "content": "HTTP/1.1 201 Created\n{\n  \"success\": true,\n  \"data\": {\n    \"id\": 5,\n    \"name\": \"Gurugram\",\n    \"updatedAt\": \"2017-08-27T04:27:26.426Z\",\n    \"createdAt\": \"2017-08-27T04:27:26.426Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "ErrorResponse(Incorrect Details)",
          "content": "HTTP/1.1 400 Bad Request\n{\n  success: false\n  , code: \"400\"\n  , error: {\n    message: \"Could not add the centre(Incorrect Details).\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "ErrorResponse(Centre already Exists)",
          "content": "HTTP/1.1 400 Bad Request\n{\n  success: false\n  , code: \"400\"\n  , error: {\n    message: \"Could not add the centre(Centre already Exists).\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "ErrorResponse(Server Error)",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false\n  , code: \"500\"\n  , error: {\n    message: \"Could not add the centre(Internal Server Error).\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routers/api/centres.js",
    "groupTitle": "Centres",
    "sampleRequest": [
      {
        "url": "https://cb-leadtracker.herokuapp.com/api/centres/add"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/centres/:id",
    "title": "DELETE /centres/:id",
    "name": "DeleteCentre",
    "group": "Centres",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SuccessResponse",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "ErrorResponse(Centre not found)",
          "content": "HTTP/1.1 404 Not Found\n{\n  success: false\n  , code: \"404\"\n  , error: {\n    message: \"Could not delete the centre with id 0 (Centre not found).\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "ErrorResponse(Server Error)",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false\n  , code: \"500\"\n  , error: {\n    message: \"Could not delete the centre with id 0 (Internal Server Error).\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routers/api/centres.js",
    "groupTitle": "Centres",
    "sampleRequest": [
      {
        "url": "https://cb-leadtracker.herokuapp.com/api/centres/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/centres/:id",
    "title": "GET /centres/:id",
    "name": "GetCentreById",
    "group": "Centres",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Centre</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SuccessResponse",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"data\": {\n    \"id\": 2,\n    \"name\": \"Pitampura\",\n    \"updatedAt\": \"2017-08-27T04:27:26.426Z\",\n    \"createdAt\": \"2017-08-27T04:27:26.426Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "ErrorResponse(Centre not found)",
          "content": "HTTP/1.1 404 Not Found\n{\n  success: false\n  , code: \"404\"\n  , error: {\n    message: \"No Centre found for the id 0.\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "ErrorResponse(Server Error)",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false\n  , code: \"500\"\n  , error: {\n    message: \"Could not get the centre with id 2 (Internal Server Error).\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routers/api/centres.js",
    "groupTitle": "Centres",
    "sampleRequest": [
      {
        "url": "https://cb-leadtracker.herokuapp.com/api/centres/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/centres/",
    "title": "GET /centres/",
    "name": "GetCentres",
    "group": "Centres",
    "error": {
      "examples": [
        {
          "title": "ErrorResponse(No Centres)",
          "content": "HTTP/1.1 404 Not Found\n{\n  success: false\n  , code: \"404\"\n  , error: {\n    message: \"There are no centres.\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "ErrorResponse(Server Error)",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  success: false\n  , code: \"500\"\n  , error: {\n    message: \"Could not get all the centres(Internal Server Error).\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "SuccessResponse",
          "content": "HTTP/1.1 200 OK\n{\n  success: true\n  , \"data\": [\n       {\n         \"id\": 2,\n         \"name\": \"Pitampura\",\n         \"createdAt\": \"2017-08-27T04:18:10.385Z\",\n         \"updatedAt\": \"2017-08-27T04:18:10.385Z\"\n       },\n       {\n         \"id\": 3,\n         \"name\": \"Dwarka\",\n         \"createdAt\": \"2017-08-27T04:18:28.449Z\",\n         \"updatedAt\": \"2017-08-27T04:18:28.449Z\"\n       }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routers/api/centres.js",
    "groupTitle": "Centres",
    "sampleRequest": [
      {
        "url": "https://cb-leadtracker.herokuapp.com/api/centres/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/leads/",
    "title": "GET /leads/",
    "name": "GetLeads",
    "group": "Leads",
    "version": "0.0.0",
    "filename": "src/routers/api/leads.js",
    "groupTitle": "Leads",
    "sampleRequest": [
      {
        "url": "https://cb-leadtracker.herokuapp.com/api/leads/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/users/add",
    "title": "POST /users/add",
    "name": "AddUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contact",
            "description": "<p>Phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "centre",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/api/users.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://cb-leadtracker.herokuapp.com/api/users/add"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "DELETE /users/:id",
    "name": "DeleteUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/api/users.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://cb-leadtracker.herokuapp.com/api/users/:id"
      }
    ]
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "PUT /users/:id",
    "name": "EditUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contact",
            "description": "<p>Phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "centre",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/api/users.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://cb-leadtracker.herokuapp.com/api/users/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "GET /users/:id",
    "name": "GetUserById",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/api/users.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://cb-leadtracker.herokuapp.com/api/users/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/",
    "title": "GET /users/",
    "name": "GetUsers",
    "group": "Users",
    "version": "0.0.0",
    "filename": "src/routers/api/users.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://cb-leadtracker.herokuapp.com/api/users/"
      }
    ]
  }
] });
