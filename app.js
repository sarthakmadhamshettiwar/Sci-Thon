function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    
};

// create questions
var questions = [
    new Question("The main constituent of L.P.G. is", ["Propane", "Butane","Methane", "Ethane"], "Butane"),
    new Question("Mass of a planet and radius of a planet are double that of earth. Acceleration due to gravity on the other planet is (g is Acceleration due to gravity on earth", ["g", "g/2", "2g", "g/4"], "g/2"),
    new Question("The direction of induced Current is determined by", ["Fleming's right hand rule", "Fleming's left hand rule","right hand screw rule", "none of these"], "Fleming's right hand rule"),
    new Question("A force acting on a 2kg body produces an acceleration of 2 m/s^2 and the force F2 produce an acceleration of 4m/s^2. Find F2/F1.", ["1:3", "3:1", "1:2", "2:1"], "2:1"),
    new Question("A body of mass 2kg falls from a height of 19.6m. On reaching the ground its momentum is (g = 9.8m/s^2)", ["19.6 Ns", "39.2 Ns", "9.8 Ns", "78.4 Ns"], "39.2 Ns"),
    new Question("Which of the following statements is incorrect ?", ["Neutralisation reactions are not redox reactions", "Simple displacement reactions are redox reactions", "Double displacement are redox reactions", "Neutralisation reactions are exothermic reaction"],"Double displacement are redox reactions"),
    new Question("The metal that cannot displace hydrogen from dilute acid is",["Mg","K","Hg","Al"],"Hg"),
    new Question("Oxidation state of Potassium Dichromate is ",["+7","+3","+5","+4"],"+7"),
    new Question("Fe2O3 + 2Al ---> Al2O3 + 2Fe. The above reactions is an example of ",["Combination reaction","Double displacement reaction","Decomposition reaction","Displacement reaction"],"Displacement reaction"),
    new Question("Metals react with acid and produce ",["Hydrogen gas","Oxygen gas","Carbon dioxide gas","Gas is never released every time"],"Hydrogen gas"),
    new Question("Malaria is caused by a ...",["Protozoan","Fungi","Virus","Bacteria"],"Protozoan"),
    new Question("Muscles contain speacial protein called... that help in muscle movement.",["Receptor proteins","Enzymes","Nucleoprotein(DNA,RNA)","Contractile protein(actin and myosin)"],"Contractile protein(actin and myosin)"),
    new Question("In human digestive system, which organ secretes enzyme pepsin ?",["Pancreas","Stomach","Liver","Gall Bladder"],"Stomach"),
    new Question("In which of the following process Pyruvate is converted into alcohol and CO2 ?",["Aeribic respiration","Glycosis","Fermentation","Kreb's cycle"],"Fermentation"),
    new Question("Which of the following instrument is used in measuring blood pressure ?",["Sphygmomanometer","Thermometer","Stethescope","Hydrometer"],"Sphygmomanometer"),
    new Question("An element which has 2 electrons less than that in Ne is -",["Mg","Na","O","F"],"O"),
    new Question("One of the major component in Compressed Natural gas (CNG) is ",["Methane","Carbon dioxide","water gas","acetylene"],"Methane"),
    new Question("A Daniel cell converts:",["Electrical Energy into Chemical energy","Chemical energy into Electrical Energy","Mechanical Energy into Electrical Energy","None of the all"],"Chemical energy into Electrical Energy"),
  
        
];

// create quiz
var quiz = new Quiz(questions);


// display quiz
populate();
