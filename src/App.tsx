import { BrowserRouter, Route, Routes } from "react-router-dom";

import { TopPage } from "./pages/Top";
import { Breath } from "./pages/breath";
import { Heart } from "./pages/heart";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/breath" element={<Breath />} />
        <Route path="/heart" element={<Heart />} />
      </Routes>
    </BrowserRouter>
  );
};
