import './styles/global.css'
import './styles/theme.css'
import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';

export default function App() {

  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  )
}
