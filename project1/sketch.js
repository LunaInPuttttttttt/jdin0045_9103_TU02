//We need a variable to hold our image
let img;

//We will divide the image into segments
let numSegments = 50;

//We will store the segments in an array
let segments = [];

//lets add a variable to switch between drawing the image and the segments
//now I will adopt the segment
let drawSegments = ture;

// This is an object that will hold our mona [Object D]
let imgDrwPrp = {aspect:0, width:0, height:0, xOffset:0, yOffset:0}

// variable for the aspect ratio of the canvas (B)
let canvasAspectRatio = 0;



//lets load the image from disk
function preload() {
  img = loadImage('assets/Mona_Lisa_by_Leonardo_da_Vinci_500_x_700.jpg');
}

function setup() {
  //We will make the canvas the same size as the image using its properties
  // // replace with window properties (explorer, or chrome window)
  createCanvas(img.width, img.height);
  // // aspect ratio of object D
  imgDrwPrps.aspect = img.width / img.height;
  // // aspect ratio of canvas (replace value of variable)
  canvasAspectRatio = width / height;
  // now we add the function and make it useful
  calculateImageDrawProps();
  //

  //


  //We can use the width and height of the image to calculate the size of each segment
  let segmentWidth = img.width / numSegments;
  let segmentHeight = img.height / numSegments;
  /*
  Divide the original image into segments, we are going to use nested loops
  */

  let columPosition = 0;
  for (let segYPos=0; segYPos<img.height; segYPos+=segmentHeight) {
    //this is looping over the height
    for (let segXPos=0; segXPos<img.width; segXPos+=segmentWidth) {
      //We will use the x and y position to get the colour of the pixel from the image
      //lets take it from the centre of the segment
      let segmentColour = img.get(segXPos + segmentWidth / 2, segYPos + segmentHeight / 2);
       let segment = new ImageSegment(positionInColum, positionInRow, segmentColour);
       segments.push(segment);
       positionInRow++;
    }
    positionInColum++;
  }
  for (const segement of segments) {
    segments = !drawSegments;
  }
}

function  windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  calculateImageDrawProps
  
}



function draw() {
  background(0);
  if (drawSegments) {
    //lets draw the segments to the canvas
    for (const segment of segments) {
      //lets set the scale of each segment based on its distance from the mouse
       segment.scale = dist(segment.srcImgSegXPos, segment.srcImgSegYPos, mouseX, mouseY)/100;
       segment.draw();
    }
  } else {
    //lets draw the image to the canvas
    // replace values of image with the obkect that hold the image properties
    image(img, imgDrwPrps.xOffset, imgDrwPrps.yOffset, imgDrwPrps.width, imgDrwPrps.height);
  }
}
function keyPressed() {
  if (key == " ") {
    //this is a neat trick to invert a boolean variable,
    //it will always make it the opposite of what it was
    drawSegments = !drawSegments;
  }
}

// // the function that with calculate the aspect ratio required to keep the propertions of my image
function calculateImageDrawProps() {
  if (imgDrwPrps.aspect > canvasAspectRatio) {
    imgDrwPrps.width = width;
    imgDrwPrps.height = width / imgDrwPrps.aspect;
    imgDrwPrps.yOffset = (height - imgDrwPrps.height) / 2;
    imgDrwPrps.xOffset = 0;
  } else if (imgDrwPrps.aspect < canvasAspectRatio) {
    imgDrwPrps.height = height;
    imgDrwPrps.width = height * imgDrwPrps.aspect;
    imgDrwPrps.xOffset = (width = imgDrwPrps.width) / 2;
    imgDrwPrps.yOffset = 0;
  } else if (imgDrwPrps.aspect == canvasAspectRatio) {
    imgDrwPrps.width = width;
    imgDrwPrps.height = height;
    imgDrwPrps.xOffset = 0;
    imgDrwPrps.yOffset = 0;
  }
}


//Here is our class for the image segments, we start with the class keyword
//needs to be updated to the new changing values
class ImageSegment {

  constructor(columPositionInPrm, rowPositionInPrm, srcImgSegColourInPrm) {
    //these parameters are used to set the internal properties of an instance of the segment
    //These parameters are named as imageSource as they are derived from the image we are using
    this.columPosition = columPositionInPrm;
    this.rowPosition = rowPositionInPrm;
    this.srcImgSegColour = srcImgSegColourInPrm;

    this.drawXPos =0;
    this.drawYPos =0;
    this.drawWidth =0;
    this.drawHeight =0;
}

calculateImageDrawProps() {
  this.drawWidth = imgDrwPrps.width / numSegments;
  this.drawHeight = imgDrwPrps.height / numSegments;

  this.drawXPos = this.rowPosition
  this.drawYPos = this.
}


  draw() {
    //lets draw the segment to the canvas, now filled with the colour and with a black border
    stroke(0);
    fill(this.srcImgSegColour);
    rect(this.srcImgSegXPos, this.srcImgSegYPos, this.srcImgSegWidth * this.scale, this.srcImgSegHeight * this.scale);
  }
}