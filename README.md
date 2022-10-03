# Rocket Academy Coding Bootcamp: World Clock

This is an implementation of [Rocket Academy](https://rocketacademy.co/)'s [World Clock exercise](https://bc.rocketacademy.co/1-frontend/1.e-exercises/1.e.3-world-clock).

## Setup

1. To install the node packages, run

`npm install`

2. To start the project in development mode locally, run

`npm start`  
or  
`BROWSER=none npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Deploy

1. Configure `package.json`

```json
{
  "homepage": "<url-to-github-page>",
  ...
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    ...
  },
  ...
}
```

2. Then deply to github page run

`npm run deploy`
