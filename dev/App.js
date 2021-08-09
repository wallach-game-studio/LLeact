import { Component } from "../Components/Component.js";
import { Header } from "./Header.js";
import { Content } from "./Content.js";
import { Footer } from "./Footer.js";

export class App extends Component {

    constructor() {
        super(undefined);
        this.header = new Header();
        this.header.redraw();
        this.content = new Content();
        this.content.redraw();
        this.footer = new Footer();
        this.footer.redraw();
        this.redraw();
    }

    render() {
        return `
        `;
    }
}