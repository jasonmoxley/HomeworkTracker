import React from 'react';

const TaskCheckbox = ({ isCompleted, onTaskComplete, id }) => {
    return <input type="checkbox" defaultChecked={isCompleted} onChange={() => onTaskComplete(id, !isCompleted)}/>
};

export default TaskCheckbox;