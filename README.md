# Developer's Dictionary
### A fun and engaging definitions resource for software developers

[![Build Status](https://travis-ci.org/KatHicks/developers-dictionary.svg?branch=master)](https://travis-ci.org/KatHicks/developers-dictionary) [![Code Climate](https://codeclimate.com/github/KatHicks/developers-dictionary/badges/gpa.svg)](https://codeclimate.com/github/KatHicks/developers-dictionary)

**Built by [Mica Whitby](https://github.com/MicaW), [Sho Marovatsanga](https://github.com/Taziva), [Kat Hicks](https://github.com/KatHicks), [Tamar Lehmann](https://github.com/tamarlehmann), [Eleanor Kavanagh-Brown](https://github.com/bnzene) and [Barbara Shinkarenko](https://github.com/varvarra) in 8 days as the final project for Makers Academy**

### Instructions

* Very little guidance beyond that written below was provided

> Production code is generally built by a team of developers. It is important that you leave Makers with the skills needed to work in a team, and this is the primary reason that project weeks exist in the curriculum.

> The final projects also provide a safe environment for you to be creative and enjoy exploring new directions with your code.

> You can use any technology you like! It will be easier to use technologies you've already used at Makers. But you can use ones that are completely new.

* As a group, we developed the following user stories that defined our goals for the project as well as what we considered to be the minimum viable product (MVP)

### User stories

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
So that I can contribute to the dictionary(and ratings),
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

* You can view our app at [www.developers-dictionary.co.uk](http://www.developers-dictionary.co.uk/)

### Running the tests

* Download the source code by cloning this repo with `$ git clone`
* Navigate into the root of the directory using `$ cd developers-dictionary`
* Within the command line, run `$ npm test`

  With this command, you will be able to see each test, results of the test and a table summarising the test coverage

### Technologies

* Built using **Node.js** with **Express**
* Runs off a **MongoDB** database
* Deployed using **Heroku**
* Tested using **Mocha**, **Chai**, **Should** and **Zombie**
* Test coverage statistics calculated using **NYC** and **Coveralls**
* Front-end design uses **SVG** as well as **jQuery**, **Bootstrap** and **CSS**
* Various packages used within the back-end logic including **Express Validator** to validating entries to the database, **Node-Mongo-Seeds** for seeding the database and **Connect Flash** for error messages

### Approach

* **Idea generation and user stories**
* **Wireframes**
* **Deciding our tech**
* **Adding a project on GitHub**
* **Pairing**
* **Standups and retros**
* **Code reviews**

### Ideas for extension

* **Users**
* **Extending search**
* **Wildcard button**
