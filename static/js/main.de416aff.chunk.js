(this["webpackJsonpgh-pages-test"]=this["webpackJsonpgh-pages-test"]||[]).push([[0],{23:function(e,t,n){e.exports=n(34)},28:function(e,t,n){},29:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(7),c=n.n(r),i=(n(28),n(17)),s=n(18),l=n(21),u=n(20),p=n(53),f=n(54),g=n(55),h=n(56),m=n(15),d=(n(29),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).loginSuccess=function(e){fetch("https://www.googleapis.com/drive/v3/files?key=".concat("219412377030-n3u5qfqtce3ra4oo1i30h3krvpp20tjj.apps.googleusercontent.com"),{headers:{Authorization:"Bearer ".concat(e.accessToken),Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){return o.setState({files:e.files})}))},o.state={files:[]},o}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement(m.GoogleLogin,{clientId:"219412377030-n3u5qfqtce3ra4oo1i30h3krvpp20tjj.apps.googleusercontent.com",onSuccess:function(t){return e.loginSuccess(t)},onFailure:function(e,t){return alert("Login failure: "+JSON.stringify(e)+"("+t+")")},accessType:"offline",scope:"https://www.googleapis.com/auth/drive.metadata.readonly",cookiePolicy:"single_host_origin",isSignedIn:!0}),this.state.files!==[]?a.a.createElement("div",null,a.a.createElement(m.GoogleLogout,{clientId:"219412377030-n3u5qfqtce3ra4oo1i30h3krvpp20tjj.apps.googleusercontent.com",onLogoutSuccess:function(){return e.setState({files:[]})},onFailure:function(e,t){return alert("Logout failure: "+JSON.stringify(e)+"("+t+")")}}),a.a.createElement(p.a,null,this.state.files.map((function(e){return a.a.createElement(h.a,null,a.a.createElement(f.a,null,a.a.createElement(g.a,{primary:e.name,secondary:e.kind})))})))):a.a.createElement("div",null)))}}]),n}(a.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.de416aff.chunk.js.map