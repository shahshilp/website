// JavaScript Document
function myFunction() {
  'use strict';
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
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function page1Drop() {
	'use strict';
    document.getElementById("drop1").classList.toggle("show");
}

function page2Drop() {
	'use strict';
    document.getElementById("drop2").classList.toggle("show");
}

function page3Drop() {
	'use strict';
    document.getElementById("drop3").classList.toggle("show");
}

function page4Drop() {
	'use strict';
    document.getElementById("drop4").classList.toggle("show");
}

function page5Drop() {
	'use strict';
    document.getElementById("drop5").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
	'use strict';
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
};