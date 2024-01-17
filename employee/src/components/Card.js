import { CgProfile } from "react-icons/cg";
import { FaSquarePhone } from "react-icons/fa6";
import { VscVmRunning, VscVmOutline } from "react-icons/vsc";


import { motion } from "framer-motion"


function Card({ data, referrence }) {

    return (
        <motion.div
            drag
            dragConstraints={referrence}
            whileDrag={{ scale: 1.1 }}
            // dragElastic={0.2}     //bounces and sticks to the border
            dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
            className='relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'
        >
            <div style={{ marginTop: '-15%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CgProfile />{data?.name}</div>
            <div className='footer absolute bottom-0 w-full left-0 bg-zinc-600/30'>
                {/* <p className='text-sm leading-tight mt-5 font-thin'>Email</p> */}
                <div className='flex items-center justify-center px-8 py-3 mb-3'>
                    <h5>{
                        data?.active ? <VscVmRunning />
                            :
                            <VscVmOutline />
                    }</h5>
                    <span>
                        {data?.email}
                    </span>
                </div>
                {
                    data?.phone && (
                        <div className={`tag w-full py-4 bg-green-600 flex items-center justify-center`} style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                            <FaSquarePhone /><h3 className='text-sm font-thin hover:font-semibold'>{data?.phone}</h3>
                        </div>
                    )
                }
            </div>
        </motion.div>
    )
}

export default Card