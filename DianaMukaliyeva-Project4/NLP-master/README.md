# Natural Language Processing project

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

This project give pertinent information about the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

## Getting started

Click [here](https://infinite-island-70911.herokuapp.com/).

### Installing Dependencies

#### Installing Node and NPM

This project depends on Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (the download includes NPM) from [https://nodejs.com/en/download](https://nodejs.org/en/download/).

#### Installing project dependencies

After cloning, open your terminal and run:

```bash
npm install
```

>_tip_: **npm i** is shorthand for **npm install**

## Instructions

In order to run this application properly locally you need to signup for an API [here](https://aylien.com/).
Signing up will get you an API key.
Create a new .env file in the root of your project. Fill the .env file with your API keys like this:

```
API_ID=**************************
API_KEY=**************************
```

### Run in development mode

Start the webpack dev server
```bash
npm build-dev
```

Start the server
```bash
npm start
```

### Run in production mode

Generate the dist files
```bash
npm build
```

start the server
```bash
npm start
```

This will assemble the templates, static assets, Sass, and JavaScript. You can view the test server at this URL:

`http://localhost:8081`

### Run tests

To run the tests, run
```bash
npm test
```

## Acknowledgments

* [Udacity](https://www.udacity.com/)
* [Aylien](https://aylien.com/)
