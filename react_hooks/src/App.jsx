import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UseRef from "./components/UseRef.jsx";
import Home from "./components/Home.jsx";
import UseReducer from "./components/UseReducer.jsx";
import UseMemo from "./components/UseMemo.jsx";
import UseCallback from "./components/UseCallback.jsx";
import UseId from "./components/UseId.jsx";
import UseImperativeHandle from "./components/UseImperativeHandle.jsx";
import UseLayoutEffect from "./components/UseLayoutEffect.jsx";

const router = createBrowserRouter( [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/UseRef",
    element: <UseRef />,
  },
  {
    path: "/UseReducer",
    element: <UseReducer />,
  },
  {
    path: "/UseMemo",
    element: <UseMemo />,
  },
  {
    path: "/UseCallback",
    element: <UseCallback />,
  },
  {
    path: "/UseId",
    element: <UseId />,
  },
  {
    path: "/UseImperativeHandle",
    element: <UseImperativeHandle />,
  },
  {
    path: "/UseLayoutEffect",
    element: <UseLayoutEffect />,
  }
] );

const App = () => {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App