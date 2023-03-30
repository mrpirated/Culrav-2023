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
                    "user_id":Integer,
                    "name":string,
                    "email":string,
                    "type":string,
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
                    "event_tagline": String,
                    "event_description": String,
                    "event_description": String,
                    "min_team_members": Integer,
                    "max_team_members": Integer,
                    "rules": String,
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
            "user_id": Integer, //user of id which team leader wishes to add.
        }
        ```
    - response
        ```javascript
        {
            "success":boolean, //true
            "message":string,
        }
        ```
   - error
        ```javascript
        {
            "success":boolean,//false
            "message": string
        }
        ```
7. api/getUserTeams (GET)
   - request
        ```javascript
        "headers":{
            "authorization":Bearer Token,
        }
        ```
    - response
        ```javascript
        {
            "success":boolean, //true
            "message":string,
            "data": [
                {
                    "team_id": Integer,
                    "team_name": String,
                    "event_id": Integer,
                    "event_name": String,
                    "commitee_id": Integer,
                    "commitee_name": String,
                    "is_leader": Boolean
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
8. api/addPOCs (POST)
   - request
        ```javascript
        "headers":{
            "authorization":Bearer Token,
        },
        "body":{
            "poc_id":Integer,
            "commitee_id":Integer
        }
        ```
   - response
        ```javascript
        {
            "success":boolean, //true
            "message":string,
        }
        ```
   - error
        ```javascript
        {
            "success":boolean,//false
            "message": string
        }
        ```
9.  api/addECs (POST)
   - request
        ```javascript
        "headers":{
            "authorization":Bearer Token,
        },
        "body":{
            "ec_id":Integer,
            "commitee_id":Integer
        }
        ```
    - response
        ```javascript
        {
            "success":boolean, //true
            "message":string,
        }
        ```
   - error
        ```javascript
        {
            "success":boolean,//false
            "message": string
        }
        ```
10. api/removeMemberFromTeam (POST)
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
        }
        ```
   - error
        ```javascript
        {
            "success":boolean,//false
            "message": string
        }
        ```
11. api/activateTeamLink (POST)
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
            "data":{
                "link":String
                }
        }
        ```
   - error
        ```javascript
        {
            "success":boolean,//false
            "message": string
        }
        ```
12. api/addMemberToTeamLink (POST)
   - request
        ```javascript
        "headers":{
            "authorization": Bearer token,
        }
        "body":{
            "link": String,
        }
        ```
   - response
        ```javascript
        {
            "success":boolean, //true
            "message":string,
        }
        ```
   - error
        ```javascript
        {
            "success":boolean,//false
            "message": string
        }
        ```
13. api/getUserData (GET)
   - request
        ```javascript
        "headers":{
            "authorization": Bearer token,
        }
   - response
        ```javascript
        {
            "success":boolean, //true
            "message":string,
            "data": {
                "token":string,
                "user":{
                    "user_id":Integer,
                    "name":string,
                    "email":string,
                    "type":string,
                }
            }
        }
        ```
   - error
        ```javascript
        {
            "success":boolean,//false
            "message": string
        }
        ```
14. api/getImage (GET)
   - request
        ```javascript
        "query":{
            "type": String, // event, commitee, profile
            "event_id": String, //if type is event
            "commitee_id": String, //if type is commitee
            "user_id": String, //if type is profile
        }
   - response
        ```javascript
        {
            "success":boolean, //true
            "message":string,
            "data": {
                "image":{
                    "type":"Buffer",
                    "data":[Integer]
                }
            }
        }
        ```
   - error
        ```javascript
        {
            "success":boolean,//false
            "message": string
        }
        ```
15. api/editEventDetails (POST)
   - request
        ```javascript
        "headers":{
            "authorization": Bearer token,
        },
        "body":{
            "event_id":Integer,
            "event_description":String,
            "event_tagline":String,
            "min_team_members":Integer,
            "max_team_members":Integer,
            "rules":String
        }
   - response
        ```javascript
        {
            "success":boolean, //true
            "message":string,
        }
        ```
   - error
        ```javascript
        {
            "success":boolean,//false
            "message": string
        }
        ```
16. api/getOrganizingTeam (GET)
   - response
        ```javascript
        {
            "success":boolean, //true
            "message":string,
            "data":[
                {
                    "user_id": Integer,
                    "name" : String,
                    "type": Integer
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
17. api/getAllPOCs (GET)
   - response
        ```javascript
        {
            "success":boolean, //true
            "message":string,
            "data":[
                {
                    "poc_id": Integer,
                    "poc_name": String,
                    "commitee_id" : Integer,
                    "commitee_name": String,
                    "poc_culrav_id":Integer
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
