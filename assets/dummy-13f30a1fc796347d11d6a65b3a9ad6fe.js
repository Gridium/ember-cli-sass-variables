"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,a,n,i){var r=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,r=t.default.Application.extend({modulePrefix:i.default.modulePrefix,podModulePrefix:i.default.podModulePrefix,Resolver:a.default}),(0,n.default)(r,i.default.modulePrefix),e.default=r}),define("dummy/controllers/application",["exports","ember","dummy/utils/sass-variables"],function(e,t,a){e.default=t.default.Controller.extend({sassVariables:a.default})}),define("dummy/helpers/app-version",["exports","ember","dummy/config/environment"],function(e,t,a){function n(){return i}e.appVersion=n;var i=a.default.APP.version;e.default=t.default.Helper.helper(n)}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,a){var n=a.default.APP,i=n.name,r=n.version;e.default={name:"App Version",initialize:(0,t.default)(i,r)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,a){e.default={name:"ember-data",initialize:t.default}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(a.default.exportApplicationGlobal!==!1){var n;if("undefined"!=typeof window)n=window;else if("undefined"!=typeof global)n=global;else{if("undefined"==typeof self)return;n=self}var i,r=a.default.exportApplicationGlobal;i="string"==typeof r?r:t.default.String.classify(a.default.modulePrefix),n[i]||(n[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[i]}}))}}e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){var n=t.default.Router.extend({location:a.default.locationType,rootURL:a.default.rootURL});n.map(function(){}),e.default=n}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.9.1",loc:{source:null,start:{line:2,column:2},end:{line:4,column:2}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("    ");e.appendChild(t,a);var a=e.createElement("li"),n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode(": ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[1]),i=new Array(2);return i[0]=e.createMorphAt(n,0,0),i[1]=e.createMorphAt(n,2,2),i},statements:[["content","var.name",["loc",[null,[3,8],[3,20]]],0,0,0,0],["content","var.value",["loc",[null,[3,22],[3,35]]],0,0,0,0]],locals:["var"],templates:[]}}();return{meta:{revision:"Ember@2.9.1",loc:{source:null,start:{line:1,column:0},end:{line:6,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("ul"),n=e.createTextNode("\n");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[0]),1,1),n},statements:[["block","each",[["get","sassVariables",["loc",[null,[2,10],[2,23]]],0,0,0,0]],[],0,null,["loc",[null,[2,2],[4,11]]]]],locals:[],templates:[e]}}())}),define("dummy/utils/sass-variables",["exports"],function(e){var t=JSON.parse('[{"name":"colorRed","value":"#FF4136"},{"name":"colorBlue","value":"#fc1234"}]');e.default=t}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=document.querySelector('meta[name="'+a+'"]').getAttribute("content"),i=JSON.parse(unescape(n)),r={default:i};return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(e){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-cli-sass-variables",version:"0.1.5"});