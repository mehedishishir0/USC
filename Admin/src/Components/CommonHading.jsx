import React from 'react'

const CommonHading = ({ text }) => {
    return (
        <div className='border-b-2 shadow-lg w-full'>
            <div className='h-12'>
                <h1 className='text-center font-semibold text-2xl text-orange-500'>{text}</h1>
            </div>
            <div>
            </div>
        </div>
    )
}

export default CommonHading