'use client'

import ListItemComponent from '@/component/listItemCard'
import { Button, Input } from '@nextui-org/react'
import moment from 'moment'
import React, { FC, useState } from 'react'

type Props = {

}
const nextId = 0;
const page : FC<Props> = () => {
  const [listItem, setListItem] = useState();
  const [items, setItems] = useState([]);
  const date = moment().format("M/D")

  const listItemAdded = () => {
    setItems([
      ...items, listItem //old items will be on the top
    ])
  }  

  return (
    <div className='h-screen w-screen bg-white flex flex-col p-12 md:p-24 gap-y-12 text-black'>
      <div className='flex gap-x-4 items-center'>
        <Input label="What to do...?" id='listItem' onChange={(e)=> setListItem(e.target.value)}/>
        <Button className='bg-black text-white' radius='full' onClick={listItemAdded}>add</Button>
      </div>
      <div className='flex items-end gap-x-2'>
        <h1 className='font-bold text-3xl'>Tasks</h1>
        <p className='font-light text-sm mb-1'>date: {date}</p>
      </div>
      <div>
        <ListItemComponent items={items}/>
      </div>
    </div>
  )
}

export default page