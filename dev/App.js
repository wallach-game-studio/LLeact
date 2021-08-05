class App extends Component {
    constructor() {
        super(undefined);
        this.var = "var data";
    }

    render() {

        let out =
            `<div style="background: blue">${this.var}</div>`;
        return out;
    }
}
console.log("");