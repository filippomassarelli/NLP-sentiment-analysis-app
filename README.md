<img src="https://github.com/filippomassarelli/NLP-sentiment-analysis-app/blob/master/src/client/NLP screenshot.png?raw=true" width=150>

# Sentiment Analysis with Natural Language Processing

Fourth project for Udacity's Front-end Nanodegree.

The app fetches the sentiment analysis of either text or a webpage provided by the user.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have a browser, Chrome is preferable.
- You have installed node and have a code editor such as Visual Studio Code.

As this project depends on Nodejs and Node Package Manager (NPM) you must download and install Node (NPM comes with Node) from [here](https://nodejs.org/en/download/).

## Installation

### Installing project dependencies

After cloning, open your terminal and run:

```bash
npm install
```

> _tip_: **npm i** is shorthand for **npm install**

## API setup

In order to run the app locally you need to signup for the meaningCloud API [here](https://www.meaningcloud.com/developer/sentiment-analysis).

In the root directory, create a .env file to safely store your API key.

```
API_KEY = "**************************"
```

### Run in development

Start the webpack dev-server

```bash
npm build-dev
```

Start the server

```bash
npm start
```

### Run in production

Generate the dist folder

```bash
npm build-prod
```

start the server

```bash
npm start
```

Navigate to `http://localhost:2099`

### Run tests

To run the tests, run

```bash
npm test
```

## Acknowledgments

- [Udacity](https://www.udacity.com/)
- [MeaningCloud](https://www.meaningcloud.com/developer/)

## Deployment

Deployed with Heroku at [nlp-sentiment-analysis-app.herokuapp](https://nlp-sentiment-analysis-app.herokuapp.com/)

## Built With

- SCSS
- HTML
- JS
- API
- NodeJS
- Express
- Webpack
- Babel
- Service Worker
- Jest
- Heroku
