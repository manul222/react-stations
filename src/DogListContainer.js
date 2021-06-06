import React, {useEffect, useState} from 'react'
import {BreedsSelect} from './BreedsSelect'

export function DogListContainer() {
    const[breeds, setBreeds] = useState({})
    const[dogs, setDogs] = useState([])
        useEffect(() => {
            fetch("https://dog.ceo/api/breeds/list/all")
            .then((res) => res.json())
            .then((data) => {
                if(data.status === "success"){
                    const newbreeds = data.message
                    setBreeds(newbreeds)
                }
            })
        }, [])
    return(
        <>
            <h2 className='des'>犬種を選んでボタンを押すといろんな犬が見れますよ<br /></h2>
            <div className="select">
                <BreedsSelect breeds={breeds} />
                <button className='selectbutton' onClick={function(){
                    fetch("https://dog.ceo/api/breed/hound/images/random/15")
                    .then((res)=>res.json())
                    .then((data) => {
                        if(data.status === "success"){
                            const newdogs = data.message
                            setDogs(newdogs)
                        }
                    })
                }
                }>
                好きな犬に癒される</button>
            </div>
             <div className='selectImgs'>
                {dogs.map(src => <img className='dogImgs' src={src} alt="選んだ犬の画像"></img>)}
            </div>
        </>
    )
}