import React from 'react'
import { connect } from 'react-redux'
import getFilteredExpenses  from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'

const ExpensesSummary = (props) => (
    <div>
        <p>Number of Expenses {props.expensesCount}; Expenses Total: {props.expensesTotal} </p>
    </div>
)

const mapStateToProps = (state) => {
    const filteredExpenses = getFilteredExpenses(state.expenses, state.filters)
    return {
        expensesCount: filteredExpenses.length,
        expensesTotal: getExpensesTotal(filteredExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)