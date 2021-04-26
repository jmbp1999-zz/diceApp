function getInfo(){
    let randomNumber01 = Math.floor(Math.random()*6)+1;
    let randomDiceImage="dice"+randomNumber01+".jpg";
    let randomImageSource="Images/"+randomDiceImage;
    return [randomNumber01,randomImageSource];
}
let p1 = getInfo();
let p2=getInfo();
document.getElementById("Player01").setAttribute("src",p1[1]);
document.getElementById("Player02").setAttribute("src",p2[1]);

if(p1[0]>p2[0]){
    document.getElementById("Head-One").innerHTML="Player 01 Won!";
}
else if(p1[0]<p2[0]){
    document.getElementById("Head-One").innerHTML="Player 02 Won!";
}
else{
    document.getElementById("Head-One").innerHTML="Draw! Refresh Again!";
}
