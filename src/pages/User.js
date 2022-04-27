import React, { useEffect } from 'react'
import { getUser } from "../redux/user/user.action"
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

const mapState = ({ user }) => ({
    user: user.user
})


const User = () => {
    let param = useParams();
    const dispatch = useDispatch()

    const { user } = useSelector(mapState)


    useEffect(() => {
        dispatch(getUser(param.userId))
        console.log('da')
    }, [param])

    if (user && user.address) {

        return (
            <div className="card user">
                <div className="container">
                    <h3>{`${user && user.name} -> ${user && user.name.split(" ").map((n) => n[0]).join("")}`}</h3>
                    <p>{user && user.username}</p>
                    <p>{`${user && user.address.street}, ${user && user.address.city}`}</p>
                    <a href="#" style={{ textDecoration: "underline", color: "blue" }}>{user && user.email}</a>
                    <hr style={{ margin: "10px 0" }} />
                    <Link to="/" className='card__btn'>Go Back</Link>
                </div>
            </div>
        )
    }

}

export default User