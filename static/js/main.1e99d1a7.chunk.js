(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{50:function(e,a,t){e.exports=t.p+"static/media/logo.02a9430b.svg"},54:function(e,a,t){e.exports=t.p+"static/media/no_foto.fcfc35e0.jpg"},60:function(e,a,t){e.exports=t(76)},69:function(e,a,t){},70:function(e,a,t){},72:function(e,a,t){},74:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(14),l=t.n(c),i=t(22),o=t(8),m=t(19),s=t(7),u={sortBy:"popularity.desc",moviesGenre:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"}],moviesGenreActive:[],sortByPrimaryReleaseYear:null,moviesWillWatch:[716333,578013,654210],currentPage:1,totalPages:0},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_SORT_BY":return Object(s.a)(Object(s.a)({},e),{},{sortBy:a.payload});case"SET_MOVIES_WILLWATCH":return Object(s.a)(Object(s.a)({},e),{},{moviesWillWatch:a.payload});case"SET_TOTAL_PAGES":return Object(s.a)(Object(s.a)({},e),{},{totalPages:a.payload});case"SET_CURRENT_PAGE":return Object(s.a)(Object(s.a)({},e),{},{currentPage:a.payload});case"SET_MOVIES_GENRE_ACTIVE":return Object(s.a)(Object(s.a)({},e),{},{moviesGenreActive:a.payload});case"SET_SORT_BY_PRIMARY_RELEASE_YEAR":return Object(s.a)(Object(s.a)({},e),{},{sortByPrimaryReleaseYear:a.payload});default:return e}},E={items:[],isLoaded:!1,selectedMovieObj:{}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_MOVIES":return Object(s.a)(Object(s.a)({},e),{},{items:a.payload});case"SET_SELECTED_MOVIE_OBJ":return Object(s.a)(Object(s.a)({},e),{},{selectedMovieObj:a.payload});default:return e}},p=Object(m.b)({filters:d,movies:v}),g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,b=Object(m.c)(p,g()),f=t(5),_=t(84),y=(t(69),t(59)),h=t(3),O=t.n(h),N=(t(70),function(e){var a=e.src,t=e.alt,n=e.className,c=e.width,l=e.height,i=e.circle,o=Object(y.a)(e,["src","alt","className","width","height","circle"]),m=O()(n,{circle:i});return a||(a="https://via.placeholder.com/".concat(c,"x").concat(l)),r.a.createElement("img",Object.assign({src:a,alt:t,className:m,width:c,height:l},o))});N.defaultProps={src:"",alt:"image",width:"",height:"",circle:!1,className:""};var j=N,S=t(50),T=t.n(S),C=function(){return r.a.createElement("div",{className:"header d-flex align-items-center"},r.a.createElement("div",{className:"container"},r.a.createElement(_.a,{className:"navbar d-flex justify-content-between align-items-center"},r.a.createElement("a",{className:"navbar-item d-flex",href:"/movie-base/"},r.a.createElement(j,{src:T.a,alt:"logo",width:80,height:80})))))},A="https://api.themoviedb.org/3/",x="e087dbd99b6b5cf5949d0943b02906a5",R=t(34),k=t(82),P=t(78),B=function(e){return{type:"SET_CURRENT_PAGE",payload:e}},w=function(e){return{type:"SET_MOVIES_GENRE_ACTIVE",payload:e}},I=function(e){var a=e.onChangeSortBy,t=e.onChangeYear,n=Object(o.b)(),c=Object(o.c)((function(e){return e.filters})),l=c.moviesGenre,i=c.moviesGenreActive,m=c.totalPages,s=c.currentPage,u=function(){for(var e=[],a=(new Date).getFullYear();a>1970;a--)e.push(a);return e}().map((function(e){return r.a.createElement("option",{key:e,value:e},e)}));return r.a.createElement("div",{className:"card"},r.a.createElement(k.a,{className:"p-2"},r.a.createElement("h3",{className:"card-top"},"Filters"),r.a.createElement("div",{className:"pb-3"},r.a.createElement(k.a.Label,null,"Sort By:"),r.a.createElement(k.a.Control,{as:"select",onChange:a},[{id:"popularity.desc",name:"Popularity \u2193"},{id:"popularity.asc",name:"Popularity \u2191"},{id:"release_date.desc",name:"Release Date \u2193"},{id:"release_date.asc",name:"Release Date \u2191"},{id:"vote_average.desc",name:"Vote \u2193"},{id:"vote_average.asc",name:"Vote \u2191"},{id:"original_title.asc",name:"Title A-Z"},{id:"original_title.desc",name:"Title Z-A"}].map((function(e){return r.a.createElement("option",{key:e.name,value:e.id},e.name)})))),r.a.createElement("div",{className:"pb-3"},r.a.createElement(k.a.Label,{className:""},"Release Year:"),r.a.createElement(k.a.Control,{as:"select",onChange:t},r.a.createElement("option",null,"\u0421hoose year:"),u)),r.a.createElement("div",{className:"pb-3"},r.a.createElement(k.a.Label,null,"\u0421hoose genre:"),r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:""},l.map((function(e){var a=e.name,t=e.id,c=-1!==i.indexOf(t);return r.a.createElement(P.a,{key:t,className:c?"active":"",variant:"outline-primary",onClick:function(){return c?function(e){var a=i.filter((function(a){return a!==e}));n(w(a))}(t):function(e){var a=[].concat(Object(R.a)(i),[e]);n(w(a)),n(B(1))}(t)}},a)}))))),r.a.createElement("div",{className:"pagination btn-group d-flex align-items-center pt-1"},r.a.createElement(P.a,{variant:"primary",onClick:function(){s>=2&&n(B(s-1))}},"Back"),r.a.createElement("div",{className:"p-2"},"".concat(s," \u0438\u0437 ").concat(m)),r.a.createElement(P.a,{variant:"primary",onClick:function(){n(B(s+1))}},"Forward"))))},M=t(79),L=t(53),V=t(58),Y=t(42),D=t.n(Y),G=t(54),F=t.n(G),W=t(20),J=(t(48),t(72),function(e){var a=e.movie,t=Object(o.b)(),c=Object(n.useState)(!1),l=Object(V.a)(c,2),m=l[0],s=l[1],u=Object(o.c)((function(e){return e.filters.moviesWillWatch})),d=a.poster_path?r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(a.poster_path),alt:"card-img"})):r.a.createElement(j,{className:"card-img-top",src:F.a,alt:"card-img"}),E=m?r.a.createElement("button",{className:"card-item__like-btn --active",onClick:function(){s(!1),function(e){u.filter((function(a){return a.id!==e.id}))}(a)}},r.a.createElement(D.a,{className:"",name:"heart",size:"1x",style:{color:"rgb(27, 105, 217)"}})):r.a.createElement("button",{className:"card-item__like-btn",onClick:function(){s(!0),function(e){var a=[].concat(Object(R.a)(u),[e.id]);t({type:"SET_MOVIES_WILLWATCH",payload:a})}(a)}},r.a.createElement(D.a,{className:"",name:"heart",size:"1x",style:{color:"rgb(27, 105, 217)"}}));return r.a.createElement("div",{className:"card"},r.a.createElement(M.a,{className:"card-item"},r.a.createElement(L.a,{xs:12,lg:12,className:""},r.a.createElement(i.b,{to:"/movie-base/movie-page/",onClick:function(){t(function(e){return{type:"SET_SELECTED_MOVIE_OBJ",payload:e}}(a))}},d),r.a.createElement("div",null,r.a.createElement("h5",{className:"card-title pt-2"},a.title),r.a.createElement("div",{className:"card__progressbar",style:{width:50,height:50}},r.a.createElement(W.a,{className:"CircularProgressbar",background:!0,backgroundPadding:6,value:10*a.vote_average,text:"".concat(10*a.vote_average,"%"),strokeWidth:9,styles:Object(W.b)({backgroundColor:"#FFFFFF",textColor:"#1B69D9",pathColor:"#1B69D9",trailColor:""})})),E))))}),K=function(e){e.removeMovie;var a=Object(o.c)((function(e){return e.movies.items}));return r.a.createElement(M.a,{className:"movies-list"},a.map((function(e){return r.a.createElement(L.a,{xs:6,md:6,lg:4,className:"mb-4",key:e.id},r.a.createElement(J,{movie:e}))})))},U=t(80),z=function(){var e=Object(o.b)(),a=Object(o.c)((function(e){return e.filters})),t=a.sortBy,c=a.moviesGenre,l=a.currentPage,i=a.sortByPrimaryReleaseYear,m=a.moviesGenreActive;Object(n.useEffect)((function(){fetch("".concat(A,"discover/movie?api_key=").concat(x,"&sort_by=").concat(t,"&page=").concat(l,"&with_genres=").concat(m,"&primary_release_year=").concat(i)).then((function(e){return e.json()})).then((function(a){e({type:"SET_MOVIES",payload:a.results}),e({type:"SET_TOTAL_PAGES",payload:a.total_pages})})),fetch("".concat(A,"genre/movie/list?api_key=").concat(x)).then((function(e){return e.json()})).then((function(a){return e({type:"SET_MOVIES_GENRE",payload:a.genres})}))}),[t,l,i,m,c]);return r.a.createElement(U.a,null,r.a.createElement(M.a,{className:"pt-2"},r.a.createElement(L.a,{xs:12,sm:12,md:3,lg:3},r.a.createElement(I,{onChangeSortBy:function(a){return t=a.target.value,void e(function(e){return{type:"SET_SORT_BY",payload:e}}(t));var t},onChangeYear:function(a){return t=a.target.value,void e(function(e){return{type:"SET_SORT_BY_PRIMARY_RELEASE_YEAR",payload:e}}(t));var t}})),r.a.createElement(L.a,{xs:12,sm:12,md:9,lg:9},r.a.createElement(K,null))))},H=function(e){var a=e.movie;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,a.release_date),r.a.createElement("div",null,a.original_language))},X=t(83),Z=t(81),q=(t(74),function(){var e=Object(o.c)((function(e){return e.movies.selectedMovieObj}));return console.log(e),r.a.createElement(U.a,null,r.a.createElement(M.a,null,r.a.createElement(L.a,{xs:12,sm:12,md:3,lg:3},r.a.createElement(j,{className:"movie-page__img",src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:"card-img"})),r.a.createElement(L.a,{xs:12,sm:12,md:9,lg:9},r.a.createElement("h2",null,e.title),r.a.createElement("div",{className:"d-flex"},r.a.createElement(W.a,{className:"circular-progressbar__card",value:10*e.vote_average,text:"".concat(10*e.vote_average,"%"),strokeWidth:7,styles:Object(W.b)({textColor:"#1B69D9",pathColor:"#1B69D9",trailColor:""})}),r.a.createElement("div",null,"\u043b\u0430\u0439\u043a \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442")),r.a.createElement("p",null,e.overview))),r.a.createElement("div",null,r.a.createElement(X.a,{defaultActiveKey:"profile",id:"uncontrolled-tab-example"},r.a.createElement(Z.a,{eventKey:"home",title:"Details"},r.a.createElement(H,{movie:e})),r.a.createElement(Z.a,{eventKey:"profile",title:"Video"},r.a.createElement(j,null)),r.a.createElement(Z.a,{eventKey:"contact",title:"Actors"},r.a.createElement(j,null)))))}),Q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement(f.a,{path:"/movie-base/",component:z,exact:!0}),r.a.createElement(f.a,{path:"/movie-base/movie-page/",component:q,exact:!0}))};l.a.render(r.a.createElement(i.a,null,r.a.createElement(o.a,{store:b},r.a.createElement(Q,null))),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.1e99d1a7.chunk.js.map