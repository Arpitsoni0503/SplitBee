"use client";
//(main)-> meaningof this file is to be used as a layout for the dashboard

import { Authenticated } from 'convex/react';
import React from 'react'

const layout = ({children}) => {
  return (
    <Authenticated>
        <div className='mt-50 '>
            {children}
        </div>
    </Authenticated>
  )
}

export default layout