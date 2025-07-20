import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Update from './views/Update';
import Detail from './views/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/:id/edit" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;