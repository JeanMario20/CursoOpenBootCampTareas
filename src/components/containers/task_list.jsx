import React from 'react';
import TaskCompoment from '../pure/task';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum.js';



const TaskListComponent = () => {
    
    //const defaultTask = new Task('Example', 'Default descripcion', false.LEVELS.NOMRAL);
    const defaultTask = new Task('Example', 'Default descripcion', LEVELS.NORMAL);

    const changeState = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                Your Task:
            </div>
            {/*TODO: Aplicar un forMap para renderizar una lista */}
            <TaskCompoment task={ defaultTask }></TaskCompoment>
        </div>
    );
};


export default TaskListComponent;
