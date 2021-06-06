import React, {useState} from 'react'
import {DogImage} from './DogImage.js'

export function Description() {
    const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/bouvier/n02106382_3856.jpg")
    return (
          <div className="random">
            <div>
              <h2 className='outline'>manulですけど写真は犬です</h2>
              <button className='randombutton' onClick={function(){
                fetch("https://dog.ceo/api/breeds/image/random")
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  if(data.status === "success"){
                    const newDogUrl = data.message;
                    setDogUrl(newDogUrl);
                  }
                })}
              }> ランダムに癒される</button>
            </div>      
            <div className="box">
              <DogImage url={dogUrl} />
            </div>
          </div>
    )
}