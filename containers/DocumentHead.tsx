import Head from 'next/head'
import general from '../config/general'

interface DocumentHeadProps {
  subtitle?: string
}

const DocumentHead: React.FC<DocumentHeadProps> = ({ subtitle = '' }) => (
  <Head>
    <title>{`${general.siteTitle} ${subtitle && '/'} ${subtitle}`}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content={general.siteDescription} />
    <meta name="robots" content="index, follow" />
    <meta
      property="og:title"
      content={`${general.siteTitle} ${subtitle && '/'} ${subtitle}`}
    />
    <meta property="og:site_name" content="Camilo Carneiro" />
    <meta property="og:description" content={general.siteDescription} />
    <meta property="og:image" content="https://cami.dev/ogimage.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link
      href="https://fonts.googleapis.com/css2?family=B612:ital,wght@0,400;0,700;1,400;1,700&display=swap"
      rel="stylesheet"
    />
  </Head>
)

export { DocumentHead as default }
