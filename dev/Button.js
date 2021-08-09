import { Component } from "../Components/Component.js";

export class Button extends Component {
    constructor() {
        super(undefined);

        this.userVariables = {
            count: 0
        };
        this.redraw();
    }

    redraw() {
        this.holder.innerHTML = this.render();
        this.setup();
    }


    render() {
        //return `<div style="background: blue">${this.var}</div>`;
        //debugger;
        //console.log(self);
        return `<button id="clickyButton">You clicked this button ${this.userVariables.count} times!👈</button>`;
    }

    setup = () => {
        try {
            document.getElementById("clickyButton").addEventListener("click", () => { this.increment(this) });
        } catch {
            console.log("me");
        }
    }

    increment(self) {
        self.userVariables.count++;
        //self.redraw();
        console.log(self.userVariables.count);
    }
}