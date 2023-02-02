import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class'


const TaskCompoment = ({ Task }) => {
    return (
        <div>
            <h2>
                Nombre: { Task.Nombre }
            </h2>
            <h3>
                Descripcion: { Task.descripcion }
            </h3>
            <h4>
                Level: { Task.levels }
            </h4>

            <h5>
                this task is { Task.completed ? 'COMPLETED':'PENDING'}
            </h5>
        </div>
    );
};


TaskCompoment.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskCompoment;
