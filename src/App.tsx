import { useState } from 'react';
import './App.css';
import BasicForm from './components/BasicForm';
import AdvancedForm from './components/AdvancedForm';

function App() {
  const [view, setView] = useState('advanced');
  return (
    <div className='App'>
      <nav>
        <h3
          onClick={() => setView('basic')}
          style={{ color: view === 'basic' ? 'black' : '' }}
        >
          Basic
        </h3>
        <h3
          onClick={() => setView('advanced')}
          style={{ color: view === 'advanced' ? 'black' : '' }}
        >
          Advanced
        </h3>
      </nav>
      {view === 'basic' ? <BasicForm /> : <AdvancedForm />}
    </div>
  );
}

export default App;
