/*var num1=Math.floor(Math.random()*6)+1
var path1="image/dice"+num1+".png";
var image1=document.getQuerySelectorAll("img")[0];
image1.setAttribute("src",path1);
var num2=Math.floor(Math.random()*6)+1
var path1="image/dice"+num2+".png";
var image2=document.getQuerySelectorAll("img")[1];
image2.setAttribute("src",path2);
if(num1>num2){
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!"
}
else if (num2>num1) {
    document.querySelector("h1").innerHTML="🚩 Player 2 Wins!"
}
else{
    document.querySelector("h1").innerHTML="Draw!"
} */

//Using Functions

function change_img1(){
var num1=Math.floor(Math.random()*6)+1
var source1="images/dice"+num1+".png";
document.querySelector("#p1").src=source1;

}
function change_img2(){
var num2=Math.floor(Math.random()*6)+1
var source2="images/dice"+num2+".png";
document.querySelector("#p2").src=source2;
}
