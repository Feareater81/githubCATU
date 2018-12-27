
var y = Math.floor(Math.random() * 10 + 1); 
      
 
var intento = 1; 
  

/*function validar(x){
    if(){   
        return true;    
   }
    else {
      alert("Ingrese un numero del 1 al 10")
      return false;
    }   
}*/

   
    
   /*    alert("Ingrese un numero en el campo");
       return false;
     }else if(isNaN(x) || x < 0  || x > 10){
        alert("Ingrese un numero del 1 al 10 ");
    }else 
*/
var validador = null;
document.getElementById("subirIntento").onclick = function(){ 
var x = 1;
 z = document.getElementById("campoIntento").value;
 x = document.getElementById("campoIntento").value;
    if((isNaN(z)==true) || z < 1 || z > 10){

         alert("Ingrese un numero del 1 al 10 ");
         //console.log("help");
         validador = false;

   } else{validador = true;
    console.log("siii");
}
 
 
 

 if(validador === true){
    if((x == y)) 
    {     
        /*alert("FELICIDADES LO ADIVINASTE EN "
           + intento + " INTENTOS!!! ");*/
           
        document.getElementById('resultado').innerHTML += 
   '    <br>'+x+' FELICIDADES LO ADIVINASTE EN '+ intento + ' INTENTOS!!!';         
    }  
    else if(x > y)
    {     
        intento++; 
        //alert("NOP INTENTA UN NUMERO MAS BAJO");
        document.getElementById('resultado').innerHTML += '<br>'+x+' NOP INTENTA UN NUMERO MAS BAJO'; 
    } 
    else if(x< y)
        { 
            intento++; 
            //alert("NOP INTENTA UN NUMERO MAS ALTO")
            document.getElementById('resultado').innerHTML += '<br>'+x+' NOP INTENTA UN NUMERO MAS ALTO'; 
        } 
    }else(
        console.log("no paso")
    )
}