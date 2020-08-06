import React from 'react';
import moment from 'moment';


const TaskList = ({ tasks }) => {
    console.log(tasks);
    return tasks.map( task => {
        return (
            <div className="ui divided items" key={task.id}>
                <h3 className="ui header">{moment(task.date.toDate()).format('LL')}</h3>
                <div className="item" style={{ marginLeft: "30px"}} >
                    <div className="content">
                        <div className="header">{task.title}</div>
                        <div className="meta">{`Due ${moment(task.date.toDate()).format('lll')}`}</div>
                        <div className="description">{task.description}</div>
                    </div>
                </div>
            </div>
        );
    })
};

export default TaskList;