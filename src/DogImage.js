import React, {useState} from 'react'

export function DogImage(props) {
    return <img className='dogimg' src={props.url} alt="ランダムな犬の画像"></img>
}