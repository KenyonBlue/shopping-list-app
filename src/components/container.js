import React, { Children } from 'react'

const AppContainer = ({children}) => {
  return (
    <div className='font-dosis w-full flex justify-center items-center px-4 md:px-12'>
        <div className="app-max-width">
            {children}
        </div>
    </div>
  )
}

export default AppContainer