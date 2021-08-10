import { Component } from "../Components/Component.js";
import { Screen } from "./Screen.js";

export class App extends Component {

    constructor() {
        super(undefined);
        this.screen = new Screen(this);
        this.screen.redraw();
    }

    render() {
        return `whaat`;
    }
}