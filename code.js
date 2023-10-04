var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var eyeType = randomNumber(1, 3);
var mouthType = randomNumber(1, 2);
var mouthSize = 75;
var antennae = randomNumber(1, 2);
background(rgb(randomNumber(1, 255), randomNumber(1, 255), randomNumber(1, 255)));
fill("grey");
rect(65, 300, 200, 175);
rect(65, 300, 270, 175);
rect(125, 137, 150, 150);
rect(100, 285, 200, 175);


if (eyeType == 1){
  
  fill("white");
  ellipse(225, 200, 30, 30);
  ellipse(175, 200, 30, 30);
  
  fill("DarkSeaGreen");
  ellipse(225, 200, 17, 17);
  ellipse(175, 200, 17, 17);

  fill("MediumSeaGreen");
  ellipse(225, 200, 12, 12);
  ellipse(175, 200, 12, 12);
}

if (eyeType == 2){
  
  fill("MediumPurple");
  ellipse(225, 200, 40, 30);
  ellipse(175, 200, 40, 30);
  
  fill("MediumOrchid");

  ellipse(225, 200, 30, 15);
  ellipse(175, 200, 30, 15);
  
  fill("black");
  ellipse(225, 200, 15, 15);
  ellipse(175, 200, 15, 15);
    
}

if (eyeType == 3){
  
  fill("DarkTurquoise");
  ellipse(225, 200, 40, 15);
  ellipse(175, 200, 40, 15);
  
  fill("DeepSkyBlue");
  ellipse(225, 200, 15, 40);
  ellipse(175, 200, 15, 40);
  
    
  fill("black");
  ellipse(225, 200, 15, 15);
  ellipse(175, 200, 15, 15);
    
}


if (mouthType == 1){
  fill("white");
  arc(200, 235, mouthSize, mouthSize, 0, 180);
}

else{
  fill("white");
  mouthSize = 30;
  regularPolygon(200, 250, 3, mouthSize);
}


if (antennae == 1){
fill("black");
  line(200, 75, 200, 136);
  fill("yellow");
  ellipse(200, 75, 15, 15);
}

else{
  //blank
  }


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
