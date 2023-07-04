import { Link } from "react-router-dom"
import UseCallback from "./UseCallback.jsx"
import UseId from "./UseId.jsx"
import UseImperativeHandle from "./UseImperativeHandle.jsx"
import UseLayoutEffect from "./UseLayoutEffect.jsx"
import UseMemo from "./UseMemo.jsx"
import UseReducer from "./UseReducer.jsx"
import UseRef from "./UseRef.jsx"


const Home = () => {

   const routes = [
      {
         path: "/UseRef",
         element: <UseRef />,
         name: "UseRef"
      },
      {
         path: "/UseReducer",
         element: <UseReducer />,
         name: "UseReducer"
      },
      {
         path: "/UseMemo",
         element: <UseMemo />,
         name: "UseMemo"
      },
      {
         path: "/UseCallback",
         element: <UseCallback />,
         name: "UseCallback"
      },
      {
         path: "/UseId",
         element: <UseId />,
         name: "UseId"
      },
      {
         path: "/UseImperativeHandle",
         element: <UseImperativeHandle />,
         name: "UseImperativeHandle"
      },
      {
         path: "/UseLayoutEffect",
         element: <UseLayoutEffect />,
         name: "UseLayoutEffect"
      }
   ]

   return (
      <div className="centered background_shady">
         <ul className="centered">
            {routes.map( ( route, index ) => (
               <Link key={index} to={route.path}> <li className="items"> {route.name} </li> </Link>
            ) )}
         </ul>
      </div>
   )
}

export default Home