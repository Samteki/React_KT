import './App.css';
import LifecycleMethods from './components/classComponents/LifecyclePhases';
import { ExUseReducer } from './components/functionComponents/ExUseReducer';
import { FunLifecycle } from './components/functionComponents/FunLifecycle';

function App() {

  return (
    <div className="App">
      <LifecycleMethods />
      {/* <FunLifecycle />
      <ExUseReducer /> */}
    </div>
  );
}

export default App;
