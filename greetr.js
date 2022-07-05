// Greetr Framework/Library
// When given a first name, last name, and optional language, it generates formal and informal greetings.
// Support English and Spanish languages.
// Reusable library/framework.
// Easy to type 'G$()' structure.
// Supports jQuery.

// IIFE accepts Global object and jQuery object
// Adding a ; before your IIFE is a trick that ends whatever code that might still be lingering around that was injected earlier.
;(function(global, $) {

  // Function that returns a 'new' of an object
  const Greetr = function(firstName, lastName, language) {
    // Return the results of a different function constructor, maybe like a .init in jQuery.
    // This allows us so we don't always need to setup future objects with the new keyword.
    return new Greetr.init(firstName, lastName, language);
    }

    // hidden within the scope of the IIFE and never directly accessible.
    const supportedLangs = ['en', 'es'];

    // informal greetings.
    const greetings = {
      en: 'Hello',
      es: 'Hola',
    };

    // formal greetings.
    const formalGreetings = {
      en: 'Greetings',
      es: 'Saludos',
    };

    // logger messages.
    const logMessages = {
      en: 'Logged in',
      es: 'Inició sesión'
    }

    // The prototype of all objects created from Greetr.init constructor function.
    // To save memory space, add any extra variables here instead of inside the constructor function.
    Greetr.prototype = {
      // Adding functionality to our children objects.
      fullName: function() {
        // 'this' refers to the calling object during execution phase
        return `${this.firstName} ${this.lastName}`;
      },

      // checks to see if that is a valid language
      // references the outer lexical environment, and looks for 'supportedLang', able to find it due to closure.
      validate: function() {
        if (supportedLangs.indexOf(this.language) === -1) {
          throw 'Invalid language';
        };
      },

      // retrieve messages from object by referring to properties using the [] syntax.
      greeting: function() {
        return `${greetings[this.language]} ${this.firstName}!`;
      },

      formalGreeting: function() {
        return `${formalGreetings[this.language]}, ${this.fullName()}`;
      },

      // chainable methods return their own containing object.
      greet: function(formal) {
        let msg;

        // if undefined or null it will be coerced to 'false'.
        if (formal) {
          msg = this.formalGreeting();
        }
        else {
          msg = this.greeting();
        }

        if (console) {
          console.log(msg);
        }

        // 'this' refers to the calling object at execution time.
        // makes the method chainable.
        return this;
      },

      log: function() {
        if (console) {
          console.log(`${logMessages[this.language]} ${this.fullName()}`);
        }

        // returning 'this' makes it chainable.
        return this;
      },

      setLang: function(lang) {
        // Updates my language.
        this.language = lang;
        // Validates
        this.validate();
        // returning 'this' makes it chainable.
        return this;
      },

      HTMLGreeting: function(selector, formal) {
        if (!$) {
          throw 'jQuery not loaded';
        }

        if (!selector) {
          throw 'Missing jQuery selector';
        }

        // determine the message.
        let msg;
        if (formal) {
          msg = this.formalGreeting();
        }
        else {
          msg = this.greeting();
        }

        // inject the message in the chosen place in the DOM.
        $(selector).html(msg);
        // returning 'this' makes it chainable.
        return this;
      },

    };
    // End of Greetr.prototype Object literal.

    // The actual object is created here, allowing us to 'new' an object without calling 'new'
    Greetr.init = function(firstName, lastName, language) {

      const self = this;
      self.firstName = firstName || '';
      self.lastName = lastName || '';
      self.language = language || 'en';

      self.validate();
  }

  // .prototype points to the prototype of all the child objects created from the function constructor. We're going to point that to a new empty object -> Greetr.prototype
  // makes it so we don't have to use the 'new' keyword.
  Greetr.init.prototype = Greetr.prototype;

  // Global object, which is our browser window object, now has Greetr and G$ attached to it that points to Greetr.
  global.Greetr = global.G$ = Greetr;

})(window, jQuery);