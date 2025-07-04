"use client";
import {CarProps } from '@types';
import Image from 'next/image';
import { useState } from 'react';
import CustomFilter from './CustomFilter';
import { calculateCarRent, generateCarImageUrl } from '@utils';
import { CustomButton } from '@components';
import CarDetails from './CarDetails';

interface CarCardProps {
  car: CarProps;}

const CarCard = ({ car }:CarCardProps )=> {
  const{cylinders, year, make, model, transmission, drive} = car;
  
  const [isOpen, setIsOpen] = useState(false);
  
  const carRent = calculateCarRent(cylinders, year);

  return (
    <div className="transition cursor-pointer car-card group dark:bg-gray-400 dark:text-black hover:bg-gray-400 dark:hover:bg-gray-300">

      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className='flex mt-6 text-[32x] leading-[38px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
        {carRent}
        <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
      </p>

      <div className='relative object-contain w-full h-40 my-3'>
        <Image src={generateCarImageUrl(car)} alt='car model' fill priority className='object-contain' />
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex justify-between w-full group-hover:invisible text-grey-800 '>
          <div className='flex flex-col items-center justify-center gap-2'>
            <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
            <p className='text-[14px] leading-[17px]'>
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="car-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{drive.toUpperCase()}</p>
          </div>
          <div className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text"> MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  )
}

export default CarCard
