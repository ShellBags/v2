(this.webpackJsonpwebsitev2=this.webpackJsonpwebsitev2||[]).push([[0],{101:function(e,t,s){"use strict";s.r(t);var i=s(2),a=s(0),n=s.n(a),c=s(7),l=s.n(c),o=s(10),r=s(8),d=s(21),p=s(15),h=s(14),j=s.p+"static/media/oldLogo.d57fc063.png",b=s(6),x=s(23),u=s(9),m=s(133),f=s(129),g=s(132),O=s(137),v=s(138),y=s(58),C=s.n(y),k=function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(e){var i;return Object(o.a)(this,s),(i=t.call(this,e)).state={hideNav:!1},i.handleClick=i.handleClick.bind(Object(d.a)(i)),i}return Object(r.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}},{key:"resize",value:function(){this.setState({hideNav:window.innerWidth<=760})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize.bind(this))}},{key:"handleClick",value:function(e){this.props.history.push("/"+e.currentTarget.id)}},{key:"render",value:function(){return Object(i.jsx)(x.b,{basename:"/",children:Object(i.jsx)(f.a,{position:"static",className:this.props.classes.menuBar,children:Object(i.jsxs)(g.a,{children:[Object(i.jsx)("img",{src:j,alt:"SeeShells Logo",className:this.props.classes.logo,onClick:this.handleClick}),Object(i.jsx)("p",{className:this.props.classes.title,children:"SEESHELLS"}),!this.state.hideNav&&Object(i.jsxs)("div",{className:this.props.classes.buttonContainer,children:[Object(i.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"about",children:"About"}),Object(i.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"download",children:"Download"}),Object(i.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"documentation",children:"Documentation"}),Object(i.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.handleClick,id:"developers",children:"Developers"})]}),this.state.hideNav&&Object(i.jsxs)("div",{className:this.props.classes.buttonContainer,children:[Object(i.jsx)(m.a,{className:this.props.classes.buttons,onClick:this.openMenu,children:Object(i.jsx)(C.a,{})}),Object(i.jsxs)(O.a,{children:[Object(i.jsx)(v.a,{onClick:this.handleClick,id:"about",children:"About"}),Object(i.jsx)(v.a,{onClick:this.handleClick,id:"download",children:"Download"}),Object(i.jsx)(v.a,{onClick:this.handleClick,id:"documentation",children:"Documentation"}),Object(i.jsx)(v.a,{onClick:this.handleClick,id:"developers",children:"Developers"})]})]})]})})})}}]),s}(n.a.Component),w=Object(b.a)({menuBar:{backgroundColor:"#212121",width:"100%",display:"flex",margin:"0px"},buttonContainer:{display:"flex",float:"right",marginLeft:"auto",marginRight:"1%"},buttons:{display:"flex",justifyContent:"center",color:"#F2F2F2","&:hover":{color:"#33A1FD"},fontSize:"20px",fontFamily:"Georgia"},title:{fontFamily:"Georgia",fontSize:"50px",margin:"10px",display:"flex",paddingLeft:"10px",color:"#F2F2F2"},logo:{height:"50px",width:"50px",display:"flex",float:"left"}})(Object(u.e)(k)),N=s.p+"static/media/beach2.a20cd2e5.png",S=s.p+"static/media/pearl.9c3f4de4.png",F=(s(54),s(60)),T={frontPage:{display:"flex",flexFlow:"column wrap",justifyContent:"center",height:"100%",width:"100%"},image:{display:"grid",position:"relative",width:"100%",height:"350px",textAlign:"center",backgroundImage:"url("+N+")",overflow:"hidden"},downloadButton:{display:"flex",position:"absolute",backgroundColor:"#33A1FD","&:hover":{backgroundColor:"#EF476F"},color:"white",fontSize:"20px",margin:"0px",bottom:"10px",justifySelf:"center"},barContent:{display:"flex",flexFlow:"column wrap",justifySelf:"center",paddingTop:"2%",paddingBottom:"10%"},intro:{display:"flex",color:"#F2F2F2",fontSize:"100px",margin:"0px",left:"10px"},description:{display:"flex",color:"#F2F2F2",fontSize:"40px",margin:"0px",left:"50px",top:"100px",paddingLeft:"200px",paddingRight:"200px"},descriptionAlt:{color:"#33A1FD",fontWeight:"bold",display:"contents"},title:{color:"#082998",fontSize:"50px",marginTop:"1%",marginBottom:"1%",textDecoration:"underline",fontWeight:"bold"},infoContainer:{display:"flex",justifyContent:"center",alignItems:"flex-start",width:"70%",alignSelf:"center"},info:{display:"flex",alignItems:"center",fontSize:"30px",margin:"30px",color:"#3E3E3E"},column:{display:"flex",flexDirection:"column",justifyContent:"center"},featuresContainer:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},featuresButton:{display:"flex",backgroundColor:"#33A1FD","&:hover":{backgroundColor:"#EF476F"},color:"white",fontSize:"20px",margin:"0px",justifyContent:"center"},pearl:{height:"50px",width:"50px",verticalAlign:"center",marginRight:"10px"}},A=function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(e){var i;return Object(o.a)(this,s),(i=t.call(this,e)).handleClick=i.handleClick.bind(Object(d.a)(i)),i}return Object(r.a)(s,[{key:"handleClick",value:function(e){this.props.history.push("/"+e.currentTarget.id)}},{key:"render",value:function(){return Object(i.jsx)(x.b,{basename:"/",children:Object(i.jsxs)(F.a,{className:this.props.classes.frontPage,children:[Object(i.jsxs)("div",{className:this.props.classes.image,children:[Object(i.jsx)("div",{id:"stars"}),Object(i.jsx)("div",{id:"stars2"}),Object(i.jsx)("div",{id:"stars3"}),Object(i.jsxs)("div",{className:this.props.classes.barContent,children:[Object(i.jsx)("p",{className:this.props.classes.intro,children:"SEESHELLS"}),Object(i.jsxs)("p",{className:this.props.classes.description,children:["A ",Object(i.jsx)("span",{className:this.props.classes.descriptionAlt,children:"digital forensics tool"})," for analyzing Windows Registry Artifacts."]})]}),Object(i.jsx)(m.a,{className:this.props.classes.downloadButton,onClick:this.handleClick,id:"download",children:"GET THE TOOL"})]}),Object(i.jsxs)("div",{className:this.props.classes.featuresContainer,children:[Object(i.jsx)("p",{className:this.props.classes.title,children:"Why SeeShells?"}),Object(i.jsxs)("div",{className:this.props.classes.infoContainer,children:[Object(i.jsxs)("div",{className:this.props.classes.column,children:[Object(i.jsxs)("div",{className:this.props.classes.info,children:[Object(i.jsx)("img",{src:S,alt:"pearl",className:this.props.classes.pearl}),Object(i.jsx)("span",{className:this.props.classes.descriptionAlt,children:"Quick parsing"})," of Windows Registry artifacts"]}),Object(i.jsxs)("div",{className:this.props.classes.info,children:[Object(i.jsx)("img",{src:S,alt:"pearl",className:this.props.classes.pearl}),Object(i.jsx)("span",{className:this.props.classes.descriptionAlt,children:"Analysis of artifacts"})," with suspicious behavior flagging"]})]}),Object(i.jsxs)("div",{className:this.props.classes.column,children:[Object(i.jsxs)("div",{className:this.props.classes.info,children:[Object(i.jsx)("img",{src:S,alt:"pearl",className:this.props.classes.pearl}),Object(i.jsx)("span",{className:this.props.classes.descriptionAlt,children:"Timeline View"})," for a holistic view of computer activity"]}),Object(i.jsxs)("div",{className:this.props.classes.info,children:[Object(i.jsx)("img",{src:S,alt:"pearl",className:this.props.classes.pearl}),Object(i.jsx)("span",{className:this.props.classes.descriptionAlt,children:"Filtering"})," for specific activities and trends"]})]})]}),Object(i.jsx)("div",{children:Object(i.jsx)(m.a,{className:this.props.classes.featuresButton,onClick:this.handleClick,id:"about",children:"SEE ALL FEATURES"})})]})]})})}}]),s}(n.a.Component),D=Object(b.a)(T)(Object(u.e)(A)),E=function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(i.jsx)("div",{className:this.props.classes.aboutPage,children:Object(i.jsx)(F.a,{elevation:2,square:!0,className:this.props.classes.sidebarContainer})})}}]),s}(n.a.Component),W=Object(b.a)({aboutPage:{display:"flex",height:"100%",width:"100%"},sidebarContainer:{width:"20%",height:"100%",backgroundColor:"#424242",margin:"0px",display:"flex",justifyContent:"center"}})(Object(u.e)(E)),z=s(59),L=s.n(z),P={downloadPage:{display:"flex",flexFlow:"column wrap",justifyContent:"center",height:"100%",width:"100%"},image:{display:"grid",width:"100%",height:"600px",textAlign:"center",alignSelf:"center",backgroundImage:"url("+N+")",overflow:"hidden"},logo:{height:"100px",width:"100px",display:"flex",float:"left"},downloadContainer:{display:"flex",justifyContent:"center",width:"100%"},contentContainer:{display:"flex",justifyContent:"center",flexDirection:"column",backgroundColor:"#424242",width:"30%",alignItems:"center",color:"white",fontSize:"40px",height:"70%",position:"absolute",alignSelf:"center",minWidth:"300px",justifySelf:"center"},title:{fontSize:"50px",fontWeight:"bold",textAlign:"center",padding:"0px",margin:"0px",marginBottom:"5%"},button:{display:"flex",backgroundColor:"#33A1FD","&:hover":{backgroundColor:"#EF476F"},color:"white",fontSize:"20px",margin:"0px",justifyContent:"center",marginTop:"5%"},video:{paddingTop:"5%",height:"40%",width:"80%"}},I=function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(i.jsx)(F.a,{className:this.props.classes.downloadPage,children:Object(i.jsx)(F.a,{className:this.props.classes.downloadContainer,children:Object(i.jsxs)("div",{className:this.props.classes.image,children:[Object(i.jsx)("div",{id:"stars"}),Object(i.jsx)("div",{id:"stars2"}),Object(i.jsx)("div",{id:"stars3"}),Object(i.jsxs)(F.a,{className:this.props.classes.contentContainer,children:[Object(i.jsx)("p",{className:this.props.classes.title,children:"Download SeeShells"}),Object(i.jsx)("img",{src:j,alt:"SeeShells Logo",className:this.props.classes.logo}),Object(i.jsx)(m.a,{className:this.props.classes.button,children:"SEESHELLS.EXE"}),Object(i.jsx)("div",{className:this.props.classes.video,children:Object(i.jsx)(L.a,{width:"100%",height:"100%",url:"https://www.youtube.com/watch?v=IZrd86723Hc"})})]})]})})})}}]),s}(n.a.Component),B=Object(b.a)(P)(Object(u.e)(I)),V=function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(e){var i;return Object(o.a)(this,s),(i=t.call(this,e)).handleClick=i.handleClick.bind(Object(d.a)(i)),i}return Object(r.a)(s,[{key:"handleClick",value:function(e){this.props.history.push("/"+e.currentTarget.id)}},{key:"render",value:function(){return Object(i.jsx)(x.a,{children:Object(i.jsx)("div",{className:this.props.classes.sidebarContainer,children:Object(i.jsx)("p",{children:" ajksdhga9dughaidgahugikahksjghasjkg"})})})}}]),s}(n.a.Component),R=Object(b.a)({sidebarContainer:{width:"20%",height:"100%",backgroundColor:"#424242",margin:"0px",display:"flex",justifyContent:"center"}})(Object(u.e)(V)),H=function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(i.jsx)("div",{className:this.props.classes.documentationPage,children:Object(i.jsx)(R,{className:this.props.classes.sidebar})})}}]),s}(n.a.Component),G=Object(b.a)({documentationPage:{display:"flex",height:"100%",width:"100%"},sidebar:{float:"left"}})(Object(u.e)(H)),U=s.p+"static/media/croppedLogo.b0e6b31e.png",J=s(136),M=s(134),K=s(135),q={devContainer:{backgroundColor:"#424242",margin:"10px",width:"20%",height:"30%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:"white",minWidth:"200px",maxWidth:"400px",minHeight:"200px"},background:{backgroundImage:"linear-gradient(180deg, #424242 0%, rgba(255, 255, 255, 0) 100%), url("+U+")",backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100%",height:"100%"},devTitle:{display:"flex",justifyContent:"right",textAlign:"right",overflowWrap:"break-word",color:"#33A1FD",marginTop:"10%",fontFamily:"Georgia",fontWeight:"bold"},devDescription:{display:"flex",justifyContent:"right",textAlign:"right",overflowWrap:"break-word"}},Q=function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(i.jsx)(M.a,{className:this.props.classes.devContainer,children:Object(i.jsx)("div",{className:this.props.classes.background,children:Object(i.jsxs)(K.a,{children:[Object(i.jsx)(J.a,{variant:"h5",className:this.props.classes.devTitle,children:this.props.name}),Object(i.jsx)(J.a,{variant:"subtitle1",className:this.props.classes.devDescription,children:this.props.role})]})})})}}]),s}(n.a.Component),X=Object(b.a)(q)(Q),Y=function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(i.jsxs)(F.a,{className:this.props.classes.devContainer,children:[Object(i.jsxs)(F.a,{className:this.props.classes.devIntro,children:[Object(i.jsx)(J.a,{variant:"title",className:this.props.classes.title,children:"SeeShells Development Teams"}),Object(i.jsx)(J.a,{variant:"subtitle1",children:"The SeeShells application is a Senior Design project built by two teams of five Computer Science students at UCF. The V1 team designed the original application, while the V2 team enhanced the project."})]}),Object(i.jsxs)(F.a,{className:this.props.classes.devs,children:[Object(i.jsx)(X,{name:"Sara Frackiewicz",role:"V1 Team: API, Scripting, and Administrative Website"}),Object(i.jsx)(X,{name:"Klayton Killough",role:"V1 Team: WPF Shellbag Parser and IO"}),Object(i.jsx)(X,{name:"Aleksandar Stoyanov",role:"V1 Team: WPF Shellbag Parser and Timeline"}),Object(i.jsx)(X,{name:"Bridget Woodye",role:"V1 Team: WPF GUI and Timeline"}),Object(i.jsx)(X,{name:"Yara As-Saidi",role:"V1 Team: WPF and Website Content"}),Object(i.jsx)(X,{name:"Devon Gadarowski",role:"V2 Team: Shellbag Data Collection and Analysis"}),Object(i.jsx)(X,{name:"Kaylee Hoyt",role:"V2 Team: Website Developer"}),Object(i.jsx)(X,{name:"Jake Meyer",role:"V2 Team: WPF Timeline UI, Shellbag Export and Tagging"}),Object(i.jsx)(X,{name:"Spencer Ross",role:"V2 Team:"}),Object(i.jsx)(X,{name:"Joshua Rueda",role:"V2 Team: Video Producer"})]})]})}}]),s}(n.a.Component),Z=Object(b.a)({devContainer:{display:"flex",flexFlow:"column",justifyContent:"center",alignContent:"center",width:"100%"},devs:{display:"flex",height:"90%",justifyContent:"space-evenly",flexWrap:"wrap"},devIntro:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},title:{fontSize:"50px",fontWeight:"bold",marginTop:"1%",alignSelf:"center"}})(Object(u.e)(Y)),$=function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(i.jsx)("div",{className:this.props.classes.footer,children:Object(i.jsx)("div",{className:this.props.classes.content,children:"Sponsored by Rick Leinecker | 2021"})})}}]),s}(n.a.Component),_=Object(b.a)({footer:{backgroundColor:"#212121",width:"100%",display:"flex",margin:"0px",height:"50px",justifyContent:"right"},content:{margin:"15px"}})($);var ee=Object(b.a)({application:{height:"100%",width:"100%",display:"flex",flexDirection:"column",flex:"1"},topBar:{color:"white",display:"flex",margin:"0px"},bottomBar:{color:"white",display:"flex",margin:"0px",width:"100%",marginTop:"auto"},content:{color:"black",display:"flex",width:"100%",height:"100%"}})((function(e){return Object(i.jsx)(F.a,{className:e.classes.application,children:Object(i.jsxs)(x.b,{basename:"/",children:[Object(i.jsx)("div",{className:e.classes.topBar,children:Object(i.jsx)(w,{})}),Object(i.jsxs)(F.a,{className:e.classes.content,children:[Object(i.jsx)(u.a,{exact:!0,path:"/",children:Object(i.jsx)(D,{})}),Object(i.jsx)(u.a,{exact:!0,path:"/about",children:Object(i.jsx)(W,{})}),Object(i.jsx)(u.a,{exact:!0,path:"/download",children:Object(i.jsx)(B,{})}),Object(i.jsx)(u.a,{exact:!0,path:"/documentation",children:Object(i.jsx)(G,{})}),Object(i.jsx)(u.a,{exact:!0,path:"/developers",children:Object(i.jsx)(Z,{})})]}),Object(i.jsx)("div",{className:e.classes.bottomBar,children:Object(i.jsx)(_,{})})]})})})),te=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,140)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),i(e),a(e),n(e),c(e)}))};l.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(ee,{})}),document.getElementById("root")),te()},54:function(e,t,s){}},[[101,1,2]]]);
//# sourceMappingURL=main.c368c64b.chunk.js.map