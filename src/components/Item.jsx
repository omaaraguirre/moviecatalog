import { Link } from 'react-router-dom'

const Item = ({ item, section }) =>
  <Link to={`/${section}/${item.id}`} className='relative'>
    <img
      src={item.poster || item.profile_path}
      alt={item.title || item.name}
      className={`object-cover rounded-lg border-2 border-transparent hover:border-primary transition-colors duration-300 max-h-60 w-auto aspect-[2/3] ${section === 'people' && 'md:aspect-[3/4]'}`}
    />
    {
        section === 'people' && (
          <div className='absolute bottom-0 w-full p-2 bg-darker/50 backdrop-blur-md rounded-md text-center font-comforta whitespace-nowrap'>
            <p className='truncate text-shadow text-lighter text-sm font-bold'>{item.name}</p>
            <p className='truncate text-shadow text-light text-xs'>{item.character}</p>
          </div>
        )
      }
  </Link>

export default Item
