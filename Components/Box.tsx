import React, { PropsWithChildren } from 'react'

const Box = (props:PropsWithChildren) => {
   return (
    <div  {...props} >Box</div>
  )
}

export default Box