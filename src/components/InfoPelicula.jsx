import Detail from './Detail'

const InfoPelicula = ({ movieInfo }) => {
  const { title, year, genre, director, writer, actors, plot } = movieInfo

  return (
    <div className='w-full flex flex-col gap-3 text-center text-white px-2 py-4 leading-5'>
      <h4 className='font-bold text-lg md:text-md leading-5'>{title}</h4>
      <Detail data={genre} title='Genre' />
      <Detail data={year} title='Year' />
      <Detail data={plot} title='Synopsis' />
      <Detail data={actors} title='Actors' />
      <Detail data={director} title='Directed by' />
      <Detail data={writer} title='Written by' />
    </div>
  )
}

export default InfoPelicula
