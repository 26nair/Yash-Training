var ProjectDetails= [
  {
    pid: "001",
    pname: "Raj",
    status: "InProgress"
  },
  {
    pid: "002",
    name: "Raju",
    status: "Completed"
  }

];


//Add new project
console.log(ProjectDetails);
ProjectDetails.push({pid:"003",name:"Rahul", status:"InProgress"});
console.log(ProjectDetails);

for(i=0; i<ProjectDetails.length; i++){
  if (ProjectDetails[i]['pid'] == '003'){
    ProjectDetails[i]['status'] = "Completed";
}
}

console.log(ProjectDetails);

//Delete a particular project
ProjectDetails.splice(2,1);
console.log(ProjectDetails);
