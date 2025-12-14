import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import RootLayout from '@/layouts/RootLayout';
import StreamRoom from '@/pages/StreamRoom';
import VoiceRoom from '@/pages/VoiceRoom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/stream/:id" element={<StreamRoom />} />
          <Route path="/voice/:id" element={<VoiceRoom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
