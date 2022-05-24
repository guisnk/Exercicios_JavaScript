function Soma(){

    let num1=parseInt(prompt("Digite Um numero:"));
    let num2=parseInt(prompt("Digite Um numero:"));
    let num3=parseInt(prompt("Digite Um numero:"));
    
    console.log(num1)
    console.log(num2)
    console.log(num3)
   

    if (num3 < num1 && (num1 < num2)) {
         alert(num1 + num2);
        
        } else if (num2 < num1 && num1 < num3) 
         alert(num1 + num3);
        
        if (num2 < num1 && (num1 < num3)) {
         alert(num1 + num3);
        } else {
         alert(num2 + num3);
        }
 }
