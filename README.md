# HTTP Crash Course & Exploration

## By Traversy Media https://www.youtube.com/watch?v=iYM2zFP3Zn0

---

## What Is HTTP?
 - **H**yper **T**ext **T**ransfer **P**rotocol
 - Communication between web servers * clients
 - HTTP Requests / Responses
 - Loading pages, form submit, Ajax calls

## HTTP Is Stateless
 - Every request is completely independant
 - Similar to transactions
 - Programming, Local Storage, Cookies, Sessions are used to create enhanced user experiences

## What Is HTTPS?
 - **H**yper **T**ext **T**ransfer **P**rotocol **S**ecure
 - Data sent encrypted
 - SSL / TLS 
 - Install certificate on web host

## HTTP Methods
 - GET
 > Retrieves data from the servers
 - POST
 > Submit data to the server
 - PUT
 > Update data already on the server
 - DELETE
 > Deletes data from the server

---

## HTTP Header Fields
 
- **General:**
 - Request URL
 - Request Method
 - Status Code
 - Remote Address
 - Referrer Policy

 - **Response:**
   - Server
   - Set-Cookie
   - Content-Type
   - Content-Length
   - Date

 - **Request:**
   - Cookies
   - Accept-xxx
   - Content-Type
   - Content-Length
   - Authorization
   - User-Agent
   - Referrer

## HTTP Status Codes
 - 1xx: Informational
 > Request recieved / processing
 - 2xx: Success
 > Successfully Recieved, understood and accepted
 - 3xx: Redirect
 > Further action must be taken / redirect
 - 4xx: Client Error
 > Request does not have what it needs
 - 5xx: Server Error
 > Server failed to fulfil amd apparent valid request

## HTTP Status Codes Example
 - 200 - OK
 - 201 - OK created
 - 301 - Moved to new URL
 - 304 - Not modified (Cached version)
 - 400 - Bad request
 - 401 - Unauthorized
 - 404 - Not Found
 - 500 - Internal Server Error

 ## JSON 
 - JSON.stringify(data);    // to send server
 - JSON.parse(data);        // get from server
