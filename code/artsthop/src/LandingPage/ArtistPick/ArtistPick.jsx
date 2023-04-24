import React from 'react'
import Button from 'react-bootstrap/Button'
import './ArtistPick.css'
import ArtistCarousel from './ArtistCarousel/ArtistCarousel'
import Test from '../../Parallax/Test'
import Artist from '../../Artist/Artist'

const ArtistPick = () => {
  return (
    <div className='art-container'>
      <label className='card-container subtext'>
        BEAUTIFY YOUR LIVING SPACE
      </label>
      <p className='card-container desctext'>Shop for exquisite art that reflects <br /> your personal style.</p>
      <Test />
      <div className='container-two'>
        <label className='card-container subtext'>
          BEAUTIFY YOUR LIVING SPACE
        </label>
        <p className='card-container desctext'>Shop for exquisite art that reflects <br /> your personal style.</p>
        <div className='card-container art-button'><Button variant="dark">See More</Button></div>
        <div className='card-container caros'><ArtistCarousel /></div>
      </div>
      <Artist />
    </div>
  )
}

export default ArtistPick