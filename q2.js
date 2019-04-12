function uniqueCheck(inputStr){
    let letterCount = {};
  
    for (i=0; i < inputStr.length; i++){
      console.log(inputStr[i])
      if (!letterCount[inputStr[i]]){
        letterCount[inputStr[i]]=1
      }else {return false}; 
    } 
    return true 
  }
  
  uniqueCheck('bacon');

// Runtime : 0(n) the for loop is accessing each item in the array is  0(n). Accessing the object for that element is 0(1). so the overall complexity is 0(n)


// Tests: 
// Capitalization: 
// uniqueCheck('AaBbCc');
//   returns true

// adding the line: 
//     inputStr= inputStr.toLowerCase() to the top of the function changes the output 
//     uniqueCheck('AaBbCc') 
//         returns false; 

// and returns an error instead of true of false for the test with different data types


// Different data types:

// uniqueCheck(['a', ['b','b'], 5, false, {color:'pink', animal:'unicorn'}]);
//   returns true 

// uniqueCheck([['a','a'] ['a','a']]); 
//     returns true 

// uniqueCheck({char:'a', cahr:'a', char:'c', char:'c'});
//   returns true

// empty: 
//     uniqueCheck('');
//         returns true 
    // uniqueCheck([]);
//         returns true 
    // uniqueCheck({});
//         returns true 


