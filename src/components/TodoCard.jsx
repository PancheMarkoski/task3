import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from "../redux/todos/todos.action"


const TodoCard = ({ todoData }) => {
    const dispatch = useDispatch();
    const [updateTodoStatus, setUpdateTodoStatus] = useState(todoData.completed)

    useEffect(() => {
        dispatch(updateTodo(todoData.id, updateTodoStatus))
    }, [todoData.id, updateTodoStatus, dispatch])



    return (
        <div className="card">
            <div className="container">
                <Link to={`user/${todoData.userId}`}>
                    <h4>id: <span>{todoData.id}</span></h4>
                    <h4>userId: <span>{todoData.userId}</span></h4>
                    <h4>Title: <span>{todoData.title}</span></h4>
                    <h4>completed: <span>{todoData.completed.toString()}</span></h4>
                    <hr style={{ margin: "10px 0" }} />
                </Link>
                <div>
                    <button className='card__btn delete' onClick={() => dispatch(deleteTodo(todoData.id))}>DELETE</button>
                    <button className='card__btn update' onClick={() => setUpdateTodoStatus(!updateTodoStatus)}>UPDATE STATUS</button>
                </div>
            </div>
        </div>
    )
}

export default TodoCard