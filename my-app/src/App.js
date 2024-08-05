import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Demo from "./Components/Demo";
import Redirect from "./Components/Redirect";
import Ref from "./Components/UseRef";
import UseReducercomponent from "./Components/UseReducer";
import Debug from "./Components/UseDebug";
import MyComponent from "./Uselayout";
import AuthProvider from "./Components/ContextApi";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/redirect" element={<Redirect />} />
          <Route path="/ref" element={<Ref />} />
          <Route path="/debug" element={<Debug />} />
          <Routes
            path="/useReducercomponent"
            element={<UseReducercomponent />}
          />
          <Route path="/MyComponent" element={<MyComponent />} />
          <Route path="/Authprovider" element={<AuthProvider />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
