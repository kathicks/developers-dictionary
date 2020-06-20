# Developer's Dictionary
### A fun and engaging definitions resource for software developers

[![Build Status](https://travis-ci.org/KatHicks/developers-dictionary.svg?branch=master)](https://travis-ci.org/KatHicks/developers-dictionary) [![Code Climate](https://codeclimate.com/github/KatHicks/developers-dictionary/badges/gpa.svg)](https://codeclimate.com/github/KatHicks/developers-dictionary)

**Built by [Mica Whitby](https://github.com/MicaW), [Sho Marovatsanga](https://github.com/Taziva), [Kat Hicks](https://github.com/KatHicks), [Tamar Lehmann](https://github.com/tamarlehmann), [Eleanor Kavanagh-Brown](https://github.com/bnzene) and [Barbara Shinkarenko](https://github.com/varvarra) in 8 days as the final project for Makers Academy**

![Screenshot of landing page](/screenshot.png?raw=true "Screenshot of landing page")

### Instructions

>The final project provides a safe environment for you to be creative and enjoy exploring new directions with your code.
>
>You can use any technology you like! It will be easier to use technologies you've already used at Makers. But you can use ones that are completely new.

### User stories

As a group, we developed the following user stories that defined our goals for the project as well as what we considered to be the minimum viable product (MVP)

**MVP**

```
As a developer,
So that I can learn in a fun and interactive way,
I want to scroll through the definitions wheel and play with it as I want.

As a developer,
So that I can see what terms are in the dictionary,
I'd like to see a list of terms.

As a developer,
So that I can understand at a glance what a technology is,
I want to be able to see a short definition of each term.

As a developer,
So that I can choose to learn more about a technology,
I want to be able to click through to see further definitions with references and citations.

As a developer,
So that I can quickly navigate to other resources,
I want to be able to view and click on the references and citations.

As a developer,
So that I can contribute to the dictionary,
I want to be able to submit a new term with a definition.

As a developer,
So that I can contribute to the dictionary,
I want to be able to add a new definition for each term.
```

  **Version 1**

```
As a developer,
So that I can contribute to the dictionary (and ratings),
I want to be able to sign up and sign in to the dictionary.

As a developer,
So that other people can't contribute on my behalf,
I want to be able to sign out of the dictionary.

As a developer,
So that I can learn something new in a fun way,
I want to be given a random definition when I click "I'm feeling lucky".

As a developer,
So that people can see the most useful definitions,
I'd like to be able to up-vote a definition.

As a developer,
So that people aren't mislead by incorrect information,
I'd like to be able to down-vote a definition.

As a developer,
So that I can know what other developers think of a definition,
I want to be able to view it's rating.

As a developer,
So that I can see the best definitions first,
I want to see the definitions in other of their rating.

As a developer,
So that I can quickly find what I'm looking for,
I want to be able to search by definitions and see the wheel filtered by the results.

As a developer,
So that I can quickly find what I'm looking for,
I want to be able to filter definitions by tag and see the wheel filtered by the results.

As a developer,
So that I can quickly find what I'm looking for,
I want to be able to skip to a letter in the dictionary.

```

### Objectives

* Are you having fun?
* Are you a better developer than you were yesterday?
* **Can you use high-quality processes to build an extended project in a team?**

### Using our app

* You can view our app at [https://developers-dictionary.herokuapp.com/](https://developers-dictionary.herokuapp.com/)

### Running the tests

* If you do not have MongoDB installed, you will need to install it using the instructions [here](http://treehouse.github.io/installation-guides/mac/mongo-mac.html)
  * You will then need to create two databases within the console called `developers-dictionary-development` and `developers-dictionary-test`
* Download the source code by cloning this repo with `$ git clone`
* Navigate into the root of the directory using `$ cd developers-dictionary`
* Within the command line, run `$ npm test`
* With this command, you will be able to see each test, their result and a table summarising the test coverage

### Technologies

* Built using **Node.js** with **Express**
* Runs off a **MongoDB** database
* Deployed using **Heroku**
* Tested using **Mocha**, **Chai**, **Should** and **Zombie**
* Test coverage statistics calculated using **NYC** and **Coveralls**
* Front-end design uses **SVG** as well as **jQuery**, **Bootstrap** and **CSS**
* Various packages used within the back-end logic including **Express Validator** to validate entries in the database, **Node-Mongo-Seeds** for seeding the database and **Connect Flash** for error messages

### Approach

* **Idea generation and user stories**
  * We started off by brainstorming all possible features for the app and then using the development of user stories to ensure that the features really were of value to the user
* **Wireframes**
  * We each drew our vision of the app on a piece of paper and then came together to compare our drawings
  * We took the best bits from each drawing to develop our wireframes which acted as a template for the front-end design
* **Deciding our tech**
  * We decided to use the Node, Express and MongoDB tech stack for this project as an opportunity to learn something new
* **Adding a project on GitHub**
  * We decided to use the project management tool on Github (which can be seen on this repo by selecting the [projects](https://github.com/KatHicks/developers-dictionary/projects/1) tab above)
  * We entered all the user stories as to-do items and tagged them as either MVP or Version 1
* **Pairing**
  * We paired each day and pairs rotated regularly
  * We made sure that as far as possible everyone got to work on the bits of the app that most interested them
* **Standups and retros**
  * We had stand up meetings at the beginning of each day to discuss what work was going to be done that day
  * We also had retrospective meetings at the end of each day to review how things had gone and identify any problems or blockers
* **Code reviews**
  * As not everyone was working on the same thing, it was important to have code reviews so that we all understood how other bits of the app were working

### Ideas for extension

There are lots of features that we would have liked to include but didn't have time to implement. Below is just a small selection:

* **Users**
  * Currently anyone who visits the app can add a term or explanation to the dictionary, which makes it liable to mis-use and inaccuracies
  * Our plan is to include user accounts using OAuth with users signing up using their Github
* **Extending search**
  * Currently the search only works on exact matches
  * It would be much more user friendly if we could run auto-correct, fuzzy matching and matching on first letters
* **Wildcard button**
  * One of the main aims of the app was to make researching software development jargon more fun and engaging
  * We had the idea of a wildcard button in the middle of the wheel which takes you to a random page - not only would it be fun, but it might help you learn something new too!
