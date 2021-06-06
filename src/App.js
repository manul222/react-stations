import React, {useState} from 'react'
import './App.css'
import {Header} from './Header'
import {Description} from './Description'
import {DogListContainer} from './DogListContainer'

/**
 * 
 * @type {React.FC}
 */

export function App() {

  return (
  <>
    <Header />
    <body>
      <Description />
      <DogListContainer />
    </body>
  </>
  )
}