
var canvas = document.getElementById('canvas');
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;
var ctx = canvas.getContext('2d');

var w = 500;
var h = 500;
var cell = 10;
var snakeArr;
var food;
var d = "right";
var loop;
var snakeLength = 8;
var score = 0;
var level = 1;

$( document ).ready(function() {
	'use strict';
    init();
});

function createSnake()
{
	'use strict';
	
	snakeArr = [];
	snakeArr.x = [3,2,1,0];
	snakeArr.y = [0,0,0,0];
	
	//The for loop does not work. Declared array explicitly
	/*
	var i = 0;
	for(i = snakeLength-1; i >= 0; i++)
	{
		snakeArr.push({x: i, y:0});
	}
	*/
}

function createFood()
{
	'use strict';
	food = {
		x: Math.floor(Math.random()*(w / 10)), 
		y: Math.floor(Math.random()*(w /10)), 
	};
}

function paint()
{
	'use strict';
	
	//Repaint background every time
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, w, h);
	
	//Head of snake
	var snakeX = snakeArr.x[0];
	var snakeY = snakeArr.y[0];
	
	//Checking key press for direction
	if(d === "right")
	{ 
		snakeX++;
	}
	else if(d === "left")
	{
		snakeX--;
	}
	else if(d === "up")
	{
		snakeY--;
	}
	else if(d === "down")
	{
		snakeY++;
	}

	//Food collision
	if(snakeX === food.x && snakeY === food.y)
	{
		var tail = {x: snakeX, y: snakeY};
		snakeLength++;
		score += 10;
		createFood();
		updateLevel();
		snakeArr.x.unshift(tail.x);
		snakeArr.y.unshift(tail.y);
		document.getElementById("score").innerHTML = "Score: " + score;
		document.getElementById("level").innerHTML = "Level: " + level;
	}
	else //Moving snake
	{
		snakeArr.pop();
		snakeArr.x.unshift(snakeX);
		snakeArr.y.unshift(snakeY);
	}

	// Collision with wall
	if(snakeX >= (w / 10)) //Collision with right wall
	{
		deleteSnake();
		setTimeout(function() {init();}, 2000);
	}
	else if (snakeX <= -1) //Collision with left wall
	{
		deleteSnake();
		setTimeout(function() {init();}, 2000);
	}
	else if (snakeY >= (h / 10)) //Collision with bottom wall
	{
		deleteSnake();
		setTimeout(function() {init();}, 2000);
	}
	else if (snakeY <= -1) //Collision with top wall
	{
		deleteSnake();
		setTimeout(function() {init();}, 2000);
	}

	//Collision with self
	
	var j = 1;
	for (j = 1; j < snakeLength; j++)
	{
		if (snakeX == snakeArr.x[j] && snakeY == snakeArr.y[j])
		{
			deleteSnake();
			setTimeout(function() {init();}, 2000);
		}
	}
	
	//Painting food
	paintCell(food.x, food.y, 'red');

	//Painting snake
	var i = 0;
	for(i = 0; i < snakeLength; i++)
	{
		paintCell(snakeArr.x[i], snakeArr.y[i], 'red');
	}

}
function deleteSnake()
{
	snakeArr = [];
}
function updateLevel()
{
	//Changing levels
	if(score == 10)
	{
		level++;
		updateInterval(100)
	}
	else if (score == 40)
	{
		level++;
		updateInterval(80);
	}
	else if (score == 70)
	{
		level++;
		updateInterval(60);
	}
	else if (score == 100)
	{
		level++;
		updateInterval(40);
	}
	else if (score == 130)
	{
		level++;
		updateInterval(20);
	}
}
function updateInterval(interval)
{
	clearInterval(loop);
	loop = setInterval(paint, interval);
	
}

function paintCell(x, y, color)
{
	'use strict';
	ctx.fillStyle = color;
	ctx.fillRect(x*cell, y*cell, cell, cell);
	ctx.strokeStyle = 'white';
	ctx.strokeRect(x*cell, y*cell, cell, cell);
}

//Keyboard action
window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 37 && d != "right") 
   {
       d = 'left';
       right = false;
   }
   else if (key == 38 && d != "down")
   {
       d = 'up';
   }
   else if (key == 39 && d != "left")
   {
       d = 'right';
   }
   else if (key == 40 && d != "up") 
   {
       d = 'down';
   }
}

function init()
{
	'use strict';
	d = "right";
	snakeLength = 4;
	score = 0;
	level = 1;
	document.getElementById("score").innerHTML = "Score: " + score;
	document.getElementById("level").innerHTML = "Level: " + level;
	createSnake();
	createFood();
	clearInterval(loop);
	updateInterval(150);
}