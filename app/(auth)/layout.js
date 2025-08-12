//{children}-> this will change the layout to all the pages

/*
In Next.js (especially with the App Router), if you create a layout.js (or LAYOUT.JS) file inside a folder, it automatically wraps all the pages and subfolders inside that folder.
So, any page like /sign-in/page.js or /sign-up/page.js inside the (auth) folder will be rendered inside your AuthLayout.
The {children} prop is replaced by the content of each page (like your sign-in or sign-up forms).
* */
import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className="flex justify-center pt-40">{children}</div>
  )
}

export default AuthLayout