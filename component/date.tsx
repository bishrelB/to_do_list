'use client'
import { Button } from '@nextui-org/react'
import moment from 'moment';
import Link from 'next/link';
import React, { FC } from 'react'

type Props = {
  link: string,
  btnText: string
}

const DateComponent : FC<Props> = ({link, btnText}) => {

  const date = moment().format('MMM Do YYYY')
  console.log(date);

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <div className='text-xl'>Date: {date}</div>
      <Link href={link}>
        <Button radius='full' className='bg-white font-semibold text-md'>{btnText}</Button>
      </Link>
    </div>
  )
}

export default DateComponent