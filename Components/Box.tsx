import React, { PropsWithChildren } from 'react'

const Box = (props:PropsWithChildren && {img}) => {
    const {img} =props
  return (
    <div  {...props} >Box</div>
  )
}

export default Box