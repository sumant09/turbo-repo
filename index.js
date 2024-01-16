// var firstname = "Sumant";
// const person = {
  // firstname: "john",
  // lastname: "doe",
  // age: 20,
  // fullName : function() {
	 // //this === person
    // return firstname + " " + this.lastname;
  // }
// };


// console.log(person.fullName());
// // console.log(person.getAge());

// // var age = 22;
// // function verifyAge (){
    // // return this.age;
// // }
 
// // console.log(verifyAge());

// // var firstName = "Sumant";
// // var lastName = "Suman";
// // function myDetails() {
	// // return firstName + " " + lastName;
// // }

// // console.log(myDetails());

// let name = "Sumant";
// // if(name === "sumant"){
	// console.log("your name is correct");
// // } else {
	// console.log("your name is not correct");
// // }
// var myAddress = "My name is Sumant and my address is D\n 10th";
// console.log(myAddress);

// let arr = [0];
// for (let i=1;i<20; i++){
	// arr.push(i);
	// console.log(arr);
// }


const arr = [2, 3, 4, 5, 6, 7, 8, 9];

arr.map((val, i) => {
	console.log(arr[i]);
	console.log(val);
})
