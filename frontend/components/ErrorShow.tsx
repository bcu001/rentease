import React from 'react'

type ErrorProps = {
    message:string;
}

const ErrorShow = (props:ErrorProps) => {
  return (
    <div className='text-red-500'>
      {props.message}
    </div>
  )
}

export default ErrorShow
