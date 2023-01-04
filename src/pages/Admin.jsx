import React, { useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import AdminComponent from '../components/AdminComponent'

export default function Admin() {


  const [isLogin, setLogin] = React.useState(false)
  const [isLoading, setLoading] = React.useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setLogin(true)
    }
    setLoading(false)
  }, [])


  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!isLogin) return <LoginForm onLogin={setLogin} />

  return (
    <AdminComponent />
  )
}
