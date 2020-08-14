import React from 'react';

const TaskCheckbox = ({ isCompleted, onTaskComplete, id }) => {
    if (isCompleted) {
        return (
            <input type="checkbox" name="public" checked onChange={() => onTaskComplete(id, false)}/>
        );
    } else {
        return (
            <input type="checkbox" name="public" onChange={() => onTaskComplete(id, true)}/>
        );
    }
};

export default TaskCheckbox;