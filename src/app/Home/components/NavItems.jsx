import Link from 'next/link'
import React from 'react'

export default function NavItems(props) {
  return (
    <div>
        {/* <Link href={props.itemLink}> */}
        <div>
            {props.itemName}
        </div>
        {/* </Link> */}
    </div>
  )
}
