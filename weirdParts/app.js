var g = G$("Joan", "Bucko");
g.setLang("es");

// trying out methods
console.log(g.greet(true).setLang('en').greet())

// login by clicking on the button
$("#login").click(function(){

    // create a new object with some made up data
    var loginGrtr = G$("joan", "smith");
    // hide the rest of the screen
    $("#logindiv").hide();
    // get the value from the dropdown menu (language) and display welcome message
    loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", false).log();
});