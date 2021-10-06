import React, {useEffect, useState} from 'react';
import NewTask from '../popup/NewTask';
import Card from './Card';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])

    useEffect(() => {
        let arr = localStorage.getItem("taskList")

        if(arr) {
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])

    const toggle = () => {
        setModal(!modal);
    }

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const saveTask = (taskObj) => {
        let tempList = taskList;
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setModal(false)
        setTaskList(tempList)
    }

    return (
        <div>
            <div className="header d-flex justify-content-center align-items-center">
                <h3 class="title">To do list</h3>
                <button className="button " onClick = {() => setModal(true)}>Create Task</button>
            </div>

            <div className="main d-flex align-content-center">
                <div className="container d-flex flex-wrap justify-content-center ">
                    {taskList.map((obj, index) => <Card taskObj = {obj} index = {index} 
                    deleteTask = {deleteTask} updateListArray = {updateListArray} />)}
                </div>
            </div>
            <NewTask toggle = {toggle} modal = {modal} save={saveTask}/>
        </div>
    );
}; 

export default TodoList;