import {
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import {
  Bridge, 
  Layout, 
  Home, 
  Error, 
  Blog
} from '../components';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="blog" element={<Blog />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App
