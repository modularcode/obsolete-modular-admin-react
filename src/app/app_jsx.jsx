import React from 'react/addons';
import {ReactRouter, Link, Router, Route, IndexRoute} from 'react-router';
// import System from 'es6-module-loader';


// Create a custom component by calling React.createClass.

export class Layout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {client: props.route.client};
    }

    componentDidMount(){
    }

    componentWillUnmount(){
    }
    render() {
        return (<div>{this.props.children}</div>);
    }
};
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
// Create a custom component by calling React.createClass.

export class Tables extends React.Component{

    componentDidMount(){
    }

    componentWillUnmount(){
    }

    tick(){
    }

    render() { 

        // Although we return an entire <p> element, react will smartly update
        // only the changed parts, which contain the seconds variable.

        return (
            <div id = "react_container">
                <div className="title-block">
                    <h1 className="title">
                        Tables
                    </h1>
                    <p className="subtitle">
                        When blocks aren't enough
                    </p>
                </div>

                <section className="section">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="panel">


                                <div className="panel-title-block">
                                    <h3 className="title">
                                        Basic example
                                    </h3>
                                </div>

                                <section className="example">

                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </section>

                                
                                <CodePrettyfy lang = "html">
                                    <table className="table">               
                                        ...
                                    </table>
                                </CodePrettyfy>

                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="panel">

                                <div className="panel-title-block">
                                    <h3 className="title">
                                        Striped rows
                                    </h3>
                                </div>

                                <section className="example">

                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </section>

                                
                                <CodePrettyfy lang = "html">
                                    <table className="table table-striped">             
                                        ...
                                    </table>
                                </CodePrettyfy>

                            </div>
                        </div>

                    </div>
                </section>


                <section className="section">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="panel">

                                <div className="panel-title-block">
                                    <h3 className="title">
                                        Bordered
                                    </h3>
                                </div>

                                <section className="example">

                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </section>

                                
                                <CodePrettyfy lang = "html">
                                    <table className="table table-bordered">                
                                        ...
                                    </table>
                                </CodePrettyfy>

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="panel">


                                <div className="panel-title-block">
                                    <h3 className="title">
                                        Hover rows
                                    </h3>
                                </div>

                                <section className="example">

                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </section>
                                <CodePrettyfy lang = "html">
                                    <table className="table table-hover">
                                        ...
                                    </table>
                                </CodePrettyfy>

                            </div>
                        </div>


                    </div>
                </section>
            </div>
        );
    }
};

	import util from 'util';
export class CodePrettyfy extends React.Component{
    constructor(props) {
        super(props);
        this.state = {markup: this.props.children};
    }
	prettyfy() {
		var input = this.props.children;

		var text = React.renderToStaticMarkup(input);

    	this.setState({markup: text});
	}
    componentDidMount(){
    	this.prettyfy();
    	hljs.highlightBlock(React.findDOMNode(this.refs.code));
    }
	render() {
		//var code = React.addons.createFragment(this.state.markup);
		return (
			<pre>
				<code ref = "code" className={this.props.lang}>
					{this.state.markup}
				</code>
			</pre>
		);
	}
};



export function routes_manager(){
    return (
	    <Route path="/" component = {Layout}>
	        <Route path="/" component = {Dashboard} />
	        <IndexRoute component = {Dashboard} />
	        <Route path="/tables.html" component = {Tables} />
			<Route path="*" component = {Dashboard}  />
		</Route>);
};

if (typeof window !== "undefined") {
	var createBrowserHistory = require('history/lib/createBrowserHistory');
	React.render(
    	<Router history={createBrowserHistory()}>
			{routes_manager()}
    	</Router>, 
    	document.getElementById('content'));
}