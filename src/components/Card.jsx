import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"


function Card({ data, referrence }) {

    return (
    <motion.div 
        drag 
        dragConstraints={referrence} 
        whileDrag={{scale:1.1}} 
        // dragElastic={0.2}     //bounces and sticks to the border
        dragTransition={{bounceStiffness: 100, bounceDamping: 30}}
        className='relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'
    >
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-thin'>{data?.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between px-8 py-3 mb-3'>
                <h5>{data?.fileSize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {
                        data && data.close ? <IoClose />
                        :
                        <LuDownload size='.8em' color='#fff'/>
                    }
                </span>
            </div>
            {
                data.tag.isOpen && (
                    <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                        <h3 className='text-sm font-thin hover:font-semibold'>{data.tag.tagTitle}</h3>
                    </div>
                )
            }
        </div>
    </motion.div>
  )
}

export default Card