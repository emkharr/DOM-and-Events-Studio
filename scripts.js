window.addEventListener("load", function () {
    let top = 0;
    let right = 0;

    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");


    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener('click', function () {
        let readyToLaunch = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (readyToLaunch) {
            //flight status change to shuttle in flight
            flightStatus.innerText = "Shuttle in flight.";

            shuttleBackground.setAttribute("style", "background-color: blue");
            
            shuttleHeight.innerText = "10000"
        };
    })
    
    let land = document.getElementById("landing");
    land.addEventListener('click', function () {
        window.alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerText = "The shuttle has landed.";
        shuttleBackground.setAttribute("style", "background-color: green");
        shuttleHeight.innerText = "0"
    })
    
    let abortMission = document.getElementById("missionAbort");
    abortMission.addEventListener('click', function () {
        let confirm = window.confirm("Confirm that you want to abort the mission.");
        if (confirm) {
            //flight status change to shuttle in flight
            flightStatus.innerText = "Mission aborted.";
            
            shuttleBackground.setAttribute("style", "background-color: green");
            
            shuttleHeight.innerText = "0"
        };
    })
    
    let upBtn = document.getElementById("up");
    let downBtn = document.getElementById("down");
    let rightBtn = document.getElementById("right");
    let leftBtn = document.getElementById("left");
    
    let shuttleHeightAmt = Number(shuttleHeight.innerText);

    upBtn.addEventListener('click', function () {
        shuttleHeightAmt += 10000;
        shuttleHeight.innerText = shuttleHeightAmt;
        if (top < 0) {
            top = 0 
        }
            top -= 10;
            document.getElementsByClassName("picture").style.top = (top-10) + "px";
    })
// console.log(document.getElementById("rocket").style.top)
    downBtn.addEventListener("click", function() {
        shuttleHeightAmt -= 10000;
        shuttleHeight.innerText = shuttleHeightAmt;

    })

});

