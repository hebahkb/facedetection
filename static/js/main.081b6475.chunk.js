(this.webpackJsonpfacedetection=this.webpackJsonpfacedetection||[]).push([[0],{298:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),o=a(39),i=a.n(o),r=(a(79),a(17)),l=a(18),c=a(20),m=a(19),d=function(e){var t=e.onRouteChange;return e.issignedin?s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signout")},className:"f4 link dim black underline pa3 pointer"}," Sign Out ")):s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signin")},className:"f4 link dim black underline pa3 pointer"}," Sign In  "),s.a.createElement("p",{onClick:function(){return t("register")},className:"f4 link dim black underline pa3 pointer"},"  Register "))},u=a(71),p=a.n(u),g=(a(80),a(72)),h=a.n(g),b=function(){return s.a.createElement("div",{className:"ma4 mt0"},s.a.createElement(p.a,{className:"Tilt br1 shadow-2",options:{max:25},style:{height:80,width:80}},s.a.createElement("div",{className:"Tilt-inner"},s.a.createElement("img",{style:{paddingTop:"6px"},alt:"logo",src:h.a}))))},f=(a(81),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return s.a.createElement("div",null,s.a.createElement("p",{className:"f3"},"This Brain will detect faces in your pictures."),s.a.createElement("div",{className:"center"},s.a.createElement("div",{className:"form center pa4 br3 shadow-5"},s.a.createElement("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),s.a.createElement("button",{className:"w-40 grow f4 link ph3 pv2 dib white bg-light-blue",onClick:a},"Detect"))))}),v=function(e){var t=e.name,a=e.entries;return s.a.createElement("div",null,s.a.createElement("div",{className:"white f3"},t,", your current rank is...",s.a.createElement("div",{className:"white f1 "},a)))},w=(a(82),function(e){var t=e.imageUrl,a=e.box;return s.a.createElement("div",{className:"center na pa2"},s.a.createElement("div",{className:"absolute nt2"},s.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto"}),s.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),E=a(73),N=a.n(E),y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){console.log(e.target.value),n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){console.log(e.target.value),n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){fetch("http://localhost:3000/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={signInEmail:"",signInPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return s.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bSg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("p",{onClick:function(){return e("register")},className:"f6 link dim black db grow pointer f6 dib"},"Register")))))}}]),a}(s.a.Component),C=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onNameChange=function(e){console.log(e.target.value),n.setState({name:e.target.value})},n.onEmailChange=function(e){console.log(e.target.value),n.setState({email:e.target.value})},n.onPasswordChange=function(e){console.log(e.target.value),n.setState({password:e.target.value})},n.onSubmitSignIn=function(){fetch("http://localhost:3000/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.email,password:n.state.password,name:n.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={email:"",password:"",name:""},n}return Object(l.a)(a,[{key:"render",value:function(){this.props.onRouteChange;return s.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlfor:"name"},"Name"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlfor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlfor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),a}(s.a.Component),A=(a(297),a(298),{particles:{number:{value:200,density:{enable:!0,value_area:800}}}}),x={input:"",imageUrl:"",box:{},route:"signin",issignedin:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},S=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),s=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*s,rightCol:n-t.right_col*n,bottomRow:s-t.bottom_row*s}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("http://localhost:3000/imageUrl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){e.displayFaceBox(e.calculateFaceLocation(t)),t&&fetch("http://localhost:3000/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log)})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(x):"home"===t&&e.setState({issignedin:!0}),e.setState({route:t})},e.state=x,e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){fetch("http://localhost:3000/").then((function(e){return e.json()})).then(console.log)}},{key:"render",value:function(){var e=this.state,t=e.issignedin,a=e.imageUrl,n=e.route,o=e.box;return s.a.createElement("div",{className:"App"},s.a.createElement(N.a,{className:"particles",params:A}),s.a.createElement(d,{issignedin:t,onRouteChange:this.onRouteChange}),"home"===n?s.a.createElement("div",null,s.a.createElement(b,null),s.a.createElement(v,{name:this.state.user.name,entries:this.state.user.entries}),s.a.createElement(f,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),s.a.createElement(w,{box:o,imageUrl:a})):"signin"===n?s.a.createElement(y,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):s.a.createElement(C,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t){e.exports="data:image/png;base64,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"},74:function(e,t,a){e.exports=a(299)},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.081b6475.chunk.js.map