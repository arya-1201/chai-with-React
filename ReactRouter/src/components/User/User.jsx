import React from 'react'
import {useParams} from 'react-router-dom'

const User = () => {
    let {userid}= useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl'>User:{userid}</div>
  )
}

export default User