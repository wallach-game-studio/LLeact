import { Component } from "../Components/Component.js";

export class Content extends Component {

    constructor() {
        super(undefined);
        this.name = "content";
        this.content = [
            `<p>a javascript UI framework similar to react, but more lightweigth</p>
            <p> as 9/8/2021 its not production ready, but this website is written in LLeact</p> 
            <p> LLeact framework wanna offer long term design desizions, not copying other framework functions and breaking old codebase all the time.</p>`,
            `<p> at this point documentation does not really make sence because LLeact still have ton of bugs</p>`,
            `<p> LLeact is distributed over npm</p>
            <img alt="npm" src="https://img.shields.io/npm/v/@jirklym/lleact?color=blue">
            <img src="https://travis-ci.com/wallach-game-studio/LLeact.svg?branch=main">
            <a href="https://www.npmjs.com/package/@jirklym/lleact">https://www.npmjs.com/package/@jirklym/lleact</a>
            <p>npm i @jirklym/lleact</p>`,
            `<p>RoadMap as Planned 9/8/2021</p>

            <p>Version 0.9 / Planned September 2021</p>
            <ul>
                <li>npm package update</li>
                <li>clean codebase</li>
                <li>virtual dom system (complete rewrite pretty much every thing lol) ? or fix current bugs</li>
            </ul>
            
            <p>Version 1.0 / December 2021 Release 🎉🎉🎉 yaay:)</p>
            <ul>
                <li>component update when variable changes - reactivity</li>
            </ul>
            
            <p>Version 1.1 / February 2022</p>
            <ul>
                <li>new CSS workflow</li>
            </ul>`
        ];
        this.selectedContent = 0;

        Component.setStorageVal('content', this);
    }

    contentSwitch(index) {
        console.log(index);
        this.selectedContent = index;
        this.redraw();
    }

    render() {
        return ` <article> ${this.content[this.selectedContent]} </article> `;
    }

    afterRender() {
        //-- i think this does not really work
        console.log(`${this.name} after render call`);
        //this.setup();
    }

    setup() {
        console.log("yeeet");
        document.getElementById("main").addEventListener("click",
            () => { this.contentSwitch(0); }
        )
        document.getElementById("docs").addEventListener("click",
            () => { this.contentSwitch(1); }
        )
        document.getElementById("download").addEventListener("click",
            () => { this.contentSwitch(2); }
        )
        document.getElementById("roadmap").addEventListener("click",
            () => { this.contentSwitch(3); }
        )
        let func = Component.getStorageVal("headerCallback");
        Component.setStorageVal('btnFunc', this.contentSwitch);
        func(Component.getStorageVal("Header"));
        return "";
    }
}