(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{51:function(e,a,t){e.exports=t.p+"static/media/logo.02a9430b.svg"},55:function(e,a,t){e.exports=t.p+"static/media/no_foto.fcfc35e0.jpg"},61:function(e,a,t){e.exports=t(75)},70:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(14),l=t.n(r),i=t(18),o=t(8),s=t(19),m=t(6),u={sortBy:"popularity.desc",moviesGenre:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"}],moviesGenreActive:[],sortByPrimaryReleaseYear:null,moviesWillWatch:[583083],currentPage:1,totalPages:0},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_SORT_BY":return Object(m.a)(Object(m.a)({},e),{},{sortBy:a.payload});case"SET_MOVIES_WILLWATCH":return Object(m.a)(Object(m.a)({},e),{},{moviesWillWatch:a.payload});case"SET_TOTAL_PAGES":return Object(m.a)(Object(m.a)({},e),{},{totalPages:a.payload});case"SET_CURRENT_PAGE":return Object(m.a)(Object(m.a)({},e),{},{currentPage:a.payload});case"SET_MOVIES_GENRE_ACTIVE":return Object(m.a)(Object(m.a)({},e),{},{moviesGenreActive:a.payload});case"SET_SORT_BY_PRIMARY_RELEASE_YEAR":return Object(m.a)(Object(m.a)({},e),{},{sortByPrimaryReleaseYear:a.payload});default:return e}},E={items:[],isLoaded:!0,selectedMovieObj:{}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_MOVIES":return Object(m.a)(Object(m.a)({},e),{},{items:a.payload,isLoaded:!1});case"SET_LOADED":return Object(m.a)(Object(m.a)({},e),{},{isLoaded:a.payload});case"SET_SELECTED_MOVIE_OBJ":return Object(m.a)(Object(m.a)({},e),{},{selectedMovieObj:a.payload});default:return e}},p=Object(s.b)({filters:d,movies:v}),b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,g=Object(s.d)(p,b()),f=t(5),_=t(84),y=t(60),h=t(3),O=t.n(h),j=(t(70),function(e){var a=e.src,t=e.alt,n=e.className,r=e.width,l=e.height,i=e.circle,o=Object(y.a)(e,["src","alt","className","width","height","circle"]),s=O()(n,{circle:i});return c.a.createElement("img",Object.assign({src:a,alt:t,className:s,width:r,height:l},o))}),N=t(51),S=t.n(N),T=function(){return c.a.createElement("div",{className:"header d-flex align-items-center"},c.a.createElement("div",{className:"container"},c.a.createElement(_.a,{className:"navbar d-flex justify-content-between align-items-center"},c.a.createElement(i.b,{className:"navbar-item d-flex",to:"/movie-base/"},c.a.createElement(j,{src:S.a,alt:"logo",width:80,height:80})))))},k="https://api.themoviedb.org/3/",C="e087dbd99b6b5cf5949d0943b02906a5",A=t(34),R=t(82),w=t(78),x=function(e){return{type:"SET_MOVIES_WILLWATCH",payload:e}},P=function(e){return{type:"SET_CURRENT_PAGE",payload:e}},B=function(e){return{type:"SET_MOVIES_GENRE_ACTIVE",payload:e}},L=function(e){var a=e.onChangeSortBy,t=e.onChangeYear,n=Object(o.b)(),r=Object(o.c)((function(e){return e.filters})),l=r.moviesGenre,i=r.moviesGenreActive,s=r.totalPages,m=r.currentPage,u=function(){for(var e=[],a=(new Date).getFullYear();a>1970;a--)e.push(a);return e}().map((function(e){return c.a.createElement("option",{key:e,value:e},e)}));return c.a.createElement("div",{className:"card"},c.a.createElement(R.a,{className:"p-2"},c.a.createElement("h3",{className:"card-top"},"Filters"),c.a.createElement("div",{className:"pb-3"},c.a.createElement(R.a.Label,null,"Sort By:"),c.a.createElement(R.a.Control,{as:"select",onChange:a},[{id:"popularity.desc",name:"Popularity \u2193"},{id:"popularity.asc",name:"Popularity \u2191"},{id:"release_date.desc",name:"Release Date \u2193"},{id:"release_date.asc",name:"Release Date \u2191"},{id:"vote_average.desc",name:"Vote \u2193"},{id:"vote_average.asc",name:"Vote \u2191"},{id:"original_title.asc",name:"Title A-Z"},{id:"original_title.desc",name:"Title Z-A"}].map((function(e){return c.a.createElement("option",{key:e.name,value:e.id},e.name)})))),c.a.createElement("div",{className:"pb-3"},c.a.createElement(R.a.Label,{className:""},"Release Year:"),c.a.createElement(R.a.Control,{as:"select",onChange:t},c.a.createElement("option",null,"\u0421hoose year:"),u)),c.a.createElement("div",{className:"pb-3"},c.a.createElement(R.a.Label,null,"\u0421hoose genre:"),c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",{className:""},l.map((function(e){var a=e.name,t=e.id,r=-1!==i.indexOf(t);return c.a.createElement(w.a,{key:t,className:r?"active":"",variant:"outline-primary",onClick:function(){return r?function(e){var a=i.filter((function(a){return a!==e}));n(B(a))}(t):function(e){var a=[].concat(Object(A.a)(i),[e]);n(B(a)),n(P(1))}(t)}},a)}))))),c.a.createElement("div",{className:"pagination btn-group d-flex align-items-center pt-1"},c.a.createElement(w.a,{variant:"primary",onClick:function(){m>=2&&n(P(m-1))}},"Back"),c.a.createElement("div",{className:"p-2"},"".concat(m," \u0438\u0437 ").concat(s)),c.a.createElement(w.a,{variant:"primary",onClick:function(){n(P(m+1))}},"Forward"))))},F=t(79),D=t(54),I=t(45),M=t.n(I),Y=function(e){var a=e.movie,t=Object(o.b)(),n=Object(o.c)((function(e){return e.filters.moviesWillWatch})),r=n.includes(a.id)?c.a.createElement("button",{className:"like-btn --active",onClick:function(){!function(e){var a=n.filter((function(a){return a!==e.id}));console.log(a),t(x(a))}(a)}},c.a.createElement(M.a,{className:"like-btn__icon",name:"heart",style:{color:"rgb(27, 105, 217)"}})):c.a.createElement("button",{className:"like-btn",onClick:function(){!function(e){var a=[].concat(Object(A.a)(n),[e.id]);t(x(a))}(a)}},c.a.createElement(M.a,{className:"like-btn__icon",name:"heart",style:{color:"rgb(27, 105, 217)"}}));return c.a.createElement(c.a.Fragment,null,r)},G=t(21),V=(t(49),t(55)),W=t.n(V),J=function(e){var a=e.movie,t=Object(o.b)(),n=a.poster_path?c.a.createElement(c.a.Fragment,null,c.a.createElement(j,{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(a.poster_path),alt:"card-img"})):c.a.createElement(j,{className:"card-img-top",src:W.a,alt:"card-img"});return c.a.createElement("div",{className:"card"},c.a.createElement(F.a,{className:"card-item"},c.a.createElement(D.a,{xs:12,lg:12,className:""},c.a.createElement(i.b,{to:"/movie-base/movie-page/",onClick:function(){t(function(e){return{type:"SET_SELECTED_MOVIE_OBJ",payload:e}}(a))}},n),c.a.createElement("div",null,c.a.createElement("h5",{className:"card-title mt-2"},a.title),c.a.createElement("div",{className:"card__progressbar",style:{width:50,height:50}},c.a.createElement(G.a,{className:"",background:!0,backgroundPadding:6,value:10*a.vote_average,text:"".concat(10*a.vote_average,"%"),strokeWidth:9,styles:Object(G.b)({backgroundColor:"#FFFFFF",textColor:"#1B69D9",pathColor:"#1B69D9",trailColor:""})})),c.a.createElement("div",{className:"card__like-btn"},c.a.createElement(Y,{movie:a}))))))},K=function(e){e.removeMovie;var a=Object(o.c)((function(e){return e.movies.items}));return c.a.createElement(F.a,{className:"movies-list"},a.map((function(e){return c.a.createElement(D.a,{xs:6,md:6,lg:4,className:"mb-4",key:e.id},c.a.createElement(J,{movie:e}))})))},U=t(80),H=t(56),X=function(){var e=Object(o.b)(),a=Object(o.c)((function(e){return e.filters})),t=a.sortBy,r=a.moviesGenre,l=a.currentPage,i=a.sortByPrimaryReleaseYear,s=a.moviesGenreActive,m=Object(o.c)((function(e){return e.movies.isLoaded}));Object(n.useEffect)((function(){fetch("".concat(k,"discover/movie?api_key=").concat(C,"&sort_by=").concat(t,"&page=").concat(l,"&with_genres=").concat(s,"&primary_release_year=").concat(i)).then((function(e){return e.json()})).then((function(a){e((a.isLoaded,{type:"SET_LOADED",payload:!1})),e({type:"SET_MOVIES",payload:a.results}),e({type:"SET_TOTAL_PAGES",payload:a.total_pages})})),fetch("".concat(k,"genre/movie/list?api_key=").concat(C)).then((function(e){return e.json()})).then((function(a){return e({type:"SET_MOVIES_GENRE",payload:a.genres})}))}),[t,l,i,s,r]);return c.a.createElement(U.a,null,c.a.createElement(F.a,{className:"pt-2"},c.a.createElement(D.a,{xs:12,sm:12,md:3,lg:3},c.a.createElement(L,{onChangeSortBy:function(a){return t=a.target.value,void e(function(e){return{type:"SET_SORT_BY",payload:e}}(t));var t},onChangeYear:function(a){return t=a.target.value,void e(function(e){return{type:"SET_SORT_BY_PRIMARY_RELEASE_YEAR",payload:e}}(t));var t}})),c.a.createElement(D.a,{xs:12,sm:12,md:9,lg:9},m?c.a.createElement(H.a,{animation:"border",variant:"primary"}):c.a.createElement(K,null))))},Z=t(38),q=t(83),z=t(81),Q=function(e){var a=e.movie;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,a.release_date),c.a.createElement("div",null,a.original_language))},$=function(){var e=Object(o.c)((function(e){return e.movies.selectedMovieObj}));Object(n.useEffect)((function(){fetch("".concat(k,"movie/").concat(e.id,"/images?api_key=").concat(C)).then((function(e){return e.json()})).then((function(e){l(e.backdrops[0].file_path),u(e.backdrops[1].file_path)}))}),[]),Object(n.useEffect)((function(){fetch("".concat(k,"movie/").concat(e.id,"/videos?api_key=").concat(C)).then((function(e){return e.json()})).then((function(e){return p(e.results[0].key)}))}),[]);var a=Object(n.useState)(""),t=Object(Z.a)(a,2),r=t[0],l=t[1],i=Object(n.useState)(""),s=Object(Z.a)(i,2),m=s[0],u=s[1],d=Object(n.useState)(""),E=Object(Z.a)(d,2),v=E[0],p=E[1];return c.a.createElement("div",{className:"movie-page__wrapper"},c.a.createElement(U.a,null,c.a.createElement(F.a,{className:"movie-page"},c.a.createElement(D.a,{xs:12,sm:12,md:3,lg:3},c.a.createElement(j,{className:"movie-page__img",src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:"card-img"})),c.a.createElement(D.a,{xs:12,sm:12,md:9,lg:9},c.a.createElement("h2",null,e.title),c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",{className:"movie-page__progressbar",style:{width:50,height:50}},c.a.createElement(G.a,{className:"",background:!0,backgroundPadding:6,value:10*e.vote_average,text:"".concat(10*e.vote_average,"%"),strokeWidth:9,styles:Object(G.b)({backgroundColor:"#FFFFFF",textColor:"#1B69D9",pathColor:"#1B69D9",trailColor:""})})),c.a.createElement("div",null,c.a.createElement(Y,{className:"",movie:e}))),c.a.createElement("p",null,e.overview))),c.a.createElement("div",null,c.a.createElement(q.a,{defaultActiveKey:"trailer",id:"uncontrolled-tab-example"},c.a.createElement(z.a,{eventKey:"home",title:"Details"},c.a.createElement(Q,{movie:e})),c.a.createElement(z.a,{eventKey:"trailer",title:"Trailer"},c.a.createElement("iframe",{className:"",src:"https://www.youtube.com/embed/"+v})),c.a.createElement(z.a,{eventKey:"posters",title:"Posters"},c.a.createElement("div",null,c.a.createElement(j,{className:"",src:"https://image.tmdb.org/t/p/w500".concat(r),alt:"img"}),c.a.createElement(j,{className:"",src:"https://image.tmdb.org/t/p/w500".concat(m),alt:"img"})))))))},ee=(t(74),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(T,null),c.a.createElement(f.a,{path:"/movie-base/",component:X,exact:!0}),c.a.createElement(f.a,{path:"/movie-base/movie-page/",component:$,exact:!0}))});l.a.render(c.a.createElement(i.a,null,c.a.createElement(o.a,{store:g},c.a.createElement(ee,null))),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.f4a41e02.chunk.js.map