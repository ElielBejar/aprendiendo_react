import { Form } from './components/Form.jsx';
import { MoviesGrid } from './components/MoviesGrid.jsx';
import { useSubmit } from './hooks/useSubmit.jsx';

function App() {

  let [name, submitHandler] = useSubmit();

  return (
    <>
    <Form name={name} submitHandler={submitHandler}></Form>
    <MoviesGrid name={name}></MoviesGrid>
    </>
  )
}

export default App
