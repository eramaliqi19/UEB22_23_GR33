function njoftim() {
  alert('Message was sent!');
}

function confirmredirect() {
var r = confirm("If you confirm you will be directed to another page!");
    if (r == true) {
        location.href='https://www.dentalplans.com/dental-information#:~:text=Dental%20disease%20is%20a%20%E2%80%9Csilent%20epidemic%E2%80%9D%20that%20restricts,have%20a%20lower%20grade-point%20average%20than%20their%20peers.';
    }
  }


function validate() {
      
      if( document.myForm.firstname.value == "" ) {
         alert( "Please provide your name!" );
         document.myForm.firstname.focus() ;
         return false;
      }
      if( document.myForm.lastname.value == "" ) {
         alert( "Please provide your surnmae!" );
         document.myForm.lastname.focus() ;
         return false;
      }
      if( document.myForm.lastname.value == "" ) {
         alert( "Please provide your surnmae!" );
         document.myForm.subject.focus() ;
         return false;
      }
      return( true );
   } 





const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


  function modali() {
        var x = document.getElementById("texta").value;
        document.getElementById("mbody").innerHTML = x;
    }

$(document).ready(function(){

//hide and show

  $("#hide").click(function(){
    $("#morebck").hide(3000);
  });
  $("#show").click(function(){
    $("#morebck").show(3000);
  });

// fade in and out

$("#kliko").click(function(){

$("#div1").fadeToggle("slow");
  
});

$("#showlista").dblclick(function(){
  $("#lista").slideToggle();
});

// drag and dropi 



// reduce
const doctors = [
  { name: 'Dr.James', maxn: 96 },
  { name: 'Dr.Bhargav',  maxn: 84 },
  { name: 'Dr.Sophie',  maxn: 100 },

];

let bestdoc = doctors.reduce(function (best, doctor) {
  return best.maxn > doctor.maxn ? best : doctor;
}, { maxn: 0});

console.log ( "The employee of the month is: " , bestdoc.name);
document.getElementById("bd").innerHTML = "The employee of the month is " + bestdoc.name;

// filter 

const d = new Date("2022-11-13");
const d2 = new Date("2022-12-25");
const d3 = new Date("2022-11-25");
const d4 = new Date("2022-12-19");
const d5 = new Date("2022-11-20");
const d6 = new Date("2022-11-9");

const costumers = [

   { doctor: 'Dr.Bhargav' , service: 'Bonding ', name: 'Justin Hamington' , date:d },
    { doctor: 'Dr.Bhargav' , service: 'Bonding ', name: 'John Doe' , date:d2 },
     { doctor: 'Dr.James' , service: 'Bonding ', name: 'Elizabeth Charles' , date:d3},
      { doctor: 'Dr.Sophie' , service: 'Bonding ', name: 'John Doe' , date:d4 },
       { doctor: 'Dr.James' , service: 'Bonding ', name: 'Hilary Bonn' , date: d5},
         { doctor: 'Dr.James' , service: 'Bonding ', name: 'John Doe' , date: d6 },

  ]

let mostvisited = costumers.filter(function(costumer) { 
 return costumer.name === 'John Doe';

});

console.log("Informations of the person who made an appointment more often are" , mostvisited);





// map 

const cosutumername = costumers.map((cname) => cname.name);

document.getElementById("sdi").innerHTML = "Emrat e konsumatroeve " + cosutumername.toString();
// emri njejt mos mu perserit 



// time out

setTimeout(() => {
  console.log("This message was delayed for 5 seconds.");
}, 5000)


// match and replace  

const rreshti = "Being a dentist is a challenging game";
const regexp = /[A-E]/gi;
const matches = rreshti.match(regexp);

console.log(matches);
document.getElementById("matchy").innerHTML = "Vlerat nga A-E ku fillimisht kerkojme shkronjat e medha pastaj te voglat " + matches;

const parag = 'We have six appointments today for dentures and five for teeth cleaning';
console.log(parag);
console.log(parag.replace('dentures', 'bonding'));


console.log(parag.replace('teeth cleaning', 'teeth whitening'));

});



