import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getTerm } from '../redux/term/term.action'

const Search = () => {
    const dispatch = useDispatch()
    const [term, setTerm] = useState('')

    useEffect(() => {
        dispatch(getTerm(term))
    }, [term])


    return (
        <input type="text" autoComplete="off" name="serach" value={term} placeholder="Search" onChange={e => setTerm(e.target.value)} />
    )
}

export default Search