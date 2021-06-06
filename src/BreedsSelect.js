import React from 'react'
import {DogListContainer} from './DogListContainer'

export function BreedsSelect(props) {
    const lists = props.breeds
    const listoptions = Object.keys(lists)
    return (
        <select className='select'>
            {listoptions.map(key => <option value={key}>{key}</option>)}
        </select>
    )
}