"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[598],{166:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(416),r=t(184),s=function(e){var n,t=e.movie,s=t.poster_path,o=t.title,c=t.release_date,a=t.vote_average,d=t.overview,l=t.genres,u=t.id,h=l.map((function(e){return(0,r.jsx)(i.g$,{children:e.name},e.id)})),v=new Date(c);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(i.iR,{children:[(0,r.jsx)("div",{children:(0,r.jsx)(i.oP,{loading:"lazy",src:(n=s,"https://www.themoviedb.org/t/p/w300_and_h450_bestv2".concat(n)),alt:o})}),(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.Dx,{children:[o," ",v.getFullYear()]}),(0,r.jsxs)(i.BE,{children:["User score ",Number.parseInt(100*a/10),"%"]}),(0,r.jsx)(i.Ju,{children:"Overview"}),(0,r.jsx)(i.g2,{children:d}),(0,r.jsx)(i.WZ,{children:"Genres"}),(0,r.jsx)(i.CJ,{children:h}),(0,r.jsx)(i.j0,{children:"Additional information"}),(0,r.jsx)(i.XV,{to:"/movies/".concat(u,"/cast"),children:"Cast"}),(0,r.jsx)(i.Yg,{to:"/movies/".concat(u,"/reviews"),children:"Reviews"})]})]})})}},598:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var i=t(439),r=t(791),s=t(689),o=t(263),c=t(166),a=t(416),d=t(184),l=function(e){var n,t,i=null!==(n=null===(t=e.location.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/";return(0,d.jsx)(a.jp,{type:"button",children:(0,d.jsx)(a.On,{state:{from:i},to:"/",children:"Back"})})},u=function(){var e=(0,r.useState)(null),n=(0,i.Z)(e,2),t=n[0],a=n[1],u=(0,s.UO)().movieId,h=(0,s.TH)();if((0,r.useEffect)((function(){o.Z.get("https://api.themoviedb.org/3/movie/".concat(u,"?api_key=542013762b3531b404b15130444dfd0b")).then((function(e){return a(e.data)})).catch((function(e){return console.log(e)}))}),[u]),t)return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l,{location:h}),(0,d.jsx)(c.Z,{movie:t}),(0,d.jsx)(s.j3,{})]})}}}]);
//# sourceMappingURL=598.556e24ad.chunk.js.map