const sum = (a, b) => {
  if (a && b) {
    return a + b;
  }
  throw new Error("Invalid arguements");
};

console.log(sum(1));

//Handling errors
//For synchronous code we can wrap it around try and catch blocks
// try {
//   sum(1);
// } catch (error) {
//   console.log("some error occured:", error);
// }
//For asynchronous code we can use then and catch for that
// sum(1)
//   .then((res) => console.log("success"))
//   .catch((err) => console.log("we got an error"));
