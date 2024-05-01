"use client";
import React from 'react'
import { motion } from "framer-motion"

export  default function page() {
  return (
    <div className='flex flex-col justify-center items-center h-full gap-40'>
        <h1 className=' font-black'>abc </h1>

        
        <motion.div
        
        
        initial={{ opacity: 0, y:15 }}
    animate={{ opacity: 1, y: 0}}
    transition={{ duration: 0.5,delay: 0.0 }}
    whileHover={{ scale: 1.2,  transition: { duration: 0.05 } }}

        >
           <div className='flex  container w-20 h-20 bg-lime-400 items-center justify-center cursor-pointer' >
            <h1 className='text-white text-3xl font-bold '>A</h1>
           </div>
        </motion.div>


        <motion.div
        
        
        initial={{ opacity: 0, y:15 }}

    animate={{ opacity: 1, y: 0}}
    transition={{ duration: 0.5,delay: 0.2 }}

        >
           <div className='flex  container w-20 h-20 bg-lime-400 items-center justify-center cursor-pointer' >
            <h1 className='text-white text-3xl font-bold '>B</h1>
           </div>
        </motion.div>


        <motion.div
        
        
        initial={{ opacity: 0, y:15 }}

    animate={{ opacity: 1, y: 0}}
    transition={{ duration: 0.5,delay: 0.6 }}

        >
           <div className='flex  container w-20 h-20 bg-lime-400 items-center justify-center cursor-pointer' >
            <h1 className='text-white text-3xl font-bold '>C</h1>
           </div>
        </motion.div>



        <motion.div
        
        
        initial={{ opacity: 0, y:15 }}

        whileInView={{ opacity: 1, y: 0}}
    transition={{ duration: 0.5,delay: 0.6 }}

        >
           <div className='flex  container w-20 h-20 bg-lime-400 items-center justify-center cursor-pointer' >
            <h1 className='text-white text-3xl font-bold '>C</h1>
           </div>
        </motion.div>


        <motion.div
        
        
        initial={{ opacity: 0, y:15 }}

        whileInView={{ opacity: 1, y: 0}}
    transition={{ duration: 0.5,delay: 0.6 }}

        >
           <div className='flex  container w-20 h-20 bg-lime-400 items-center justify-center cursor-pointer' >
            <h1 className='text-white text-3xl font-bold '>Z</h1>
           </div>
        </motion.div>

        <motion.div
        
        
        initial={{ opacity: 0, y:15 }}

        whileInView={{ opacity: 1, y: 0}}
    transition={{ duration: 0.5,delay: 0.6 }}
    viewport={{ once: true }}


        >
           <div className='flex  container w-20 h-20 bg-lime-400 items-center justify-center cursor-pointer' >
            <h1 className='text-white text-3xl font-bold '>Y</h1>
           </div>
        </motion.div>

        <motion.div
        
        
        initial={{ opacity: 0, y:15 }}

        whileInView={{ opacity: 1, y: 0}}
    transition={{ duration: 0.5,delay: 0.6 }}
    viewport={{ once: true }}


        >
           <div className='flex  container w-20 h-20 bg-lime-400 items-center justify-center cursor-pointer' >
            <h1 className='text-white text-3xl font-bold '>X</h1>
           </div>
        </motion.div>

        
        
    </div>
  )
}
