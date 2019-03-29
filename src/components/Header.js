import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => (
    <header>
        <h1>Expnesify</h1>
        <NavLink to="/">Home </NavLink>
        <NavLink to="/create">Create </NavLink>
        <NavLink to="/edit">Edit </NavLink>
        <NavLink to="/help">Help </NavLink>
    </header>
)

export default Header