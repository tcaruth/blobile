(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{hO9l:function(t,n,e){"use strict";e.r(n),e.d(n,"TabsPageModule",function(){return m});var i=e("TEn/"),a=e("ofXK"),o=e("3Pt+"),b=e("tyNb"),s=e("mrSG"),l=e("+BjT"),c=e("fXoL"),d=e("N1zj"),u=e("tRi0");function r(t,n){1&t&&(c.Ob(0,"ion-tab-button",10),c.Mb(1,"ion-icon",11),c.Ob(2,"ion-label"),c.nc(3,"Standings"),c.Nb(),c.Nb())}function h(t,n){1&t&&(c.Ob(0,"ion-tab-button",12),c.Mb(1,"ion-icon",13),c.Ob(2,"ion-label"),c.nc(3,"Matchups"),c.Nb(),c.Nb())}function p(t,n){1&t&&(c.Ob(0,"ion-badge",14),c.nc(1,"1"),c.Nb())}const g=[{path:"tabs",component:(()=>{class t{constructor(t,n){this.stream=t,this.updateService=n,this.streamData=new l.a({})}ngOnInit(){var t;return Object(s.a)(this,void 0,void 0,function*(){null===(t=this.subscription)||void 0===t||t.unsubscribe(),this.subscription=yield this.stream.subscribe(t=>{t instanceof l.a&&(this.streamData=t)})})}showStandings(){var t,n;return void 0===(null===(n=null===(t=this.streamData)||void 0===t?void 0:t.sim)||void 0===n?void 0:n.showStandings)||this.streamData.sim.showStandings}}return t.\u0275fac=function(n){return new(n||t)(c.Lb(d.a),c.Lb(u.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-tabs"]],decls:17,vars:3,consts:[["slot","bottom"],["tab","live-feed"],["name","baseball-outline"],["tab","standings",4,"ngIf"],["tab","matchups",4,"ngIf"],["tab","settings"],["name","settings-outline"],["color","danger",4,"ngIf"],["tab","about"],["name","information-circle-outline"],["tab","standings"],["name","podium-outline"],["tab","matchups"],["name","trophy-outline"],["color","danger"]],template:function(t,n){1&t&&(c.Ob(0,"ion-tabs"),c.Ob(1,"ion-tab-bar",0),c.Ob(2,"ion-tab-button",1),c.Mb(3,"ion-icon",2),c.Ob(4,"ion-label"),c.nc(5,"Live"),c.Nb(),c.Nb(),c.mc(6,r,4,0,"ion-tab-button",3),c.mc(7,h,4,0,"ion-tab-button",4),c.Ob(8,"ion-tab-button",5),c.Mb(9,"ion-icon",6),c.Ob(10,"ion-label"),c.nc(11,"Slettings"),c.Nb(),c.mc(12,p,2,0,"ion-badge",7),c.Nb(),c.Ob(13,"ion-tab-button",8),c.Mb(14,"ion-icon",9),c.Ob(15,"ion-label"),c.nc(16,"About"),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&t&&(c.Ab(6),c.dc("ngIf",n.showStandings()),c.Ab(1),c.dc("ngIf",!n.showStandings()),c.Ab(5),c.dc("ngIf",n.updateService.updateAvailable))},directives:[i.qb,i.ob,i.pb,i.z,i.K,a.t,i.g],styles:[""]}),t})(),children:[{path:"live-feed",loadChildren:()=>e.e(6).then(e.bind(null,"v2dp")).then(t=>t.LiveFeedPageModule)},{path:"standings",loadChildren:()=>e.e(16).then(e.bind(null,"NeaV")).then(t=>t.StandingsPageModule)},{path:"matchups",loadChildren:()=>e.e(8).then(e.bind(null,"Z2MA")).then(t=>t.MatchupsPageModule)},{path:"settings",loadChildren:()=>e.e(14).then(e.bind(null,"7wo0")).then(t=>t.SettingsPageModule)},{path:"about",loadChildren:()=>e.e(2).then(e.bind(null,"FQ1g")).then(t=>t.AboutPageModule)},{path:"",redirectTo:"/tabs/live-feed",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/live-feed",pathMatch:"full"}];let f=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(n){return new(n||t)},imports:[[b.l.forChild(g)],b.l]}),t})(),m=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(n){return new(n||t)},imports:[[i.yb,a.c,o.e,f]]}),t})()}}]);
//# sourceMappingURL=tabs-tabs-module-es2015.cf05187f8b3d36f66e27.js.map