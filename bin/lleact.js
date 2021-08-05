console.log("lleact binary loaded");


//this cannot be moved
//loading base component

const importComponent = (path) => {
  let loadedComponent = document.createElement("script");
  loadedComponent.src = path;
  loadedComponent.setAttribute("type", "text/javascript");

latestLoadedScript().append(loadedComponent);
}

importComponent("Components/Component.js")
importComponent("dev/Body.js");

function latestLoadedScript()
{
  let loadedScripts = document.getElementsByClassName("llsrc");
  return loadedScripts[loadedScripts.length - 1];
}