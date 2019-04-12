function startsWithABC(inputArray){

    let resultsArray = []
  
    for(i=0; i<inputArray.length;i++){
      if (inputArray[i][0]==='a' || inputArray[i][0]==='b' || inputArray[i][0]==='c'){
  
      resultsArray.push(inputArray[i]);
      }
    }
    return resultsArray; 
  }
  
  startsWithABC(["llama", "cow", "horse", "aardvark"])


// the runtime of this function is 0(n) because it checks each element in the input array once.  

// tests: 
// Capitalization: 
// startsWithABC(["llama", "Cow", "horse", "Aardvark"])
//     returns: []

// to fix this i could add .toLowerCase() inside the for loop:

function startsWithABC(inputArray){
    let resultsArray = [] 
  
    for(i=0; i<inputArray.length;i++){
      if (inputArray[i][0].toLowerCase() ==='a' || inputArray[i][0].toLowerCase()==='b' || inputArray[i][0].toLowerCase()==='c'){
  
      resultsArray.push(inputArray[i]);
      }
    }
    return resultsArray; 
  }
  
  startsWithABC(["llama", "Cow", "horse", "Aardvark"])

    // returns ["Cow", "Aardvark"]

// we could also use a case insensitive regex  

// Different data types:
// startsWithABC([["cow","llama", "dog", "butterfuly"], 5, false, {animal:'cat'}])
//   returns: []


// Empty array: 
// startsWithABC([])  
//   returns : []


