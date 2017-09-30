function func1(){
	
var current,
    screen,
    output,
    limit,
    zero,
    period,
    operator;
	memory="";
    
    screen = document.getElementById("result");

var elem = document.querySelectorAll(".num");
    
      var len = elem.length;
    
      for(var i = 0; i < len; i++ ) {
        
        elem[i].addEventListener("click",function() {
                  
            num = this.value;
            
			if(num=="MR"){
				if(memory!=""){
					output = screen.innerHTML +=memory;
				}
			}else if(num=="MC"){
				memory="";
			}else if(num=="M+"){
				if(!isNaN(output)){
					if(memory!=""){
						var x = parseInt(memory) + parseInt(output);
						memory = x.toString();
					}else{
						memory = output;
					}
				}else{
					alert(output);
				}
			}else if(num=="M-"){
				if(!isNaN(output)){
					if(memory!=""){
						var x = parseInt(memory) - parseInt(output);
						memory = x.toString();
					}else{
						var x = 0 - parseInt(output);
						memory = x.toString();
					}
				}else{
					alert(output);
				}
			}else{
	            output = screen.innerHTML +=num;
			}
            limit = output.length;
         
         if(limit > 16 ) {
        
         alert("Sorry no more input is allowed");
             
       }
       
     },false);
        
    } 

    document.querySelector(".zero").addEventListener("click",function() {
        
        zero = this.value;
        
        if(screen.innerHTML === "") {
            
           output = screen.innerHTML = zero;  
        }
        
        else if(screen.innerHTML === output) {
            
         output = screen.innerHTML +=zero;
            
        }
          
    },false);
    
    document.querySelector(".period").addEventListener("click",function() {
        
        period = this.value;
        
        if(screen.innerHTML === "") {
            
         output = screen.innerHTML = screen.innerHTML.concat("0.");
            
         }
    
        else if(screen.innerHTML === output) {
        
          screen.innerHTML = screen.innerHTML.concat(".");
            
        }
        
    },false);
    
    
    document.querySelector("#eqn-bg").addEventListener("click",function() {
        
      if(screen.innerHTML === output) {
          
        var x = eval(output);
		output = x.toString();
		screen.innerHTML = eval(output);
      }
        
      else {
            screen.innerHTML = "";
      }
          
    },false);
    
 document.querySelector("#delete").addEventListener("click",function() {
        
        screen.innerHTML = "";
        
    },false);
    
   
     var elem1 = document.querySelectorAll(".operator");
    
      var len1 = elem1.length;
    
      for(var i = 0; i < len1; i++ ) {
        
        elem1[i].addEventListener("click",function() {
         
        operator = this.value;
         
         if(screen.innerHTML === "") {
            
            screen.innerHTML = screen.innerHTML.concat("");
            
        }
        
        else if(output) {
        
            screen.innerHTML = output.concat(operator);
            
        }
           
    },false);
          
      }   
}


window.onload = func1;