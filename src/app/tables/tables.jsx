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