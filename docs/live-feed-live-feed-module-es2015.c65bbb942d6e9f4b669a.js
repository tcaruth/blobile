(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{v2dp:function(e,t,i){"use strict";i.r(t),i.d(t,"LiveFeedPageModule",function(){return M});var n=i("TEn/"),s=i("ofXK"),o=i("3Pt+"),a=i("Uyg3"),r=i("tyNb"),c=i("mrSG"),d=i("gcOT");class l{constructor(e){if("object"==typeof e)this.el=e;else{if("string"!=typeof e)throw new TypeError("Marquee accepts either a HTML Element (object) or a class/id to query (string).");this.el=document.querySelector(e)}this.sign=this.el.children[0],this.RAF=null,this.offset=this.el.offsetWidth,this.speed=this.el.dataset.speed||1,this.onResize=this.getSignWidth.bind(this),this.styleElements(),this.init()}init(){this.getSignWidth(),this.draw(),window.addEventListener("resize",this.onResize)}styleElements(){this.el.style.display="flex",this.sign.style.display="inline-flex"}getSignWidth(){this.signWidth=this.sign.clientWidth}draw(){const e=()=>{this.RAF=requestAnimationFrame(e),-this.offset>=this.signWidth&&this.reset(),this.offset=this.offset-this.speed,this.sign.style.transform=`translate3d(${this.offset}px, 0, 0)`};requestAnimationFrame(e)}stop(){cancelAnimationFrame(this.RAF)}reset(){this.offset=this.el.offsetWidth,this.sign.style.transform=`translate3d(${this.offset}px, 0, 0)`}destroy(){this.stop(),window.removeEventListener("resize",this.onResize)}}var h=i("+BjT"),u=i("cHMN"),b=i("fXoL"),m=i("N1zj"),g=i("J+wX"),f=i("BTjV"),v=i("mGeP"),p=i("9Pn0");function w(e,t){1&e&&(b.Ob(0,"ion-button"),b.Mb(1,"ion-spinner"),b.Nb())}function O(e,t){if(1&e){const e=b.Pb();b.Ob(0,"ion-toolbar"),b.Ob(1,"ion-buttons",8),b.Ob(2,"ion-button"),b.Mb(3,"ion-icon"),b.Nb(),b.Nb(),b.Ob(4,"ion-segment",9),b.Wb("ionChange",function(t){return b.gc(e),b.ac().segmentChanged(t)}),b.Ob(5,"ion-segment-button",10),b.Ob(6,"ion-label"),b.nc(7,"All"),b.Nb(),b.Nb(),b.Ob(8,"ion-segment-button",11),b.Ob(9,"ion-label"),b.nc(10),b.Nb(),b.Nb(),b.Ob(11,"ion-segment-button",12),b.Ob(12,"ion-label"),b.nc(13,"Favorites"),b.Nb(),b.Nb(),b.Nb(),b.Ob(14,"ion-buttons",2),b.Ob(15,"ion-button",13),b.Wb("click",function(){return b.gc(e),b.ac().toggleSearchbar()}),b.Mb(16,"ion-icon",14),b.Nb(),b.Nb(),b.Nb()}if(2&e){const e=b.ac();b.Ab(4),b.dc("value",e.segment),b.Ab(6),b.pc("Active (",e.getActiveGameCount(),")")}}function N(e,t){if(1&e){const e=b.Pb();b.Ob(0,"ion-searchbar",15),b.Wb("ionInput",function(t){return b.gc(e),b.ac().filterList(t)}),b.Nb()}if(2&e){const e=b.ac();b.ec("value",e.searchTerm)}}function y(e,t){if(1&e&&(b.Ob(0,"ion-item",16),b.Ob(1,"h4"),b.nc(2," The "),b.Mb(3,"app-team",21),b.nc(4," are the Champions! "),b.Nb(),b.Nb()),2&e){const e=b.ac(3);b.Ab(3),b.dc("teamColor",e.uiState.winner.mainColor)("emoji",e.uiState.winner.emoji)("name",e.uiState.winner.fullName)}}function S(e,t){if(1&e&&(b.Ob(0,"ion-item",16),b.Ob(1,"h4"),b.nc(2),b.Mb(3,"br"),b.nc(4),b.Nb(),b.Nb()),2&e){const e=b.ac(3);b.Ab(2),b.pc(" ",e.uiState.countdownNotice," "),b.Ab(2),b.pc(" ",e.getCountdown()," ")}}function A(e,t){1&e&&(b.Ob(0,"ion-item",16),b.Ob(1,"h4"),b.nc(2,"Next season starts in... uhh. "),b.Ob(3,"i"),b.nc(4,"*tugs collar*"),b.Nb(),b.nc(5," I mean. What "),b.Ob(6,"i"),b.nc(7,"is"),b.Nb(),b.nc(8," time, really?"),b.Nb(),b.Nb())}function T(e,t){if(1&e&&(b.Ob(0,"div",22),b.nc(1),b.Nb()),2&e){const e=t.$implicit;b.Ab(1),b.pc(" ",e.msg,"... \xa0 \xa0 \xa0 ")}}function k(e,t){if(1&e&&(b.Ob(0,"span"),b.Ob(1,"ion-item",16),b.Ob(2,"h4"),b.nc(3),b.Nb(),b.Nb(),b.mc(4,y,5,3,"ion-item",17),b.mc(5,S,5,2,"ion-item",17),b.mc(6,A,9,0,"ion-item",17),b.Ob(7,"div",18),b.Ob(8,"div",19),b.mc(9,T,2,1,"div",20),b.Nb(),b.Nb(),b.Nb()),2&e){const e=b.ac(2);b.Ab(3),b.oc(e.uiState.notice),b.Ab(1),b.dc("ngIf",e.uiState.winner),b.Ab(1),b.dc("ngIf",e.uiState.countdownNotice&&e.countdown&&e.countdown.diff>=0),b.Ab(1),b.dc("ngIf",e.uiState.countdownNotice&&e.countdown&&e.countdown.diff<0),b.Ab(3),b.dc("ngForOf",e.globalEvents)}}function F(e,t){if(1&e){const e=b.Pb();b.Ob(0,"ion-col",25),b.Ob(1,"app-diamond",26),b.Wb("refresh",function(){return b.gc(e),b.ac(4).refreshUI()}),b.Nb(),b.Nb()}if(2&e){const e=t.$implicit;b.Ab(1),b.dc("game",e)}}function I(e,t){if(1&e&&(b.Ob(0,"span"),b.Ob(1,"ion-grid",23),b.Ob(2,"ion-row"),b.mc(3,F,2,1,"ion-col",24),b.Nb(),b.Nb(),b.Nb()),2&e){const e=b.ac(3);b.Ab(3),b.dc("ngForOf",e.streamData.fights.bossFights)("ngForTrackBy",e.gameId)}}function L(e,t){if(1&e&&(b.Ob(0,"h4",28),b.nc(1),b.Nb()),2&e){const e=b.ac(5);b.Ab(1),b.oc(e.uiState.seasonHeader)}}function D(e,t){if(1&e&&(b.Ob(0,"ion-item",16),b.mc(1,L,2,1,"h4",27),b.Nb()),2&e){const e=b.ac(4);b.Ab(1),b.dc("ngIf",e.streamData&&e.streamData.games)}}function E(e,t){if(1&e&&(b.Ob(0,"ion-item",16),b.nc(1),b.Nb()),2&e){const e=b.ac(4);b.Ab(1),b.pc(" No active games for day ",e.streamData.games.sim.day,". ")}}function C(e,t){if(1&e){const e=b.Pb();b.Ob(0,"ion-col",25),b.Ob(1,"app-diamond",26),b.Wb("refresh",function(){return b.gc(e),b.ac(4).refreshUI()}),b.Nb(),b.Nb()}if(2&e){const e=t.$implicit;b.Ab(1),b.dc("game",e)}}function P(e,t){if(1&e&&(b.Ob(0,"span"),b.mc(1,D,2,1,"ion-item",17),b.mc(2,E,2,1,"ion-item",17),b.Ob(3,"ion-grid",23),b.Ob(4,"ion-row"),b.mc(5,C,2,1,"ion-col",24),b.Nb(),b.Nb(),b.Nb()),2&e){const e=b.ac(3);b.Ab(1),b.dc("ngIf",e.uiState.seasonHeader),b.Ab(1),b.dc("ngIf","active"===e.segment&&(!e.games||0===e.games.length)),b.Ab(3),b.dc("ngForOf",e.games)("ngForTrackBy",e.gameId)}}function W(e,t){if(1&e&&(b.Ob(0,"span"),b.mc(1,I,4,2,"span",3),b.mc(2,P,6,4,"span",3),b.Nb()),2&e){const e=b.ac(2);b.Ab(1),b.dc("ngIf",e.phase===e.PHASES.BOSS_FIGHT),b.Ab(1),b.dc("ngIf",e.phase!==e.PHASES.BOSS_FIGHT)}}function R(e,t){if(1&e&&(b.Ob(0,"span"),b.mc(1,k,10,5,"span",3),b.mc(2,W,3,2,"span",3),b.Nb()),2&e){const e=b.ac();b.Ab(1),b.dc("ngIf",e.uiState.notice),b.Ab(1),b.dc("ngIf",!e.uiState.notice)}}const U=[{path:"",component:(()=>{class e{constructor(e,t,i,n,s){this.stream=e,this.database=t,this.loadingController=i,this.platform=n,this.settings=s,this.streamData=new h.a({}),this.games=[],this.segment="all",this.ready=!1,this.errors=0,this.lastUpdate=Date.now(),this.filterVisible=!1,this.stale=!1,this.staleThreshold=3e4,this.keepAwake=!1,this.PHASES=u.a,this.uiState={}}get schedule(){var e,t;return(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.schedule)||[]}ngOnInit(){return Object(c.a)(this,void 0,void 0,function*(){return yield this.platform.ready(),yield this.settings.ready,console.debug("LiveFeed.ngOnInit()"),this.showLoading(),this.segment=this.settings.segment(),yield this.startListening(),!0})}ngOnDestroy(){return Object(c.a)(this,void 0,void 0,function*(){return this.ready=!1,this.subscription&&(this.subscription.unsubscribe(),this.subscription=void 0),!0})}scrollToTop(){return Object(c.a)(this,void 0,void 0,function*(){this.content.scrollToTop()})}showLoading(){return Object(c.a)(this,void 0,void 0,function*(){this.loading=!0})}hideLoading(){return Object(c.a)(this,void 0,void 0,function*(){this.loading=!1,this.ready=!0})}forceRefresh(e){setTimeout(()=>{this.stream.retry().finally(()=>{var t;null===(t=null==e?void 0:e.target)||void 0===t||t.complete()})},500)}toggleSearchbar(){this.filterVisible=!this.filterVisible,console.debug("LiveFeed.toggleSearchbar(): filterVisible="+this.filterVisible)}filterList(e){return this.searchTerm=e.srcElement.value,this.refreshUI()}getActiveGames(){var e,t;return(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.schedule)?this.streamData.games.schedule.filter(e=>e.inProgress):[]}getActiveGameCount(){return this.getActiveGames().length}getFavoriteGames(){var e,t,i,n;return(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.schedule)?null===(n=null===(i=this.streamData)||void 0===i?void 0:i.games)||void 0===n?void 0:n.schedule.filter(e=>this.settings.isFavorite(e.homeTeam)||this.settings.isFavorite(e.awayTeam)):[]}getSegmentGames(){var e,t;console.debug("LiveFeed.getSegmentGames()");let i=[];switch(this.segment){case"all":i=(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.schedule)||[];break;case"active":i=this.getActiveGames();break;case"favorites":i=this.getFavoriteGames();break;default:console.warn("LiveFeed.getSegmentGames(): unhandled segment: "+this.segment),i=[]}const n=this.settings.favoriteTeam();return i.sort((e,t)=>{if(e.homeTeam===n||e.awayTeam===n)return-1;if(t.homeTeam===n||t.awayTeam===n)return 1;if(this.settings.isFavorite(e.homeTeam)||this.settings.isFavorite(e.awayTeam))return-1;if(this.settings.isFavorite(t.homeTeam)||this.settings.isFavorite(t.awayTeam))return 1;const i=e.homeTeamNickname,s=t.homeTeamNickname;return i<s?-1:i>s?1:0})}doCountdown(e){this.clockUpdater||(this.clockUpdater=setInterval(()=>{this.countdown=this.streamData.sim[e]()},1e3))}getWinner(){var e,t,i,n;const s=null===(n=null===(i=null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.postseason)||void 0===i?void 0:i.playoffs)||void 0===n?void 0:n.winner;if(s){const e=this.streamData.leagues.teams.find(e=>e.id===s);return console.debug("getWinner():",e),e}}getPlayoffDay(){var e,t,i,n;return(null===(n=null===(i=null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.postseason)||void 0===i?void 0:i.playoffs)||void 0===n?void 0:n.playoffDay)||0}getCountdown(){return`${this.countdown.hours} ${1===this.countdown.hours?"hour":"hours"}, ${this.countdown.minutes} ${1===this.countdown.minutes?"minute":"minutes"}, ${this.countdown.seconds} ${1===this.countdown.seconds?"second":"seconds"}`}refreshUI(){console.debug("LiveFeed.refreshUI()");let e=this.getSegmentGames();return this.searchTerm&&this.searchTerm.length>=2&&(e=e.filter(e=>e.homeTeamName.toLowerCase().indexOf(this.searchTerm.toLowerCase())>-1||e.awayTeamName.toLowerCase().indexOf(this.searchTerm.toLowerCase())>-1)),this.games=e,this.games}segmentChanged(e){e&&e.detail&&e.detail.value&&(this.segment=e.detail.value,this.settings.setSegment(this.segment)),console.debug("LiveFeed.segmentChanged():",e),this.refreshUI()}checkStale(){const e=this.stale;if(this.games&&this.games.length>0){const e=this.games.find(e=>e.inProgress);this.stale=!!e&&this.lastUpdate+this.staleThreshold<Date.now()}console.debug(`LiveFeed.checkStale(): ${e} -> ${this.stale}`)}checkDisableSleep(){console.debug("LiveFeed.checkDisableSleep()");const e=this.settings.disableSleep();if(d.a.KeepAwake)try{e&&this.getActiveGameCount()>0?this.keepAwake||(console.debug("LiveFeed.checkDisableSleep(): keeping awake"),this.keepAwake=!0,d.a.KeepAwake.keepAwake()):this.keepAwake&&(console.debug("LiveFeed.checkDisableSleep(): allowing sleep"),this.keepAwake=!1,d.a.KeepAwake.allowSleep())}catch(t){console.error("An error occurred setting keep-awake status.",t)}}onEvent(e){return Object(c.a)(this,void 0,void 0,function*(){if(console.debug("LiveFeed.onEvent()"),e&&e instanceof ErrorEvent)return console.warn("LiveFeed.onEvent(): got an error:",e),void this.onError(e);const t=e;this.lastUpdate=Date.now(),console.debug("LiveFeed.lastUpdate()",this.lastUpdate),setTimeout(()=>{this.errors=0,this.checkStale()},1e3);for(const e of Object.keys(t.data))this.streamData.data[e]=t.data[e];console.debug("LiveFeed.onEvent(): current data:",this.streamData),this.onUpdate()})}onError(e){console.debug("LiveFeed.onError():",e),this.onUpdate(),setTimeout(()=>{this.errors++,this.checkStale()},1e3)}onUpdate(){var e,t,i,n,s,o,a,r,d,l;return Object(c.a)(this,void 0,void 0,function*(){this.checkDisableSleep(),this.refreshUI();const c={seasonHeader:void 0,notice:void 0,countdownNotice:void 0,winner:void 0};if(!this.streamData&&!this.streamData.sim)return;const h=null===(i=null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.sim)||void 0===i?void 0:i.day,b=null===(s=null===(n=this.streamData)||void 0===n?void 0:n.sim)||void 0===s?void 0:s.playOffRound,m=null===(a=null===(o=this.streamData)||void 0===o?void 0:o.sim)||void 0===a?void 0:a.phase;switch(m){case u.a.PRESEASON:case u.a.PRE_ELECTION:case u.a.POST_PRE_ELECTION:case u.a.POST_ELECTION:this.doCountdown("countdownToNextSeason"),c.notice=`Season ${this.streamData.seasonNumber} is over.`,c.countdownNotice="Next season starts in:",c.winner=this.getWinner();break;case u.a.PRE_OFFSEASON:case u.a.OFFSEASON:this.doCountdown("countdownToNextPhase"),c.notice=`Regular Season ${this.streamData.seasonNumber} is over.`,c.countdownNotice="The wildcard round starts in:";break;case u.a.POST_WILDCARD:this.doCountdown("countdownToNextPhase"),c.notice="The wildcard round is complete.",c.countdownNotice="The playoffs start in:";break;case u.a.WILDCARD:if(1===b){c.seasonHeader="Wildcard Round, Day "+h;break}case u.a.POSTSEASON:c.seasonHeader=`Postseason Round ${this.streamData.games.postseason.round.roundNumber}, Day ${h}`;break;default:c.seasonHeader=`Season ${null===(l=null===(d=null===(r=this.streamData)||void 0===r?void 0:r.games)||void 0===d?void 0:d.season)||void 0===l?void 0:l.seasonNumber}, Day ${h}`}!this.uiState.notice&&this.clockUpdater&&(clearInterval(this.clockUpdater),this.clockUpdater=void 0,this.countdown=void 0),this.phase=m,Object.assign(this.uiState,c),this.hideLoading()})}startListening(){var e;return Object(c.a)(this,void 0,void 0,function*(){console.debug("LiveFeed.startListening(): opening event stream to blaseball.com"),this.showLoading(),null===(e=this.subscription)||void 0===e||e.unsubscribe(),this.subscription=yield this.stream.subscribe(e=>{this.onEvent(e)},e=>{this.onError(e)}),this.database.globalEvents().then(e=>{this.globalEvents=e.filter(e=>null===e.expire),setTimeout(()=>{const e=document.getElementById("marquee");e&&(new l(e),setTimeout(()=>{e.setAttribute("style","visibility: visible")},200))},1e3)})})}gameId(e,t){return t&&t.id?t.id:String(e)}}return e.\u0275fac=function(t){return new(t||e)(b.Lb(m.a),b.Lb(g.a),b.Lb(n.Ab),b.Lb(n.Eb),b.Lb(f.a))},e.\u0275cmp=b.Fb({type:e,selectors:[["app-live-feed"]],viewQuery:function(e,t){if(1&e&&b.tc(n.r,!0),2&e){let e;b.fc(e=b.Xb())&&(t.content=e.first)}},decls:13,vars:4,consts:[["translucent","true"],["color","primary",3,"click"],["slot","secondary"],[4,"ngIf"],["slot","fixed",3,"ionRefresh"],["pullingIcon","baseball-outline"],["name","default"],["debounce","200","showCancelButton","focus",3,"value","ionInput",4,"ngIf"],["slot","primary"],[3,"value","ionChange"],["value","all"],["value","active"],["value","favorites"],[3,"click"],["name","search-outline"],["debounce","200","showCancelButton","focus",3,"value","ionInput"],["lines","none"],["lines","none",4,"ngIf"],["id","marquee","data-speed","1"],[1,"marquee"],["class","marquee-item",4,"ngFor","ngForOf"],["team","home",3,"teamColor","emoji","name"],[1,"marquee-item"],[2,"margin-top","0","padding-top","0"],["size","12",4,"ngFor","ngForOf","ngForTrackBy"],["size","12"],["prefix","live-diamond",3,"game","refresh"],["class","ion-no-margin",4,"ngIf"],[1,"ion-no-margin"]],template:function(e,t){1&e&&(b.Ob(0,"ion-header",0),b.Ob(1,"ion-toolbar",1),b.Wb("click",function(){return t.scrollToTop()}),b.Ob(2,"ion-title"),b.nc(3,"Blases Loaded"),b.Nb(),b.Ob(4,"ion-buttons",2),b.mc(5,w,2,0,"ion-button",3),b.Nb(),b.Nb(),b.Nb(),b.Ob(6,"ion-content"),b.mc(7,O,17,2,"ion-toolbar",3),b.Ob(8,"ion-refresher",4),b.Wb("ionRefresh",function(e){return t.forceRefresh(e)}),b.Ob(9,"ion-refresher-content",5),b.Mb(10,"ion-spinner",6),b.Nb(),b.Nb(),b.mc(11,N,1,1,"ion-searchbar",7),b.mc(12,R,3,2,"span",3),b.Nb()),2&e&&(b.Ab(5),b.dc("ngIf",t.loading||t.stale),b.Ab(2),b.dc("ngIf",t.ready&&!t.uiState.notice),b.Ab(4),b.dc("ngIf",t.filterVisible),b.Ab(1),b.dc("ngIf",t.ready))},directives:[n.y,n.wb,n.ub,n.i,s.t,n.r,n.X,n.Y,n.mb,n.h,n.z,n.fb,n.Hb,n.gb,n.K,n.eb,n.Ib,n.E,s.s,v.a,n.x,n.db,n.q,p.a],styles:[".danger[_ngcontent-%COMP%]{color:#fff;background-color:var(--ion-color-danger);text-align:center;padding:4em}.danger[_ngcontent-%COMP%]   .big[_ngcontent-%COMP%]{font-size:200%;font-weight:700}ion-item[_ngcontent-%COMP%], ion-searchbar[_ngcontent-%COMP%]{transition:.1s ease-in-out}#marquee[_ngcontent-%COMP%]{visibility:hidden}.marquee[_ngcontent-%COMP%]{position:absolute;bottom:0;overflow:hidden;white-space:nowrap;padding:.5em 0}.marquee-item[_ngcontent-%COMP%]{display:inline-block}"]}),e})()}];let j=(()=>{class e{}return e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({factory:function(t){return new(t||e)},imports:[[r.l.forChild(U)],r.l]}),e})();var $=i("o5iR");let M=(()=>{class e{}return e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({factory:function(t){return new(t||e)},imports:[[n.yb,s.c,o.e,j,a.a,$.a]]}),e})()}}]);
//# sourceMappingURL=live-feed-live-feed-module-es2015.c65bbb942d6e9f4b669a.js.map