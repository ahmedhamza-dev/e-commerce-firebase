import * as React from 'react'

type HelmetProps = {
    title: string,
    children?: React.ReactNode
}
const Helmet = ({title, children}:HelmetProps) => {
    document.title = 'Maltimart - ' + title;
  return (
    <div className='w-100'>{children}</div>
  )
}

export default Helmet