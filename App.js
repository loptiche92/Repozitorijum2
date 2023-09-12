
import './App.css';
import { APIContextProvider } from './contextApi';
import Employees from './employees'
function App() {
  return (
    
      <APIContextProvider>
        <div className='App'>
          <Employees/>
        </div>
      </APIContextProvider>
     
    
  );
}

export default App;
