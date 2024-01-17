import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

function Home() {
    return (
        <div>
            <div className='relative w-full h-screen bg-zinc-800'>
                <Background />
                <Foreground />
            </div>
        </div>
    )
}

export default Home