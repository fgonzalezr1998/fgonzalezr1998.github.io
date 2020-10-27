import logo from './logo.svg';
import './App.css';
import LeftHeader from "./components/LeftHeader"
import MainContent from "./components/MainContent.js"

function App() {
  return (
    <div className="App">
      <LeftHeader />
      <MainContent />
    </div>
  );
}

export default App;
