import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ducimus blanditiis deleniti voluptate ipsam nulla! Laborum nesciunt soluta ad facere.",
      fileSize: "4 mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      fileSize: "0.9 mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "blue",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ipsum.",
      fileSize: "3 mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download now",
        tagColor: "green",
      },
    }
  ]

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
      {
        data.map((ele,index)=>{
          return <Card data={ele} referrence={ref}/>
        })
      }
    </div>
  )
}

export default Foreground