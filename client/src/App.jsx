import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard/> } />
          <Route path="/" element={<Landing/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function AppBar() {
  const navigate = useNavigate();

  return(
  <div>
        <button onClick={() => {navigate("/dashboard")}}>Dashboard</button>
        <button onClick={() => {navigate("/")}}>Landing Page</button>
    </div>
  )
}

export default App
