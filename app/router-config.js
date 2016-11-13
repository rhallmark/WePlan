"use strict";
const about_component_1 = require('./about/about.component');
const wpSignLocked_component_1 = require('./wpSignLocked/wpSignLocked.component');
const indexRoute = {
    path: "",
    component: wpSignLocked_component_1.SignLocked
};
const fallbackRoute = {
    path: "**",
    component: wpSignLocked_component_1.SignLocked
};
exports.routeConfig = [
    indexRoute,
    {
        path: 'home',
        component: wpSignLocked_component_1.SignLocked //until we figure this out
    },
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