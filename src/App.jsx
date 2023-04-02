import './App.css';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import MyAppBar from './Components/MyAppBar';

function App() {
  return (
    <Router>
      <MyAppBar />
      <Routes>
        <Route path="/" element={<div />} />
      </Routes>
    </Router>
  );
}

export default App;
