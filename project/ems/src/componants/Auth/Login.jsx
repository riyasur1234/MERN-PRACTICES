import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
      <div className='border border-emerald-500/30 rounded-2xl px-10 py-12 w-full max-w-md bg-gray-800/50 backdrop-blur-sm shadow-2xl shadow-emerald-500/10'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-white mb-2'>Welcome Back</h1>
          <p className='text-gray-400'>Sign in to your account</p>
        </div>

        <form
          onSubmit={submitHandler}
          className='flex flex-col gap-5'
        >
          <div className='space-y-2'>
            <label className='text-sm text-gray-300 font-medium'>Email Address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='w-full px-4 py-3 text-white bg-gray-900/50 border border-gray-600 rounded-xl outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 placeholder:text-gray-500'
              type='email'
              placeholder='Enter your email'
              autoComplete='email'
            />
          </div>

          <div className='space-y-2'>
            <label className='text-sm text-gray-300 font-medium'>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='w-full px-4 py-3 text-white bg-gray-900/50 border border-gray-600 rounded-xl outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 placeholder:text-gray-500'
              type='password'
              placeholder='Enter your password'
              autoComplete='current-password'
            />
          </div>

          <button
            type='submit'
            className='w-full py-3 px-5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 mt-4'
          >
            Sign In
          </button>
        </form>

        <div className='mt-6 text-center'>
          <p className='text-gray-500 text-sm'>
            Demo credentials: admin@me.com / 123
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
