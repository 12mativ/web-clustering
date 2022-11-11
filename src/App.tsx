import React from 'react';
import './App.css';
import {createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import {ClustersPage} from "./pages/ClustersPage";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {IndexPage} from "./pages/IndexPage";

function App() {
  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/index" />} />
          <Route path="index" element={<IndexPage />} />
          <Route path="clusters" element={<ClustersPage />} />
        </Routes>
      </BrowserRouter>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App
