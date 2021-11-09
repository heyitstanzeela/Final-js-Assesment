function duplicateArrayValues(){
let input = [2,2,1,2,3,4,4,2,4,5,3,4,2,2,2] 
//let input=1; 
let unique = [];  
if(!Array.isArray(input)){
   document.write("The given input isn't an array");
}

   input.forEach((item) => {  
      if(!unique.includes(item)){  
         unique.push(item);  
      }  
   });  
   console.log(unique);
   document.write("[",unique,"]", "<br>","<br>");
}
duplicateArrayValues();  

