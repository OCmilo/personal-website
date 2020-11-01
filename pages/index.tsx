import { useRouter } from 'next/router'
import Link from 'next/link'
import { FaTwitter, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import styled, { keyframes, css } from 'styled-components'
import DocumentHead from '../containers/DocumentHead'
import Theme from '../contexts/Theme'
import theme from '../config/theme'
import siteMetadata from '../config/siteMetadata'

const iconSize = '3rem'

const translateFromLeft = keyframes`
  from {
    transform: translateX(-20vw);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const translateFromRight = keyframes`
  from {
    transform: translateX(20vw);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const AlertContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`

const Alert = styled.article`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 4rem;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media only screen and (max-width: 50em) {
    grid-template-columns: none;
    justify-items: center;
    row-gap: 2rem;
  }
`

const AlertContent = styled.section`
  display: grid;
  grid-template-columns: 1fr max-content max-content 1fr;
  justify-items: center;
  column-gap: 3rem;
  row-gap: 2rem;
  position: relative;
  animation: ${translateFromRight} 1.5s cubic-bezier(0.26, 0.18, 0.23, 1.23);
  will-change: transform, opacity;
  backface-visibility: hidden;

  h1 {
    grid-column: 1 / -1;
    margin: 0;
    font-size: 5rem;
  }

  a {
    transition: all 0.2s;

    &:hover {
      transform: translateY(-3px) scale(1.05);
    }
  }

  a:first-of-type {
    justify-self: end;
  }

  a:last-of-type {
    justify-self: start;
  }
`

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.15;
`

const BackVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(4px) grayscale(0.7);
`

const Logo = styled.img`
  width: 20rem;
  animation: ${translateFromLeft} 1.5s cubic-bezier(0.26, 0.18, 0.23, 1.23);
  will-change: transform, opacity;
  backface-visibility: hidden;
`

const LocaleDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
  z-index: 2;
  position: relative;
`

const LocaleLink = styled.a<{ isDefaultLocale: boolean }>`
  &:link,
  &:visited {
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.xl};
    text-decoration: none;
    padding: 0 0.5rem;

    ${({ isDefaultLocale }) =>
      isDefaultLocale &&
      css`
        font-weight: bold;
      `}
  }
`

const IndexPage: React.FC = () => {
  const { locale } = useRouter()

  return (
    <Theme>
      <DocumentHead />
      <main>
        <VideoContainer>
          <BackVideo autoPlay muted loop>
            <source src="back.mp4" type="video/mp4" />
            <source src="back.webm" type="video/webm" />
          </BackVideo>
        </VideoContainer>
        <LocaleDiv>
          <Link href="/" locale="en" passHref>
            <LocaleLink isDefaultLocale={locale === 'en'}>En</LocaleLink>
          </Link>
          <span>/</span>
          <Link href="/" locale="pt" passHref>
            <LocaleLink isDefaultLocale={locale === 'pt'}>Pt</LocaleLink>
          </Link>
        </LocaleDiv>
        <AlertContainer>
          <Alert>
            <Logo src="logo.svg" alt="logo" />
            <AlertContent>
              <h1>
                {locale === 'en' ? ' Under Construction' : 'Em construção'}
              </h1>
              <a
                href={siteMetadata.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter
                  size={iconSize}
                  color={theme.colors.secondaryColor}
                />
              </a>
              <a aria-label="E-Mail" href={`mailto:${siteMetadata.email}`}>
                <FaEnvelope
                  size={iconSize}
                  color={theme.colors.secondaryColor}
                />
              </a>
              <a
                href={siteMetadata.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin
                  size={iconSize}
                  color={theme.colors.secondaryColor}
                />
              </a>
              <a
                href={siteMetadata.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaGithub size={iconSize} color={theme.colors.secondaryColor} />
              </a>
            </AlertContent>
          </Alert>
        </AlertContainer>
      </main>
    </Theme>
  )
}

export { IndexPage as default }
