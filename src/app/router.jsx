

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