import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import MainRootLayout from "./layout/MainRootLayout";
import Shop from "./pages/shop/Shop";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainRootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path= "/shop" element={<Shop />}/>

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
