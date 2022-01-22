import React from "react";
import { ROUTES } from "./routes";
import { Login, Register } from "./src";

export const ROUTE_MAP: {[key in ROUTES]: React.ComponentType<any>} = {
    [ROUTES.LOGIN]: Login,
    [ROUTES.REGISTER]: Register,
};