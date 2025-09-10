import React from 'react'

export const Card = (props) => {
  return (
    <div>
        <h1 className='text-2xl font-bold underline text-center mt-5'>Your Form Data</h1>
        <div className='border-2 border-gray-300 p-5 w-1/3 mx-auto mt-5'>
            <img src={props.props.image} alt="image" className=''/>
            <h2 className='text-xl font-semibold'>Name: {props.props.name}</h2>
            <h2 className='text-xl font-semibold'>Email: {props.props.email}</h2>
            <h2 className='text-xl font-semibold'>Password: {props.props.password}</h2>
        </div>
    </div>
  )
}
