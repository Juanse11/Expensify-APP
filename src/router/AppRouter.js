import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddExpensePage from '../components/AddExpensePage'
import EditPage from '../components/EditPage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import Header from '../components/Header'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact={true} component={ExpenseDashboardPage} />
                <Route path="/edit/:id" exact={true} component={EditPage} />
                <Route path="/create" exact={true} component={AddExpensePage} />
                <Route path="/help" exact={true} component={HelpPage} /> 
            </Switch>
        </div>
        
    </BrowserRouter>
)

export default AppRouter