import React, { FormEvent } from 'react'
import { FormGroup, TextField } from "@mui/material"
import { Stack } from '@mui/system'
import { Link } from 'react-router-dom'

const SignIn = () => {
  document.title = "KeyStone | Sign In"

  const signinSubmitHandler = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className='tw-w-full tw-min-h-screen tw-grid tw-place-items-center'>
      <div className='tw-w-10/12 md:tw-w-1/2 lg:tw-w-2/3 xl:tw-w-2/5 tw-bg-slate-100 tw-border tw-border-slate-300 tw-mx-auto tw-rounded-md tw-shadow-xl tw-shadow-slate-300 tw-flex tw-flex-col lg:tw-flex-row'>
        <div className='tw-w-1/2'>image</div>
        <div className='tw-p-4 tw-w-1/2'>
          <h6 className='tw-text-2xl tw-mb-0' >Sign In</h6>
          <form className='tw-my-4' onSubmit={signinSubmitHandler}>
            <FormGroup>
              <Stack direction={"column"} >
                <>
                  <label htmlFor='email'>Email</label>
                  <TextField name='email' id='email' type={"email"} variant={"outlined"} size={"small"} />
                </>
                <>
                  <label htmlFor='password' className='tw-mt-3'>Password</label>
                  <TextField name='password' id='password' type={"password"} variant={"outlined"} size={"small"} />
                </>
              </Stack>
            </FormGroup>
            <div className='tw-flex tw-justify-between tw-items-center tw-text-sm'> 
              <Link className='tw-text-black tw-font-medium tw-no-underline hover:tw-underline hover:tw-underline-offset-1 hover:tw-duration-200' to={"/forgotpassword"}>Forgot Password</Link>
              <p className='tw-mb-0'>Don't have an account <Link className='tw-text-black tw-font-medium tw-no-underline hover:tw-underline hover:tw-underline-offset-1 hover:tw-duration-200' to={"/signup"}>Signup Here !</Link></p>
            </div>
            <div className='tw-w-full tw-flex tw-justify-end tw-items-center tw-mt-3' >
              <button className='tw-bg-blue-600 tw-px-3 tw-py-1 tw-rounded tw-text-white hover:tw-bg-blue-500' type='submit' >Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn