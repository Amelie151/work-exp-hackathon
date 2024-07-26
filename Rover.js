
const MARSapi = "UNOjVw432dJ8QaHJlmPsTEhk4uQuD1VcsaeJleCY";
const RoverInput = document.querySelector(".");
const RoverForm = document.querySelector(".");

RoverForm.addEventListener("submit", async event => {

    event.preventDefault()
    const Rover = RoverInput.value;

    if(Rover){
        try{
            const RoverData = await getRoverData(Rover)
            Display(RoverData);
        } catch{
            console.log(error)
            var errorMessage = window.prompt("Please select a rover and try again");
        }
    } else{
         errorMessage = window.prompt("Please select a rover and try again")
    }

});

async function getRoverData(Rover){

    const apiURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera}&api_key=${MARSapi}`;

    const response = await fetch(apiURL);

}

function Display(JSONdata){
    const {
        name: camera
        

    }

    const nameDisplay = document.createElement("h1");
    const LandingDisplay = document.createElement("p");
    const LaunchDisplay = document.createElement("p");
    const statusDisplay = document.createElement("p");
    const totalPhotos = document.createElement("p");

}