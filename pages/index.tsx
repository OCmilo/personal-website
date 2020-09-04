import { FcLock } from 'react-icons/fc'
import { FaTwitter, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import styled from 'styled-components'
import DocumentHead from '../containers/DocumentHead'
import Theme from '../contexts/Theme'
import theme from '../config/theme'
import general from '../config/general'

const Alert = styled.article`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 4rem;
  justify-content: center;
  align-content: center;
  align-items: center;

  h1 {
    font-size: 5rem;
  }

  @media only screen and (max-width: 50em) {
    grid-template-columns: none;
    justify-items: center;
    row-gap: 2rem;
  }

  @media only screen and (max-width: 31.25em) {
  }
`

const AlertContent = styled.section`
  display: grid;
  grid-template-columns: 1fr max-content max-content 1fr;
  justify-items: center;
  column-gap: 3rem;
  row-gap: 2rem;

  h1 {
    grid-column: 1 / -1;
    margin: 0;
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
`

const iconSize = '3rem'

const IndexPage: React.FC = () => (
  <Theme>
    <DocumentHead />
    <VideoContainer>
      <BackVideo autoPlay muted loop>
        {/* <source src="back.mp4" type="video/mp4" /> */}
        <source src="back.webm" type="video/webm" />
      </BackVideo>
    </VideoContainer>
    <Alert>
      <Logo src="logo.svg" alt="logo" />
      <AlertContent>
        <h1>Site in maintenance</h1>
        <a href={general.twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter size={iconSize} color={theme.colors.tertiaryColor} />
        </a>
        <a href={`mailto:${general.email}`}>
          <FaEnvelope size={iconSize} color={theme.colors.tertiaryColor} />
        </a>
        <a href={general.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={iconSize} color={theme.colors.tertiaryColor} />
        </a>
        <a href={general.github} target="_blank" rel="noopener noreferrer">
          <FaGithub size={iconSize} color={theme.colors.tertiaryColor} />
        </a>
      </AlertContent>
    </Alert>
  </Theme>
)

export { IndexPage as default }
