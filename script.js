let a = "the great deals";
console.log(a);


function  cal ( ar , item){
    return item;
};




console.log(cal(23, 777))

let sum = 7;
sum =  sum++;

console.log(sum);
let str =" my name is samuel , but he said \"Sampson is my name\"";
console.log(str)



let newline = "line 1\n \t\ line2\n  line 3\n";


console.log(newline);


let name = " Samuel " + "is my name" ;
 let rem = " so just know i'm samuel"
    rem += " and that is all";
  

console.log(name + rem.length); 

let sam = "hi therv";
console.log( sam[7]);

let array = [[ 99, 89, 88, 90], [932,77,sam ]]




array.push([2,5]);
array.pop(); 
array.shift()
array.unshift(999999);
array[0]=777777;

     console.log( array );
     


     let num1 = 999;

     function calcu (a,b){
     outcome = a + b;
     return true;
        console. log(outcome);

     }


     calcu(20 , 50);

     console.log(outcome);

      console.log(calcu);       



      function verify( a){
        if(a>0){
            return "True , that's a great deal";
        } 

        
            return  " Oh no that's false";
        
      }
     
      console.log(verify(0))



      function iswitch(vale){
       
        switch(vale){
            case 1: return "is is good idea to be....";
                    break;
            default: return "that is that";        

     
         
             

        }

      

      }

      console.log(iswitch(3))



      let fruit = "banana";

switch (fruit) {
    case "banana":
        console.log("Bananas are $0.99/lb.");
        break;
    case "apple":
        console.log("Apples are $1.49/lb.");
        break;
    case "orange":
        console.log("Oranges are $1.29/lb.");
        break;
    default:
        console.log("Unknown fruit.");
} 













function istrue(a,b){

    return a> b;
}


console.log( istrue(40,1)  )


// Learning the DOM( Document Object Model)

/* 
We have the ttraditional way of selection 
 document.SelectElementById("#Id name")

 document.SelectElementsByClassName(".classname")

  document.SelectElementsByTagName("tagname")

   Ad we have thwe modern way of selection 

   document.queryselector("the name of the tag , id or class and this follows the css selection")




*/


const logo =document.getElementById("thel");


console.log(logo);


const expense = document.getElementsByClassName('expenses');


console.log(expense);



const sidebarno = document.querySelector(".sidebar");
  

console.log(sidebarno);

const asidetag = document.querySelector("aside");

console.log(asidetag);

const rightside = document.querySelector(" #ther");

console.log(rightside);



const alldiv = document.querySelectorAll( "div");

console.log(alldiv);

   

const thecontainer = document.querySelector(".container");
console.log(thecontainer);


//thecontainer.style.color = "red";
     
