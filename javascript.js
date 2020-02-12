var playing =false;
var score;
var action;
var timeremaining;
var correctAnswer;
document.getElementById("startreset").onclick=function()
{
    console.log("startreset clcik")
    if(playing==true){
        location.reload();
    }
    else{
        playing=true;
        score=0;
        document.getElementById("scorevalue").innerHTML=score;
     
        show("timeremaining");
        timeremaining=60;

        document.getElementById("timeremaining").style.display="block";
        hide("gameOver");


        document.getElementById("startreset").innerHTML="Reset Game";
        startCountdown();
        generateQA();


    }
 }

 for(i=1;i<5;i++){
     console.log("loop is runing 32");
    document.getElementById("box"+i).onclick=function()
    {
        console.log("32 running");
      if(playing==true){
        if(this.innerHTML==correctAnswer){
            score++;
            document.getElementById("scorevalue").innerHTML=score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            generateQA();

        }else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000);
        }
    }
}
 }
function startCountdown(){
    action =setInterval(function(){
        timeremaining -= 1;
    document.getElementById("timeremainingvalue").innerHTML= timeremaining;
         if(timeremaining==0){
             stopCountdoun();
             show("gameOver");

    document.getElementById("gameOver").innerHTML="<P>Game Over!</P><P>Your Score is" + score +".</P>";
         hide("timeremaining");
         hide("correct");
         hide("wrong");
         playing = false;
    document.getElementById("startreset").innerHTML = "start game";

    }


    },1000);
}
function stopCountdoun(){
    clearInterval(action);
}
function hide(id){
    document.getElementById(id).style.display="none";
}

function show(id){
    document.getElementById(id).style.display="block";
}
function  generateQA()
{
    var x = 1+ Math.round(9*Math.random());
    console.log(x);
    var y = 1+ Math.round(9*Math.random());

    console.log('running: '+Math.round((Math.random()*10)));

    correctAnswer = x*y;

    document.getElementById("question").innerHTML=x + "x" + y;

    var correctPosition = 1+Math.round(3*Math.random());

    document.getElementById("box"+correctPosition).innerHTML=correctAnswer;
    var answers=[correctAnswer]; 
    for(i=1;i<5;i++){
        if(i != correctPosition){
            var wrongAnswer;
            do{
                wrongAnswer =(1+Math.round(9*Math.random())) * (1+Math.round(9*Math.random()));

                console.log(wrongAnswer);   
            }
            while(answers.indexOf(wrongAnswer)>-1)

            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
         }
    }
}
