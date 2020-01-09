import React from 'react'
import Users from './users'
import Header from './Header/Header'
import {Route, BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
          <Header />
          <Route path='/users' component={Users} />
      </div>
    </Router>
  )
}
