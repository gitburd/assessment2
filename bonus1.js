function checkParentheses(inputStr){
    let open = 0; 
    let closed = 0; 
  
    for(i=0 ; i<inputStr.length; i++){
      console.log(open)
      console.log(closed)
      if (inputStr[i]===`(`){
        open += 1;
      }
      if (inputStr[i]===`)`){
        closed +=1; 
      }
      if (closed > open){
        return false;
      }  
    }
  
    return closed === open ;
  
  }

  // runtime : 0(n) - for loop passes though the array once (worst case). 

  // tests: 
  //   checkParentheses(`( () )`) 
  //     returns true 

  //   checkParentheses(`( ) )`) 
  //     returns false 

  //   checkParentheses(`( A  [ (] ) )`) 
  //     returns true

  // different data types: 
  //   checkParentheses([(,)]) 
  //     returns an error 
  //   checkParentheses({})
  //     returns true 
  //   checkParentheses('') 
  //     returns true 
    

  