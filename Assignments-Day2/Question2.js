var obj = {
   "id": "001",
   "name": "Raj",
   "description": "Testing for keyStatus Values",
   "status":"Completed"
};


var isFound= "false";
var x = Object.keys(obj);
console.log(x);
if(x.includes("status")){
console.log("Status Found");



var y= obj["status"];
console.log("Message: "+y);
if(y=="Completed"){
console.log("true");
}else{
console.log("false");
}

}
