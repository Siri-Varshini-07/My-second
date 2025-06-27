let aish=document.createElement("h1");
aish.textContent="I'm Chitti रेर";
aish.textContent="I'm Chitti";
/* aish.innerHTML="Memory 1 Tera Byte";
aish.style.color="blue";
aish.style.fontSize="20px"; */
document.getElementById("vasi").appendChild(aish);

let ash=document.createElement("h1");
ash.textContent="I'm Sorry";
document.body.appendChild(ash)

let dash=document.createElement("h1");
dash.textContent="I'm Muskan";
document.getElementById("vasi").appendChild(dash)
dash.style.backgroundColor="red";
dash.style.fontStyle="italic";
dash.style.padding="05px";
dash.style.width="380px";
dash.style.width="auto";
dash.style.height="80px";

let sana=document.getElementsByClassName("list")[2];
if(sana){
    sana.remove();
}

setTimeout(()=>{
    let raja=document.getElementsByClassName("vasi")(4);
    let raja=document.getElementsByClassName("list")[4];
    if (raja){
        raja.remove();
    }
},2000);

document.body.style.backgroundColor="aqua";

let newHeading=document.createElement("h2");
newHeading.innerHTML="This is a new heading added by js";
newHeading.style.color="purple";
document.body.appendChild(newHeading);

setTimeout(()=>{
    let newText=document.createElement("p");
    newText.textContent="woow";
    newText.style.color="green";
    document.body.appendChild(newText);
},3000);

let tagText= document.createElement("h4");
tagText.textContent="I like it";
tagText.style.color="rebeccapirple";
document.getElementById("vasi").appendChild(tagText);

let myList=document.createElement("ul");
for (let i=1; i<=6;i++){
    let listitems=document.createElement("li");
    listitems.textContent=`item ${i}`;
    listitems.style.color="blue";
    listitems.style.fontSize="18px";

    myList.appendChild(li);
    document.body.appendChild(myList);
}