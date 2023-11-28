export const API_KEY = import.meta.env.VITE_API_KEY
export const LANGUAGE = 'es-MX' // 'en-EU'

export const reqOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

export const navLinks = [
  { label: 'Movies', path: '/movies' },
  { label: 'TV Shows', path: '/tvshows' },
  { label: 'People', path: '/people' },
  { label: 'Search', path: '/search' }
]

export const sliderSettings = {
  swipeToSlide: true,
  infinite: false,
  // centerMode: true,
  slidesToShow: 6,
  lazyLoad: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 460,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1
      }
    }
  ]
}
