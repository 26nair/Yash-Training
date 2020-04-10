var ProjectDetails= [
  {
    pid: "001",
    pname: "Raj",
    description: "InProgress"
  },
  {
    pid: "002",
    name: "Raju",
    description: "Completed"
  }

];


//Add new project
console.log(ProjectDetails);
ProjectDetails.push({pid:"003",name:"Rahul", status:"InProgress"});
//console.log(ProjectDetails);

for(i=0; i<ProjectDetails.length; i++){
  if (ProjectDetails[i]['pid'] == '003'){
    console.log("Name : " + ProjectDetails[i]['name'])
    console.log("Description : " + ProjectDetails[i]['description'])
    }
}
