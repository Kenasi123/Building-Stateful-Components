
import './App.css';
import Counter from './components/Counter'; 



function App() {
  return (
    <div className="App">
      <Counter initialCount={42} /> 
      {/* adds an intial counter prop to the counter file  */}
      <Counter initialCount={-13} />
      <Counter />
    </div>
  );
}

export default App;
