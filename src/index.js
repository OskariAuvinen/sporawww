import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//styled components
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { styleReset } from 'react95';

// react router
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";



// pick a theme of your choice
import original from "react95/dist/themes/original";
// original Windows95 font (optionally mandatory)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

// NavBar = nav menu -- routing to be added
// import { NavBar } from './Components/AppBar/AppBar.stories';
import { AboutUs } from './Components/AboutUs/AboutUs';
import { Store } from './Components/Store/Store';
import { Gallery } from './Components/Gallery/Gallery';
import { Faq } from './Components/FAQ/Faq';
import { Terms } from './Components/Terms/Terms';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={original}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/store" element={<Store />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
        {/* <App />
        <NavBar /> */}
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
