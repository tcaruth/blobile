(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{hO9l:function(t,n,a){"use strict";a.r(n),a.d(n,"TabsPageModule",function(){return m});var e=a("TEn/"),i=a("ofXK"),o=a("3Pt+"),b=a("tyNb"),s=a("mrSG"),l=a("+BjT"),r=a("fXoL"),u=a("N1zj"),c=a("tRi0");function d(t,n){1&t&&(r.Ob(0,"ion-tab-button",10),r.Mb(1,"ion-icon",11),r.Ob(2,"ion-label"),r.nc(3,"Standings"),r.Nb(),r.Nb())}function h(t,n){1&t&&(r.Ob(0,"ion-tab-button",12),r.Mb(1,"ion-icon",13),r.Ob(2,"ion-label"),r.nc(3,"Matchups"),r.Nb(),r.Nb())}function p(t,n){1&t&&(r.Ob(0,"ion-badge",14),r.nc(1,"1"),r.Nb())}const g=[{path:"tabs",component:(()=>{class t{constructor(t,n){this.stream=t,this.updateService=n,this.streamData=new l.a({})}ngOnInit(){var t;return Object(s.a)(this,void 0,void 0,function*(){null===(t=this.subscription)||void 0===t||t.unsubscribe(),this.subscription=yield this.stream.subscribe(t=>{t instanceof l.a&&(this.streamData=t)})})}showStandings(){var t,n;return void 0===(null===(n=null===(t=this.streamData)||void 0===t?void 0:t.sim)||void 0===n?void 0:n.showStandings)||this.streamData.sim.showStandings}}return t.\u0275fac=function(n){return new(n||t)(r.Lb(u.a),r.Lb(c.a))},t.\u0275cmp=r.Fb({type:t,selectors:[["app-tabs"]],decls:17,vars:3,consts:[["slot","bottom"],["tab","live-feed","aria-label","Live"],["name","baseball-outline"],["tab","standings","aria-label","Standings",4,"ngIf"],["tab","matchups","aria-label","Matchups",4,"ngIf"],["tab","settings","aria-label","Slettings"],["name","settings-outline"],["color","danger",4,"ngIf"],["tab","about","aria-label","About"],["name","information-circle-outline"],["tab","standings","aria-label","Standings"],["name","podium-outline"],["tab","matchups","aria-label","Matchups"],["name","trophy-outline"],["color","danger"]],template:function(t,n){1&t&&(r.Ob(0,"ion-tabs"),r.Ob(1,"ion-tab-bar",0),r.Ob(2,"ion-tab-button",1),r.Mb(3,"ion-icon",2),r.Ob(4,"ion-label"),r.nc(5,"Live"),r.Nb(),r.Nb(),r.mc(6,d,4,0,"ion-tab-button",3),r.mc(7,h,4,0,"ion-tab-button",4),r.Ob(8,"ion-tab-button",5),r.Mb(9,"ion-icon",6),r.Ob(10,"ion-label"),r.nc(11,"Slettings"),r.Nb(),r.mc(12,p,2,0,"ion-badge",7),r.Nb(),r.Ob(13,"ion-tab-button",8),r.Mb(14,"ion-icon",9),r.Ob(15,"ion-label"),r.nc(16,"About"),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&t&&(r.Ab(6),r.dc("ngIf",n.showStandings()),r.Ab(1),r.dc("ngIf",!n.showStandings()),r.Ab(5),r.dc("ngIf",n.updateService.updateAvailable))},directives:[e.L,e.J,e.K,e.p,e.t,i.i,e.c],styles:[""]}),t})(),children:[{path:"live-feed",loadChildren:()=>a.e(6).then(a.bind(null,"v2dp")).then(t=>t.LiveFeedPageModule)},{path:"standings",loadChildren:()=>a.e(16).then(a.bind(null,"NeaV")).then(t=>t.StandingsPageModule)},{path:"matchups",loadChildren:()=>a.e(8).then(a.bind(null,"Z2MA")).then(t=>t.MatchupsPageModule)},{path:"settings",loadChildren:()=>a.e(14).then(a.bind(null,"7wo0")).then(t=>t.SettingsPageModule)},{path:"about",loadChildren:()=>a.e(2).then(a.bind(null,"FQ1g")).then(t=>t.AboutPageModule)},{path:"",redirectTo:"/tabs/live-feed",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/live-feed",pathMatch:"full"}];let f=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(n){return new(n||t)},imports:[[b.j.forChild(g)],b.j]}),t})(),m=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(n){return new(n||t)},imports:[[e.Q,i.b,o.a,f]]}),t})()}}]);
//# sourceMappingURL=tabs-tabs-module-es2015.c14e4d5ce339f9cded54.js.map