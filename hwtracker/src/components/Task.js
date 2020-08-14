import React from 'react';
import moment from 'moment';
import TaskCheckbox from './TaskCheckbox';

const Task = ({ tasks, onTaskDelete, onTaskComplete }) => {
    return tasks.map((task, index) => {
        console.log(index);
        if (index === 0) {
            return (
                <div className="item" style={{ marginLeft: "30px" }} key={task.id}>
                    <div className="content">
                        <div className="header">{task.title}</div>
                        <div className="meta">{`Due ${moment(task.date.toDate()).format('lll')}`}</div>
                        <div className="description">{task.description}</div>
                        <div className="extra">
                            <div className="ui right floated" style={{ marginRight: "30px"}} onClick={() => onTaskDelete(task.id)}>
                                <i className="alternate trash icon"></i>
                            </div>
                            <div className="ui floated toggle checkbox">
                                <TaskCheckbox onTaskComplete={onTaskComplete} isCompleted={task.completed} id={task.id}/>
                                <label>Completed</label>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <React.Fragment key={task.id}>
                    <hr style={{marginLeft: "30px"}}/>
                    <div className="item" style={{ marginLeft: "30px" }}>
                        <div className="content">
                            <div className="header">{task.title}</div>
                            <div className="meta">{`Due ${moment(task.date.toDate()).format('lll')}`}</div>
                            <div className="description">{task.description}</div>
                            <div className="extra">
                                <div className="ui right floated" style={{ marginRight: "30px"}} onClick={() => onTaskDelete(task.id)}>
                                    <i className="alternate trash icon"></i>
                                </div>
                                <div className="ui floated toggle checkbox">
                                    <TaskCheckbox onTaskComplete={onTaskComplete} isCompleted={task.completed} id={task.id}/>
                                    <label>Completed</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
    });
};

export default Task;
