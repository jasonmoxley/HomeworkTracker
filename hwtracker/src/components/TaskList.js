import React from 'react';
import moment from 'moment';
import Task from './Task';


const TaskList = ({ tasks, onTaskDelete, onTaskComplete }) => {
    return tasks.map( day => {
        return (
            <div className="ui items" key={day.date} style={{ backgroundColor: "white", padding: "20px" }}>
                <h3 className="ui header" style={{borderBottom: "2px solid black"}}>{moment(day.tasks[0].date.toDate()).format('LL')}</h3>
                <Task style={{}} onTaskComplete={onTaskComplete} onTaskDelete={onTaskDelete} tasks={day.tasks} />
            </div>
        );
    });
};

export default TaskList;