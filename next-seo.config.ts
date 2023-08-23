import { NextSeoProps } from 'next-seo'

export default {
  titleTemplate: 'News | %s',
  defaultTitle: 'News | News',
  description: 'News pronto para usar em projetos NEXT',
  canonical: 'https://github.com/matheusjean',
  openGraph: {
    title: 'News | News do Matheus Jean',
    type: 'website',
    url: 'https://github.com/matheusjean',
    locale: 'pt_BR',
    site_name: 'Boilerplate',
    description: 'Boilerplate pronto para usar em projetos NEXT',
    images: [
      {
        url: '/img/nextjs-logo.svg',
        alt: 'Boilerplate pronto para usar em projetos NEXT',
        height: 1200,
        width: 630
      }
    ]
  },
  twitter: {
    handle: '@matheusjean',
    site: '@site',
    cardType: 'summary_large_image'
  }
} as NextSeoProps
