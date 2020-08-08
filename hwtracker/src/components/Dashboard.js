import React from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import TaskList from './TaskList';
import { fetchTasks } from '../actions';
import history from '../history';


class Dashboard extends React.Component {

    componentDidMount() {
        const { auth } = this.props;
        const uid = auth.uid
        if (uid === undefined) {
            console.log('dashboard redirect');
            history.push('/');
        } else {
            console.log('trying to fetch tasks');
            console.log(uid);
            this.props.fetchTasks(uid);
        }
        
    }

    render() {
        const { tasks } = this.props;
        // if (!auth.uid) {
        //     console.log('dashboard redirect');
        //     return <Redirect to="/" />;
        // }
        console.log(tasks);
        if (!tasks) {
            return (
                <div className="ui segment" style={{ height: "150px", marginTop: "50px" }}>
                    <div className="ui active inverted dimmer">
                        <div className="ui large text loader">Loading</div>
                    </div>
                </div>
            );
        } else {
            return <TaskList tasks={tasks} />
        }
    };
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        tasks: state.hw.tasks,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, { fetchTasks })(Dashboard);