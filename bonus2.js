function checkParentheses(inputStr){

    let open = []
    let closed = {}; 
    let active = [];

  for(i=0 ; i<inputStr.length; i++){
 

    if (inputStr[i]===`(`){
      active.push(`(`)
    }
    if (inputStr[i]===`)`){
      console.log(active.pop())
      if (active[active.length-1]!=`(`){
        return false
      }
      active.pop();
    }

    if (inputStr[i]===`[`){
      active.push(`[`)
    }

    if (inputStr[i]===`]`){
      console.log(active.pop())
      if (active[active.length-1]!=`[`){
        return false
      }
      active.pop();
    }

    if (inputStr[i]===`{`){
      active.push(`{`)
    }
    if (inputStr[i]===`}`){
      console.log(active.pop())
      if (active[active.length-1]!=`{`){
        return false
      }
      active.pop();
    }
   
    }  

    return true; 
  }


//   run time 0(n): the for loop goes through the string and checks each element once (worst case)

//   tests:    

//   checkParentheses('( [ {(())}] )') 
//     returns true
// checkParentheses([2,3,4])     
//   returns true 


