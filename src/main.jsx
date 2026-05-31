import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Support from './pages/Support.jsx';
import DownloadPdf from './pages/DownloadPdf.jsx';
import ChapterPage from './pages/ChapterPage.jsx';
import { chapters } from './data/chapters.js';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="support" element={<Support />} />
          <Route path="download-pdf" element={<DownloadPdf />} />
          {chapters.map((chapter) => (
            <Route
              key={chapter.slug}
              path={chapter.slug}
              element={<ChapterPage chapter={chapter} />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
