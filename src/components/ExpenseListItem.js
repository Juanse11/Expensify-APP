import React from 'react'
import { NavLink } from 'react-router-dom'

const ExpenseListItem = (props) => (
    <div>
        <NavLink to={`/edit/${props.id}`}>{props.description}</NavLink>
        <p> Amount: {props.amount}; createdAt: {props.createdAt}</p>
        
    </div>
)


export default ExpenseListItem