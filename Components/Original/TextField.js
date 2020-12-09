class TextField extends Component
{
    constructor()
    {
        super();
        this.name = "textfield"
    }

    render()
    {
        document.write(
            "<input type='text' id="+this.id+">"
        );
    }
}