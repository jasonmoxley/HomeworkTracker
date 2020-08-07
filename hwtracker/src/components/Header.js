import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../actions';


class Header extends React.Component{

    renderHeader() {
        const { auth } = this.props;
        const isSignedIn = auth.uid ? true : false;
        if (isSignedIn) {
            return (
                <div className="ui container">
                    <Link to="/Dashboard" className="header item">Homework Tracker</Link>
                    <div className="right menu">
                        <div className="item">
                            <Link to="/CreateTask" className="ui inverted button">Create Task</Link>
                        </div>
                        <div className="item">
                            <button onClick={()=> this.props.logOut()}className="ui inverted button">Log Out</button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="ui container">
                    <Link to="/" className="header item">Homework Tracker</Link>
                    <div className="right menu">
                        <div className="item">
                            <Link to="/SignUp" className="ui inverted button">Sign Up</Link>
                        </div>
                        <div className="item">
                            <Link to="/LogIn" className="ui inverted button">Log In</Link>
                        </div>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="ui inverted borderless menu">
                {this.renderHeader()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { auth: state.firebase.auth };
}

export default connect(mapStateToProps, { logOut })(Header);