import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Error from "../pages/Error";
import { privateRoutes, publicRoutes } from "../router/routes";

const AppRouter = () => {
  const isAuthorised = true;
  return isAuthorised ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          element={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Navigate replace to="/posts" />} />
      <Route path="/login" element={<Navigate replace to="/posts" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          element={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
