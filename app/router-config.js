"use strict";
const wpHome_component_1 = require('./wpHome/wpHome.component');
const about_component_1 = require('./about/about.component');
const wpSignLocked_component_1 = require('./wpSignLocked/wpSignLocked.component');
const indexRoute = {
    path: "",
    component: wpHome_component_1.HomeComponent
};
const fallbackRoute = {
    path: "**",
    component: wpHome_component_1.HomeComponent
};
exports.routeConfig = [
    indexRoute,
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'sl',
        component: wpSignLocked_component_1.SignLocked
    },
    fallbackRoute
];
//# sourceMappingURL=router-config.js.map