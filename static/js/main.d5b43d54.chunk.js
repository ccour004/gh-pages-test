(this["webpackJsonpgh-pages-test"]=this["webpackJsonpgh-pages-test"]||[]).push([[0],{29:function(e,t,a){e.exports=a(40)},34:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(23),c=a.n(r),i=(a(34),a(7)),s=a(8),l=a(11),p=a(10),u=a(19),m=a(59),g=a(60),h=a(61),f=a(57),d=a(20),b=a(4),j=Object(f.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(u.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(u.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(d.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(d.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(u.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),v=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root},o.a.createElement(m.a,{position:"static"},o.a.createElement(g.a,null,o.a.createElement(h.a,{className:e.title,variant:"h6",noWrap:!0},"File Viewer")),this.props.login))}}]),a}(o.a.Component),E=Object(b.a)(j)(v),O=a(41),w=a(62),x=Object(f.a)((function(e){return{root:{flexGrow:1,"margin-right":"40px","& > *":{margin:e.spacing(1)}},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),k=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root},o.a.createElement(w.a,{container:!0,spacing:3},o.a.createElement(w.a,{item:!0,xs:!0},o.a.createElement(O.a,{className:e.paper},"xs")),o.a.createElement(w.a,{item:!0,xs:!0},o.a.createElement(O.a,{className:e.paper},"xs")),o.a.createElement(w.a,{item:!0,xs:!0},o.a.createElement(O.a,{className:e.paper},"xs"))),o.a.createElement(w.a,{container:!0,spacing:3},o.a.createElement(w.a,{item:!0,xs:!0},o.a.createElement(O.a,{className:e.paper},"xs")),o.a.createElement(w.a,{item:!0,xs:6},o.a.createElement(O.a,{className:e.paper},"xs=6")),o.a.createElement(w.a,{item:!0,xs:!0},o.a.createElement(O.a,{className:e.paper},"xs"))))}}]),a}(o.a.Component),y=Object(b.a)(x)(k),S=a(21),I=(a(39),function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={loggedIn:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return this.state.loggedIn?o.a.createElement(S.GoogleLogout,{clientId:"219412377030-n3u5qfqtce3ra4oo1i30h3krvpp20tjj.apps.googleusercontent.com",onLogoutSuccess:function(){return e.setState({loggedIn:!1})},onFailure:function(e,t){return alert("Logout failure: "+JSON.stringify(e)+"("+t+")")}}):o.a.createElement(S.GoogleLogin,{clientId:"219412377030-n3u5qfqtce3ra4oo1i30h3krvpp20tjj.apps.googleusercontent.com",onSuccess:function(t){e.setState({loggedIn:!0}),e.props.onSuccess(t)},onFailure:function(t,a){return e.props.onFailure(t,a)},accessType:"offline",scope:this.props.scope,cookiePolicy:"single_host_origin",isSignedIn:this.state.loggedIn})}}]),a}(o.a.Component)),N=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).loginSuccess=function(e){fetch("https://www.googleapis.com/drive/v3/files?key=".concat("219412377030-n3u5qfqtce3ra4oo1i30h3krvpp20tjj.apps.googleusercontent.com"),{headers:{Authorization:"Bearer ".concat(e.accessToken),Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){return n.setState({files:e.files})}))},n.state={files:[]},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(E,{login:o.a.createElement(I,{onSuccess:function(t){return e.loginSuccess(t)},onFailure:function(e,t){return alert("Login failure: "+JSON.stringify(e)+"("+t+")")},scope:"https://www.googleapis.com/auth/drive.metadata.readonly"})}),o.a.createElement(y,{files:this.state.files}))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.d5b43d54.chunk.js.map