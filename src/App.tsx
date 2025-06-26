import './styles/global.css'
import './styles/theme.css'
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

export default function App() {

  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
    </>
  )
}
