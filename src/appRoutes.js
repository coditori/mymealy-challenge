import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Page from "./layouts/Page";

// add lazy loading
const ApiGetPage = React.lazy(() => import("./pages/ApiGetPage"));
const ShowPage = React.lazy(() => import("./pages/ShowPage"));
const EditPage = React.lazy(() => import("./pages/EditPage"));
const CreatePage = React.lazy(() => import("./pages/CreatePage"));

export default function AppRoute() {
  return (
    <Router>
      <Page>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={ApiGetPage}></Route>
            <Route path="/create" component={CreatePage}></Route>
            <Route path="/show" component={ShowPage}></Route>
            <Route path="/edit/:id" component={EditPage}></Route>
          </Switch>
        </Suspense>
      </Page>
    </Router>
  );
}
