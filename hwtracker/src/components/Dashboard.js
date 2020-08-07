import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TaskList from './TaskList';
import { fetchTasks } from '../actions';


class Dashboard extends React.Component {

    componentDidMount() {
        this.props.fetchTasks();
    }

    render() {
        const { tasks, auth } = this.props;
        console.log(tasks);
        if (!auth.uid) {
            return <Redirect to="/LogIn" />;
        }
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