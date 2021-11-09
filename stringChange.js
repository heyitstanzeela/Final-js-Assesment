function stringChange(){

    let str = prompt("Enter the string");
    s = str.split(" ")
    let str1=""
    //console.log(s)
    for(let i=0;i<s.length;i++){
        if(s[i].length>3 &&s[i].length<=5){
            str1+=" "+s[i];
        }
        if(s[i].length>=6){
          str1+=" "+(s[i].split("").reverse().join(""));
    
        }
       if((s[i].match((/[^\w\s]/g)))){
            str1=s[i].replace(s[i],"special character")
        }
    }
    console.log(str1);
    document.write(str1);
    }
    stringChange();