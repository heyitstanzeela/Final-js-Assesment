function divisibility(){
    let num;
    let insertArray=[];
    
    for (num=1; num<500; num++) {
                if (num%2==0 && num%3==0 && num%4==0 && num%5==0 && num%6==0)
             {
                    
                   insertArray.push(num);
             }
            
            }
         console.log(insertArray);	
    document.write("The numbers divisible are :"+"[",insertArray,"]","<br>","<br>");		
       }
    divisibility();	