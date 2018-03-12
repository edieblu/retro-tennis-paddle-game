(function(global, $){

    // creates an object constructors with 'new' keyword

    var Greetr = function(firstName, lastName, language){
        return new Greetr.init(firstName, lastName, language);
    };

    // define languages - not directly accessible from the main function
    var supportedLangs = ["en", "es", "ch"];

    // informal greetings
    var greetings = {
        en: "Hello",
        es: "Hola",
        ch: "Nihao"
    };

    // formal greetings
    var formalGreetings = {
        en: "Greetings",
        es: "Saludos",
        ch: "Ninhao"
    };

    // log  messages to the console
    var logMessages = {
        en: "Logged in",
        es: "Inicio sesion",
        ch: "Denglu haole"
    }

    // all methods are on prototype - this saves memory space
    Greetr.prototype = {
        fullName: function(){
            return this.firstName + " " + this.lastName;
        },

        // validate languages
        validate: function(){
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        // using [] syntax to decide which language to use
        greeting: function(){
            return greetings[this.language] + " " + this.firstName + "!";
        },
        formalGreeting: function(){
            return formalGreetings[this.language] + " " + this.fullName();
        },
        greet: function(formal) {
            var msg;

            // if null or undefined it will be coerced into false
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            if (console) {
                console.log(msg);
            }
            return this;
        }, 
        log: function(){
            if (console) {
                console.log(logMessages[this.language] + ": " + this.fullName());
            }
            return this;
        },
        setLang: function(lang){
            this.language = lang;
            this.validate();
            return this;
        },
        HTMLGreeting: function(selector, formal){
            if(!$) {
                throw "jQuery not loaded";
            } 
            if (!selector) {
                throw "missing jQuery selector";
            }

            // determine message
            var msg;
            if (formal){
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            // inject message into DOM
            $(selector).html(msg);

            return this;
        }
    };

    // creating the actual object
    Greetr.init = function(firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "en";

        self.validate();
    };

    // to avoid using 'new' keyword
    Greetr.init.prototype = Greetr.prototype;

    // attach Greets to the global object, also provide G$ shorthand
    global.Greetr = global.G$ = Greetr;


}(window, jQuery));
