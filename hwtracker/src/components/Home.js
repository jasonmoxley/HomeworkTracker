import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
    render() {
        const { auth } = this.props;
        if (auth.uid) {
            console.log('home redirect');
            return <Redirect to="/Dashboard" />;
        }
        return (
            <div>home</div>
        );
    };
}

const mapStateToProps = state => {
    return { auth: state.firebase.auth }
}

export default connect(mapStateToProps)(Home);