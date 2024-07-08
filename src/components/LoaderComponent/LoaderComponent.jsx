import React from 'react'
import 'ldrs/lineSpinner'

const LoaderComponent = () => {
  return (
    <div className='flex justify-center items-center'>
          <l-line-spinner size="40" stroke="3" speed="1" color="black"></l-line-spinner>
    </div>

  )
}

export default LoaderComponent

