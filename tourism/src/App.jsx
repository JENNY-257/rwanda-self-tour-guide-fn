import React from 'react';
import LandingPage from './pages/LandingPage';
import { Route, createBrowserRouter,
         createRoutesFromElements,
         RouterProvider } 
         from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LandingPage />}>
      {/* <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} /> */}
    </Route>
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;

