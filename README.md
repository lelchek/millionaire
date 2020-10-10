# Who want to be a millionaire?

> Implementation of the basic functionality of the game

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Build](#Build)
- [Format of Questions](#format-of-questions)
- [Features](#features)

## General info

This game was written as a test task.<br />
In this game, the player takes turns answering one of 12 questions.<br />
Each question has 4 possible answers and only one is correct.<br />
The list of questions is in the `./src/data/questions.json`

## Technologies

Project is created with:

- React version: 16.13.1
- React Router version: 5.2.0

Project is hosted with:

- GitHub Pages version:3.1.0
  [lelchek.github.io/millionaire](https://lelchek.github.io/millionaire)

## Setup

In the project directory to run this, install it using npm:

```
$ npm install
$ npm start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build

Builds the app for production to the `build` folder.

```
$ npm run build
```

For publishing to GitHub Pages using:

```
$ npm run deploy
```

## Format of Questions

The list of questions can be expanded.<br />
Questions must be in json format.

```
type Questions struct {
  cost      int64
  question  string
  answers   array
}
```

```
type Answer struct {
  truth  bool
  text   string
}
```

## Features

When the game starts, the questions are validated.<br />
`./src/helpers/validateQuestions.js`<br />
The game will display only those questions that have:

- property `cost` int64
- at least one correct answer
- at least one wrong answer

Array `answers` in each question can be any number of answers.<br />
From the entire array of questions, the function
`./src/helpers/createArrAnswers.js` will randomly select only one correct and maximum three incorrect answers.
