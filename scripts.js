// Write your JavaScript code here.
// Remember to pay attention to page loading!

const init = () => {
    const takeoffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const status = document.getElementById("flightStatus");
    const backgroundColor = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    const rocketImg = document.getElementById("rocket");

    takeoffButton.addEventListener("click", () => {
        let takeoffConfirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (takeoffConfirm) {
            status.innerHTML = "Shuttle in flight.";
            backgroundColor.style.background = "blue";
            shuttleHeight.innerHTML = "10000";
        }
    

        rocketImg.style.top = "100px";
        upButton.addEventListener("click", () => {
            shuttleHeight.innerHTML = String(Number(shuttleHeight.innerHTML) + 10000);
            rocketImg.style.top = String(Number(rocketImg.style.top.replace("px", "")) - 10) + "px";
        });
        downButton.addEventListener("click", () => {
            if (Number(shuttleHeight.innerHTML) > 10000) {
                shuttleHeight.innerHTML = String(Number(shuttleHeight.innerHTML) - 10000);
                rocketImg.style.top = String(Number(rocketImg.style.top.replace("px", "")) + 10) + "px";
            } else {
                window.alert("To go down further, the shuttle must land.")
            }
        });
        
        rocketImg.style.right = "100px";
        rightButton.addEventListener("click", () => {
            rocketImg.style.right = String(Number(rocketImg.style.right.replace("px", "")) - 10) + "px";
        });
        leftButton.addEventListener("click", () => {
            rocketImg.style.right = String(Number(rocketImg.style.right.replace("px", "")) + 10) + "px";
        });

        landButton.addEventListener("click", () => {
            let landAlert = window.alert("The shuttle is landing. landing gear engaged.");
            status.innerHTML = "The shuttle has landed.";
            returnToOriginalPosition(backgroundColor, shuttleHeight, rocketImg);
        });
    });

    abortButton.addEventListener("click", () => {
        let abortConfirm = window.confirm("Confirm that you want to abort the mission.");
        if (abortConfirm) {
            status.innerHTML = "Mission aborted.";
            returnToOriginalPosition(backgroundColor, shuttleHeight, rocketImg);
        }
    });
}

const returnToOriginalPosition = (backgroundColor, shuttleHeight, rocketImg) => {
    backgroundColor.style.background = "green";
    shuttleHeight.innerHTML = "0";
    rocketImg.style.right = "100px";
    rocketImg.style.top = "100px";
}

window.addEventListener("load", init);