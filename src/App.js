import Landing from './pages/Landing';
import styled from 'styled-components';

const Button = styled.button`
  background-color: red;
  color: white;
  font-size: 2rem;
`;
const SecondButton = styled.button`
  background-color: Blue;
  color: white;
  font-size: 3rem;
`;
function App() {
  return (
    <div>
      <Button>Click Me</Button>
      <SecondButton>Click Me</SecondButton>
      <Landing />
    </div>
  );
}

export default App;
