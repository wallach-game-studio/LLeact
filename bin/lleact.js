//this cannot be moved
//loading base component
import { Body } from "../Components/Body.js";

const importComponent = (path) => {
    let loadedComponent = document.createElement("script");
    loadedComponent.src = path;
    loadedComponent.setAttribute("type", "text/javascript");

    latestLoadedScript().append(loadedComponent);
}

// function latestLoadedScript() {
//     let loadedScripts = document.getElementsByClassName("llsrc");
//     return loadedScripts[loadedScripts.length - 1];
// }

console.log("lleact binary loaded");
const body = new Body();
body.redraw();


//importComponent("Components/Component.js");
// importComponent("dev/Body.js");