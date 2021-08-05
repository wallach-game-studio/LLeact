console.log('app   compoenet');

class App extends Component 
{
  constructor()
  {
    this.var = "var data";
  }
  
  render()
  {
    let out = '<div style="background: blue">{this.var}</div>';
    return out;
  }
}