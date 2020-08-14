import React from 'react';
import { connect } from 'react-redux';
import history from '../history';

class Home extends React.Component {

    componentDidMount() {
        const { uid } = this.props;
        if (uid) {
            console.log('home redirect to dashboard');
            history.push('/Dashboard');
        }
    }

    render() {
        return (
            <div>home</div>
        );
    };
}

const mapStateToProps = state => {
    return { uid: state.auth.uid }
}

export default connect(mapStateToProps)(Home);