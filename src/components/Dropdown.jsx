import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setFiletr } from '../redux/filter/filter.action'


const Dropdown = () => {
    const dispatch = useDispatch()

    const [options, setOptions] = useState("all");

    useEffect(() => {

        dispatch(setFiletr(options))

    }, [options])


    return (
        <select id="cars" value={options} onChange={e => setOptions(e.target.value)}>
            <option value="all" >All todos</option>
            <option value="finished" >Finished todos</option>
            <option value="unfinished" >Unfinished todos</option>
        </select>
    )
}

export default Dropdown