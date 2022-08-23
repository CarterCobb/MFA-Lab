# MFA Lab

In this lab you will build a simple multi factor authentication for an application (you can re-use your lab "Salt your credential hash" if you like).  You may use password for the first factor and then choose from one of the following factor categories:  possession (something you have), or inheritance (something you are).  If you wish you may use location to replace inheritance if the user is in an expected location, but doing so is purely optional.

## Requirements

- Use MFA (2FA) to protect a simple app or web site.
- Use password (knowledge) as one factor.
- Use another factor from either the possession or inheritance categories.
- Validate both (or all) factors before granting access.
- Registration is not required for this lab; user accounts can be created previously.
- If you use a token to demonstrate possession it must change/expire within a reasonable time frame less than 5 minutes.

## Tech Stack

I chose to use Auth0 as my primary way of managing users and authentication.

- [React.JS](https://reactjs.org)
- [Auth0](https://auth0.com)

## Prerequisites

- An [Auth0](https://auth0.com) account.
- Create an Auth0 Application and configure it to allow all redirects to `http://localhost:3000`; tutorial [here](https://auth0.com/docs/quickstart/spa/react/interactive).
- Create a `.env` file in the root dir and add the following:
  - `REACT_APP_AUTH0_DOMAIN=<Auth0 provided domain>`
  - `REACT_APP_AUTH0_CLIENT_ID=<Auth0 client id>`
  - `REACT_APP_AUHT0_AUDIENCE=<Auth0 audience>`

## Run

If its the first time running the project run `npm i` in the root dir.  

Simply run `npm run start` _or_ `nodemon` (if you have [nodemon](https://nodemon.io) installed globaly) in the root dir.

## Additional Details

This was built as an assignment for a college class at [Neumont College of Computer Science](https://www.neumont.edu/). Please do not use any part of this project in any way that would be considered plagiarism.
