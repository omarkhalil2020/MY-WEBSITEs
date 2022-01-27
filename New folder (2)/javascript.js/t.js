// i don't know how i have to  fix this ????/

// document.write(`<button class = "button" id = "butt" > Sign UP </button>`);

// document.getElementById("butt").onclick  = function (){
//  document.querySelectorAll(`.press ul li `)
//   document.write(`<div>`)
//   document.write(`
//   <ul>
//   <li>omar</li>
//   <li>obada</li>
//   <li>ahmad</li>
//   </ul>

//   `);
//    document.write(`</div>`)
// }






























































// /*
//   Array Challenge
// */

// let zero = 0;

// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// // Write Code Here

// console.log(my);
// let one = my.slice(zero,counter).reverse();
// console.log(one);
// let two = my.slice(counter).sort();
// console.log(two); 
// all = two.concat(one);
// all.shift();
// all.shift();
// console.log(all); // ["Osama", "Elham", "Mazero", "Ahmed"];
// let second = my.slice(zero,counter).reverse();
// console.log(second);
// second.pop();
//  console.log(second);// ["Elham", "Mazero"]



// console.log(); // "Elzero"

// console.log(); // "rO"




// method 2

//  let zero = 0;
//  let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"]

// let four = my.reverse().splice(zero, --counter); // ["Osama", "Elham", "Mazero", "Ahmed"];
// console.log(my);
// let sec = my.slice(Number(true), ++counter); // ["Elham", "Mazero"]
// let $num1 = Number(true); // 1 
// let third = sec[Number(true)].slice(++$num1); // "Elzero" 



// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];
// console.log(sec); // ["Elham", "Mazero"]
// console.log(`${sec[zero].slice(zero, $num1)}${third}`); // "Elzero" 
// console.log(`${third.charAt($num1)}${third.charAt(counter).toUpperCase()}`); // "rO"

































































//   let el = second[0][0] + second[0][1] ;
// let zer = second[1][2] + second[1][3] + second[1][4] +second[1][5];
// console.log(el + zer); // "Elzero"

// console.log( second[1][4] +second[1][5].toUpperCase()); // "rO"
























// let mainArray = ["keyboards","mouse","laptop"];
// let colorArray = ["red","blue","green","yellow","purple","pink"];
// document.write(`<div>`);
// document.write(`<P>omar</P>`);  
// document.write(`</div>`); 
// mainloop: for( let i =0 ; i < mainArray.length ; i++ ) {
// document.write(`${mainArray[i]}`);
// document.write(`<br>`);

// subloop: for ( let j =0;  ; ) {

// if(j === colorArray.length){
// break;
// }
//   document.write(`${colorArray[j]}`);
// document.write(` `);
//   j++
// }

// document.write(`<br>`);
// }


























/*
  Loop Challenge
*/

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = ["Amgad","Ali", "Samah","Samah","Samah", "Ameer", "Omar","Omar","Omar", "Othman", "Amany", "Samia", "Anwar"];

// document.write(`<div>We Have X Admins</div>`);
// document.write(`<div>We Have ${myAdmins.length} Admins</div>`);
// document.write(`<div><hr></div>`);



// document.write(`<div>`);
// document.write(` <p>the Admin For Team 1 Is Ahmed</p>`);
// document.write(`<h2>Team Members:</h2>`);
//  for( let i=0; i < myEmployees.length ; i++ ){

    
//     if ( myEmployees[i].startsWith("A", 0) === true ) {
//         document.write(`<p> ${myEmployees[i]}</p>`);    
//     }
//     }
// // document.write(`<p> ${myEmployees[i]}</p>`);

// document.write(`</div>`);













// document.write(`<hr>`);







// document.write(`<div>`);
// document.write(` <p>the Admin For Team 2 Is Osama</p>`);
// document.write(`<h2>Team Members:</h2>`);
//  for( let i=0; i < myEmployees.length ; i++ ){

    
//     if ( myEmployees[i].startsWith("O", 0) === true ) {
//         document.write(`<p> ${myEmployees[i]}</p>`);    
//     }
//     }

// document.write(`</div>`);





// document.write(`<hr>`);



// document.write(`<div>`);
// document.write(` <p>the Admin For Team 3 Is Osama</p>`);
// document.write(`<h2>Team Members:</h2>`);
//  for( let i=0; i < myEmployees.length ; i++ ){

    
//     if ( myEmployees[i].startsWith("S", 0) === true ) {
//         document.write(`<p> ${myEmployees[i]}</p>`);    
//     }
//     }

// document.write(`</div>`);
















// function g(us ="unkown", ag ="unkown", rate =0, em ="unkown", ph ="unkown", show ="yes", ...a ) 
// {
//   document.write(`<div>`);
//     document.write(`<p></p><h2>Hello ${us}</h2>`);
//     document.write(`<p>your age is : ${ag}</p>`);
//     document.write(`<p>your hour rate is : $${rate}</p>`);
//     document.write(`<p>your email address is : ${em}</p>`);
//     document.write(`<p>your phone is : ${ph}</p>`);
    
// if(show === "yes"){

//   for( let i=0 ; i < a.length ; i++ ) {
        
//         document.write(`<p>${a.join("    -|-    ")} </p>`);
//         if(i === 0){
//           break;
//         }
      
      
      
//       }
// }
// else{
// document.write(`<div>there is not any skilles hunny</dive>`);
// }

    
//   document.write(`</div>`);

// }
// g("omar",26,100,"omar@gmail.com","0935943558","yes");

 
























