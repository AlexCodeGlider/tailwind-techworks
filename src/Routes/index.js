import React from "react";
import { Routes, Route } from "react-router-dom";
import CreativeAgency from "../Pages/CreativeAgency"; // Import CreativeAgency
import routes from "./allroute";

const Index = () => {
  return (
    <React.Fragment>
      <Routes>
        {routes.map((route, id) => (
          <React.Fragment key={id}>
            {route.path === '/' ? 
              <Route element={<CreativeAgency />} path={route.path} /> : // Update this line
              <Route element={route.element} path={route.path} />
            }
          </React.Fragment>
        ))}
      </Routes>
    </React.Fragment>
  );
};

export default Index;
