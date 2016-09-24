"use strict";
var router_1 = require('@angular/router');
var recipes_component_1 = require('./content/recipes.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var boRoutes = [
    {
        path: '',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'content',
        component: recipes_component_1.RecipesComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(boRoutes);
