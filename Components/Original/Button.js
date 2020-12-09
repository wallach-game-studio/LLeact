class Button extends Component {
    constructor(name,text) {
        super(name);
        this.text = text;
        this.name = "rand";
        this.element = "input";
        this.type = "submit";
    }

    create(self) {
        let p = document.createElement(self.element);
        p.id = self.id;
        p.type = self.type;
        p.value = self.name;
        p.innerText = "LLeact." + self.name;
        document.getElementById("_").appendChild(p);
    }
}