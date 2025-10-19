import { Container, Stack } from '@chakra-ui/react'
import Navbar from './components/NavBar'
import TodoForm from './components/todoForm'
import TodoList from './components/TodoList'
export const BASE_URL = 'http://localhost:5000/api'

function App() {
  return (
    <Stack h="100vh">
      <Navbar />
      <Container>
        <TodoForm />

        <TodoList />
      </Container>
    </Stack>
  )
}

export default App
