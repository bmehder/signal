export default [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'About',
    url: '/about/',
  },
  {
    name: 'Award',
    url: '/award/',
  },
  {
    name: 'Trafficking',
    url: '/trafficking/',
  },
  {
    name: 'Indicators',
    url: '/indicators/',
  },
  {
    name: 'Media',
    url: '/media/',
    children: [
      { name: 'Videos', url: '/media/videos/' },
      { name: 'Poster', url: '/media/poster/' },
      { name: 'Resources', url: '/media/resources/' },
    ],
  },
]
