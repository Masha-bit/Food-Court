import React from 'react'
import {FiHeart} from 'react-icons/fi'

export default function LikeButton(props) {
  return (
    <div>
        <button>
            <FiHeart size={props.Size} style={props.Style}/>
        </button>
    </div>
  )
}
