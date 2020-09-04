import { FcHighPriority } from 'react-icons/fc'
import DocumentHead from '../containers/DocumentHead'
import Theme from '../contexts/Theme'

const IndexPage: React.FC = () => (
  <Theme>
    <DocumentHead />
    <h1>Hello World!</h1>
    <FcHighPriority size="500px" />
  </Theme>
)

export { IndexPage as default }
