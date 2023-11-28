const HeroImage = ({ imageUrl, person = false }) =>
  <div
    style={{ backgroundImage: `url(${imageUrl})` }}
    className={`bg-center bg-no-repeat bg-cover mx-auto max-w-7xl ${person && 'max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'} min-h-[350px] sm:min-h-[500px] -mt-40 shadow-[inset_0_0_150px_20px_#000,inset_0_0_50px_10px_#000]`}
  />

export default HeroImage
