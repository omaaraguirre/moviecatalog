import Slider from 'react-slick'
import { sliderSettings } from '../config/config'
import Item from './Item'

const ItemsSlider = ({ items, label, section }) => {
  sliderSettings.rows = items?.length <= 8 ? 1 : 2

  return (
    <section className='contenedor text-primary my-5'>
      <h3 className='mb-2 font-comforta text-light'>{label}</h3>
      <Slider {...sliderSettings} className='mx-5'>
        {
          items
            ? items?.map(item =>
              <Item key={item.id} item={item} section={section} />
            )
            : Array.from({ length: 12 }).map((_, index) =>
              <div key={index} className='bg-dark animate-pulse aspect-[2/3] rounded-lg' />
            )
        }
      </Slider>
    </section>
  )
}

export default ItemsSlider
