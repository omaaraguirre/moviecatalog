// import { IconBrandYoutubeFilled } from '@tabler/icons-react'

const Video = ({ video }) => {
  const { name, thumbnail, url, embed } = video

  return (
    <iframe
      src={embed}
      title={name}
      loading='lazy'
      className='w-full aspect-video'
    />
    // <a
    //   style={{ backgroundImage: `url(${thumbnail})` }}
    //   className='block relative aspect-video bg-cover bg-center bg-no-repeat p-4 font-bold font-comforta text-primary hover:text-secondary transition-colors duration-300'
    //   href={url}
    //   target='_blank'
    //   rel='noreferrer'
    // >
    //   <p className='md:text-lg text-lighter text-shadow'>{name}</p>
    //   <IconBrandYoutubeFilled className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-16 md:w-16 md:h-16' />
    // </a>
    // )
  )
}

export default Video
