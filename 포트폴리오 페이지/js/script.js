// fullpage.js

	$(document).ready(function () {
		$('#fullpage').fullpage({

			//options here
			autoScrolling: true,
			scrollHorizontally: true,
			navigation: true,
			scrollBar: true
		});

		new fullpage('#fullpage', {
			anchors:['firstPage', 'secondPage', 'thirdPage']
		});
////fullpage.js




// menu toggle


$(document).ready(function() {

	  $(".hamburger a ").click(function() {
				$('.menu_bar').toggleClass("none");
		});
});

// //menu toggle






//텍스트 타이핑 애니메이션 

// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
var i = 0,
    a = 0,
    isBackspacing = false,
    isParagraph = false;

// Typerwrite text content. Use a pipe to indicate the start of the second line "|".  
var textArray = [
  "LIM JUNG MIN|WEB PURBLISHER PORTFOLIO"
];

// Speed (in milliseconds) of typing.
var speedForward = 100, //Typing Speed
    speedWait = 1000, // Wait between typing and backspacing
    speedBetweenLines = 100, //Wait between first and second lines
    speedBackspace = 100; //Backspace Speed

//Run the loop
typeWriter("output", textArray);

function typeWriter(id, ar) {
  var element = $("#" + id),
      aString = ar[a],
      eHeader = element.children("h2"), //Header element
      eParagraph = element.children("p"); //Subheader element
  
  // Determine if animation should be typing or backspacing
  if (!isBackspacing) {
    
    // If full string hasn't yet been typed out, continue typing
    if (i < aString.length) {
      
      // If character about to be typed is a pipe, switch to second line and continue.
      if (aString.charAt(i) == "|") {
        isParagraph = true;
        eHeader.removeClass("cursor");
        eParagraph.addClass("cursor");
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedBetweenLines);
        
      // If character isn't a pipe, continue typing.
      } else {
        // Type header or subheader depending on whether pipe has been detected
        if (!isParagraph) {
          eHeader.text(eHeader.text() + aString.charAt(i));
        } else {
          eParagraph.text(eParagraph.text() + aString.charAt(i));
        }
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedForward);
      }
      
    // If full string has been typed, switch to backspace mode.
    } else if (i == aString.length) {
      
      isBackspacing = false;
      setTimeout(function(){ typeWriter(id, ar); }, speedWait);
      
    }
    
  // If backspacing is enabled
  } else {
    
    // If either the header or the paragraph still has text, continue backspacing
    if (eHeader.text().length > 0 || eParagraph.text().length > 0) {
      
      // If paragraph still has text, continue erasing, otherwise switch to the header.
      if (eParagraph.text().length > 0) {
        eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
      } else if (eHeader.text().length > 0) {
        eParagraph.removeClass("cursor");
        eHeader.addClass("cursor");
        eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
      }
      setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);
    
    // If neither head or paragraph still has text, switch to next quote in array and start typing.
    } else { 
      
      isBackspacing = false;
      i = 0;
      isParagraph = false;
      a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
      setTimeout(function(){ typeWriter(id, ar); }, 50);
      
    }
  }
}






	// function([string1, string2],target id,[color1,color2])    
	// consoleText(['JUNG MIN LIM', 'WEB PUBLISHER', 'PORTFOLIO'], 'text', ['white']);

	// function consoleText(words, id, colors) {
	// 	if (colors === undefined) colors = ['#fff'];
	// 	var visible = true;
	// 	var con = document.getElementById('console');
	// 	var letterCount = 1;
	// 	var x = 1;
	// 	var waiting = false;
	// 	var target = document.getElementById(id)
	// 	target.setAttribute('style', 'color:' + colors[0])
	// 	window.setInterval(function () {

	// 		if (letterCount === 0 && waiting === false) {
	// 			waiting = true;
	// 			target.innerHTML = words[0].substring(0, letterCount)
	// 			window.setTimeout(function () {
	// 				var usedColor = colors.shift();
	// 				colors.push(usedColor);
	// 				var usedWord = words.shift();
	// 				words.push(usedWord);
	// 				x = 1;
	// 				target.setAttribute('style', 'color:' + colors[0])
	// 				letterCount += x;
	// 				waiting = false;
	// 			}, 1000)
	// 		} else if (letterCount === words[0].length + 1 && waiting === false) {
	// 			waiting = true;
	// 			window.setTimeout(function () {
	// 				x = -1;
	// 				letterCount += x;
	// 				waiting = false;
	// 			}, 1000)
	// 		} else if (waiting === false) {
	// 			target.innerHTML = words[0].substring(0, letterCount)
	// 			letterCount += x;
	// 		}
	// 	}, 120)
	// 	window.setInterval(function () {
	// 		if (visible === true) {
	// 			con.className = 'console-underscore hidden'
	// 			visible = false;

	// 		} else {
	// 			con.className = 'console-underscore'

	// 			visible = true;
	// 		}
	// 	}, 400)
	// }
// 텍스트 타이핑 애니메이션

// skill bar
var progressBarOptions = {
	startAngle: -1.55,
	size: 200,
    value: .75,
    fill: {
		color: '#ffa500'
	}
}

$('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
	$(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
});

$('#circle-b').circleProgress({
	value : 0.25,
	fill: {
		color: '#FF0000'
	}
});

$('#circle-c').circleProgress({
	value : 0.92,
	fill: {
		color: '#008000'
	}
});

// //skill bar

/**
*Exampe from https://kottenator.github.io/jquery-circle-progress/
*/
var progressBarOptions = {
	startAngle: -1.55,
	size: 200,
    value: .75,
    fill: {
		color: '#ffa500'
	}
}

$('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
	$(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
});

$('#circle-b').circleProgress({
	value : 0.25,
	fill: {
		color: '#FF0000'
	}
});

$('#circle-c').circleProgress({
	value : 0.92,
	fill: {
		color: '#008000'
	}
});


});

