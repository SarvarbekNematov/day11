import React from 'react'
import { useFetch } from '../components/Hooks/useFetch'

export const About = () => {
    const aboutList = useFetch("https://fakestoreapi.com/products")
  return (
    <>
        <div className='grid grid-cols-4 gap-[20px] p-[30px]'>
            {aboutList.map((item) => (
                <div className='rounded-lg border-2' key={item.id}>
                    <img className='w-[200px] h-[200px] mx-auto mt-[20px]' src={item.image} alt="img" height={200} width={200} />
                    <h2 className='font-bold text-[15px] text-center mt-[20px] mb-[20px]'>{item.title}</h2> 
                    <strong className=' ml-[20px] '>price:  {item.price} $</strong>
                    <div className='flex items-center justify-between mx-[20px] mt-[10px] mb-[20px]'>
                        <p className=''>rate: {item.rating.rate}</p>
                        <p className=''>count {item.rating.count}</p>
                    </div>
                </div>
            ))}
        </div>
    </>
)
}
