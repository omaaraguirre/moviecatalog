import { memo } from 'react'
import Slider from 'react-slick'
import Video from './Video'

const VideosSlider = ({ videos }) =>
  <Slider swipeToSlide lazyLoad className='w-[min(90%,800px)] mx-auto my-10 aspect-video'>
    {
      videos
        ? videos?.map(video => <Video key={video.id} video={video} />)
        : <div className='bg-dark animate-pulse aspect-video rounded-lg' />
    }
  </Slider>

export default memo(VideosSlider)
