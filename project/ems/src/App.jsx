import React, { useEffect, useState, useContext } from 'react'
import Login from './componants/Auth/Login'
import EmployeeDashboard from './componants/DashBoard/EmployeeDashboard'
import AdminDashboard from './componants/DashBoard/AdminDashboard'
import { setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState('')
  const [loggedInUserData, setLoggedInUserData] = useState('')
  const authData = useContext(AuthContext)

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return
    }

    if (!authData || !authData.employees) {
      alert('Employee data not loaded')
      return
    }

    const employee = authData.employees.find(
      (e) =>
        e.email.trim().toLowerCase() === email.trim().toLowerCase() &&
        e.password === password
    )

    if (employee) {
      setUser('employee')
      setLoggedInUserData(employee)

      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'employee' })
      )
    } else {
      alert('Invalid credentials')
    }
  }

  useEffect(() => {
    setLocalStorage()
  }, )

  // useEffect(() => {
  //   const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
  //   if (loggedInUser) {
  //     setUser(loggedInUser.role)
  //   }
  // }, )

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? (
        <AdminDashboard />
      ) : user === 'employee' ? (
        <EmployeeDashboard data={loggedInUserData} />
      ) : null}
    </>
  )
}

export default App
