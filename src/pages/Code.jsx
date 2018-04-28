import React, {Component} from 'react';
import GUI from '../containers/gui.jsx';
import ProjectLoaderHOC from '../lib/project-loader-hoc.jsx';
import AppStateHOC from '../lib/app-state-hoc.jsx';

const App = AppStateHOC(ProjectLoaderHOC(GUI));

class Code extends Component {
    componentDidMount () {
        document.title = 'Code With Code Championship';
    }

    render () {
        return (
            <span>
                <h1>Code</h1>
                <h2>Practice your coding here.</h2>
                <App />
            </span>
        );
    }
}

export default Code;
