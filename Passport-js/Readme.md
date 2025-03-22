# local strategy
we need to send username and password for local authentication check if we have other parameter than username  then we could use {usernameField: 'email'} while defining the callback function.       
npm i passport
npm i passport-local

# google auth
npm i passport-google-oauth20
go to google console and then create OAuth creds for web app with callback url http://localhost:5000/auth/google/callback
