import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserLogin from './loginprocess/UserLogin';
import UserSignUp from './loginprocess/UserSignUp';
import AgentSignUp from './loginprocess/AgentSignUp';
import Homepage from './pages/Homepage';
import './styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Homepage />} />

        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/join-agent" element={<AgentSignUp />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
