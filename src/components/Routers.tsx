import { IonSplitPane, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from "react-router";
import Menu from "./Menu";
import Home from '../pages/Home';
import Previous from "../pages/Previous";
import Courses from "../pages/Courses";
import Carryovers from "../pages/Carryovers";
import Register from "../pages/Register";
import Details from "../pages/Details";
const Routers:React.FC=()=>{
    return(
<IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
          <Route path="/home" exact={true}>
            <Home />
            </Route>
            <Route path="/" exact={true}>
              <Redirect to="/home" />
            </Route>
            <Route path="/previous" exact={true}>
              <Previous />
            </Route>
            <Route path="/courses" exact={true}>
              <Courses />
            </Route>
            <Route path="/my-carryovers" exact={true}>
              <Carryovers/>
            </Route>
            <Route path="/register" exact={true}>
              <Register/>
            </Route>
            <Route path="/my-details" exact={true}>
              <Details/>
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    )
}
export default Routers;