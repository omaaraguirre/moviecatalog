import ItemsSlider from './ItemsSlider'
import VideosSlider from './VideosSlider'

const Skeleton = () =>
  <main>
    <div className='bg-dark animate-pulse min-h-[500px] -mt-40 shadow-[inset_0_0_150px_20px_#000,inset_0_0_50px_10px_#000]' />
    <div className='contenedor -mt-36 flex flex-col items-center gap-10'>
      <h1 className='bg-medium/50 rounded-xl animate-pulse h-8 w-[min(70%,500px)]' />
      <p className='bg-medium/40 rounded-xl animate-pulse mx-auto h-3 w-[min(40%,300px)]' />

      <div className='flex justify-center items-center gap-3'>
        <div className='bg-medium/50 rounded-xl animate-pulse h-9 w-16' />
        <div className='bg-medium/50 rounded-xl animate-pulse h-9 w-16' />
        <div className='bg-medium/50 rounded-xl animate-pulse h-9 w-16' />
        <div className='bg-medium/50 rounded-xl animate-pulse h-9 w-16' />
      </div>

      <div className='flex flex-col gap-2 w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl'>
        <p className='bg-medium/40 rounded-xl animate-pulse mx-auto h-3 w-full' />
        <p className='bg-medium/40 rounded-xl animate-pulse mx-auto h-3 w-11/12' />
        <p className='bg-medium/40 rounded-xl animate-pulse mx-auto h-3 w-full' />
        <p className='bg-medium/40 rounded-xl animate-pulse mx-auto h-3 w-11/12' />
        <p className='bg-medium/40 rounded-xl animate-pulse mx-auto h-3 w-full' />
        <p className='bg-medium/40 rounded-xl animate-pulse mx-auto h-3 w-11/12' />
      </div>

      <ItemsSlider />
      <VideosSlider />
      <ItemsSlider />
    </div>
  </main>

export default Skeleton
