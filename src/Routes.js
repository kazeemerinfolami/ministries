import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App"
import CreateData from "../src/components/forms/Admin"
import updateForm from "../src/components/forms/updateForm"


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/updateuser/:id" component={updateForm} />
                <Route path="/admin" exact component={CreateData} />
            </Switch>
        </BrowserRouter>
    );
};
export default Routes;