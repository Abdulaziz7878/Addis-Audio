import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Audios from "./pages/audios/Audios";
import NewAudio from "./pages/newAudio/NewAudio";
import SingleAudio from "./pages/singleAudio/SingleAudio";
import UpdateAudio from "./pages/updateAudio/UpdateAudio";

import MainNavigation from "./coponents/navigation/mainNavigation/MainNavigation";
import LoadingSpinner from "./coponents/loadingSpinner/LoadingSpinner";

function App() {
  const routes = (
    <Switch>
      <Route path="/" exact>
        <Audios />
      </Route>
      <Route path="/audios/new" exact>
        <NewAudio />
      </Route>
      <Route path="/audios/:audioId" exact>
        <SingleAudio />
      </Route>
      <Route path="/audios/update/:audioId">
        <UpdateAudio />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
  return (
    <Router>
      <MainNavigation />
      <main>
        <Suspense
          fallback={
            <div className="center" style={{ minHeight: "70vh" }}>
              <LoadingSpinner />
            </div>
          }
        >
          {routes}
        </Suspense>
      </main>
    </Router>
  );
}

export default App;
