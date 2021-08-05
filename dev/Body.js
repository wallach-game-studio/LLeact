//component class have to be loaded first

//this is component is placing html into body
console.log("body component loaded");
importComponent("dev/App.js");

class Body extends Component
{
  construtor()
  {
    this.body = document.querySelector("body");
    this.components = [];  
    
    this.components.push(new App());
    
    for (var i = 0; i < this.components.length; i++) {
      this.body.innerHTML = this.body.innerHTML + components[i].render();
    }
  }
}
