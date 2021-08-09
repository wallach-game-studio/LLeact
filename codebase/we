//this cannot be moved
//loading base component
import { Body } from "../dev/Body.js";



const importComponent = (path) => {
    let loadedComponent = document.createElement("script");
    loadedComponent.src = path;
    loadedComponent.setAttribute("type", "text/javascript");

    latestLoadedScript().append(loadedComponent);
}

function latestLoadedScript() {
    let loadedScripts = document.getElementsByClassName("llsrc");
    return loadedScripts[loadedScripts.length - 1];
}

const body = new Body();

console.log("lleact binary loaded");

//importComponent("Components/Component.js");
// importComponent("dev/Body.js");