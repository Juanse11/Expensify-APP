const expensesTotal = ((expenses) => (
    expenses.map((expense) => expense.amount)
            .reduce((accumulator, currValue) => accumulator + currValue, 0)
))

export default expensesTotal