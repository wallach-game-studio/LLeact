/*
Copyright 2019@Jiri Korenek
Edited 2021@Jiri Korenek

Basic LLeact component
*/
class Component {

    constructor(id, parent) {
        //paramaters creation
        this.name = "Component";
        this.element = "";
        this.type = undefined;
        this.parent = parent;
        if (id != undefined) this.id = this.hashCode(Date.now() + "a") + id;
        else this.id = this.hashCode(Date.now() + "salt");
        //i hopw this string concating was for salting puvodne zde bylo + "a"


        //new code here
        this.holder = document.createElement("div");
        this.holder.setAttribute("id", this.id);
        if (this.parent == undefined) {
            this.parent = document.querySelector("body");
            this.parent.appendChild(this.holder);
            console.trace();
        } else {
            this.parent.appendChild(this.holder);
        }


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


    create(self) {
        let p = document.createElement(self.element);
        p.id = self.id;
        p.type = self.type;
        p.innerText = "LLeact." + self.name;
        document.getElementById("_").appendChild(p);
    }

    //thanks @deekshith from gitHub for this hash func!
    hashCode(str) {
        return str.split("").reduce((prevHash, currVal) =>
            (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0, 0);
    }
}
console.log("");