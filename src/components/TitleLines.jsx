const TitleLines = ({ title, tagline }) =>
  <>
    <h1 className='clamp-title font-orbitron font-bold text-center text-white text-shadow'>{title}</h1>
    <p className='text-light text-center text-lg text-shadow'>{tagline}</p>
  </>

export default TitleLines
