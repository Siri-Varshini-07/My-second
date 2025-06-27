let red=document.getElementsByClassName("red");
red[0].style.color="Red";
red[1].style.color="blue";

document.querySelector(".bread").style.color="teal";

let part=document.querySelectorAll(".pink");
part[0].style.color="green";
part[1].style.color="brown";

function changeBackground(){
    document.body.style.backgroundColor="red";
    alert("Background color changed");
}

function changeBackground(){
    if(document.body.style.backgroundColor==="rebeccapurple"){
        document.body.style.backgroundColor="pink";
    } else{
        document.body.style.backgroundColor="cyan";
    }
}

function changeBackground(){
    document.body.style.backgroundColor=
      document.body.style.backgroundColor==="rebeccapurple"?"grey":"darkgreen";
}

function changetext(){
    document.getElementById("live").innerHTML="Bye";
    document.getElementById("live").style.backgroundColor="magenta";
    document.getElementById("live").style.fontSize="60px";
    document.getElementById("live").style.padding="75px";
    
}