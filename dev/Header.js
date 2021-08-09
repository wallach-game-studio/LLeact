import { Component } from "../Components/Component.js";
export class Header extends Component {
    constructor() {
        super(undefined);
        Component.setStorageVal("headerCallback", this.setupCallBack);
        Component.setStorageVal('Header', this);
    }

    //-- this callback meme should not exist but context is good tool



    setupCallBack(self) {
        console.log("callback");
        self.btnFunc = Component.getStorageVal("btnFunc");
        console.log(self.btnFunc);
        self.btnFunc(2);
        let content = Component.getStorageVal('content');
        console.log(content);
        //console.log(self.render())
        //self.redraw();
    }

    //here will be the dynamic parse code needed
    //Virtual DOM or VDOM :)

    render() {
        return `
<header>
    <h1>🚀 LLeact</h1>
    <h2>like react but lightweight 🚅</h2>
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