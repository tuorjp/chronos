import './styles/global.css'
import './styles/theme.css'
import { Container } from './components/Container/Container';
import { Heading } from './components/Heading/Heading';

export default function App() {

  return (
    <>
      <Container>
        <Heading>Logo</Heading>
      </Container>
      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  )
}
