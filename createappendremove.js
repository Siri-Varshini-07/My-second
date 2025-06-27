let aish=document.createElement("h1");
aish.textContent="I'm Chitti रेर";
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
dash.style.height="80px";

setTimeout(()=>{
    let raja=document.getElementsByClassName("vasi")(4);
    if (raja){
        raja.remove();
    }
},2000);
