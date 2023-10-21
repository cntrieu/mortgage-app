"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[646],{1327:function(e,r,n){n.d(r,{Z:function(){return Z}});n(2791);var t=n(1022),s=n(824),a=n(6582),i=n(6108),o=n(6762),l=n(3080),c=n(1146),u=n(2746),d=n(1309),h=n(3426),m=n(7883),g=n(7869),p=n(5202),x=n(9459),f=n(595),j=n(696),b=n(1087),v=n(7661),y=n(1199),w=n(184);function Z(){var e=(0,t.q)(),r=e.isOpen,n=e.onOpen,d=e.onClose;return(0,w.jsxs)(s.xu,{bg:"transparent",px:8,children:[(0,w.jsxs)(a.k,{h:16,alignItems:"center",justifyContent:"space-between",children:[(0,w.jsx)(i.h,{size:"md",mt:"1.5rem",icon:r?(0,w.jsx)(x.T,{}):(0,w.jsx)(f.U,{}),"aria-label":"Open Menu",display:{md:"none"},onClick:r?d:n}),(0,w.jsxs)(o.U,{spacing:8,alignItems:"center",children:[(0,w.jsxs)(l.r,{as:b.rU,to:"/",_hover:{boxShadow:"5px"},children:[(0,w.jsx)(c.E,{h:"100px",pt:"2em",objectFit:"cover",src:y,alt:"Logo"})," "]}),(0,w.jsxs)(o.U,{as:"nav",mt:"1.5rem",spacing:4,flexDirection:"row",display:{base:r?"flex":"none",md:"flex",sm:"none"},children:[(0,w.jsx)(M,{title:"Mortgages",routes:[{name:"Home Purchase",route:"/Mortgages/home-purchase"},{name:"Refinance",route:"/Mortgages/refinance"},{name:"Renewal",route:"/Mortgages/renewing"},{name:"Building/Construction",route:"/Mortgages/building"}]}),(0,w.jsx)(M,{title:"About",routes:[{name:"About Us",route:"/about-page"},{name:"Contact Dora",route:"/contact-page"}]}),(0,w.jsx)(M,{title:"Resources",routes:[{name:"FAQ",route:"/faq-page"},{name:"Glossary",route:"/glossary-page"},{name:"Documents You Need",route:"/doc-page"}]})]})]}),(0,w.jsx)(v.Z,{as:b.rU,to:"/sign-in",variant:"outline",size:"sm",mt:"1.5rem",children:"Apply Now"})]}),r?(0,w.jsx)(s.xu,{pb:4,display:{md:"none"},children:(0,w.jsxs)(u.K,{as:"nav",spacing:4,children:[(0,w.jsx)(M,{title:"Mortgages",routes:[{name:"Home Purchase",route:"/Mortgages/home-purchase"},{name:"Refinance",route:"/Mortgages/refinance"},{name:"Renewal",route:"/Mortgages/renewing"},{name:"Building/Construction",route:"/Mortgages/building"}]}),(0,w.jsx)(M,{title:"About",routes:[{name:"About Us",route:"/about-page"},{name:"Contact Us",route:"/contact-page"}]}),(0,w.jsx)(M,{title:"Resources",routes:[{name:"FAQ",route:"/faq-page"},{name:"Glossary",route:"/glossary-page"},{name:"Documents You Need",route:"/doc-page"}]})]})}):null]})}var M=function(e){var r=e.title,n=e.routes,t=(0,d.ff)("gray.200","gray.700");return(0,w.jsx)(h.v,{children:function(e){e.isOpen;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(m.j,{as:l.r,px:2,py:1,rounded:"md",transition:"all .3s ease",_expanded:{bg:t},_hover:{bg:t},children:[r," ",(0,w.jsx)(j.v,{ml:2})]}),(0,w.jsx)(g.q,{children:n.map((function(e,r){return(0,w.jsx)(p.s,{as:b.rU,to:e.route,children:e.name},r)}))})]})}})}},375:function(e,r,n){n.d(r,{Z:function(){return M}});var t=n(884),s=n(5812),a=n(1309),i=n(4357),o=n(824),l=n(8410),c=n(2746),u=n(8451),d=n(3080),h=n(6355),m=n(4165),g=n(5861),p=(n(4942),n(1413),n(9439)),x=n(2791),f=n(8382),j=n(1917),b=n(1243),v=n(184),y=function(){var e,r=(0,f.p)(),n=(0,x.useState)({firstName:"",lastName:"",email:""}),s=(0,p.Z)(n,2),a=s[0],i=s[1];return(0,v.jsx)(o.xu,{flex:"1",position:"relative",maxHeight:"90vh",margin:"auto",minWidth:"200px",overflowY:"auto",mt:[-2],mr:"3em",p:5,bg:"gray.100",borderRadius:"md",boxShadow:"md",display:"flex",children:(0,v.jsx)(o.xu,{as:"form",onSubmit:function(n){return(e=e||(0,g.Z)((0,m.Z)().mark((function e(n){var t,s;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t=n.target,!t.checkValidity()){e.next=16;break}return e.prev=4,e.next=7,b.Z.post("".concat("http://localhost:3001","/api/auth/newsletter"),a);case 7:s=e.sent,console.log(s),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.error(e.t0.message);case 14:r({title:"Subscribed",description:"You've been subscribed to our newsletter.",status:"success",duration:5e3,isClosable:!0}),i({firstName:"",lastName:"",email:""});case 16:case"end":return e.stop()}}),e,null,[[4,11]])})))).apply(this,arguments)},children:(0,v.jsxs)(j.g,{spacing:2,children:[(0,v.jsx)(t.x,{fontWeight:"500",fontSize:"lg",mb:2,children:"Newsletter"}),(0,v.jsx)("iframe",{src:"https://embeds.beehiiv.com/329b6cdf-adf5-4de2-84a1-4c556ec21cf0?slim=true","data-test-id":"beehiiv-embed",height:"52",title:"iframe",frameBorder:"0",scrolling:"no",style:{margin:0,borderRadius:"0px !important",backgroundColor:"transparent"}})]})})})},w=function(e){var r=e.children;return(0,v.jsx)(t.x,{fontWeight:"500",fontSize:"lg",mb:2,children:r})},Z=function(e){var r=e.children,n=e.label,t=e.href;return(0,v.jsxs)(s.m.button,{bg:(0,a.ff)("blackAlpha.100","whiteAlpha.100"),rounded:"full",w:8,h:8,cursor:"pointer",as:"a",href:t,display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"background 0.3s ease",_hover:{bg:(0,a.ff)("blackAlpha.200","whiteAlpha.200")},children:[(0,v.jsx)(i.TX,{children:n}),r]})};function M(){return(0,v.jsxs)(o.xu,{pt:5,bg:(0,a.ff)("gray.50","gray.900"),color:(0,a.ff)("gray.700","gray.200"),children:[(0,v.jsx)(l.W,{as:c.K,maxW:"6xl",py:10,children:(0,v.jsxs)(u.M,{columns:{base:1,sm:2,md:4},spacing:8,children:[(0,v.jsxs)(c.K,{align:"flex-start",children:[(0,v.jsx)(w,{children:"Main Mortgage"}),(0,v.jsx)(d.r,{href:"#",children:"About Us"}),(0,v.jsx)(d.r,{href:"/contact-page",children:"Contact Us"}),(0,v.jsx)(d.r,{href:"#",children:"Why Choose a Mortgage Agent"})]}),(0,v.jsxs)(c.K,{align:"flex-start",children:[(0,v.jsx)(w,{children:"Resources"}),(0,v.jsx)(d.r,{href:"/faq-page",children:"FAQ"}),(0,v.jsx)(d.r,{href:"/glossary-page",children:"Glossary"}),(0,v.jsx)(d.r,{href:"/doc-page",children:"Documents You Need"}),(0,v.jsx)(d.r,{href:"/apply-page",children:"Apply Online"})]}),(0,v.jsxs)(c.K,{align:"flex-start",children:[(0,v.jsx)(w,{children:"Legal"}),(0,v.jsx)(d.r,{href:"#",children:"Privacy Policy"}),(0,v.jsx)(d.r,{href:"#",children:"Terms of Service"})]}),(0,v.jsx)(c.K,{align:"flex-start",children:(0,v.jsx)(y,{})})]})}),(0,v.jsx)(o.xu,{borderTopWidth:1,borderStyle:"solid",borderColor:(0,a.ff)("gray.200","gray.700"),children:(0,v.jsxs)(l.W,{as:c.K,maxW:"6xl",py:4,direction:{base:"column",md:"row"},spacing:4,justify:{md:"space-between"},align:{md:"center"},children:[(0,v.jsxs)(t.x,{fontSize:"11",children:["\xa9 2023 ",(0,v.jsx)("b",{children:"VERICO The Mortgage Professionals"})," License 10280 All Rights Reserved. *some restrictions may apply"]}),(0,v.jsxs)(t.x,{fontSize:"11",children:["Powered by ",(0,v.jsx)("a",{href:"https://www.gomaxsolutions.com/",style:{fontWeight:"bold"},children:"GoMAX Solutions"}),"."]}),(0,v.jsxs)(t.x,{fontSize:"11",children:["Website by ",(0,v.jsx)("a",{href:"https://www.linkedin.com/in/cassie-leclair-931093b6/",style:{fontWeight:"bold"},children:"Cassie LeClair"})]}),(0,v.jsx)(d.r,{fontSize:"11",href:"/admin-signin",style:{fontWeight:"bold"},children:"Admin"}),(0,v.jsxs)(c.K,{direction:"row",spacing:6,children:[(0,v.jsx)(Z,{label:"Twitter",href:"#",children:(0,v.jsx)(h.Am9,{})}),(0,v.jsx)(Z,{label:"Instagram",href:"#",children:(0,v.jsx)(h.Zf_,{})})]})]})})]})}},5646:function(e,r,n){n.r(r),n.d(r,{default:function(){return N}});var t=n(2791),s=n(4270),a=n(1327),i=n(375),o=n(824),l=n(1917),c=n(5531),u=n(4165),d=n(5861),h=n(9439),m=n(8382),g=n(2746),p=n(6582),x=n(9589),f=n(9657),j=n(930),b=n(548),v=n(3690),y=n(884),w=n(1146),Z=n(7689),M=n(7661),C=n(1243),k=n(184);function S(){var e,r,n=(0,t.useState)(""),s=(0,h.Z)(n,2),a=s[0],i=s[1],o=(0,t.useState)(""),l=(0,h.Z)(o,2),c=l[0],S=l[1],N=(0,Z.s0)(),A=(0,m.p)();return(0,k.jsxs)(g.K,{minH:"100vh",direction:{base:"column",md:"row"},children:[(0,k.jsx)(p.k,{p:8,flex:1,align:"center",justify:"center",children:(0,k.jsxs)(g.K,{spacing:4,w:"full",maxW:"md",children:[(0,k.jsx)(x.X,{fontSize:"2xl",children:"Sign in to your account"}),(0,k.jsxs)("form",{onSubmit:function(r){return(e=e||(0,d.Z)((0,u.Z)().mark((function e(r){var n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,C.Z.post("".concat("http://localhost:3001","/api/auth/login"),{email:a,password:c},{withCredentials:!0,credentials:"include"});case 4:n=e.sent,console.log(n),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0.response.data),A({title:"Email or password not found",description:e.t0.response.data,status:"error",duration:5e3,isClosable:!0});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)},children:[(0,k.jsxs)(f.NI,{id:"email",children:[(0,k.jsx)(j.l,{children:"Email address"}),(0,k.jsx)(b.I,{type:"email",value:a,onChange:function(e){return i(e.target.value)}})]}),(0,k.jsxs)(f.NI,{id:"password",children:[(0,k.jsx)(j.l,{children:"Password"}),(0,k.jsx)(b.I,{type:"password",autoComplete:"off",value:c,onChange:function(e){return S(e.target.value)}})]}),(0,k.jsxs)(g.K,{spacing:6,children:[(0,k.jsxs)(g.K,{direction:{base:"column",sm:"row"},align:"start",justify:"space-between",children:[(0,k.jsx)(v.X,{children:"Remember me"}),(0,k.jsx)(y.x,{color:"blue.500",children:"Forgot password?"})]}),(0,k.jsx)(M.Z,{variant:"solid",type:"submit",children:"Sign in"}),(0,k.jsx)(y.x,{color:"blue.500",onClick:function(){return N("/sign-up")},cursor:"pointer",children:"Don't have an account? Sign up"})]})]}),(0,k.jsx)(M.Z,{variant:"solid",onClick:function(){return(r=r||(0,d.Z)((0,u.Z)().mark((function e(){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.Z.post("".concat("http://localhost:3001","/api/auth/logout"),{},{withCredentials:!0,credentials:"include"});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0.response.data);case 8:case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)},children:"SIGN OUT"})]})}),(0,k.jsx)(p.k,{flex:1,children:(0,k.jsx)(w.E,{alt:"Login Image",objectFit:"cover",src:"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"})})]})}var N=function(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(s.q,{children:[(0,k.jsx)("title",{children:"Apply for a Mortgage Today | Main Mortgage"}),(0,k.jsx)("meta",{name:"description",content:"Apply for a mortgage with Main Mortgage. Our mortgage agent, Dora Main, will guide you through the process and answer any questions you have about home loans, interest rates, refinancing, and more."}),(0,k.jsx)("meta",{name:"keywords",content:"Mortgage application, Apply for mortgage, Main Mortgage, Dora Main, Home loan, Mortgage rates, Refinancing, Home purchase, Building home, Mortgage renewing, Switching mortgage, Canada, Mortgage procedure, Interest rates, Down payment, House building"})]}),(0,k.jsx)(o.xu,{bgImage:"url(".concat(c,")"),bgSize:"cover",bgPos:"center",m:"1rem",h:"50vh",children:(0,k.jsx)(a.Z,{})}),(0,k.jsx)(o.xu,{pb:"5em",w:{base:"100%",sm:"100%",md:"80%"},mx:{base:"0",sm:"0",md:"auto"},bgColor:"white",mt:"-16em",p:"2em",borderRadius:"md",boxShadow:"0 0 10px rgba(0,0,0,0.2)",mb:"5em",children:(0,k.jsx)(l.g,{pb:"5",children:(0,k.jsx)(S,{})})}),(0,k.jsx)(i.Z,{})]})}},7661:function(e,r,n){var t=n(1413),s=n(9439),a=n(4925),i=(n(2791),n(6253)),o=n(9055),l=n(184),c=["children"],u=(0,i.q)(o.z);r.Z=function(e){var r=e.children,n=(0,a.Z)(e,c),o=(0,i.q_)((function(){return{scale:1,config:{mass:4,tension:150,friction:10}}})),d=(0,s.Z)(o,2),h=d[0],m=d[1];return(0,l.jsx)(u,(0,t.Z)((0,t.Z)({onMouseEnter:function(){return m({scale:1.1})},onMouseLeave:function(){return m({scale:1})},style:{transform:h.scale.interpolate((function(e){return"scale(".concat(e,")")}))}},n),{},{children:r}))}},1199:function(e,r,n){e.exports=n.p+"static/media/1.338ff6ae12741848085e.png"},5531:function(e,r,n){e.exports=n.p+"static/media/ficus.6ed05d8b786e7790aec8.png"},930:function(e,r,n){n.d(r,{l:function(){return m}});var t=n(1413),s=n(4925),a=n(9657),i=n(5597),o=n(2481),l=n(2996),c=n(5812),u=n(6992),d=n(184),h=["className","children","requiredIndicator","optionalIndicator"],m=(0,i.G)((function(e,r){var n,i=(0,o.mq)("FormLabel",e),m=(0,l.Lr)(e),p=(m.className,m.children),x=m.requiredIndicator,f=void 0===x?(0,d.jsx)(g,{}):x,j=m.optionalIndicator,b=void 0===j?null:j,v=(0,s.Z)(m,h),y=(0,a.NJ)(),w=null!=(n=null==y?void 0:y.getLabelProps(v,r))?n:(0,t.Z)({ref:r},v);return(0,d.jsxs)(c.m.label,(0,t.Z)((0,t.Z)({},w),{},{className:(0,u.cx)("chakra-form__label",m.className),__css:(0,t.Z)({display:"block",textAlign:"start"},i),children:[p,(null==y?void 0:y.isRequired)?f:b]}))}));m.displayName="FormLabel";var g=(0,i.G)((function(e,r){var n=(0,a.NJ)(),s=(0,a.e)();if(!(null==n?void 0:n.isRequired))return null;var i=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,d.jsx)(c.m.span,(0,t.Z)((0,t.Z)({},null==n?void 0:n.getRequiredIndicatorProps(e,r)),{},{__css:s.requiredIndicator,className:i}))}));g.displayName="RequiredIndicator"},548:function(e,r,n){n.d(r,{I:function(){return m}});var t=n(1413),s=n(4925),a=n(4931),i=n(5597),o=n(2481),l=n(2996),c=n(5812),u=n(6992),d=n(184),h=["htmlSize"],m=(0,i.G)((function(e,r){var n=e.htmlSize,i=(0,s.Z)(e,h),m=(0,o.jC)("Input",i),g=(0,l.Lr)(i),p=(0,a.Y)(g),x=(0,u.cx)("chakra-input",e.className);return(0,d.jsx)(c.m.input,(0,t.Z)((0,t.Z)({size:n},p),{},{__css:m.field,ref:r,className:x}))}));m.displayName="Input",m.id="Input"}}]);
//# sourceMappingURL=646.cce982e0.chunk.js.map