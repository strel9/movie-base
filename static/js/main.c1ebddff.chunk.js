(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/logo.02a9430b.svg"},30:function(e,t,a){e.exports=a.p+"static/media/no_foto.fcfc35e0.jpg"},33:function(e,t,a){e.exports=a(45)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),c=a.n(i),o=a(5),l=a(6),s=a(8),m=a(7),v=(a(38),a(50)),u=a(16),h=a(3),d=a.n(h),g=(a(39),function(e){var t=e.src,a=e.alt,n=e.className,i=e.width,c=e.height,o=e.circle,l=Object(u.a)(e,["src","alt","className","width","height","circle"]),s=d()(n,{circle:o});return t||(t="https://via.placeholder.com/".concat(i,"x").concat(c)),r.a.createElement("img",Object.assign({src:t,alt:a,className:s,width:i,height:c},l))});g.defaultProps={src:"",alt:"image",width:"",height:"",circle:!1,className:""};var p=g,f=(a(40),function(e){var t=e.id,a=e.className,n=e.label,i=e.error,c=Object(u.a)(e,["id","className","label","error"]),o=d()("input",a,{error:i});return r.a.createElement("div",{className:"inputWrapper"},r.a.createElement("div",{className:"labelsWrapper"},n&&r.a.createElement("label",{className:"inputLabel",htmlFor:t},n),c.required&&r.a.createElement("span",{className:"inputRequired"},"Required")),r.a.createElement("input",Object.assign({name:t,id:t,className:o},c)),i&&r.a.createElement("span",{className:"inputError"},i))});f.defaultProps={className:"",label:"",error:""};var E=a(26),b=a.n(E),y=function(){return r.a.createElement("div",{className:"header d-flex align-items-center"},r.a.createElement("div",{className:"container"},r.a.createElement(v.a,{className:"navbar d-flex justify-content-between align-items-center"},r.a.createElement("a",{className:"navbar-item d-flex",href:"/movie-base/"},r.a.createElement(p,{src:b.a,alt:"logo",width:80,height:80})))))},W=a(22),M=a(49),N=a(51),_=function(e){var t=e.moviesWillWatch,a=e.moviesGenre,n=e.moviesGenreActive,i=e.currentPage,c=e.total_pages,o=e.addMoviesGenre,l=e.removeMoviesGenre,s=e.onChangePopularity,m=e.onChangeYear,v=e.paginationIncrease,u=e.paginationDecrease,h=function(){for(var e=[],t=(new Date).getFullYear();t>1970;t--)e.push(t);return e}();return r.a.createElement("div",{className:"card"},r.a.createElement("div",null,"Will watch: ",t.length),r.a.createElement("h3",null,"Filters"),r.a.createElement(M.a,null,r.a.createElement("div",null,r.a.createElement(M.a.Label,null,"Sort By:"),r.a.createElement(M.a.Control,{as:"select",onChange:s},["popularity.desc","revenue.desc","vote_average.desc"].map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",null,r.a.createElement(M.a.Label,null,"Release Year:"),r.a.createElement(M.a.Control,{as:"select",onChange:m},r.a.createElement("option",null,"\u0421hoose year:"),h.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",null,r.a.createElement(M.a.Label,null,"\u0421hoose genre:"),r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",null,a.map((function(e){var t=e.name,a=e.id,i=-1!==n.indexOf(a);return r.a.createElement(N.a,{key:a,className:i?"active":"",variant:"outline-primary",onClick:function(){return i?l(a):o(a)}},t)}))))),r.a.createElement(N.a,{variant:"primary"},"Clear filter"),r.a.createElement("div",{className:"pagination"},r.a.createElement("div",{className:"btn-group d-flex align-items-center"},r.a.createElement(N.a,{variant:"primary",onClick:function(){return u()}},"Back"),r.a.createElement("div",null,"".concat(i," \u0438\u0437 ").concat(c)),r.a.createElement(N.a,{variant:"primary",onClick:function(){v()}},"Forward")))))},G=a(47),j=a(29),C=a(18),P=a.n(C),k=a(30),O=a.n(k),w=a(21),x=(a(44),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={willWatch:!1},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.movie,n=t.removeMovie,i=t.addMovieToWillWatch,c=t.removeMovieToWillWatch;return r.a.createElement(G.a,{className:""},r.a.createElement(j.a,{xs:12,lg:6,className:""},a.poster_path?r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{className:"card-img",src:"https://image.tmdb.org/t/p/w500".concat(a.poster_path),alt:"card-img"})):r.a.createElement(p,{className:"card-img-top",src:O.a,alt:"card-img"})),r.a.createElement(j.a,{xs:12,lg:6,className:"card-body"},r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement(N.a,{className:"btn btn-light",onClick:n.bind(null,a)},r.a.createElement(P.a,{className:"",name:"trash",size:"1x",style:{color:"rgb(27, 105, 217)"}})," "),r.a.createElement("div",{style:{width:50,height:50}},r.a.createElement(w.a,{value:10*a.vote_average,text:"".concat(10*a.vote_average,"%"),strokeWidth:7,styles:Object(w.b)({textColor:"#1B69D9",pathColor:"#1B69D9",trailColor:""})})),this.state.willWatch?r.a.createElement(N.a,{variant:"danger",onClick:function(){e.setState({willWatch:!1}),c(a)}},r.a.createElement(P.a,{className:"",name:"heart",size:"1x",style:{color:"rgb(27, 105, 217)"}})):r.a.createElement(N.a,{variant:"light",onClick:function(){e.setState({willWatch:!0}),i(a)}},r.a.createElement(P.a,{className:"",name:"heart",size:"1x",style:{color:"rgb(27, 105, 217)"}}))),r.a.createElement("h5",{className:"card-title"},a.title),r.a.createElement("h6",{className:"mb-0"},"Imbd: ",a.vote_average),r.a.createElement(N.a,{variant:"outline-primary",onClick:function(){console.log("click")}},"More info...")))}}]),a}(n.Component)),S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.movies,a=(e.sort_by,e.updateSortBy,e.removeMovie),n=e.addMovieToWillWatch,i=e.removeMovieToWillWatch;return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,null,t.map((function(e){return r.a.createElement(j.a,{xs:6,md:6,className:"card mb-4",key:e.id},r.a.createElement(x,{movie:e,removeMovie:a,addMovieToWillWatch:n,removeMovieToWillWatch:i}))}))))}}]),a}(n.Component);var B=function(){return r.a.createElement("div",null)},A=a(48),T="https://api.themoviedb.org/3/",Y="e087dbd99b6b5cf5949d0943b02906a5",D=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],moviesGenre:[],moviesGenreActive:[],moviesWillWatch:[],currentPage:1,total_pages:null,sort_by:"popularity.desc",sortByPrimaryReleaseYear:null},e.getMovie=function(){var t=e.state,a=t.sort_by,n=t.currentPage,r=t.moviesGenreActive,i=t.sortByPrimaryReleaseYear;fetch("".concat(T,"discover/movie?api_key=").concat(Y,"&sort_by=").concat(a,"&page=").concat(n,"&with_genres=").concat(r,"&primary_release_year=").concat(i)).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.results,total_pages:t.total_pages})}))},e.getMovieGenre=function(){fetch("".concat(T,"genre/movie/list?api_key=").concat(Y)).then((function(e){return e.json()})).then((function(t){return e.setState({moviesGenre:t.genres})}))},e.removeMovie=function(t){var a=e.state.movies.filter((function(e){return e.id!==t.id}));e.setState({movies:a})},e.addMovieToWillWatch=function(t){var a=[].concat(Object(W.a)(e.state.moviesWillWatch),[t]);e.setState({moviesWillWatch:a})},e.removeMovieToWillWatch=function(t){var a=e.state.moviesWillWatch.filter((function(e){return e.id!==t.id}));e.setState({moviesWillWatch:a})},e.paginationIncrease=function(){var t=e.state.currentPage+1;e.setState({currentPage:t}),console.log(e.state.currentPage)},e.paginationDecrease=function(){if(e.state.currentPage>=2){console.log(e.state.currentPage);var t=e.state.currentPage-1;e.setState({currentPage:t})}},e.updateSortBy=function(t){e.setState({sort_by:t})},e.onChangePopularity=function(t){e.setState({sort_by:t})},e.onChangeYear=function(t){e.setState({sortByPrimaryReleaseYear:t})},e.addMoviesGenre=function(t){var a=[].concat(Object(W.a)(e.state.moviesGenreActive),[t]);e.setState({moviesGenreActive:a})},e.removeMoviesGenre=function(t){var a=e.state.moviesGenreActive.filter((function(e){return e!==t}));e.setState({moviesGenreActive:a})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getMovie(),this.getMovieGenre()}},{key:"componentDidUpdate",value:function(e,t){t.sort_by!==this.state.sort_by&&(this.getMovie(),this.getMovieGenre()),t.currentPage!==this.state.currentPage&&(this.getMovie(),this.getMovieGenre()),t.moviesGenreActive!==this.state.moviesGenreActive&&(this.getMovie(),this.getMovieGenre()),t.sortByPrimaryReleaseYear!==this.state.sortByPrimaryReleaseYear&&(this.getMovie(),this.getMovieGenre())}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.moviesGenre,n=e.moviesGenreActive,i=e.moviesWillWatch,c=e.currentPage,o=e.total_pages,l=e.sort_by,s=e.sort_year,m=this.onChangePopularity,v=this.onChangeYear,u=this.updateSortBy,h=this.removeMovie,d=this.addMoviesGenre,g=this.removeMoviesGenre,p=this.addMovieToWillWatch,f=this.removeMovieToWillWatch,E=this.paginationIncrease,b=this.paginationDecrease;return r.a.createElement(A.a,null,r.a.createElement(G.a,null,r.a.createElement(j.a,{xs:12,sm:12,md:3,lg:3},r.a.createElement(_,{currentPage:c,total_pages:o,moviesWillWatch:i,movies:t,moviesGenre:a,moviesGenreActive:n,addMoviesGenre:d,removeMoviesGenre:g,sort_by:l,onChangePopularity:function(e){return m(e.target.value)},onChangeYear:function(e){return v(e.target.value)},paginationIncrease:E,paginationDecrease:b})),r.a.createElement(j.a,{xs:12,sm:12,md:9,lg:9},r.a.createElement(S,{movies:t,sort_by:l,sort_year:s,updateSortBy:u,removeMovie:h,addMovieToWillWatch:p,removeMovieToWillWatch:f})),r.a.createElement(B,null)))}}]),a}(n.Component),R=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement(D,null))}}]),a}(r.a.Component);c.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.c1ebddff.chunk.js.map