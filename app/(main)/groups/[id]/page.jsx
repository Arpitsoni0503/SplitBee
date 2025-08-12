import React from 'react'

const GroupPage =async ({params}) => {
    const {id} =await params;
  return (
    <div className='mt-50'>page : {id} </div>
  )
}

export default GroupPage