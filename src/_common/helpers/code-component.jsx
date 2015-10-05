
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