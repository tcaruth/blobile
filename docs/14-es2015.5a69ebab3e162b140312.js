(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{hO9l:function(t,e,n){"use strict";n.r(e),n.d(e,"TabsPageModule",(function(){return h}));var o=n("TEn/"),a=n("ofXK"),i=n("3Pt+"),b=n("tyNb"),l=n("gcOT"),c=n("fXoL"),r=n("tRi0");function s(t,e){1&t&&(c.Mb(0,"ion-badge",9),c.Kb(1,"ion-icon",10),c.Lb())}function d(t,e){if(1&t&&(c.Mb(0,"ion-tab-button",6),c.Kb(1,"ion-icon",7),c.Mb(2,"ion-label"),c.jc(3,"Slettings"),c.Lb(),c.ic(4,s,2,0,"ion-badge",8),c.Lb()),2&t){const t=c.Xb();c.zb(4),c.ac("ngIf",t.updateService.updateAvailable)}}const{Device:u}=l.a,p=[{path:"tabs",component:(()=>{class t{constructor(t){this.updateService=t,this.platform="web",u.getInfo().then(t=>{this.platform=t.platform})}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(r.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-tabs"]],decls:11,vars:1,consts:[["slot","bottom"],["tab","live-feed"],["name","baseball-outline"],["tab","settings",4,"ngIf"],["tab","about"],["name","information-circle-outline"],["tab","settings"],["name","settings-outline"],["color","danger",4,"ngIf"],["color","danger"],["name","cloud-download"]],template:function(t,e){1&t&&(c.Mb(0,"ion-tabs"),c.Mb(1,"ion-tab-bar",0),c.Mb(2,"ion-tab-button",1),c.Kb(3,"ion-icon",2),c.Mb(4,"ion-label"),c.jc(5,"Live Feed"),c.Lb(),c.Lb(),c.ic(6,d,5,1,"ion-tab-button",3),c.Mb(7,"ion-tab-button",4),c.Kb(8,"ion-icon",5),c.Mb(9,"ion-label"),c.jc(10,"About"),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&t&&(c.zb(6),c.ac("ngIf","web"!==e.platform))},directives:[o.C,o.A,o.B,o.n,o.p,a.i,o.d],styles:[""]}),t})(),children:[{path:"live-feed",loadChildren:()=>n.e(12).then(n.bind(null,"v2dp")).then(t=>t.LiveFeedPageModule)},{path:"standings",loadChildren:()=>n.e(13).then(n.bind(null,"NeaV")).then(t=>t.StandingsPageModule)},{path:"settings",loadChildren:()=>n.e(2).then(n.bind(null,"7wo0")).then(t=>t.SettingsPageModule)},{path:"about",loadChildren:()=>n.e(11).then(n.bind(null,"FQ1g")).then(t=>t.AboutPageModule)},{path:"",redirectTo:"/tabs/live-feed",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/live-feed",pathMatch:"full"}];let f=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[b.i.forChild(p)],b.i]}),t})(),h=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[o.G,a.b,i.a,f]]}),t})()}}]);