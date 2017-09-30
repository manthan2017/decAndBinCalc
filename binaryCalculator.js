function func2() {
	
var current2,
    screen2,
    output2,
    limit2,
    zero2,
    period2,
    operator2,
	output3="";
    
    screen2 = document.getElementById("result2");

var elem2 = document.querySelectorAll(".num2");
    
      var len = elem2.length;
    
      for(var i = 0; i < len; i++ ) {
        
        elem2[i].addEventListener("click",function() {
                  
            num2 = this.value;
            
	        output2 = screen2.innerHTML +=num2;
			 
            limit2 = output2.length;
         
         if(limit2 > 32 ) {
        
         alert("Sorry no more input is allowed");
             
       }
       
     },false);
        
    } 

    document.querySelector(".zero").addEventListener("click",function() {
        
        zero2 = this.value;
        
        if(screen2.innerHTML === "") {
            
           output2 = screen2.innerHTML = zero2;  
        }
        
        else if(screen2.innerHTML === output2) {
            
         output2 = screen2.innerHTML +=zero2;
            
        }
          
    },false);
    
    document.querySelector(".period").addEventListener("click",function() {
        
        period2 = this.value;
        
        if(screen2.innerHTML === "") {
            
         output2 = screen2.innerHTML = screen2.innerHTML.concat("0.");
            
         }
    
        else if(screen2.innerHTML === output2) {
        
          screen2.innerHTML = screen2.innerHTML.concat(".");
            
        }
        
    },false);
    
    
    document.querySelector("#eqn2-bg").addEventListener("click",function() {
        
      if(screen2.innerHTML === output2) {
          var temp="";
		  var i;
		for(i=0; i <output2.length; i++){
			if(!isNaN(output2[i])){
				temp+= output2[i];
			}else if(output2[i]=="+" || output2[i]=="-" || output2[i]=="*" || output2[i]=="/" || output2[i]=="%" || output2[i]=="<<" || output2[i]==">>" || output2[i]=="~" || output2[i]=="&" || output2[i]=="|"){
				output3 += parseInt(temp, 2);
				output3 +=output2[i];
				temp="";
			}
		}
		output3 += parseInt(temp, 2);
        var x = eval(output3);
		output2 = x.toString(2);
		screen2.innerHTML = output2;
		output3="";
		temp="";
      }
        
      else {
            screen2.innerHTML = "";
      }
          
    },false);
    
 document.querySelector("#delete2").addEventListener("click",function() {
        
        screen2.innerHTML = "";
        
    },false);
    
   
     var elem1 = document.querySelectorAll(".operator2");
    
      var len1 = elem1.length;
    
      for(var i = 0; i < len1; i++ ) {
        
        elem1[i].addEventListener("click",function() {
         
        operator2 = this.value;
		
         if(screen2.innerHTML === "") {
            
            screen2.innerHTML = screen2.innerHTML.concat("");
            
        }
        
        else if(output2) {
        if(operator2=="<<"){
			if(!isNaN(output2)){
				var i;
				var temp="";
				for(i=0; i <output2.length; i++){
					if(i==0){
						continue;
					}
					else{
						temp+= output2[i];
					}
				}
				temp+= "0";
				output2=temp;
				temp="";
			}
			screen2.innerHTML = output2;
		}else if(operator2==">>"){
			if(!isNaN(output2)){
				var i;
				var temp="0";
				for(i=0; i <output2.length-1; i++){
						temp+= output2[i];
				}
				output2=temp;
				temp="";
			}
				screen2.innerHTML = output2;
		}else if(operator2=="~"){
			if(!isNaN(output2)){
				var i;
				var temp="";
				for(i=0; i <output2.length; i++){
					if(output2[i]=="1"){
						temp+= 0;
					}else{
						temp+=1;
					}
				}
				output2=temp;
				temp="";
			}
				screen2.innerHTML = output2;
		}else{
			screen2.innerHTML = output2.concat(operator2);
		}
            
            
        }
           
    },false);
          
      }   
	
}
window.onload = func2;