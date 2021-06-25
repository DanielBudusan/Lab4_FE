import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home/Home";
import ListTasks from "./pages/Tasks/ListTasks";
import TaskDetails from "./pages/Tasks/TaskDetails";
import Login from "./pages/Login/Login";
import CreateTask from "./pages/Tasks/CreateTask"
import EditTask from "./components/EditTask"
import Logout from "./pages/Logout/Logout"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Register from "./pages/Register/Register";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route  path="/" >
          <Home />
        </Route>
        <Route exact path="/tasks"  >
          <ListTasks />
        </Route>
        <Route path="/tasks/:id"  >
          <TaskDetails />
        </Route>
        {/* <Redirect exact from="/" to="/tasks" /> */}
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/tasks/create">
          <CreateTask />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
