import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../redux/features/counterSlice'
import { Button } from 'antd'
import { logout } from '../../redux/features/userSlice'

function Test() {
  const user = useSelector((store) => store.user)
  const dispatch = useDispatch()
  return (
  <div>
            {user == null ? (
                <>
                    <Button>Login</Button>
                </>
            ) : (
                <div>
                <h1>Welcome {user?.email}</h1>
                <label htmlFor=''>Phone: {user?.phone}</label>
                <br/>
                <label htmlFor=''>Username: {user?.username}</label>
                <Button onClick={() => dispatch(logout())}>Logout</Button>
                </div>
            )}
  </div>
  )
}

export default Test