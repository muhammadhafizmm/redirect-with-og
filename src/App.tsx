import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter, Route, Routes } from "react-router-dom";
import ReferralPage from "./pages/Referral";
import HomePage from "./pages/Home";

function App() {
  return (
    <ChakraProvider>
      <HashRouter basename="/app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/referral" element={<ReferralPage />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
