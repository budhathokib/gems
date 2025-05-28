import { useParams } from 'next/navigation'
import React from 'react'
import style from '../../styles/home.module.css'

const profiles = () => {
    let params = useParams()
    let username = params?.username
  return (
    <div>
      
        <head>
            <title>Profile/{username}</title>
        </head>
        <h1 className={style.myheading}>Welcome,{username}</h1>
    </div>
  )
}

export default profiles