import React, {Component} from 'react';

class Home extends Component {
    componentDidMount () {
        document.title = 'Code Championship | August 18, 2018';
    }

    render () {
        return (
            <span>
                <h1>Code Championship</h1>
                <h2>August 18, 2018</h2>
            </span>
        );
    }
}

export default Home;
