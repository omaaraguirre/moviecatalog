const Plot = ({ plot }) =>
  <p className={`mt-10 p-2 ${plot && 'bg-light/20'} backdrop-blur-sm rounded-xl text-light text-center max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl`}>{plot}</p>

export default Plot
