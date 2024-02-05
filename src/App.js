import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components//Layout/Layout';
import About from './Components/About/About';
import Portofolio from './Components/Portofolio/Portofolio';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#1abc9c',
    }
  },
});

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'portofolio',
        element: <Portofolio />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <NotFound />,
      }
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routers}></RouterProvider>;
    </ThemeProvider>
  );
}

export default App;
