# Greetr framework/library
## Created by Peter Yoo

## **About this framework**
* When given a first name, last name, and optional language, it generates formal and informal greetings.
* Uses `G$` or `Greetr` syntax, similar to jQuery's `$`.
* Able to create `G$` objects from a constructor living inside the framework.
* Able to be used as methods on top of jQuery selectors.
* `G$` objects are able to take 3 parameters, (firstName, lastName, language).
* Supports English and Spanish when retrieving messages.
* Able to chain methods.

## **What I've learned from building this framework**
* Global Execution Context / Local Execution Context
  * Creation phase
    * Lexical environments
      * Environment records
      * Reference to outer environment
      * 'this'
  * Execution phase
* Closures
* IIFE's
* Prototypal inheritance
  * Prototype chaining
* Polyfill
* Method chaining

## **Getting started**

The actual framework lives in `greetr.js`, feel free to download it and try it out for yourself. There is a running example inside `index.html` and `app.js`.