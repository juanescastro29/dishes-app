import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ViewDish from './pages/ViewDish'
import CreateDish from './pages/CreateDish';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
        <Route path="/" element={<Home />} />
        <Route path="/createDish" element={<CreateDish />} />
        <Route path="/viewDish" element={<ViewDish />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
