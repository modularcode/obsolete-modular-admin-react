// Create a custom component by calling React.createClass.

export class Dashboard extends React.Component{
    constructor() {
        super();
        this.state = {elapsed:0, start: Date.now()};
    }

    componentDidMount(){
    console.log('browser recieved this this');

        // componentDidMount is called by react when the component 
        // has been rendered on the page. We can set the interval here:

        this.timer = setInterval(this.tick.bind(this), 50);
    }

    componentWillUnmount(){

        // This method is called immediately before the component is removed
        // from the page and destroyed. We can clear the interval here:

        clearInterval(this.timer);
    }

    tick(){

        // This function is called every 50 ms. It updates the 
        // elapsed counter. Calling setState causes the component to be re-rendered

        this.setState({elapsed: new Date() - this.state.start});
    }

    render() {
        
        var elapsed = Math.round(this.state.elapsed / 100);

        // This will give a number with one digit after the decimal dot (xx.x):
        var seconds = (elapsed / 10).toFixed(1);    

        // Although we return an entire <p> element, react will smartly update
        // only the changed parts, which contain the seconds variable.

        return (<div>{this.props.children || 
            <div><p>Dashboard. This example was started <b>{seconds} seconds</b> ago.</p>
                <p><Link to="/" activeClassName="link-active">1</Link></p>
                <p><Link to="/tables.html" activeClassName="link-active">2</Link></p>
                <p><Link to="/Dashboard" activeClassName="link-active">Dashboard</Link></p>
            </div>}</div>);
    }
};