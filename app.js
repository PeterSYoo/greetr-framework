// gets a new object (the framework allows us to not have to use the 'new' keyword)
let g = G$('John', 'Doe');

// using the chainable methods
g.greet().setLang('es').greet(true);

// using our object on the click of the login button.
$('#login').click(() => {
  // creates a new 'Greetr' object, again don't need the 'new' keyword
  let loginGrtr = G$('John', 'Doe');

  $('#logindiv').hide();
  
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});

let c = G$('Peter')
c.greet().setLang('en').greet(true);