// VARIABLES DECLARATION

let changeColor = document.querySelectorAll('.circles-cloud');
let lettersCloud = document.querySelectorAll('.letters-cloud');
let colorSwitcher = document.querySelector('.color-switcher');
let filter = document.querySelectorAll('.filter');
let colorMode = false;

// FUNCTION DECLARATION

// testing
function getEventParameters (event) {
  console.dir(event);
}

// circles in color-switcher

function colorSwitcherOff () {
  if (colorMode == false) {
    let leftOfTarget = colorSwitcher.offsetLeft;
    let widthOfTarget = colorSwitcher.offsetWidth; 
    let topOfTarget = colorSwitcher.offsetTop;
    let heightOfTarget = colorSwitcher.offsetHeight;
    let centerOfTargetX = leftOfTarget + widthOfTarget/2;
    let centerOfTargetY = topOfTarget + heightOfTarget/2;
    for (let i = 0; i<80; i++) {
      let div = document.createElement('div');
      div.classList.add('div');
      div.style.backgroundColor = getRandomColor ();
      let size = randomSize(10);
      div.style.width = size + "px";
      div.style.height = size + "px";
      div.style.top = centerOfTargetY + randomXY(50) + "px";
      div.style.left = centerOfTargetX + randomXY(50) + "px";
      setTimeout(() => {
        colorSwitcher.append(div);  
      }, randomTime(200));
    }
  }
}

// random color for background

function getRandomColor () {
  let randomNum; 
  let randomHex;
  let color = '#';
  for (let i = 0; i<3; i++) {
    randomNum = Math.round((255-16)*Math.random()+16);
    randomHex = randomNum.toString(16);
    color += randomHex;
  }
  return color;
}

function setBackgrColor (event) {
  if (colorMode == true) {
    event.target.style.backgroundColor = getRandomColor ();
  }
}

function unsetBackgrColor (event) {
  event.target.style.backgroundColor = 'black';
}

// trailing mouse effect

function randomXY (radius) {
  let a = Math.round(Math.random()*(radius*2)) - radius;
  return a;
}

function randomTime (time) {
  let a = Math.round(Math.random()*time);
  return a;
}

function randomSize (size) {
  let a = Math.round(Math.random()*size);
  return a;
}

function mouseTrail (event) {
  let maxY = document.body.offsetHeight;
  let maxX = document.body.offsetWidth;

  if (colorMode == true) {
    let div = document.createElement('div');
    div.classList.add('div');
    div.style.backgroundColor = getRandomColor ();
    let size = randomSize(10);
    div.style.width = size + "px";
    div.style.height = size + "px";
    let divY = event.pageY + randomXY(50);
    let divX = event.pageX + randomXY(50);
    div.style.top = divY + "px";
    div.style.left = divX + "px";

    if ( (divY + size*1.5) < maxY && (divX + size*1.5) < maxX ) {
      document.body.append(div);
    }

    setTimeout(() => {
      div.remove();
    }, randomTime(1000));
  }
}

// creting cloud of circles

function addCirclesToElement (event) {
  if (colorMode == true) {
    let leftOfTarget = event.target.offsetLeft;
    let widthOfTarget = event.target.offsetWidth; 
    let topOfTarget = event.target.offsetTop;
    let heightOfTarget = event.target.offsetHeight;
    let centerOfTargetX = leftOfTarget + widthOfTarget/2;
    let centerOfTargetY = topOfTarget + heightOfTarget/2;
    let maxY = document.body.offsetHeight;
    let maxX = document.body.offsetWidth;
    let divX;
    let divY;
    
    for (let i = 0; i<100; i++) {
      let size = randomSize(50);
      divY = centerOfTargetY - size/2 + randomXY(300);
      divX = centerOfTargetX - size/2 + randomXY(300);
      if ( (divY + size*1.5) < maxY && (divX + size*1.5) < maxX ) {
        let div = document.createElement('div');
        div.classList.add('div');
        document.body.append(div);
        div.style.width = size + "px";
        div.style.height = size + "px";
        div.style.backgroundColor = getRandomColor ();
        div.style.top = divY + "px";
        div.style.left = divX + "px";
      }
    }
  }
}

