!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var i=0;i<e.length;i++){var t=e[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{NeaV:function(i,t,o){"use strict";o.r(t),o.d(t,"StandingsPageModule",(function(){return C}));var r=o("TEn/"),a=o("ofXK"),s=o("3Pt+"),c=o("tyNb"),u=o("mrSG"),d=o("+BjT"),l=o("FqL0"),b=o("XlgL"),f=o("/uxM"),m=o("fXoL"),g=o("J+wX"),p=o("N1zj");function h(n,e){if(1&n){var i=m.Nb();m.Mb(0,"ion-item",9),m.Tb("click",(function(){m.cc(i);var n=e.$implicit;return m.Wb(3).openTeam(n.id)})),m.Mb(1,"ion-label"),m.ic(2),m.Lb(),m.Mb(3,"ion-note",10),m.ic(4),m.Lb(),m.Lb()}if(2&n){var t=e.$implicit;m.gc("font-weight: bold; --background: "+t.mainColor+"; --color: "+t.mainTextColor),m.zb(2),m.jc(t.name),m.zb(1),m.gc("font-weight: bold; --color: "+t.mainTextColor),m.zb(1),m.lc("",t.wins,"-",t.losses,"")}}function v(n,e){if(1&n&&(m.Mb(0,"ion-card",6),m.Mb(1,"ion-card-header"),m.Mb(2,"ion-card-subtitle"),m.ic(3),m.Lb(),m.Lb(),m.Mb(4,"ion-card-content",7),m.hc(5,h,5,7,"ion-item",8),m.Lb(),m.Lb()),2&n){var i=e.$implicit,t=m.Wb(2);m.zb(3),m.jc(i.name),m.zb(2),m.Zb("ngForOf",i.teams)("ngForTrackBy",t.id)}}function w(n,e){if(1&n&&(m.Mb(0,"ion-col"),m.Mb(1,"ion-header",4),m.Mb(2,"h4"),m.ic(3),m.Lb(),m.Lb(),m.hc(4,v,6,3,"ion-card",5),m.Lb()),2&n){var i=e.$implicit,t=m.Wb();m.zb(3),m.jc(i.name),m.zb(1),m.Zb("ngForOf",i.divisions)("ngForTrackBy",t.id)}}var y,k,x,M=[{path:"",component:(y=function(){function i(e,t,o,r){n(this,i),this.database=e,this.modalController=t,this.platform=o,this.stream=r,this.leagues=new b.a({}),this.standings=new l.a({}),this.data={subleagues:[]}}var t,o,r;return t=i,(o=[{key:"ngOnInit",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.platform.ready();case 2:this.stream.subscribe((function(n){return Object(u.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n instanceof d.a&&(this.leagues=n.leagues,this.standings=n.games.standings),this.postprocess();case 1:case"end":return e.stop()}}),e,this)})))}));case 3:case"end":return n.stop()}}),n,this)})))}},{key:"openTeam",value:function(n){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.debug("opening team: "+n),e.next=3,this.modalController.create({component:f.a,componentProps:{id:n}});case 3:return i=e.sent,e.next=6,i.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}},{key:"postprocess",value:function(){var n,e,i;return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var o,r,a,s,c=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=null===(n=this.leagues)||void 0===n?void 0:n.leagues[0]){t.next=3;break}return t.abrupt("return");case 3:return this.data.name=o.name,t.next=6,this.database.teams();case 6:r=t.sent,a=this.leagues.tiebreakers.find((function(n){return n.id===o.tiebreakers})),s=null===(i=null===(e=this.leagues)||void 0===e?void 0:e.subleagues)||void 0===i?void 0:i.filter((function(n){return o.subleagues.indexOf(n.id)>=0})),this.data.subleagues=s.map((function(n){var e,i,t={id:n.id,name:n.name},o=null===(i=null===(e=c.leagues)||void 0===e?void 0:e.divisions)||void 0===i?void 0:i.filter((function(e){return n.divisions.indexOf(e.id)>=0}));return t.divisions=o.map((function(n){var e={id:n.id,name:n.name};return e.teams=n.teams.map((function(n){var e=r.find((function(e){return n===e.id}));return{id:e.id,name:e.fullName,emoji:String.fromCodePoint(parseInt(e.emoji)),emojiColor:e.emojiColor,mainColor:e.mainColor,secondaryColor:e.secondaryColor,mainTextColor:e.contrastingMainColor,secondaryTextColor:e.contrastingSecondaryColor,wins:c.standings.wins[e.id],losses:c.standings.losses[e.id]}})),e.teams.sort((function(n,e){var i=e.wins-n.wins;return 0===i&&(i=a.order.indexOf(n.id)-a.order.indexOf(e.id)),i})),e})),t})),console.debug("leagues:",this.leagues),console.debug("standings:",this.standings),console.debug("teams:",r),console.debug("data:",this.data);case 10:case"end":return t.stop()}}),t,this)})))}},{key:"id",value:function(n){return n&&n.id?n.id:n}}])&&e(t.prototype,o),r&&e(t,r),i}(),y.\u0275fac=function(n){return new(n||y)(m.Jb(g.a),m.Jb(r.S),m.Jb(r.T),m.Jb(p.a))},y.\u0275cmp=m.Db({type:y,selectors:[["app-standings"]],decls:8,vars:4,consts:[[3,"translucent"],["color","primary"],[1,"ion-no-margin"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"ion-no-border","ion-text-center"],["class","ion-no-padding ion-no-margin ion-margin-vertical",4,"ngFor","ngForOf","ngForTrackBy"],[1,"ion-no-padding","ion-no-margin","ion-margin-vertical"],[1,"ion-no-padding"],["lines","none",3,"style","click",4,"ngFor","ngForOf","ngForTrackBy"],["lines","none",3,"click"],["slot","end"]],template:function(n,e){1&n&&(m.Mb(0,"ion-header",0),m.Mb(1,"ion-toolbar",1),m.Mb(2,"ion-title"),m.ic(3),m.Lb(),m.Lb(),m.Lb(),m.Mb(4,"ion-content",2),m.Mb(5,"ion-grid"),m.Mb(6,"ion-row"),m.hc(7,w,5,3,"ion-col",3),m.Lb(),m.Lb(),m.Lb()),2&n&&(m.Zb("translucent",!0),m.zb(3),m.kc(" ",e.data.name," "),m.zb(4),m.Zb("ngForOf",e.data.subleagues)("ngForTrackBy",e.id))},directives:[r.p,r.O,r.M,r.l,r.o,r.C,a.h,r.k,r.g,r.i,r.j,r.h,r.r,r.u,r.x],styles:[""]}),y)}],j=((x=function e(){n(this,e)}).\u0275mod=m.Hb({type:x}),x.\u0275inj=m.Gb({factory:function(n){return new(n||x)},imports:[[c.j.forChild(M)],c.j]}),x),C=((k=function e(){n(this,e)}).\u0275mod=m.Hb({type:k}),k.\u0275inj=m.Gb({factory:function(n){return new(n||k)},imports:[[r.P,a.b,s.a,j]]}),k)}}])}();