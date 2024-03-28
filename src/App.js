import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from "./utils/store"
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
/**
 * Head
 * Body
 *  -Sidebar
 *    MenuItems
 *  -MainContainer
 *    Buttons List
 *   -VideoContainer
 *      VideoCards
 * 
 */

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
                <Header />
                <Body />
             </>,
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: '/watch',
        element: <WatchPage />
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
