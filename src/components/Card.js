import React, {useState} from 'react';
import EditTask from '../popup/EditTask';

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false)

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F39687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B96647",
            secondaryColor : "#F3F0FD"
        },
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <div class="card m-3 p-3" style={{"border-color": colors[index%5].primaryColor}}>
            <h3>{taskObj.Name}</h3>
            <p>{taskObj.Description}</p>

            <div class="d-flex align-content-center justify-content-end">
                <i class="fas fa-edit m-2" style={{"color": colors[index%5]
                .primaryColor}} onClick = {() => setModal(true)}></i>

                <i class="fas fa-trash m-2" style={{"color": colors[index%5]
                .primaryColor}} onClick = {handleDelete} ></i>
            </div>

            <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj} />
        </div>
    );
};

export default Card; 