import React from 'react';
import { connect } from 'react-redux';
import history from '../history';
import { Link } from 'react-router-dom';

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
            <div style={{
                textAlign: "center",
                marginTop: "100px",
                width: "50%",
                marginLeft: "auto",
                marginRight: "auto"
            }}>
                <h1 className="ui inverted header">
                    <div style={{ fontSize: "50px", marginBottom: "10px"}}>Homework Tracker</div>
                    <br />
                    <div style={{ marginBottom: "10px"}}>Online planner to help students keep track of upcoming assignments and deadlines</div>
                </h1>
                <div className="ui hidden divider"></div>
                <Link to="/SignUp" className="ui huge inverted download button">Get Started</Link>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return { uid: state.auth.uid }
}

export default connect(mapStateToProps)(Home);