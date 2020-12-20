import { useRouter } from 'next/router'
import { GetServerSidePropsContext } from 'next/types'

function RedirectPage() {
  const router = useRouter()
  // Make sure we're in the browser
  if (typeof window !== 'undefined') {
    router.push('/new/url')
  }
}

RedirectPage.getStaticProps = (ctx: GetServerSidePropsContext) => {
  // We check for ctx.res to make sure we're on the server.
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: 'https://catarinaramos.com.br' })
    ctx.res.end()
  }
  return {}
}

export default RedirectPage
