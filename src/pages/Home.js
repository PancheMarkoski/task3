import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../redux/todos/todos.action'
import TodoCard from '../components/TodoCard'
import Dropdown from '../components/Dropdown'
import Search from '../components/Search'

const mapState = ({ todos, filter, term }) => ({
    todosArray: todos.todos,
    filter: filter.option,
    term: term.term
})


const Home = () => {
    const dispatch = useDispatch();
    const { todosArray, filter, term } = useSelector(mapState)

    const [api, setApi] = useState(false)

    useEffect(() => {
        dispatch(getTodos())
    }, [todosArray.length === 0])


    if (todosArray.length === 0) return alert("Loading Data")


    return (
        <div className='App'>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Dropdown />
                <Search />
            </div>
            {
                todosArray.filter((todo) => {

                    if (filter === "all") {
                        return todo
                    }
                    if (filter === "finished") {
                        return todo.completed === true
                    }
                    if (filter === "unfinished") {
                        return todo.completed === false
                    }

                    return todo

                }).filter((todo) => {
                    if (term === "") {
                        return todo
                    } else if (todo.title.toLowerCase().includes(term.toLowerCase())) {
                        return todo
                    }
                })
                    .map(todo => <TodoCard key={todo.id} todoData={todo} />)
            }
        </div>
    )
}

export default Home