function setup() {
  classifier=ml5.imageClassifier('MobileNet',modelLoaded());
}

function modelLoaded(){
  console.log('modelLoaded');
}

function draw(){
  classifier.classify(video,gotResult);
}

preveous_result='';

function gotResult(error,results){
if(error){
  console.log('error');
}
else{
  if((results[0].confidence>0.5) && (preveous_result!=results[0].label)){
console.log('Result');
preveous_result=results[0].label;
var synth=window.speechSynthesis;
speack_data="object detected is " + results[0].label;
utterThis=new SpeechSynthesisUtterance(speack_data);
synth.speak(utterThis);
document.getElementById("result_object_name").innerHTML=results[0].label;
document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(5);
  }
}
}


