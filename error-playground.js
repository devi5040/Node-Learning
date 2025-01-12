const sum = (a, b) => {
  if (a && b) {
    return a + b;
  }
  throw new Error("Invalid arguements");
};

console.log(sum(1));

//Handling errors
//For synchronous code we can wrap it around try and catch blocks
//For asynchronous code we can use then and catch for that
