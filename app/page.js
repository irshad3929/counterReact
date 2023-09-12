"use client"
import React, { useState } from 'react'

const page = () => {
  let [count, setCount] = useState(20)
  let [msg,setMsg] = useState("")

  const addValue = ()=>{
    // console.log("clicked", count)
    if(count<30) {  
    count=count+1
    setCount(count)
    }else{
      setMsg(<h1 className='bg-red-400 text-white'>you can not pass the value more than 30</h1>)

    }
  }

  const removeValue = ()=>{
    if(count>0){
    count = count -1
    setCount(count)
    }else{
      setMsg(<h1 className='bg-green-400 m-8 w-2/3 item-center text-white'>you can not pass negative no</h1>)
    }
  }
  return (
    <> 
    <div className='p-7 bg-slate-200 rounded-xl max-w-lg mx-auto shadow-lg mt-10'>
      <div className='bg-white'>
      <h1 className='bg-pink-500 text-center  p-5  text-white align-bottom text-xl'>Counting Machine </h1>
      <h2 className=' m-5 text-center text-xl font-semibold '>The Count is =  {count}</h2>
      
         {msg}
       
      <button
       onClick={addValue}
       className='bg-green-400 m-5 px-4 py-2 rounded-xl font-bold text-xl text-white '>ADD Value</button>
      <button
      onClick={removeValue}
       className='bg-red-400 m-5 px-4 py-2 rounded-xl font-bold text-xl text-white '>Remove Value</button>
       </div>
    </div>
    </>
  )
}

export default page
