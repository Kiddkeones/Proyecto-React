import './App.css';
import { Usuario } from './components/Usuario';

function App() {
  return (
    <div>
      <Usuario nombre="Alejo" edad={21} nacionalidad="Argentina"/>
    </div>
  );
}

export default App;
