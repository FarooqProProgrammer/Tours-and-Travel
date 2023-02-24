import React, { Children } from 'react'

export default function Button({className,title}) {
  return <button className={className}>{title}</button>
}
