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
    name: 'Trafficking',
    url: '/trafficking/',
  },
  {
    name: 'Indicators',
    url: '/indicators/',
  },
  { name: 'Videos', url: '/media/videos/' },
  {
    name: 'Resources',
    url: '/media/resources/',
    children: [{ name: 'Posters', url: '/media/posters/' }],
  },
  { name: 'Contact', url: '/contact/' },
]
