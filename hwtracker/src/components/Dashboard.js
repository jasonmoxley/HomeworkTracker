import React from 'react';
import { connect } from 'react-redux';
import TaskList from './TaskList';
import { fetchTasks, deleteTask, completeTask } from '../actions';
import { Link } from 'react-router-dom';
import history from '../history';
import moment from 'moment';


class Dashboard extends React.Component {

    componentDidMount() {
        const { uid } = this.props;
        if (!uid) {
            console.log('dashboard redirect to home');
            history.push('/');
        } else {
            this.props.fetchTasks(uid);
        }
    }

    onTaskDelete = (id) => {
        console.log('deleting task');
        const { uid } = this.props;
        this.props.deleteTask(id, uid);
    }

    onTaskComplete = (id, isComplete) => {
        console.log('completing task');
        const { uid } = this.props;
        this.props.completeTask(id, uid, isComplete);
    }

    renderTasks() {
        const { tasks } = this.props;
        const data = tasks.reduce((data, task) => {
            const originalDate = task.date.toDate();
            const momentDate = moment(originalDate).format('l');
            if (!data[momentDate]) {
                data[momentDate] = [];
            }
            data[momentDate].push(task);
            return data;
        }, {});
        const dataArray = Object.keys(data).map((date) => {
            return {
                date,
                tasks: data[date]
            }
        });
        return dataArray;
    }

    render() {
        const { tasks } = this.props;
        console.log(tasks);
        if (!tasks) {
            return (
                <div className="ui segment" style={{ height: "150px", marginTop: "50px" }}>
                    <div className="ui active inverted dimmer">
                        <div className="ui large text loader">Loading</div>
                    </div>
                </div>
            );
        } else if (tasks.length === 0) {
            return (
                <div style={{
                    textAlign: "center",
                    marginTop: "100px",
                    width: "50%",
                    marginLeft: "auto",
                    marginRight: "auto"
                }}>
                    <h1 className="ui inverted header">
                        <div style={{ marginBottom: "10px"}}>Create a task to get started</div>
                    </h1>
                    <div className="ui hidden divider"></div>
                    <Link to="/CreateTask" className="ui huge inverted download button">Create Task</Link>
                </div>
            );
        } else {
            const newTasks = this.renderTasks();
            return (
                <>
                    <TaskList onTaskComplete={this.onTaskComplete} onTaskDelete={this.onTaskDelete} tasks={newTasks} />
                    <div style={{ height: "20px"}}></div>
                </>
            );
        }
    };
}

const mapStateToProps = (state) => {
    return {
        tasks: state.hw.tasks,
        uid: state.auth.uid
    }
}

export default connect(mapStateToProps, { fetchTasks, deleteTask, completeTask })(Dashboard);