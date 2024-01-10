import { Card, CardBody, CardHeader, Checkbox } from '@nextui-org/react'
import React, { FC } from 'react'

type Props = {
    items: Array<String>,
}

const ListItemComponent : FC<Props> = ({items}) => {

    console.log(items)
    const itemChecked = () => {
        console.log("item checked")
    }

  return (
    <div className='flex flex-col gap-y-2'>
        {items.map((one) => (
        <Card>
            <CardHeader className='flex justify-between'>
                <h4>{one}</h4>
                <Checkbox onChange={itemChecked} color='default'/>
            </CardHeader>
        </Card>
        ))}
    </div>
  )
}

export default ListItemComponent