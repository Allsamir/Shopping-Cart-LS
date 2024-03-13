import React from 'react'

interface ChildProps {
          heading: string
}

const Heading: React.FC<ChildProps> = ({heading}) => {
  return (
    <h1 className="text-4xl text-center my-8 text-black text-bold">{heading}</h1>
  )
}

export default Heading