function removeCirclesFromElement (event) {
  if (colorMode == true) {
    let allCircles = document.querySelectorAll('.div');
    for (let each of allCircles) {
      setTimeout(() => {
        each.remove();
      }, randomTime(500));
    }
  }
}

// creating cloud of lettes

function setTextColor (event) {
  if (colorMode == true) {
  event.target.style.color = getRandomColor ();
  }
}

function unsetTextColor (event) {
  event.target.style.color = "#FFFFFF";
}

function getRandomLetter (text) {
  let randNumber = Math.round(Math.random() * (text.length-1));
  return text[randNumber];
}

function createCloudOfLetters (event) {
  if (colorMode == true) {
    //get text of the element
    let text = event.target.innerText.split(' ').join('');
    
    //coordinates of the center
    let leftOfTarget = event.target.offsetLeft;
    let widthOfTarget = event.target.offsetWidth; 
    let topOfTarget = event.target.offsetTop;
    let heightOfTarget = event.target.offsetHeight;
    let centerOfTargetX = leftOfTarget + widthOfTarget/2;
    let centerOfTargetY = topOfTarget + heightOfTarget/2;
    let maxY = document.body.offsetHeight;
    let divX;
    let divY;
    
    for (let i = 0; i<100; i++) {
      let size = randomSize(50);
      divY = centerOfTargetY - size/2 + randomXY(300);
      divX = centerOfTargetX - size/2 + randomXY(300);
      console.log (divY + ' / ' + maxY);
      if ( ((divY + size*2) < maxY) && 
          ((divY + size) < topOfTarget || (divY - size) > (+topOfTarget + +heightOfTarget)) &&
          ((divX + size) < leftOfTarget || (divX - size) > (+leftOfTarget + +widthOfTarget))
          ) {
        let div = document.createElement('div');
        div.innerText = getRandomLetter(text);
        div.classList.add('div');
        div.style.fontSize = size + "px";
        div.style.color = getRandomColor ();
        div.style.top = divY + "px";
        div.style.left = divX + "px";
        document.body.append(div);
      }
    }
  }
}

function removeCloudOfLetters (event) {
  if (colorMode == true) {
    let allCircles = document.querySelectorAll('.div');
    for (let each of allCircles) {
      setTimeout(() => {
        each.remove();
      }, randomTime(500));
    }
  }
}

// switch color mode

function switchColorMode () {
  if (colorMode == false) {
    colorMode = true;
    removeCirclesFromElement();
    filterSwitch();
    // colorSwitcher.style.backgroundColor = 'black';
  }
  else {
    colorMode = false;
    // colorSwitcher.style.backgroundColor = 'initial';
    colorSwitcherOff();
    filterSwitch();
  } 
  return colorMode;
}

// filter switch

function filterSwitch () {
  if (colorMode == true) {
    for (let each of filter) {
      each.classList.add('filter_switch');
    }
  }
  else {
    for (let each of filter) {
      each.classList.remove('filter_switch');
    }
  }
}

// ACTION

colorSwitcherOff();

colorSwitcher.addEventListener('click', switchColorMode);

document.addEventListener('mousemove', mouseTrail);

for (let each of changeColor) {
  each.addEventListener('mouseover', setBackgrColor);
  each.addEventListener('mouseout', unsetBackgrColor);
  each.addEventListener('mouseover', addCirclesToElement);
  each.addEventListener('mouseout', removeCirclesFromElement);
}

for (let each of lettersCloud) {
  each.addEventListener('mouseover', setTextColor);
  each.addEventListener('mouseout', unsetTextColor);
  each.addEventListener('mouseover', createCloudOfLetters);
  each.addEventListener('mouseout', removeCloudOfLetters);
}