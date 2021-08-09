import { Component } from "../Components/Component.js";
export class Header extends Component {
    constructor() {
        super(undefined);
    }

    render() {
        return `
<header>
    <h1>LLeact</h1>
    <h2>like react but light weight</h2>
    <nav>
        <ul>
            <li id="main">Main</li>
            <li id="docs">Docs</li>
            <li id="download">Download</li>
            <li id="roadmap">RoadMap</li>
        </ul>
    </nav>
</header>`;
    }


}