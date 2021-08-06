//this cannot be moved
//loading base component



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

function scriptsLoadedCallBack() {
    console.log("scriptLoaded");
    const body = new Body();
}

console.log("lleact binary loaded");
importComponent("Components/Component.js");
console.log("blocking");
importComponent("dev/Body.js");