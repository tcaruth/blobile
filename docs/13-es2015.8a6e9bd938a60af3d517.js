(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{NeaV:function(n,i,o){"use strict";o.r(i),o.d(i,"StandingsPageModule",(function(){return w}));var e=o("TEn/"),t=o("ofXK"),s=o("3Pt+"),a=o("tyNb"),r=o("mrSG"),c=o("+BjT"),d=o("FqL0"),l=o("XlgL"),b=o("/uxM"),u=o("fXoL"),g=o("J+wX"),m=o("N1zj");function f(n,i){if(1&n){const n=u.Nb();u.Mb(0,"ion-item",9),u.Tb("click",(function(){u.cc(n);const o=i.$implicit;return u.Wb(3).openTeam(o.id)})),u.Mb(1,"ion-label"),u.ic(2),u.Lb(),u.Mb(3,"ion-note",10),u.ic(4),u.Lb(),u.Lb()}if(2&n){const n=i.$implicit;u.gc("font-weight: bold; --background: "+n.mainColor+"; --color: "+n.mainTextColor),u.zb(2),u.jc(n.name),u.zb(1),u.gc("font-weight: bold; --color: "+n.mainTextColor),u.zb(1),u.lc("",n.wins,"-",n.losses,"")}}function h(n,i){if(1&n&&(u.Mb(0,"ion-card",6),u.Mb(1,"ion-card-header"),u.Mb(2,"ion-card-subtitle"),u.ic(3),u.Lb(),u.Lb(),u.Mb(4,"ion-card-content",7),u.hc(5,f,5,7,"ion-item",8),u.Lb(),u.Lb()),2&n){const n=i.$implicit,o=u.Wb(2);u.zb(3),u.jc(n.name),u.zb(2),u.Zb("ngForOf",n.teams)("ngForTrackBy",o.id)}}function p(n,i){if(1&n&&(u.Mb(0,"ion-col"),u.Mb(1,"ion-header",4),u.Mb(2,"h4"),u.ic(3),u.Lb(),u.Lb(),u.hc(4,h,6,3,"ion-card",5),u.Lb()),2&n){const n=i.$implicit,o=u.Wb();u.zb(3),u.jc(n.name),u.zb(1),u.Zb("ngForOf",n.divisions)("ngForTrackBy",o.id)}}const v=[{path:"",component:(()=>{class n{constructor(n,i,o,e){this.database=n,this.modalController=i,this.platform=o,this.stream=e,this.leagues=new l.a({}),this.standings=new d.a({}),this.data={subleagues:[]}}ngOnInit(){return Object(r.a)(this,void 0,void 0,(function*(){yield this.platform.ready(),this.stream.subscribe(n=>Object(r.a)(this,void 0,void 0,(function*(){n instanceof c.a&&(this.leagues=n.leagues,this.standings=n.games.standings),this.postprocess()})))}))}openTeam(n){return Object(r.a)(this,void 0,void 0,(function*(){console.debug("opening team: "+n);const i=yield this.modalController.create({component:b.a,componentProps:{id:n}});return yield i.present()}))}postprocess(){var n,i,o;return Object(r.a)(this,void 0,void 0,(function*(){const e=null===(n=this.leagues)||void 0===n?void 0:n.leagues[0];if(!e)return;this.data.name=e.name;const t=yield this.database.teams(),s=this.leagues.tiebreakers.find(n=>n.id===e.tiebreakers),a=null===(o=null===(i=this.leagues)||void 0===i?void 0:i.subleagues)||void 0===o?void 0:o.filter(n=>e.subleagues.indexOf(n.id)>=0);this.data.subleagues=a.map(n=>{var i,o;const e={id:n.id,name:n.name},a=null===(o=null===(i=this.leagues)||void 0===i?void 0:i.divisions)||void 0===o?void 0:o.filter(i=>n.divisions.indexOf(i.id)>=0);return e.divisions=a.map(n=>{const i={id:n.id,name:n.name};return i.teams=n.teams.map(n=>{const i=t.find(i=>n===i.id);return{id:i.id,name:i.fullName,emoji:String.fromCodePoint(parseInt(i.emoji)),emojiColor:i.emojiColor,mainColor:i.mainColor,secondaryColor:i.secondaryColor,mainTextColor:i.contrastingMainColor,secondaryTextColor:i.contrastingSecondaryColor,wins:this.standings.wins[i.id],losses:this.standings.losses[i.id]}}),i.teams.sort((n,i)=>{let o=i.wins-n.wins;return 0===o&&(o=s.order.indexOf(n.id)-s.order.indexOf(i.id)),o}),i}),e}),console.debug("leagues:",this.leagues),console.debug("standings:",this.standings),console.debug("teams:",t),console.debug("data:",this.data)}))}id(n){return n&&n.id?n.id:n}}return n.\u0275fac=function(i){return new(i||n)(u.Jb(g.a),u.Jb(e.S),u.Jb(e.T),u.Jb(m.a))},n.\u0275cmp=u.Db({type:n,selectors:[["app-standings"]],decls:8,vars:4,consts:[[3,"translucent"],["color","primary"],[1,"ion-no-margin"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"ion-no-border","ion-text-center"],["class","ion-no-padding ion-no-margin ion-margin-vertical",4,"ngFor","ngForOf","ngForTrackBy"],[1,"ion-no-padding","ion-no-margin","ion-margin-vertical"],[1,"ion-no-padding"],["lines","none",3,"style","click",4,"ngFor","ngForOf","ngForTrackBy"],["lines","none",3,"click"],["slot","end"]],template:function(n,i){1&n&&(u.Mb(0,"ion-header",0),u.Mb(1,"ion-toolbar",1),u.Mb(2,"ion-title"),u.ic(3),u.Lb(),u.Lb(),u.Lb(),u.Mb(4,"ion-content",2),u.Mb(5,"ion-grid"),u.Mb(6,"ion-row"),u.hc(7,p,5,3,"ion-col",3),u.Lb(),u.Lb(),u.Lb()),2&n&&(u.Zb("translucent",!0),u.zb(3),u.kc(" ",i.data.name," "),u.zb(4),u.Zb("ngForOf",i.data.subleagues)("ngForTrackBy",i.id))},directives:[e.p,e.O,e.M,e.l,e.o,e.C,t.h,e.k,e.g,e.i,e.j,e.h,e.r,e.u,e.x],styles:[""]}),n})()}];let y=(()=>{class n{}return n.\u0275mod=u.Hb({type:n}),n.\u0275inj=u.Gb({factory:function(i){return new(i||n)},imports:[[a.j.forChild(v)],a.j]}),n})(),w=(()=>{class n{}return n.\u0275mod=u.Hb({type:n}),n.\u0275inj=u.Gb({factory:function(i){return new(i||n)},imports:[[e.P,t.b,s.a,y]]}),n})()}}]);