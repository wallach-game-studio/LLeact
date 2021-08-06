//component class have to be loaded first

//this is component is placing html into body
importComponent("dev/App.js");
class Body extends Component {
    constructor() {
        super();

        this.app = new App(this);
    }

    render() {
        return this.app.render();
    }
}
console.log("");