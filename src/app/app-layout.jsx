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