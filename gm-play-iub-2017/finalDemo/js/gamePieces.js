//------------------------------------------------------
Rock = function (game, x, y, equation) {

    Phaser.Sprite.call(this, game, x, y, 'rock');
    
    this.game.physics.arcade.enable(this);
    //set velocity in game while spawning rock
    this.body.velocity.y = 15;
    this.body.collideWorldBounds = true;
    this.equ = equation;
};

Rock.prototype = Object.create(Phaser.Sprite.prototype);
Rock.prototype.constructor = Rock;

Rock.prototype.getEquation = function(){
    return this.equ;
}

Rock.prototype.setEquation = function(equation){
    //new unique equation created
    this.equ = equation;
    var newGMDivId = "gmeq_" + (this.rockProducedIndex+1) + "_" + this.inputId+"_"+this.inputId;
    this.newGMDiv.setAttribute("id", newGMDivId);
    this.newGMDiv.setAttribute("class", "gm-game-rock");
    this.newGMDiv.style.left = (this.inputX + 5) + 'px';
    this.newGMDiv.style.top = (this.inputY + 5) + 'px';
    gmath.AlgebraView.createStaticExpression(this.newGMDiv, equation);	
    document.getElementById("game-div").appendChild(this.newGMDiv);
    
    //remove previous non-unique equation
    document.getElementById(newGMDivId).firstChild.parentElement.removeChild(document.getElementById(newGMDivId).firstChild);
},

Rock.prototype.createRockEqDiv = function(inputId, inputX, inputY, inputEq, rockProducedIndex, useArithmeticSymbol){
    this.newGMDiv = document.createElement("div");
    this.newGMDiv.setAttribute("id", "gmeq_" + (rockProducedIndex+1) + "_" + inputId);
    this.newGMDiv.setAttribute("class", "gm-game-rock");
    this.newGMDiv.style.left = (inputX + 5) + 'px';
    this.newGMDiv.style.top = (inputY + 5) + 'px';
	this.newGMDiv.style.visibility = "hidden";
	document.getElementById("game-div").appendChild(this.newGMDiv);
	
    //add attributes into the object for use by setEquation()
    this.rockProducedIndex = rockProducedIndex;
    this.inputId = inputId;
    this.inputX = inputX;
    this.inputY = inputY;  
    var options = [];
    if(useArithmeticSymbol){
        options['use_arithmetic_multiplication_symbol'] = true;
    }
    gmath.AlgebraView.createStaticExpression(this.newGMDiv, inputEq,options );
    return this.newGMDiv;
},

Rock.prototype.displayGMEquation = function(){
    this.newGMDiv.style.visibility="visible";
},
//.......................................................

//-------------------------------------------------------
Egg = function (game, x, y, equation, solutions) {

    Phaser.Sprite.call(this, game, x, y, 'egg');
    this.scale.setTo(0.8,0.8);
    this.game.physics.arcade.enable(this);
    this.body.gravity.y = 300;
    this.body.bounce.y =  0.5; 
    this.body.collideWorldBounds = true;
    
    this.equ = equation;
    this.solutions = solutions;
    this.hitCounter=0;
    //add click event to egg
    this.inputEnabled = true;
    //this.events.onInputDown.add(populateSolveEqCanvas, this, this);
    this.isGoldenEgg = false;
    this.animations.add('hatch',['egg.png','hatch1.png','hatch2.png','hatch3.png','hatch4.png','hatch5.png','hatch6.png','hatch7.png','hatch8.png','hatch9.png'],6,false);
    this.animations.add('wiggleOnce',['wiggle01.png','wiggle02.png','wiggle03.png','wiggle04.png','wiggle05.png','wiggle06.png','wiggle07.png','wiggle08.png','wiggle09.png','wiggle10.png','wiggle11.png','wiggle12.png','wiggle01.png'],10,false);
    this.animations.add('wiggleContinous',['wiggle01.png','wiggle02.png','wiggle03.png','wiggle04.png','wiggle05.png','wiggle06.png','wiggle07.png','wiggle08.png','wiggle09.png','wiggle10.png','wiggle11.png','wiggle12.png','wiggle01.png'],4,true);
    this.canvasId = "gseq_0";

};

Egg.prototype = Object.create(Phaser.Sprite.prototype);
Egg.prototype.constructor = Egg;
//                 ___________________
Egg.prototype.getEquation = function(){
    return this.equ;
}

Egg.prototype.setEquStyle = function(style){
    this.children.forEach(function(c){ c.setStyle(style)});
}

Egg.prototype.createEggEqDiv = function(inputX, inputY, inputEq, eggProducedIndex, useArithmeticSymbol){
    this.newGMDiv = document.createElement("div");
    var newGMDivId = "gseq_" + (eggProducedIndex+1);
    this.newGMDiv.setAttribute("id", newGMDivId);
    this.newGMDiv.setAttribute("class", "gm-game-egg");
    this.newGMDiv.style.left = (inputX+ 8) + 'px';
    this.newGMDiv.style.top = (inputY + 30) + 'px';
    var gameDivContainer = document.getElementById("game-div");
    gameDivContainer.appendChild(this.newGMDiv);
    var options = [];
    if(useArithmeticSymbol){
         options['use_arithmetic_multiplication_symbol'] = true;
    }
    gmath.AlgebraView.createStaticExpression(this.newGMDiv, inputEq, options);
    return this.newGMDiv;
}
