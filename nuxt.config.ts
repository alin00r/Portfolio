export default defineNuxtConfig({
  css: ['../assets/styles.css'],
  app: {
    head: {
      title: 'Portofolio Alvigo',
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;700&display=swap' }
      ]
    }
  },
})
