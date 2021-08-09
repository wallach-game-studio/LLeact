import { Component } from "../Components/Component.js";
import { App } from "../dev/App.js";

export class Body extends Component {
    constructor() {
        super();
        this.app = new App();
    }

    redraw() {
        this.holder.innerHTML = this.render();
        this.afterRender();
    }

    afterRender() {
        this.app.content.setup();
    }

    render() {
        return this.app.render();
    }
}