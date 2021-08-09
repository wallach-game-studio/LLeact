/*
Copyright 2019@Jiri Korenek
Edited 2021@Jiri Korenek

Basic LLeact component
*/

export class Component {

    constructor(id, parent) {
        //paramaters creation
        this.name = "Component";
        this.element = "";
        this.type = undefined;
        this.parent = parent;
        this.userVariables = {};
        if (id != undefined) this.id = this.hashCode(Date.now() + "a") + id;
        else this.id = this.hashCode(Date.now() + "salt");
        //i hopw this string concating was for salting puvodne zde bylo + "a"

        //new code here
        this.holder = document.createElement("div");
        this.holder.setAttribute("id", this.id);
        if (this.parent == undefined) {
            this.parent = document.querySelector("body");
            this.parent.appendChild(this.holder);
        } else {
            this.parent.appendChild(this.holder);
        }



        this.empty = {};

        this.handler = {
            set(target, key, value) {
                console.log(`Setting value ${key} as ${value}`);
                console.log("component variable changed");
                target[key] = value;
                //this.redraw();
            },
        };

        this.userVariables = new Proxy(this.empty, this.handler);
        //p.a = 10; // logs "Setting value a as 10"
        //p.c = 20; // logs "Setting value c as 20"
        //console.log(p.a); // logs 10
    }







    //main render function
    render(self) {
        //this method should return html of element
    }

    redraw() {
        this.holder.innerHTML = this.render();
    }


    //main render function
    render() {}

    addComponent(component) {
        this.components.push(component);
    }




    // create(self) {
    //     let p = document.createElement(self.element);
    //     p.id = self.id;
    //     p.type = self.type;
    //     p.innerText = "LLeact." + self.name;
    //     document.getElementById("_").appendChild(p);
    // }

    //thanks @deekshith from gitHub for this hash func!
    hashCode(str) {
        return str.split("").reduce((prevHash, currVal) =>
            (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0, 0);
    }
}