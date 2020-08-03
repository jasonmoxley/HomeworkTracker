import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../actions';


class Header extends React.Component{

    renderHeader() {
        if (this.props.isSignedIn) {
            return (
                <>
                    <div className="header item">Homework Tracker</div>
                    <div className="right menu">
                        <div className="item">
                            <button onClick={()=> this.props.logOut()}className="ui inverted button">Log Out</button>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <Link to="/" className="header item">Homework Tracker</Link>
                    <div className="right menu">
                        <div className="item">
                            <Link to="/SignUp" className="ui inverted button">Sign Up</Link>
                        </div>
                        <div className="item">
                            <Link to="/LogIn" className="ui inverted button">Log In</Link>
                        </div>
                    </div>
                </>
            );
        }
    }

    render() {
        return (
            <div className="ui inverted menu">
                {this.renderHeader()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {isSignedIn: state.auth.isSignedIn};
}

export default connect(mapStateToProps, { logOut })(Header);