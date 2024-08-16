import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../components/Hooks/useFetch'

export const Home = () => {
    const HomeList = useFetch("https://fakestoreapi.com/users")

  return (
    <>
    <div className='grid grid-cols-4 mt-[40px] container p-[20px] gap-[20px]'>
        {HomeList.map((item) => (
            <div className=' border-2 pl-[15px] pt-[10px] pr-[15px] pb-[20px]' key={item.id}>
                <strong className='flex justify-center mb-[10px]'>{item.username}</strong>
                <h4>name: {item.name.firstname}</h4>
                <p className='mt-[9px]'>surname: {item.name.lastname}</p>
                <p className='mt-[9px]'>phone: {item.phone}</p>
                <p className='mt-[9px]'>email: {item.email}</p>
                <div className='flex items-center justify-between mt-[10px]'>
                    <p className=''>city: {item.address.city}</p>
                    <p className=''>street: {item.address.street}</p>
                </div>
            </div>
        ))}

    </div>
    </>
)
}