// function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
//   document.write(`<div>`);
//   document.write(`<h2>Welcome, ${us}</h2>`);
//   document.write(`<p>Age: ${ag}</p>`);
//   document.write(`<p>Hour Rate: $${rt}</p>`);
//   if (show === "Yes") {
//     if (sk.length > 0) {
//       document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
//     } else {
//       document.write(`<p>Skills: No Skills</p>`);
//     }
//   } else {
//     document.write(`<p>Skills Is Hidden</p>`);
//   }
//     document.write(`</div>`);
// }

// showInfo("Osama", 38, 20, "No", "Html", "CSS");




























/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

// showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"










// o("Osama", 38, true); 
// o(38, "Osama", true); 
// o(true, 38, "Osama"); 
// o(false, "Osama", 38); 

// function o(...a){
//   for( let i = 0 ; i < a.length ; i++ ){

//      if(typeof a[i] === "string"){
//         document.write(`    hello${a[i]}   `)
//      }
     
//      else if(typeof a[i] === "number") {
//        document.write(`    age ${a[i]}   `)
//      }
   
//       else {
//         document.write(`    You Are Available For Hire   `)
//       }
      
  
//   }


  
// }


// if(a[i] === "string"){
//           document.write(`<div> hello ${a[i]} </div>`);
//     }
//      else if (a[i] === "number") {
//       document.write(`age is : ${a[i]}`);
//     } 
//      else if (a[i] === "boolean") {
//       document.write(` <p> You Are Not Available For Hire </p>`);
//     } 
//     else{}










  













// let names = function (...a) {
//   // Parameter ?
  
  
//      document.write( ` string  [${a.join("] , [")} ]  => Done !  `);
  
  
  

// };

// names("Osama", "Mohamed", "Ali", "Ibrahim","Ibrahim","Ibrahim","Ibrahim","Ibrahim");
// // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

// /* ================================= */





















// Arrow function 



// let names =  (...a) => document.write( ` string  [${a.join("] , [")} ]  => Done !  `);

  
  
    
  
  
  



// names("Osama", "Mohamed", "Ali", "Ibrahim","Ibrahim","Ibrahim","Ibrahim","Ibrahim");
// // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

// /* ================================= */
























// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + Number(nums.toString()) ;
 
// console.log(calc(10,myNumbers[2] ,myNumbers[3] )); // 80







// regular function



// let myNumbers = [20, 50, 10, 60];

// let calc = function (one, two, ...nums) {

//  return one + two + Number(nums.toString()) ;

//  }
// console.log(calc(10, myNumbers[2] ,myNumbers[3])); // 80



















// let myNumbers = [20, 50, 10 , 60];
// let calc = (num1, num2, ...nums) => {
//   let result = 0;
//   for(let i = 0; i < nums.length; i++){
//     result += nums[i]
//   }
//   return result - (num1 + num2);
// }
// console.log(calc(10, myNumbers[1], ...myNumbers)) //80;





























































/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
*/

// let allLis = document.querySelectorAll(".ss li");
// console.log(allLis);
// let allDivs = document.querySelectorAll(".content div");
// console.log(allDivs);

// allLis.forEach(function (ele) {
//   ele.onclick = function () {
//     // Remove Active Class From All Elements
//     allLis.forEach(function (ele) {
//       ele.classList.remove("active");
//     });
//     // Add Active Class To This Element
//     this.classList.add("active");

//     // Hide All Divs
//     allDivs.forEach(function (ele) {
//       ele.style.display = "none";
//     });

//   };
// });










































































//lesson 77




// let list = document.querySelectorAll(".aa li");
// console.log(list)

// let list2 = document.querySelectorAll(".aaa li");
// console.log(list2)





// list.forEach(function(ele){
//   ele.onclick = function (){

//     list.forEach(function(ele){
//        ele.style.color = "black" ;
  
// });

//    ele.style.color = "red" ;



//    list2.forEach(function(ele){


//       ele.style.display = "none";

//    });


   

//   }
// });






























































// lesson 78 it talks about Functions Challenges with filter


// /*
//   Higher Order Functions Challenges

//   You Can Use
//   - ,
//   - _
//   - Space
//   - True => 1 => One Time Only In The Code

//   You Cannot Use
//   - Numbers
//   - Letters

//   - You Must Use [Filter + Map + Reduce + Your Knowledge]
//   - Order Is Not Important
//   - All In One Chain

// */

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
//  let aa =myString.slice(7,18).split("");
//   let aaa =myString.slice(21,26).split("");
//    let aaaa =myString.slice(29,40).split("");

// console.log(aa);

// console.log(aaa);
// console.log(aaaa);
 
// let solution = aa.filter(function(ele){
//      return !(ele.startsWith(`,`));
//     //  if(ele === ",") {
//     //    return "";
//     //  }
//     //  else {
//     //    return ele
//     //  }
// });

// let solution1 = aaa.filter(function(ele){
//      return !(ele.startsWith(`,`));
   
// });

// let solution2 = aaaa.filter(function(ele){
//      return !(ele.startsWith(`,`));
   
// });








// console.log(solution.join()); // Elzero Web School
// console.log(solution1);
// console.log(solution2);

// console.log(`${solution.join("")} ${solution1.join("")} ${solution2.join("")}`);









let user = {
  name : "omar",
  age : 26,
  skills : [ "html", "css", "javas cript" ],
  call : function () {
    return user.name ;
  },
}; 

console.log();
























