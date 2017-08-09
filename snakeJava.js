
var canvas = document.getElementById('canvas');
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;
var ctx = canvas.getContext('2d');

var cell = 10;
var snakeArr;
var food;
var d = "right";
$( document ).ready(function() {
    init();
});

function createSnake()
{
	var snakeLength = 5;
	snakeArr = [];
	for(i = snakeLength-1, i >= 0; i++)
	{
		snakeArr.push({x: i, y:0});
	}
}

function createFood()
{
	food = {
		x: Math.round(Math.random()*1000 + 1), 
		y: Math.round(Math.random()*1000 + 1), 
	};
}

function paint()
{
	var snakeX = snakeArr[0].x;
	var snakeY = snakeArr[0].y;

	if(d == "right")
	{ 
		snakeX++;
	}
	else if(d == "left")
	{
		snakeX--;
	}
	else if(d == "up")
	{
		snakeY--;
	}
	else if(d == "down")
	{
		snakeY++;
	}
	
	//Painting food
	ctx.fillStyle = 'red';
	ctx.fillRect(food.x, food.y, cell, cell);

	//Painting snake
	for(i = 0; i < snakeArr.length; i++)
	{
		paintCell(snakeArr[i].x, snakeArr[i].y, "#6bf442")
	}
}

function paintCell(x, y, color)
{
	ctx.fillStyle = color;
	ctx.fillRect(x*cell, y*cell, cell, cell);
	ctx.strokeStyle = "white";
	ctx.strokeRect(x*cell, y*cell, cell, cell);
}

var loop = setInterval(paint, 100);

function init()
{
	d = "right";
	createSnake();
	createFood();

	loop = setInterval(paint, 100);
}














/*
function snakeSquare(x, y){
	ctx.fillStyle = '#6bf442';
	ctx.fillRect(x*snakeSize,y*snakeSize,snakeSize,snakeSize);
}
function paintFood(x,y){
    ctx.fillStyle = '#6bf442';
	ctx.fillRect(xPos,yPos,snakeSize,snakeSize);
}

function drawSnake(){
	var length = 4;
	snake = [];

	for(i = length; i >= 0; i--)
	{
		snake.push(
		{
			x:i;
			y:0;
		})
		snakeSquare(snake[i].x,snake[i].y);
	}
}
function createFood(){
    var xPos = (Math.random() * 1000) + 1;   
    var yPos = (Math.random() * 1000) + 1;

    for (i = 0; i <= snake.length; i++)
    {
    	if(xPos == snake[i].x || yPos == snake[i].y)
    	{
    		xPos = (Math.random() * 1000) + 1;   
    		yPos = (Math.random() * 1000) + 1;
    	}
    }
    paintFood(xPos,yPos);
}

function snakeCollision(x, y, arr){
	for(i = 0; i < arr.length; i++)
	{
		if (arr[i].x == x && arr[i].y == y)
		{
			return true;
		}
	}
	return false;
}

function paint() {
	var snakeX = snake[0].x;
	var snakeY = snake[0].y;

	drawSnake();
}

function init() {

  }
  */

