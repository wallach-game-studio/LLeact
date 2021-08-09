import { Component } from "../Components/Component.js";
import { Button } from "./Button.js";

export class App extends Component {
    constructor() {
        super(undefined);
        this.var = "var data";
        this.btn = new Button();
        //this.redraw();
    }

    render() {
        //return `<div style="background: blue">${this.var}</div>`;
    }
}
console.log("");