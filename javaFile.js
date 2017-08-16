function myFunction() {
  var val1 = (Math.random() * 255) + 1;   
  var val2 = (Math.random() * 255) + 1;  
  var val3 = (Math.random() * 255) + 1;  
  var val4 = (Math.random() * 255) + 1;  
  var val5 = (Math.random() * 255) + 1;  
  var val6 = (Math.random() * 255) + 1;  
  
  //Background for body
  document.body.style.background = "-webkit-linear-gradient(rgba(" +val1+","+val2+","+val3+",0.3),rgba("+val4+","+val5+","+val6+",1))";
  document.body.style.backgroundRepeat = 'no-repeat';
}

var images = ['url("http://www.solstation.com/x-objects/and2disk.jpg")',
'url("https://upload.wikimedia.org/wikipedia/commons/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg")',
'url("http://www.pxleyes.com/blog/wp-content/uploads/waterfalls/34.jpg")',
'url("https://i.ytimg.com/vi/bgrYygxWpHc/hqdefault.jpg")','url("http://totallyhistory.com/wp-content/uploads/2011/11/Van_Gogh_-_Starry_Night.jpg")'];

var i=-1;
function next(){
  resetTimer();
  i++;
  document.getElementById("slide").style.backgroundImage = images[i];
  if(i >= 4)
    i=-1;
}
function back(){
  resetTimer();
  i--;
  if(i <= -1)
    i=4;
  document.getElementById("slide").style.backgroundImage = images[i];
}
function autoMove(){
   i++;
  document.getElementById("slide").style.backgroundImage = images[i];
  if(i >= 4)
    i=-1;
}
var move = setInterval(autoMove,3000);
function resetTimer(){
  clearInterval(move);
  move = setInterval(next, 3000);
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function page1Drop() {
    document.getElementById("drop1").classList.toggle("show");
}

function page2Drop() {
    document.getElementById("drop2").classList.toggle("show");
}

function page3Drop() {
    document.getElementById("drop3").classList.toggle("show");
}

function page4Drop() {
    document.getElementById("drop4").classList.toggle("show");
}

function page5Drop() {
    document.getElementById("drop5").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdownContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
 
/* Code to only show Snake Game if user presses 's'
//Keyboard action
window.onkeyup = function(e) {
	var key = e.keyCode ? e.keyCode : e.which;
	var s = document.getElementById("snakeGame");

	if (key == 83)
	{
		s.style.display = 'block';
	}

}
*/