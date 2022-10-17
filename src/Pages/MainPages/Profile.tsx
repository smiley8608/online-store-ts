import { EditFilled } from '@ant-design/icons'
import { message } from 'antd'
import axios from 'axios'
import React, { FormEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppState } from '../../Redux/Hook'

const Profile = () => {
  const user = useAppState(state => state.user.user)
  const auth = useAppState(state => state.user.auth)
  const [data, setData] = useState<any>()
  const [editmode, setEditmode] = useState(false)
  useEffect(() => {
    setData({
      username: user?.username,
      lname: user?.lname,
      fname: user?.fname,
      email: user?.email,
      phonenumber: user?.phonenumber
    })
  }, [user])

  if (!auth) {
    return (
      <div className="container wow fadeIn">
        <Link to={"/signin"}><h2>Sign in to view Profile</h2></Link>
      </div>
    )
  }

  localStorage.removeItem("entryurl")

  const updateProfileHandler = (e: FormEvent) => {
    e.preventDefault()
    axios.post("/user/updateuser", { ...data, phonenumber: String(data.phonenumber) })
      .then(response => {
        message.success(response.data.message)
        window.location.reload()
      })
      .catch(err => {
        message.error(err.response.data.message)
      })
  }

  return (
    <>
      <div className='tw-w-1/2 tw-flex tw-items-center tw-justify-between'>
        <h1 className='tw-text-xl'>Profile</h1>
        <div className='tw-px-4 tw-py-2 tw-flex tw-items-center tw-rounded-full tw-cursor-pointer' style={{ backgroundColor: editmode ? "rgb(20 184 166)" : "rgb(251 191 36)" }} onClick={() => setEditmode(!editmode)}>
          <EditFilled className='tw-pt-0' />
        </div>
      </div>
      <form className='tw-py-3 tw-w-full' onSubmit={updateProfileHandler}>
        <div className='tw-w-1/2 tw-mt-3'>
          <h3 className='tw-text-lg'>Username</h3>
          <input className='tw-p-1.5 tw-rounded-full tw-w-1/2 tw-px-3' readOnly={editmode ? false : true} value={editmode ? data?.username : user?.username} onChange={e => setData({ ...data, username: e.target.value })} />
        </div>
        <div className='tw-flex tw-gap-x-3 tw-w-1/2'>
          <div className='tw-w-full tw-mt-3'>
            <h3 className='tw-text-lg'>Firstname</h3>
            <input className='tw-p-1.5 tw-rounded-full tw-w-full tw-px-3' readOnly={editmode ? false : true} value={editmode ? data?.fname : user?.fname} onChange={e => setData({ ...data, fname: e.target.value })} />
          </div>
          <div className='tw-w-full tw-mt-3'>
            <h3 className='tw-text-lg'>Lastname</h3>
            <input className='tw-p-1.5 tw-rounded-full tw-w-full tw-px-3' readOnly={editmode ? false : true} value={editmode ? data?.lname : user?.lname} onChange={e => setData({ ...data, lname: e.target.value })} />
          </div>
        </div>
        <div className='tw-w-1/2 tw-mt-3'>
          <h3 className='tw-text-lg'>Email</h3>
          <input className='tw-p-1.5 tw-rounded-full tw-w-1/2 tw-px-3' readOnly={editmode ? false : true} value={editmode ? data?.email : user?.email} onChange={e => setData({ ...data, email: e.target.value })} />
        </div>
        <div className='tw-w-1/2 tw-mt-3'>
          <h3 className='tw-text-lg'>Phone Number</h3>
          <input className='tw-p-1.5 tw-rounded-full tw-w-1/2 tw-px-3' readOnly={editmode ? false : true} value={editmode ? data?.phonenumber : user?.phonenumber} onChange={e => setData({ ...data, phonenumber: e.target.value })} />
        </div>
        {editmode && <button className='tw-px-3 tw-py-1.5 tw-bg-teal-500 tw-rounded-md tw-shadow-lg tw-shadow-gray-400 tw-text-white tw-mt-3'>Update</button>}
      </form>
    </>
  )
}

export default Profile