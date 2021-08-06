class App extends Component {
    constructor() {
        super(undefined);
        this.var = "var data";
        this.redraw();
    }

    render() {
        return `<div style="background: blue">${this.var}</div>`;
    }
}
console.log("");