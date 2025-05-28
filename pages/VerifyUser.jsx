import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { verifyEmail } from './api/userAPI'

const VerifyUser = () => {
    let params = useParams()
    let token = params.token
    let[error,setError] = useState(' ')
    let[success, setSuccess] = useState(false)

        useEffect(()=>{
            verifyEmail(token)
            .then(data=>{
                if(data.error){
                    setError(data.error)
                }else{
                    setSuccess(true)
                }
            })
        },[])
   const showError = () =>{
    if(error){
        return <div className='bg-red-400 text-3xl text-center'>{error}</div>
    }
   }

   const showSuccess = () =>{
    if(success){
        return <div className='bg-green-400 text-3xl text-center'>User Verified Successfully</div> 
    }
   }
  return (
    <>
    {showError()}
    {showError()}
    </>
  )
}

export default VerifyUser