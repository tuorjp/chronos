import { TimerIcon } from 'lucide-react'
import { Heading } from './components/Heading/Heading'
import './styles/global.css'
import './styles/theme.css'

export default function App() {

  return (
    <>
      <Heading>
        TITULO
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsa voluptate, suscipit quia nesciunt fugiat atque illum illo nobis quidem, ullam excepturi enim at error totam libero dignissimos, eius architecto?
      </p>
    </>
  )
}
