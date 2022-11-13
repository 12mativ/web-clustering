import React from 'react';
import './App.css';
import {createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import {CalculatePage} from "./pages/CalculatePage";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {IndexPage} from "./pages/IndexPage";
import {NotFound} from "./pages/404";
import Clusters from "./components/Cluster/Clusters";

function App() {
  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/index" />} />
          <Route path="index" element={<IndexPage />} />
          <Route path="calculate" element={<CalculatePage />} />
          <Route path="clusters" element={<Clusters />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App
