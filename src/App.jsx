
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>

      </Route>
    )
  );

  return (
    <RouterProvider
    router={router}
  />
  )
}

export default App
