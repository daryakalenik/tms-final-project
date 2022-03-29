import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./auth/context/AuthContextProvider";

import { SignUp } from "./components/auth/SignUp";
import { SignIn } from "./components/auth/SignIn";

import { Home } from "./components/Home/Home";
import { NavBar } from "./components/NavBar";
import { PrivateRoute } from "./components/PrivateRoute";

import { Civilizations } from "./components/Civilizations/Civilizations";
import { CivilizationDetails } from "./components/Civilizations/CivilizationDetails/CivilizationDetails";

import { Units } from "./components/Units/Units";
import { UnitsDetails } from "./components/Units/UnitsDetails/UnitsDetails";

import { Structures } from "./components/Structures/Structures";
import { StructuresDetails } from "./components/Structures/StructuresDetails/StructuresDetails";

import { Technologies } from "./components/Technologies/Technologies";
import { TechnologiesDetails } from "./components/Technologies/TechnologiesDetails/TechnologiesDetails";

import "./App.css";

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<PrivateRoute component={Home} />} />
          <Route
            path="/civilizations"
            element={<PrivateRoute component={Civilizations} />}
          />
          <Route
            path="/civilizations/:id"
            element={<PrivateRoute component={CivilizationDetails} />}
          />
          <Route path="/units" element={<PrivateRoute component={Units} />} />
          <Route
            path="/units/:id"
            element={<PrivateRoute component={UnitsDetails} />}
          />
          <Route
            path="/structures"
            element={<PrivateRoute component={Structures} />}
          />
          <Route
            path="/structures/:id"
            element={<PrivateRoute component={StructuresDetails} />}
          />
          <Route
            path="/technologies"
            element={<PrivateRoute component={Technologies} />}
          />
          <Route
            path="/technologies/:id"
            element={<PrivateRoute component={TechnologiesDetails} />}
          />
        </Routes>
      </div>
    </AuthContextProvider>
  );
};

export default App;
