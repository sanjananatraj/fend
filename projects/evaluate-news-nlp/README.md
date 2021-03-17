# Project Instructions

This project is for Udacity's Front End Web Developer Nanodegree program. This is a web tool that allows users to run Natural Language Processing (NLP) on articles and blogs found on other websites. Just enter the URL of an article into the form submission, and you'll get a response!

## Getting started

Remember that once you clone this project, you will still need to install everything:

`cd` into your new folder and run:
- `npm install`

## Setting up the API

The MeaningCloud API we're using is called Sentiment Analysis. You can find more info about the API [here](https://www.meaningcloud.com/developer/sentiment-analysis). First, you will need to sign up to get an API key to be able to use this tool.

### Step 1: Signup for an API key
First, you will need to go [here](https://www.meaningcloud.com/developer/create-account. Signing up will get you an API key. Don't worry, at the time of this course, the API is free to use.

### Step 2: Environment Variables
Next we need to declare our API keys, which will look something like this:
```
//API Info
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = 'your-key'
```

...but there's a problem with this. We are about to put our personal API keys into a file, but when we push, this file is going to be available PUBLICLY on Github. Private keys, visible publicly are never a good thing. So, we have to figure out a way to make that not happen. The way we will do that is with environment variables. Environment variables are pretty much like normal variables in that they have a name and hold a value, but these variables only belong to your system and won't be visible when you push to a different environment like Github.

- [ ] Use npm or yarn to install the dotenv package ```npm install dotenv```. This will allow us to use environment variables we set in a new file
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your API keys like this:
```
API_KEY=**************************
```
- [ ] Add this code to the very top of your server/index.js file:
```
const dotenv = require('dotenv');
dotenv.config();
```
- [ ] Reference variables you created in the .env file by putting ```process.env``` in front of it, an example might look like this:
```
console.log(`Your API key is ${process.env.API_KEY}`);
```
...Not that you would want to do that. This means that our updated API credential settings will look like this:
```
//API Info
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY
```
### Step 3: Using the API

We're ready to go! Be sure to check out the documentation of MeaningCloud's API [here](https://www.meaningcloud.com/developer/sentiment-analysis/doc/what-is-sentiment-analysis), so you can understand what the API is returning!

## Step 4: Start the project
`npm run build-prod` to build 
`npm run start` to run

Visit http://localhost:5000/ to see the final tool!\