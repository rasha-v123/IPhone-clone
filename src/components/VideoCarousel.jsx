import React from 'react'
import { hightlightsSlides } from '../constants'

const VideoCarousel = () => {
  return (
    <>
      <div className='flex flex-center'>
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className='sm:pr-20 pr-10'>
            <div className='video-carousel_container'>test</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default VideoCarousel

