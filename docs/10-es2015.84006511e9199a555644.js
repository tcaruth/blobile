(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{jNFB:function(e,t,n){"use strict";function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),"object"===s(t))this.el=t;else{if("string"!=typeof t)throw new TypeError("Marquee accepts either a HTML Element (object) or a class/id to query (string).");this.el=document.querySelector(t)}this.sign=this.el.children[0],this.RAF=null,this.offset=this.el.offsetWidth,this.speed=this.el.dataset.speed||1,this.observerOptions={rootMargin:"0px 0px",threshold:0},this.observer=null,this.styleElements(),this.init()}return function(e,t,n){t&&function(e,t){for(var n,s=0;s<t.length;s++)(n=t[s]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}(e.prototype,t)}(e,[{key:"init",value:function(){this.observerInit(),this.observer.observe(this.sign),this.draw()}},{key:"styleElements",value:function(){this.el.style.display="flex",this.sign.style.display="inline-flex"}},{key:"draw",value:function(){var e=this,t=function(){e.RAF=requestAnimationFrame(t),e.offset-=e.speed,e.sign.style.transform="translate3d(".concat(e.offset,"px, 0, 0)")};requestAnimationFrame(t)}},{key:"stop",value:function(){cancelAnimationFrame(this.RAF)}},{key:"reset",value:function(){this.offset=this.el.offsetWidth,this.sign.style.transform="translate3d(".concat(this.offset,"px, 0, 0)")}},{key:"observerInit",value:function(){var e=this;this.observer=new IntersectionObserver((function(t){t.forEach((function(t){0===t.intersectionRatio&&e.reset()}))}),this.observerOptions)}},{key:"destroy",value:function(){this.stop(),this.observer.unobserve(this.sign)}}]),e}()},v2dp:function(e,t,n){"use strict";n.r(t),n.d(t,"LiveFeedPageModule",(function(){return G}));var s=n("TEn/"),i=n("ofXK"),o=n("3Pt+"),a=n("Uyg3"),r=n("tyNb"),c=n("mrSG"),l=n("gcOT"),b=n("jNFB"),u=n.n(b),h=n("+BjT"),d=n("oVdi"),m=n("fXoL"),f=n("N1zj"),g=n("J+wX"),v=n("BTjV"),p=n("9Pn0");function y(e,t){1&e&&(m.Nb(0,"ion-button"),m.Lb(1,"ion-spinner"),m.Mb())}function w(e,t){if(1&e){const e=m.Ob();m.Nb(0,"ion-toolbar"),m.Nb(1,"ion-buttons",8),m.Nb(2,"ion-button"),m.Lb(3,"ion-icon"),m.Mb(),m.Mb(),m.Nb(4,"ion-segment",9),m.Ub("ionChange",(function(t){return m.dc(e),m.Xb().segmentChanged(t)})),m.Nb(5,"ion-segment-button",10),m.Nb(6,"ion-label"),m.kc(7,"All"),m.Mb(),m.Mb(),m.Nb(8,"ion-segment-button",11),m.Nb(9,"ion-label"),m.kc(10),m.Mb(),m.Mb(),m.Nb(11,"ion-segment-button",12),m.Nb(12,"ion-label"),m.kc(13,"Favorites"),m.Mb(),m.Mb(),m.Mb(),m.Nb(14,"ion-buttons",2),m.Nb(15,"ion-button",13),m.Ub("click",(function(){return m.dc(e),m.Xb().toggleSearchbar()})),m.Lb(16,"ion-icon",14),m.Mb(),m.Mb(),m.Mb()}if(2&e){const e=m.Xb();m.zb(4),m.ac("value",e.segment),m.zb(6),m.mc("Active (",e.getActiveGameCount(),")")}}function k(e,t){if(1&e){const e=m.Ob();m.Nb(0,"ion-searchbar",15),m.Ub("ionInput",(function(t){return m.dc(e),m.Xb().filterList(t)})),m.Mb()}if(2&e){const e=m.Xb();m.bc("value",e.searchTerm)}}function N(e,t){if(1&e&&(m.Nb(0,"ion-item",19),m.Nb(1,"h4"),m.kc(2,"The "),m.Nb(3,"span"),m.kc(4),m.Mb(),m.kc(5," are the Champions!"),m.Mb(),m.Mb()),2&e){const e=m.Xb(4);m.zb(3),m.ic("color: "+e.getWinner().mainColor),m.zb(1),m.lc(e.getWinner().fullName)}}function M(e,t){if(1&e&&(m.Nb(0,"h4"),m.kc(1,"Next Season Starts In:"),m.Lb(2,"br"),m.kc(3),m.Mb()),2&e){const e=m.Xb(4);m.zb(3),m.mc("",e.getCountdown(),".")}}function I(e,t){if(1&e&&(m.Nb(0,"span"),m.Nb(1,"ion-item",19),m.Nb(2,"h4"),m.kc(3),m.Mb(),m.Mb(),m.jc(4,N,6,3,"ion-item",20),m.Nb(5,"ion-item",19),m.jc(6,M,4,1,"h4",3),m.Mb(),m.Mb()),2&e){const e=m.Xb(3);m.zb(3),m.mc("Season ",e.streamData.seasonNumber," is over."),m.zb(1),m.ac("ngIf",e.getWinner()&&e.getWinner().fullName),m.zb(2),m.ac("ngIf",e.countdown)}}function T(e,t){if(1&e&&(m.Nb(0,"h4"),m.kc(1,"Postseason Starts In:"),m.Lb(2,"br"),m.kc(3),m.Mb()),2&e){const e=m.Xb(4);m.zb(3),m.mc("",e.getCountdown(),".")}}function D(e,t){if(1&e&&(m.Nb(0,"span"),m.Nb(1,"ion-item",19),m.Nb(2,"h4"),m.kc(3,"Regular season is over."),m.Mb(),m.Mb(),m.Nb(4,"ion-item",19),m.jc(5,T,4,1,"h4",3),m.Mb(),m.Mb()),2&e){const e=m.Xb(3);m.zb(5),m.ac("ngIf",e.countdown)}}function C(e,t){if(1&e&&(m.Nb(0,"div",21),m.kc(1),m.Mb()),2&e){const e=t.$implicit;m.zb(1),m.mc(" ",e.msg,"... \xa0 \xa0 \xa0 ")}}function F(e,t){if(1&e&&(m.Nb(0,"span"),m.jc(1,I,7,3,"span",3),m.jc(2,D,6,1,"span",3),m.Nb(3,"div",16),m.Nb(4,"div",17),m.jc(5,C,2,1,"div",18),m.Mb(),m.Mb(),m.Mb()),2&e){const e=m.Xb(2);m.zb(1),m.ac("ngIf",e.isPostseasonComplete()),m.zb(1),m.ac("ngIf",e.isPostseason()),m.zb(3),m.ac("ngForOf",e.globalEvents)}}function L(e,t){if(1&e&&(m.Nb(0,"h4",24),m.kc(1),m.Mb()),2&e){const e=m.Xb(4);m.zb(1),m.nc("Postseason Round ",e.streamData.games.postseason.round.roundNumber,", Day ",e.getPlayoffDay(),"")}}function j(e,t){if(1&e&&(m.Nb(0,"ion-item",19),m.jc(1,L,2,2,"h4",23),m.Mb()),2&e){const e=m.Xb(3);m.zb(1),m.ac("ngIf",e.streamData&&e.streamData.games)}}function z(e,t){if(1&e&&(m.Nb(0,"h4",24),m.kc(1),m.Mb()),2&e){const e=m.Xb(4);m.zb(1),m.nc("Season ",e.streamData.games.season.seasonNumber,", Day ",e.streamData.games.sim.day,"")}}function S(e,t){if(1&e&&(m.Nb(0,"ion-item",19),m.jc(1,z,2,2,"h4",23),m.Mb()),2&e){const e=m.Xb(3);m.zb(1),m.ac("ngIf",e.streamData&&e.streamData.games)}}function O(e,t){if(1&e&&(m.Nb(0,"span"),m.kc(1),m.Mb()),2&e){const e=m.Xb(4);m.zb(1),m.mc(" No active games for postseason day ",e.getPlayoffDay(),". ")}}function P(e,t){if(1&e&&(m.Nb(0,"span"),m.kc(1),m.Mb()),2&e){const e=m.Xb(4);m.zb(1),m.mc(" No active games for day ",e.streamData.games.sim.day,". ")}}function A(e,t){if(1&e&&(m.Nb(0,"ion-item",19),m.jc(1,O,2,1,"span",3),m.jc(2,P,2,1,"span",3),m.Mb()),2&e){const e=m.Xb(3);m.zb(1),m.ac("ngIf",e.streamData.games.isPostseason()),m.zb(1),m.ac("ngIf",!e.streamData.games.isPostseason())}}function E(e,t){if(1&e){const e=m.Ob();m.Nb(0,"ion-col",25),m.Nb(1,"app-diamond",26),m.Ub("refresh",(function(){return m.dc(e),m.Xb(3).refreshUI()})),m.Mb(),m.Mb()}if(2&e){const e=t.$implicit;m.zb(1),m.ac("game",e)}}function X(e,t){if(1&e&&(m.Nb(0,"span"),m.jc(1,j,2,1,"ion-item",20),m.jc(2,S,2,1,"ion-item",20),m.jc(3,A,3,2,"ion-item",20),m.Nb(4,"ion-grid"),m.Nb(5,"ion-row"),m.jc(6,E,2,1,"ion-col",22),m.Mb(),m.Mb(),m.Mb()),2&e){const e=m.Xb(2);m.zb(1),m.ac("ngIf",e.streamData.games.isPostseason()),m.zb(1),m.ac("ngIf",!e.streamData.games.isPostseason()),m.zb(1),m.ac("ngIf","active"===e.segment&&(!e.games||0===e.games.length)),m.zb(3),m.ac("ngForOf",e.games)("ngForTrackBy",e.gameId)}}function U(e,t){if(1&e&&(m.Nb(0,"span"),m.jc(1,F,6,3,"span",3),m.jc(2,X,7,5,"span",3),m.Mb()),2&e){const e=m.Xb();m.zb(1),m.ac("ngIf",e.showCountdown()),m.zb(1),m.ac("ngIf",!e.showCountdown())}}const x=[{path:"",component:(()=>{class e{constructor(e,t,n,s,i){this.stream=e,this.database=t,this.loadingController=n,this.platform=s,this.settings=i,this.streamData=new h.a({}),this.games=[],this.segment="all",this.ready=!1,this.errors=0,this.lastUpdate=Date.now(),this.filterVisible=!1,this.stale=!1,this.staleThreshold=3e4,this.keepAwake=!1}get schedule(){var e,t;return(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.schedule)||[]}ngOnInit(){return Object(c.a)(this,void 0,void 0,(function*(){return yield this.platform.ready(),console.debug("LiveFeed.ngOnInit()"),this.showLoading(),this.settings.ready.finally(()=>Object(c.a)(this,void 0,void 0,(function*(){return this.segment=this.settings.segment(),yield this.startListening(),!0})))}))}ngOnDestroy(){return Object(c.a)(this,void 0,void 0,(function*(){return this.ready=!1,this.subscription&&(this.subscription.unsubscribe(),this.subscription=void 0),!0}))}scrollToTop(){return Object(c.a)(this,void 0,void 0,(function*(){this.content.scrollToTop()}))}showLoading(){return Object(c.a)(this,void 0,void 0,(function*(){this.loading=!0}))}hideLoading(){return Object(c.a)(this,void 0,void 0,(function*(){this.loading=!1,this.ready=!0}))}forceRefresh(e){setTimeout(()=>{this.stream.retry().finally(()=>{e.target.complete()})},500)}toggleSearchbar(){this.filterVisible=!this.filterVisible,console.debug("LiveFeed.toggleSearchbar(): filterVisible="+this.filterVisible)}filterList(e){return this.searchTerm=e.srcElement.value,this.refreshUI()}getActiveGames(){var e,t;return(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.schedule)?this.streamData.games.schedule.filter(e=>!e.gameComplete):[]}getActiveGameCount(){return this.getActiveGames().length}getFavoriteGames(){var e,t,n,s;return(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.schedule)?null===(s=null===(n=this.streamData)||void 0===n?void 0:n.games)||void 0===s?void 0:s.schedule.filter(e=>this.settings.isFavorite(e.homeTeam)||this.settings.isFavorite(e.awayTeam)):[]}getSegmentGames(){var e,t;console.debug("LiveFeed.getSegmentGames()");let n=[];switch(this.segment){case"all":n=(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.schedule)||[];break;case"active":n=this.getActiveGames();break;case"favorites":n=this.getFavoriteGames();break;default:console.warn("LiveFeed.getSegmentGames(): unhandled segment: "+this.segment),n=[]}const s=this.settings.favoriteTeam();return n.sort((e,t)=>{if(e.homeTeam===s||e.awayTeam===s)return-1;if(t.homeTeam===s||t.awayTeam===s)return 1;if(this.settings.isFavorite(e.homeTeam)||this.settings.isFavorite(e.awayTeam))return-1;if(this.settings.isFavorite(t.homeTeam)||this.settings.isFavorite(t.awayTeam))return 1;const n=e.homeTeamNickname,i=t.homeTeamNickname;return n<i?-1:n>i?1:0})}doCountdown(e){this.clockUpdater||(this.clockUpdater=setInterval(()=>{this.countdown=this.streamData.sim[e]()},1e3))}isRegularSeason(){var e,t;return(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.isRegularSeason())||!1}isPostseason(){var e,t;return(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.isPostseason())||!1}isPostseasonComplete(){var e,t;return(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.isPostseasonComplete())||!1}showCountdown(){const e=this.isRegularSeason(),t=this.isPostseason(),n=this.isPostseasonComplete();return e&&t?(this.doCountdown("countdownToNextPhase"),!0):n?(this.doCountdown("countdownToNextSeason"),!0):(this.clockUpdater&&(clearInterval(this.clockUpdater),this.clockUpdater=void 0,this.countdown=void 0),!1)}getWinner(){var e,t,n,s;const i=null===(s=null===(n=null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.postseason)||void 0===n?void 0:n.playoffs)||void 0===s?void 0:s.winner;return i?this.streamData.leagues.teams.find(e=>e.id===i):new d.a}getPlayoffDay(){var e,t,n,s;return(null===(s=null===(n=null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.postseason)||void 0===n?void 0:n.playoffs)||void 0===s?void 0:s.playoffDay)||0}getCountdown(){return`${this.countdown.hours} ${1===this.countdown.hours?"hour":"hours"}, ${this.countdown.minutes} ${1===this.countdown.minutes?"minute":"minutes"}, ${this.countdown.seconds} ${1===this.countdown.seconds?"second":"seconds"}`}refreshUI(){console.debug("LiveFeed.refreshUI()");let e=this.getSegmentGames();return this.searchTerm&&this.searchTerm.length>=2&&(e=e.filter(e=>e.homeTeamName.toLowerCase().indexOf(this.searchTerm.toLowerCase())>-1||e.awayTeamName.toLowerCase().indexOf(this.searchTerm.toLowerCase())>-1)),this.games=e,this.games}segmentChanged(e){e&&e.detail&&e.detail.value&&(this.segment=e.detail.value,this.settings.setSegment(this.segment)),console.debug("LiveFeed.segmentChanged():",e),this.refreshUI()}checkStale(){const e=this.stale;if(this.games&&this.games.length>0){const e=this.games.find(e=>!e.gameComplete);this.stale=!!e&&this.lastUpdate+this.staleThreshold<Date.now()}console.debug(`LiveFeed.checkStale(): ${e} -> ${this.stale}`)}checkDisableSleep(){console.debug("LiveFeed.checkDisableSleep()");const e=this.settings.disableSleep();if(l.a.KeepAwake)try{e&&this.getActiveGameCount()>0?this.keepAwake||(console.debug("LiveFeed.checkDisableSleep(): keeping awake"),this.keepAwake=!0,l.a.KeepAwake.keepAwake()):this.keepAwake&&(console.debug("LiveFeed.checkDisableSleep(): allowing sleep"),this.keepAwake=!1,l.a.KeepAwake.allowSleep())}catch(t){console.error("An error occurred setting keep-awake status.",t)}}onEvent(e){return Object(c.a)(this,void 0,void 0,(function*(){if(console.debug("LiveFeed.onEvent()"),e&&e instanceof ErrorEvent)return console.warn("LiveFeed.onEvent(): got an error:",e),void this.onError(e);const t=e;this.lastUpdate=Date.now(),console.debug("LiveFeed.lastUpdate()",this.lastUpdate),setTimeout(()=>{this.errors=0,this.checkStale()},1e3);for(const e of Object.keys(t.data))this.streamData.data[e]=t.data[e];console.debug("LiveFeed.onEvent(): current data:",this.streamData),this.checkDisableSleep(),this.refreshUI(),this.hideLoading()}))}onError(e){console.debug("LiveFeed.onError():",e),this.hideLoading(),setTimeout(()=>{this.errors++,this.checkStale()},1e3)}startListening(){return Object(c.a)(this,void 0,void 0,(function*(){console.debug("LiveFeed.startListening(): opening event stream to blaseball.com"),this.showLoading(),this.subscription=yield this.stream.subscribe(e=>{this.onEvent(e)},e=>{this.onError(e)}),this.database.globalEvents().then(e=>{this.globalEvents=e.filter(e=>null===e.expire),setTimeout(()=>{const e=document.getElementById("marquee");e&&(new u.a(e),setTimeout(()=>{e.setAttribute("style","visibility: visible")},200))},1e3)})}))}gameId(e,t){return t&&t.id?t.id:String(e)}}return e.\u0275fac=function(t){return new(t||e)(m.Kb(f.a),m.Kb(g.a),m.Kb(s.Ab),m.Kb(s.Eb),m.Kb(v.a))},e.\u0275cmp=m.Eb({type:e,selectors:[["app-live-feed"]],viewQuery:function(e,t){var n;1&e&&m.pc(s.r,!0),2&e&&m.cc(n=m.Vb())&&(t.content=n.first)},decls:13,vars:5,consts:[[3,"translucent"],["color","primary",3,"click"],["slot","secondary"],[4,"ngIf"],["slot","fixed",3,"ionRefresh"],["pullingIcon","baseball-outline"],["name","default"],["debounce","200","showCancelButton","focus",3,"value","ionInput",4,"ngIf"],["slot","primary"],[3,"value","ionChange"],["value","all"],["value","active"],["value","favorites"],[3,"click"],["name","search-outline"],["debounce","200","showCancelButton","focus",3,"value","ionInput"],["id","marquee","data-speed","1"],[1,"marquee"],["class","marquee-item",4,"ngFor","ngForOf"],["lines","none"],["lines","none",4,"ngIf"],[1,"marquee-item"],["size","12",4,"ngFor","ngForOf","ngForTrackBy"],["class","ion-no-margin",4,"ngIf"],[1,"ion-no-margin"],["size","12"],["prefix","live-diamond",3,"game","refresh"]],template:function(e,t){1&e&&(m.Nb(0,"ion-header",0),m.Nb(1,"ion-toolbar",1),m.Ub("click",(function(){return t.scrollToTop()})),m.Nb(2,"ion-title"),m.kc(3," Blases Loaded "),m.Mb(),m.Nb(4,"ion-buttons",2),m.jc(5,y,2,0,"ion-button",3),m.Mb(),m.Mb(),m.jc(6,w,17,2,"ion-toolbar",3),m.Mb(),m.Nb(7,"ion-content"),m.Nb(8,"ion-refresher",4),m.Ub("ionRefresh",(function(e){return t.forceRefresh(e)})),m.Nb(9,"ion-refresher-content",5),m.Lb(10,"ion-spinner",6),m.Mb(),m.Mb(),m.jc(11,k,1,1,"ion-searchbar",7),m.jc(12,U,3,2,"span",3),m.Mb()),2&e&&(m.ac("translucent",!0),m.zb(5),m.ac("ngIf",t.loading||t.stale),m.zb(1),m.ac("ngIf",t.ready&&!t.showCountdown()),m.zb(5),m.ac("ngIf",t.filterVisible),m.zb(1),m.ac("ngIf",t.ready))},directives:[s.y,s.wb,s.ub,s.i,i.t,s.r,s.X,s.Y,s.mb,s.h,s.z,s.fb,s.Hb,s.gb,s.K,s.eb,s.Ib,i.s,s.E,s.x,s.db,s.q,p.a],styles:[".danger[_ngcontent-%COMP%]{color:#fff;background-color:var(--ion-color-danger);text-align:center;padding:4em}.danger[_ngcontent-%COMP%]   .big[_ngcontent-%COMP%]{font-size:200%;font-weight:700}ion-item[_ngcontent-%COMP%], ion-searchbar[_ngcontent-%COMP%]{transition:.1s ease-in-out}#marquee[_ngcontent-%COMP%]{visibility:hidden}.marquee[_ngcontent-%COMP%]{position:absolute;bottom:0;overflow:hidden;white-space:nowrap;padding:.5em 0}.marquee-item[_ngcontent-%COMP%]{display:inline-block}"]}),e})()}];let q=(()=>{class e{}return e.\u0275mod=m.Ib({type:e}),e.\u0275inj=m.Hb({factory:function(t){return new(t||e)},imports:[[r.l.forChild(x)],r.l]}),e})(),G=(()=>{class e{}return e.\u0275mod=m.Ib({type:e}),e.\u0275inj=m.Hb({factory:function(t){return new(t||e)},imports:[[s.yb,i.c,o.e,q,a.a]]}),e})()}}]);