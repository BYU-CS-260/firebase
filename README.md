# Firebase
This tutorial is intended to give you some basic information about how to use firebase authentication and the firestore database.
## Introduction
Firebase is a backend-as-a-service (BaaS) offering by Google that features databases, an ML kit, cloud functions, authentication, hosting, cloud storage, and more. Firebase abstracts the complexity of building a robust and scalable backend system, enabling developers to focus on building the client side of applications.
## Video
You can follow this [video](https://youtu.be/zL0dKETbCNE) to build a React application that will use firebase for authentication and database operations.  So, all you will have to do is host your front end on your Cloud9 server (But firebase will also host your front end if you want it to).  The following setup rules will be covered in the video, but this list may help you make sure you caught everything.  I had to fix a few things in his [github repository](https://github.com/machadop1407/react-firebase-blog-website.git), but you can use it for a reference.  You should clone this repository if you want to get to a working version.


## Firebase Setup

* Visit the [Firebase console](https://console.firebase.google.com/u/0/) and sign in with your Google account
* Click “Add Project”
<img src="images/add.png" width="350">

* Name your project something meaningful (eg Blog)

* Click “Continue” to continue (we don’t need Google analytics)
* Click "Create Project" to create the project 

* Once you have created your project, click on the web icon </>
<img src="images/webIcon.png" width="350">

* For the app nickname, enter whatever name you want and click “Register App”
* When your Firebase configuration is displayed, copy the contents within the scripts tag

<img src="images/config.png" width="400">

* Go back to the console by clicking on "Continue to console"

* On the Console, select authentication

* On the authentication page select 'Google'

<img src="images/auth.png" width="350">

* Notice that you could also choose to authenticate with passwords or Twitter or Facebook.
* Enable Google and save

<img src="images/auth1.png" width="350">

* Now we will create a database

* You can select "Firestore Database" from the Build menu on the lefthand side of the page

<img src="images/buildMenuDatabase.png" width="450">

* Create a database

<img src="images/database.png" width="450">

* And start the database in test mode

<img src="images/testmode.png" width="350">

* And create a collection called "posts".  It will create an automatic document.  Delete the document so it doesn't confuse you or cause issues later on.

* Now change the firestore rules to allow access. You can find the rules by selecting "Rules" on the horizontal menu near the top of the Firestore page.   
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```
* And allow your domain to access the application.  Go to Authentication/Settings and scroll down to authorized domains.  Add the domain for your Cloud9 server.

* Clone this repository, install with npm and start it
```
npm install
npm start
```

* Be sure to paste the contents of the script tag in the firebase-config.js file where it says "Your web app's Firebase configuration."

