import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Erwin Hayag - Full Stack Web Developer Portfolio',
    short_name: 'Erwin Hayag Portfolio',
    description: 'Experienced Full Stack Web Developer specializing in React, Next.js, and modern web technologies',
    start_url: '/',
    display: 'standalone',
    background_color: '#29335C',
    theme_color: '#05FFC1',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
