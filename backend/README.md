# API DOCUMENTATION


### Auth Routes

1. /api/login (POST)
   - request
        ```javascript
        "body":{
            "email": string,
            "password": string
        }
        ```
   - response
        ```javascript
        {
            "success":boolean, //true
            "message":string,
            "data": {
                "token":string,
                "user":{
                    "name":string,
                    "email":string,
                }
            }
        }
        ```
   - error
        ```javascript
        {
            "success":boolean, //false
            "message": string
        }
        ```
1. /api/signup (POST)
   - request
        ```javascript
        "body":{
            "name": string,
            "email": string,
            "password": string
        }
        ```
   - response
        ```javascript
        {
            "success":boolean, //true
            "message":string,
            "data": {
                "token":string,
                "user":{
                    "name":string,
                    "email":string,
                }
            }
        }
        ```
   - error
        ```javascript
        {
            "success":boolean, //false
            "message": string
        }
        ```
3. api/getCommitees (GET)
   - request
        ```javascript
        "headers":{
            "authorization":Bearer token,
        }
        ```
    - response
        ```javascript
        {
            "success":boolean, //true
            "message":string,
            "data": [
                {
                    "commitee_id": integer,
                    "name": string,
                }
            ]
        }
        ```
   - error
        ```javascript
        {
            "success":boolean,//false
            "message": string
        }
        ```

4. api/getCommiteeEvents (GET)
   - request
        ```javascript
        "headers":{
            "authorization":Bearer token,
        },
        "query":{
            "commitee_id": integer,
        }
        ```
    - response
        ```javascript
        {
            "success":boolean, //true
            "message":string,
            "data": [
                {
                    "event_id": integer,
                    "name": string,
                }
            ]
        }
        ```
   - error
        ```javascript
        {
            "success":boolean,//false
            "message": string
        }
        ```
5. api/createTeam (POST)
   - request
        ```javascript
        "headers":{
            "authorization": Bearer token,
        }
        "body":{
            "event_id": Integer,
            "team_name": String
        }
        ```
    - response
        ```javascript
        {
            "success":boolean, //true
            "message":string,
            "data": [
                {
                    
                }
            ]
        }
        ```
   - error
        ```javascript
        {
            "success":boolean,//false
            "message": string
        }
        ```
6. api/addMemberToTeam (POST)
   - request
        ```javascript
        "headers":{
            "authorization": Bearer token,
        }
        "body":{
            "team_id": Integer,
        }
        ```
    - response
        ```javascript
        {
            "success":boolean, //true
            "message":string,
            "data": [
                {
                    
                }
            ]
        }
        ```
   - error
        ```javascript
        {
            "success":boolean,//false
            "message": string
        }
        ```
