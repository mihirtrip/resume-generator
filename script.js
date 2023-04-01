function addNewWeField() {
    //console.log("adding new field");
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", 'Enter here');

    let weOb = document.getElementById("wet");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);


}


function addNewAQField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqfield');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", 'Enter here');

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode, aqAddButtonOb);
} 

function addNewSKField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('skfield');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", 'Enter here');

    let skOb = document.getElementById("sk");
    let skAddButtonOb = document.getElementById("skAddButton");
    skOb.insertBefore(newNode, skAddButtonOb);
} 
function generateCV(){
    // console.log("generating CV")
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML = nameField;
    // direct
   document.getElementById('nameT2').innerHTML=nameField;
   document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;
   document.getElementById('emailT').innerHTML=document.getElementById('emailField').value;
   document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;
   document.getElementById('faceT').innerHTML=document.getElementById('faceField').value;
   document.getElementById('linkT').innerHTML=document.getElementById('linkField').value;
   document.getElementById('gitT').innerHTML=document.getElementById('gitField').value;
   document.getElementById('objectiveT').innerHTML=document.getElementById('objField').value;
   
//    work experience

   let wes = document.getElementsByClassName("weField");

   let str="";

   for(let e of wes){
       str = str + `<li> ${e.value} </li>`;
   }
   document.getElementById("weT").innerHTML=str;

//    acadimic qualification

let aqs = document.getElementsByClassName("eqField");

   let str1="";

   for(let e of aqs){
       str1 = str1 + `<li> ${e.value} </li>`;
   }
   document.getElementById("aqT").innerHTML=str1;

//    skills

let ski = document.getElementsByClassName("skField");

   let str2="";

   for(let e of ski){
       str2 = str2 + `<li> ${e.value} </li>`;
   }
   document.getElementById("skT").innerHTML=str2;


//    code for setting image

   let file=document.getElementById("imgField").files[0];
   console.log(file);
   let reader=new FileReader()
   reader.readAsDataURL(file);
   console.log(reader.result);

//    set the image template

   reader.onloadend=function(){
       document.getElementById("imgTemplate").src=reader.result
   }

   document.getElementById("cv-form").style.display="none";
   document.getElementById("cv-templete").style.display="block";
}
function printCV() {
    window.print();
}





