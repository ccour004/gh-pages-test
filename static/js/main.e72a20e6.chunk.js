(this["webpackJsonpgh-pages-test"]=this["webpackJsonpgh-pages-test"]||[]).push([[0],{29:function(e,t,n){e.exports=n(40)},34:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(23),r=n.n(i),c=(n(34),n(10)),s=n(11),l=n(14),u=n(13),p=n(19),g=n(59),h=n(60),f=n(61),m=n(57),d=n(20),b=n(4),v=Object(m.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(p.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(p.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(d.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(d.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(p.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root},o.a.createElement(g.a,{position:"static"},o.a.createElement(h.a,null,o.a.createElement(f.a,{className:e.title,variant:"h6",noWrap:!0},"File Viewer")),this.props.login))}}]),n}(o.a.Component),w=Object(b.a)(v)(j),O=n(41),k=n(62),E=Object(m.a)((function(e){return{root:{flexGrow:1,"margin-right":"40px","& > *":{margin:e.spacing(1)}},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function y(e){var t=E();return o.a.createElement("div",{className:t.root},o.a.createElement(k.a,{container:!0,spacing:3},e.files.map((function(e){return o.a.createElement(k.a,{item:!0,xs:12},o.a.createElement(O.a,{className:t.paper},e.name))}))))}var S=n(21),I=(n(39),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={loggedIn:!1},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return this.state.loggedIn?o.a.createElement(S.GoogleLogout,{clientId:"219412377030-n3u5qfqtce3ra4oo1i30h3krvpp20tjj.apps.googleusercontent.com",onLogoutSuccess:function(){return e.setState({loggedIn:!1})},onFailure:function(e,t){return alert("Logout failure: "+JSON.stringify(e)+"("+t+")")}}):o.a.createElement(S.GoogleLogin,{clientId:"219412377030-n3u5qfqtce3ra4oo1i30h3krvpp20tjj.apps.googleusercontent.com",onSuccess:function(t){e.setState({loggedIn:!0}),e.props.onSuccess(t)},onFailure:function(t,n){return e.props.onFailure(t,n)},accessType:"offline",scope:this.props.scope,cookiePolicy:"single_host_origin",isSignedIn:this.state.loggedIn})}}]),n}(o.a.Component)),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).loginSuccess=function(e){fetch("https://www.googleapis.com/drive/v3/files?key=".concat("219412377030-n3u5qfqtce3ra4oo1i30h3krvpp20tjj.apps.googleusercontent.com"),{headers:{Authorization:"Bearer ".concat(e.accessToken),Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){console.dir(e),e&&e.files&&a.setState({files:e.files})}))},a.state={files:[]},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(w,{login:o.a.createElement(I,{onSuccess:function(t){return e.loginSuccess(t)},onFailure:function(e,t){return alert("Login failure: "+JSON.stringify(e)+"("+t+")")},scope:"https://www.googleapis.com/auth/drive.metadata.readonly"})}),o.a.createElement(y,{files:this.state.files}))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.e72a20e6.chunk.js.map