# prometeo-medicore
# codebugs

<h3>Prometeo 2019 Project</h3>

The web application developed by the team helps licensed doctor view medical history of the patients so that they have a better insight before prescribing medicines.
<hr>

<h4>Features of the project:</h4>
1. The MediCore web application uses JSON Web Token (JWT) for securely transmitting information between parties as a JSON object. <br>
2. All medical practitioners must enter thier license number so that thier credibitlity can be easily verified. <br>
3. Mail authentication using OTP and notifications at every step makes sure the patient is informed and updated about medical practioners accessing their profile or updating prescriptions. <br>
4. Requesting appointment is made easy using node mailer to send email to the registred email id of the doctor.  <br>

<hr>
<h4>The project aims to:</h4>
1. Make available the medical history of the patient for doctors perusal.<br>
2. Securely accessing all prescriptions through the web application.<br>
3. Abolishing the prevalence of quacks by increasing transparency between doctors and patientts <br>
4. To make the process of requesting appointment easier<br>


# MediCore Website 
 ### A webApp built on MERN stack to help manage prescriptions and appointments for medical purpose 
  

  ## Deploy on local machine
* ### Install [Node.js](https://nodejs.org/en/download/current/)
> Deploying this app requires node package manager `npm`
* ### Set [MongoDB](https://docs.mongodb.com/manual/installation/) Database
* ### Clone the repository
> Download this repository `or`
```
git clone https://github.com/jainpriyanshi/prometeo-codebug.git
cd prometeo-codebug
```
* ### Install dependencies for Backend
> Add email and password to mail.js in Backend
```
cd server && cd config 
touch mail.js
```
* ### Install dependencies for Backend
> Directory now is to be changed to `server`
```
cd server
npm install
```
* ### Run `development server`
```
npm start
```
> Its up and running on port 4000.

* ### Install dependencies for frontend
> Directory now is to be changed to `client`
```
cd client
npm install
```
* ### Run `development server`
```
npm start
```
> Its up and running on port 3000.

* ### Run `production build`
```
npm run build
