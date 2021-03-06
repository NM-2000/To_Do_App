import React from "react";
import { ROUTES } from "./routes";
import { Login, Register, HomePage, AddNewListPage } from "./src";

export const ROUTE_MAP: {[key in ROUTES]: React.ComponentType<any>} = {
    [ROUTES.LOGIN]: Login,
    [ROUTES.REGISTER]: Register,
    [ROUTES.HOMEPAGE]: HomePage,
    [ROUTES.ADD_NEW_LIST_PAGE]: AddNewListPage,
};