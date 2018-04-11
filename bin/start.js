#! /usr/bin/env node

var fs = require('fs')
// See if project details already set up
if (fs.existsSync('project_details.json')){
  console.log("Project details already set up...");
  console.log("Do you want reset details, to update press no and run update (yes/no)");
  console.log("Resetting details")
}
else{
  setUp();
}

function setUp(){
  console.log("Setting up project details..");
  console.log("Project Name: ")
  // ENTER DETAILS
  var title = "README";
  // Make sure current directory is the project folder (confirm it is current project)
  // Offer title to be current directory name
  var path = "project_details.json"
  fs.writeFile(path, title, (err) => {
    if (err) throw err;
    console.log("Created file: project_details.json");
  });
}




// If no, offer other help.
