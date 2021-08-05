//component class have to be loaded first

//this is component is placing html into body
importComponent("dev/App.js");
class Body extends Component {
    constructor() {
        super(undefined);
        //this.app = new App(this);

        //add your components to this array
        //this.addComponent(new App(this));
        //this.addComponent(new yourComponent(this));

        //OR 
        this.app = new App();

    }

    render() {
        let output = "";
        output += this.app.render();
        return output;
    }
}
console.log("");