// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
         </ol>
         <img src="${json[0].image}">
         `;
      });
   });
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilot = document.querySelector("input[name=pilotName]");
      let copilot = document.querySelector("input[name=copilotName]");
      let fuel = document.querySelector("input[name=fuelLevel]");
      let cargo = document.querySelector("input[name=cargoMass]");

      let status = document.getElementById("launchStatus");
      
      if (isNaN(fuel.value) || isNaN(cargo.value)){
         alert("Fuel level and Cargo mass must be numbers!");
         
      }

      if (pilot.value === "" || copilot.value === "") {
         alert("All fields are required!");
         // event.preventDefault();
      }

      if(fuel.value < 10000 || cargo.value > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
   
         status.style.color = "red";
         status.innerHTML = "Shuttle not ready for launch"
   
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready for launch`
         document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot.value} is ready for launch`
         
         if(fuel.value < 10000){
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch"
         }
         if(cargo.value > 10000){
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch"
         }
      } else {
         status.style.color = "green";
         status.innerHTML = "Shuttle is ready for launch"
      }
      
   })
  

})
