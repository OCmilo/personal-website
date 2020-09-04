import { FcLock } from 'react-icons/fc'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import styled from 'styled-components'
import DocumentHead from '../containers/DocumentHead'
import Theme from '../contexts/Theme'
import theme from '../config/theme'

const Alert = styled.article`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 5rem;
  justify-content: center;
  align-content: center;
  align-items: center;

  h1 {
    font-size: 50px;
  }
`

const AlertContent = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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

const IndexPage: React.FC = () => (
  <Theme>
    <DocumentHead />
    <VideoContainer>
      <BackVideo autoPlay muted loop>
        <source src="back.mp4" type="video/mp4" />
      </BackVideo>
    </VideoContainer>
    <Alert>
      <FcLock size="200px" />
      <AlertContent>
        <h1>Site in maintenance</h1>
        <a href="https://twitter.com/OCmilo">
          <FaTwitter size="35px" color={theme.colors.primaryColor} />
        </a>
        <a href="https://github.com/OCmilo">
          <FaGithub size="35px" color={theme.colors.primaryColor} />
        </a>
      </AlertContent>
    </Alert>
  </Theme>
)

export { IndexPage as default }
