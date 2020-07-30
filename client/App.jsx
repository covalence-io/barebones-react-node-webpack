import * as React from 'react';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = { name: null };
    }

    async componentWillMount() {
        let r = await fetch('/api/hello');
        let name = await r.json();
        this.setState({ name })
    }

    render () {
        return (
            <main>
                <h1>Hello {this.state.name}!</h1>
                <h2></h2>
            </main>
        )
    }
}