/*
Copyright 2019@Jiri Korenek
Edited 2021@Jiri Korenek

Basic LLeact component
*/
class Component {

    constructor(id, parent) {
        //paramaters creation
        this.name = "Component";
        this.element = "p";
        this.type = undefined;
        this.parent = parent
        this.components = [];
        if (id != undefined) this.id = this.hashCode(Date.now() + "a") + id;
        else this.id = this.hashCode(Date.now() + "a");
    }

    //main render function
    render() {
        let output = "";

        //output += this.app.render();
        for (let i = 0; i < this.components.length; i++) {
            const element = this.components[i];
            output += element.render();
        }
        return output;
    }

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