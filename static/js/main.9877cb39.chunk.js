(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(47)},35:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(19),l=a.n(i),r=(a(35),a(3)),c=a(8),s=a(6),m=a(5),g=a(7),p=a(1),d=a(4),h=a(15),u=a(13),v=a.n(u),E=a(17),b=a.n(E),f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={hover:!1,hoverIcon:""},a.toggleOn=a.toggleOn.bind(Object(p.a)(Object(p.a)(a))),a.toggleOff=a.toggleOff.bind(Object(p.a)(Object(p.a)(a))),a.toggleOnIcon=a.toggleOnIcon.bind(Object(p.a)(Object(p.a)(a))),a.toggleOffIcon=a.toggleOffIcon.bind(Object(p.a)(Object(p.a)(a))),a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"toggleOn",value:function(){this.setState({hover:!0}),console.log(this.state.hover)}},{key:"toggleOff",value:function(e){this.setState({hover:!1})}},{key:"toggleOnIcon",value:function(e){this.setState({hoverIcon:e.target.className}),console.log("target",e.target.className)}},{key:"toggleOffIcon",value:function(e){this.setState({hoverIcon:""}),console.log("toggleoff")}},{key:"render",value:function(){var e=this,t=function(){return"/projects"===e.props.location.pathname||"/projectone"===e.props.location.pathname||"/projecttwo"===e.props.location.pathname||"/projectthree"===e.props.location.pathname||"/projectfour"===e.props.location.pathname};return v.a.config({up:function(){"/"===e.props.location.pathname?e.props.history.push("/contact"):"/skills"===e.props.location.pathname?e.props.history.push("/"):"/projects"===e.props.location.pathname?e.props.history.push("/skills"):"/projectone"===e.props.location.pathname?e.props.history.push("/projects"):"/projecttwo"===e.props.location.pathname?e.props.history.push("/projectone"):"/projectthree"===e.props.location.pathname?e.props.history.push("/projecttwo"):"/contact"===e.props.location.pathname&&e.props.history.push("/projectthree")},down:function(){"/"===e.props.location.pathname?e.props.history.push("/skills"):"/skills"===e.props.location.pathname?e.props.history.push("/projects"):"/projects"===e.props.location.pathname?e.props.history.push("/projectone"):"/projectone"===e.props.location.pathname?e.props.history.push("/projecttwo"):"/projecttwo"===e.props.location.pathname?e.props.history.push("/projectthree"):"/projectthree"===e.props.location.pathname?e.props.history.push("/contact"):"/contact"===e.props.location.pathname&&e.props.history.push("/")}}),b.a.config({up:function(){"/"===e.props.location.pathname?e.props.history.push("/contact"):"/skills"===e.props.location.pathname?e.props.history.push("/"):"/projects"===e.props.location.pathname?e.props.history.push("/skills"):"/projectone"===e.props.location.pathname?e.props.history.push("/projects"):"/projecttwo"===e.props.location.pathname?e.props.history.push("/projectone"):"/projectthree"===e.props.location.pathname?e.props.history.push("/projecttwo"):"/contact"===e.props.location.pathname&&e.props.history.push("/projectthree")},down:function(){"/"===e.props.location.pathname?e.props.history.push("/skills"):"/skills"===e.props.location.pathname?e.props.history.push("/projects"):"/projects"===e.props.location.pathname?e.props.history.push("/projectone"):"/projectone"===e.props.location.pathname?e.props.history.push("/projecttwo"):"/projecttwo"===e.props.location.pathname?e.props.history.push("/projectthree"):"/projectthree"===e.props.location.pathname?e.props.history.push("/contact"):"/contact"===e.props.location.pathname&&e.props.history.push("/")}}),n.a.createElement("div",{id:"navbar",alt:"navbar",onMouseEnter:this.toggleOn,onMouseLeave:this.toggleOff,style:this.state.hover?{width:"180px"}:{width:"50px"}},n.a.createElement("div",{id:"smallNav"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(d.b,{to:"/",onMouseEnter:this.toggleOnIcon},"/"===this.props.location.pathname||"about"===this.state.hoverIcon?n.a.createElement("img",{src:"/images/aboutselect.png",alt:"about selected",id:"aboutIcon"}):n.a.createElement("img",{src:"/images/about.png",alt:"about",id:"aboutIcon"}))),n.a.createElement("li",null,n.a.createElement(d.b,{to:"/skills",onMouseEnter:this.toggleOnIcon},"/skills"===this.props.location.pathname||"skills"===this.state.hoverIcon?n.a.createElement("img",{src:"/images/skillsselect.png",alt:"my skills selected",id:"skillsIcon"}):n.a.createElement("img",{src:"/images/skills.png",alt:"my skills",id:"skillsIcon"}))),n.a.createElement("li",null,n.a.createElement(d.b,{to:"/projects",onMouseEnter:this.toggleOnIcon},"/projects"===this.props.location.pathname||"projects"===this.state.hoverIcon?n.a.createElement("img",{src:"/images/portfolioselect.png",alt:"my portfolio selected",id:"projectsIcon"}):n.a.createElement("img",{src:"/images/portfolio.png",alt:"my portfolio",id:"projectsIcon"})),n.a.createElement("ul",{id:"projectsUl",style:t()?{height:"60px",marginBottom:"20px"}:{height:"0px",marginBottom:"0vh "}},n.a.createElement(d.b,{to:"/projectone"},n.a.createElement("li",{style:"/projectone"===this.props.location.pathname||"projectone"===this.state.hoverIcon?{color:"white"}:{color:"black"}},"1")),n.a.createElement(d.b,{to:"/projecttwo"},n.a.createElement("li",{style:"/projecttwo"===this.props.location.pathname||"projecttwo"===this.state.hoverIcon?{color:"white"}:{color:"black"}},"2")),n.a.createElement(d.b,{to:"/projectthree"},n.a.createElement("li",{style:"/projectthree"===this.props.location.pathname||"projectthree"===this.state.hoverIcon?{color:"white"}:{color:"black"}},"3")))),n.a.createElement("li",null,n.a.createElement(d.b,{to:"/contact",onMouseEnter:this.toggleOnIcon},"/contact"===this.props.location.pathname||"contact"===this.state.hoverIcon?n.a.createElement("img",{src:"/images/contactselect.png",alt:"contact me selected",id:"contactIcon"}):n.a.createElement("img",{src:"/images/contact.png",alt:"contact me",id:"contactIcon"})))),n.a.createElement("div",{id:"arrowBounce"},"/"===this.props.location.pathname?n.a.createElement("div",{class:"downArrow bounce"},n.a.createElement("img",{width:"40",height:"40",alt:"",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4="})):n.a.createElement("p",null))),n.a.createElement("div",{id:"bigNav"},this.state.hover?n.a.createElement("ul",null,n.a.createElement("li",{onMouseEnter:this.toggleOnIcon,onMouseOut:this.toggleOffIcon},n.a.createElement(d.b,{to:"/"},n.a.createElement("p",{className:"about"},"About Me"))),n.a.createElement("li",{onMouseEnter:this.toggleOnIcon,onMouseOut:this.toggleOffIcon},n.a.createElement(d.b,{to:"/skills"},n.a.createElement("p",{className:"skills"},"Skills"))),n.a.createElement("li",{id:"projectsNav",onMouseEnter:this.toggleOnIcon,onMouseOut:this.toggleOffIcon},n.a.createElement(d.b,{to:"/projects"},n.a.createElement("p",{className:"projects"},"My Projects")),n.a.createElement("ul",{id:"projectsUlBig",style:t()?{height:"80px",marginTop:"30px",marginBottom:".1vh",marginLeft:"-40px"}:{height:"0px",marginBottom:"0vh "}},n.a.createElement(d.b,{to:"/projectone"},n.a.createElement("li",{className:"projectone",li:!0,onMouseEnter:this.toggleOnIcon,onMouseOut:this.toggleOffIcon,style:{marginBottom:"4px",color:"white"}},"Wirehead")),n.a.createElement(d.b,{to:"/projecttwo"},n.a.createElement("li",{className:"projecttwo",li:!0,onMouseEnter:this.toggleOnIcon,onMouseOut:this.toggleOffIcon,style:{marginBottom:"4px",color:"white"}},"Maskot")),n.a.createElement(d.b,{to:"/projectthree"},n.a.createElement("li",{className:"projectthree",li:!0,onMouseEnter:this.toggleOnIcon,onMouseOut:this.toggleOffIcon,style:{marginBottom:"2px",color:"white"}},"From Beyond")))),n.a.createElement("li",{onMouseEnter:this.toggleOnIcon,onMouseOut:this.toggleOffIcon},n.a.createElement(d.b,{to:"/contact"},n.a.createElement("p",{className:"contact",style:(t(),{marginTop:"-30px"})},"Contact Me")))):n.a.createElement("p",null)))}}]),t}(n.a.Component),j=a(27),I=a(28),O=a(29),k=a(14),w=["Welcome!","I'm a front end developer with a background in design and painting.\n                I've been","making websites ever since I was a kid, and have since programmed\n                apps,","Chrome extensions, and data visualizations."],y={mass:5,tension:2e3,friction:200},M=function(){var e=Object(o.useState)(!0),t=Object(O.a)(e,2),a=t[0],i=(t[1],Object(k.b)(w.length,{config:y,opacity:a?1:0,x:a?0:20,height:a?80:0,from:{opacity:0,x:20,height:0}}));return window.onscroll=function(e){console.log("scroll event",e)},n.a.createElement("div",{id:"about",className:"trails-main"},n.a.createElement("div",{id:"aboutTop"},n.a.createElement("div",{id:"aboutQuote"},n.a.createElement("h1",null,"User experience focused"),n.a.createElement("h1",null,"front-end development.")),n.a.createElement("div",{id:"aboutPortrait"},n.a.createElement("div",null,n.a.createElement("img",{src:"./images/portrait.png",alt:"portrait"}),n.a.createElement("h1",null,"Calvin Boetto"),n.a.createElement("h3",null,"Front-end Developer")))),n.a.createElement("div",{id:"aboutBottom"},n.a.createElement("div",{id:"aboutBottomText"},i.map(function(e,t){var a=e.x,o=e.height,i=Object(I.a)(e,["x","height"]);return n.a.createElement(k.a.div,{key:w[t],className:"trails-text",id:"bottomTextAbout",style:Object(j.a)({},i,{transform:a.interpolate(function(e){return"translate3d(0,".concat(e,"px,0)")})})},n.a.createElement(k.a.div,{style:{height:o}},n.a.createElement("p",null,w[t])," "))}))))},x=function(){return n.a.createElement("div",{className:"trails-main",id:"skills"},n.a.createElement("div",{id:"skillsLeft"},n.a.createElement("h1",null,"My Skills"),n.a.createElement("div",{class:"skillsList"},n.a.createElement("div",{class:"skillItem"},n.a.createElement("div",null,n.a.createElement("img",{src:"./images/Javascript.png",alt:"javascript"})),n.a.createElement("div",null,n.a.createElement("p",null,"Javascript"))),n.a.createElement("div",{class:"skillItem"},n.a.createElement("div",null,n.a.createElement("img",{src:"./images/html5.png",alt:"HTML5"})),n.a.createElement("div",null,n.a.createElement("p",null,"HTML5"))),n.a.createElement("div",{class:"skillItem"},n.a.createElement("div",null,n.a.createElement("img",{src:"./images/css3.png",alt:"CSS3"})),n.a.createElement("div",null,n.a.createElement("p",null,"CSS3"))),n.a.createElement("div",{class:"skillItem"},n.a.createElement("div",null,n.a.createElement("img",{src:"./images/react.png",alt:"react"})),n.a.createElement("div",null,n.a.createElement("p",null,"React")))),n.a.createElement("div",{class:"skillsList"},n.a.createElement("div",{class:"skillItem"},n.a.createElement("div",null,n.a.createElement("img",{src:"./images/redux.png",alt:"redux"})),n.a.createElement("div",null,n.a.createElement("p",null,"Redux"))),n.a.createElement("div",{class:"skillItem"},n.a.createElement("div",null,n.a.createElement("img",{src:"./images/nodejs.png",alt:"Node"})),n.a.createElement("div",null,n.a.createElement("p",null,"Node"))),n.a.createElement("div",{class:"skillItem"},n.a.createElement("div",null,n.a.createElement("img",{src:"./images/express.png",alt:"Express"})),n.a.createElement("div",null,n.a.createElement("p",null,"Express"))),n.a.createElement("div",{class:"skillItem"},n.a.createElement("div",null,n.a.createElement("img",{src:"./images/postgresql.png",alt:"postgresql"})),n.a.createElement("div",null,n.a.createElement("p",null,"PostgreSQL")))),n.a.createElement("div",{class:"skillsList"},n.a.createElement("div",{class:"skillItem"},n.a.createElement("div",null,n.a.createElement("img",{src:"./images/webpack.png",alt:"webpack"})),n.a.createElement("div",null,n.a.createElement("p",null,"Webpack"))),n.a.createElement("div",{class:"skillItem"},n.a.createElement("div",null,n.a.createElement("img",{src:"./images/d3.png",alt:"D3"})),n.a.createElement("div",null,n.a.createElement("p",null,"D3"))),n.a.createElement("div",{class:"skillItem"},n.a.createElement("div",null,n.a.createElement("img",{src:"./images/threejs.png",alt:"threejs"})),n.a.createElement("div",null,n.a.createElement("p",null,"ThreeJS"))),n.a.createElement("div",{class:"skillItem"},n.a.createElement("div",null,n.a.createElement("img",{src:"./images/adobe.png",alt:"adobe creative suite"})),n.a.createElement("div",null,n.a.createElement("p",null,"Adobe Creative Suite"))))))},N=[{title:"Wirehead",caption:"A Google Chrome Extension",picture:"./images/wirehead.jpg",link:"projectone"},{title:"Maskot",caption:"An e-Commerce Website",picture:"./images/maskot.png",link:"projecttwo"}],S=[{title:"From Beyond",caption:"A React/WordPress Blog",picture:"./images/blog.jpg",link:"projectthree"},{title:"Current Project",caption:"A Mini Social Media App",picture:"./images/chat.png",link:null}],C=function(e){return e.map(function(e){return n.a.createElement("div",{className:"galleryItem"},n.a.createElement(d.b,{to:e.link},n.a.createElement("div",{className:"galleryPicture"},n.a.createElement("img",{src:e.picture,alt:"portfolio item"})),n.a.createElement("div",{className:"galleryCaption"},n.a.createElement("h3",null,e.title," : ",e.caption))))})},D=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"projects"},n.a.createElement("div",{id:"projectsTop"},C(N)),n.a.createElement("div",{id:"projectsBottom"},C(S)))}}]),t}(n.a.Component),L=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).forward=function(){var t=0;2===e.state.detailImage?t=0:(t=e.state.detailImage,t++),e.setState({detailImage:t}),console.log(e.state.detailImage)},e.back=function(){var t=0;0===e.state.detailImage?t=2:(t=e.state.detailImage,t--),e.setState({detailImage:t}),console.log(e.state.detailImage)},e.returnDetail=function(){return 0===e.state.detailImage?n.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/2Q_PyxAE3Mo",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):1===e.state.detailImage?n.a.createElement("img",{src:"./images/wireheadtrainingstatic.png",alt:"detail static"}):2===e.state.detailImage?n.a.createElement("img",{src:"./images/wireheaddatavizstatic.png",alt:"detail static"}):void 0},e.returnDetailHover=function(){return 0===e.state.detailImage?n.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/2Q_PyxAE3Mo",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):1===e.state.detailImage?n.a.createElement("img",{src:"./images/wireheadtraining.gif",alt:"detail"}):2===e.state.detailImage?n.a.createElement("img",{src:"./images/wireheaddataviz.gif",alt:"detail"}):void 0},e.toggleHoverOn=function(){e.setState({hover:!0})},e.toggleHoverOff=function(){e.setState({hover:!1})},e.state={detailImage:0,hover:!1,x:0,y:0},e.forward=e.forward.bind(Object(p.a)(Object(p.a)(e))),e.back=e.back.bind(Object(p.a)(Object(p.a)(e))),e.returnDetail=e.returnDetail.bind(Object(p.a)(Object(p.a)(e))),e.returnDetailHover=e.returnDetailHover.bind(Object(p.a)(Object(p.a)(e))),e.toggleHoverOn=e.toggleHoverOn.bind(Object(p.a)(Object(p.a)(e))),e.toggleHoverOff=e.toggleHoverOff.bind(Object(p.a)(Object(p.a)(e))),e.backgroundChange=e.backgroundChange.bind(Object(p.a)(Object(p.a)(e))),e}return Object(g.a)(t,e),Object(c.a)(t,[{key:"backgroundChange",value:function(){return 0===this.state.detailImage?{backgroundColor:"rgb(128, 160, 165)",transition:"background-color 2s ease-out"}:1===this.state.detailImage?{backgroundColor:"rgb(148, 170, 149)",transition:"background-color 2s ease-out"}:{backgroundColor:"rgb(172, 181, 163)",transition:"background-color 2s ease-out"}}},{key:"render",value:function(){var e=this;v.a.config({left:function(){if(0===e.state.detailImage)e.setState({detailImage:2});else{var t=e.state.detailImage;t--,e.setState({detailImage:t})}},right:function(){if(2===e.state.detailImage)e.setState({detailImage:0});else{var t=e.state.detailImage;t++,e.setState({detailImage:t})}}});var t=Math.round(this.state.x/6.27/8),a=Math.round(this.state.y/4/8);return console.log(t,a),n.a.createElement("div",{id:"projectOne",style:this.backgroundChange()},n.a.createElement("div",{className:"projectItemTop"},n.a.createElement("div",{className:"detailNav",onClick:this.back},n.a.createElement("div",null,n.a.createElement("img",{src:"./images/rewind.svg",alt:"back",className:"noSelect"}))),n.a.createElement("div",{className:"detailImage",onMouseEnter:this.toggleHoverOn,onMouseLeave:this.toggleHoverOff},n.a.createElement("div",{id:"detailImageContainer"},!1===this.state.hover?this.returnDetail():this.returnDetailHover())),n.a.createElement("div",{className:"detailNav",onClick:this.forward},n.a.createElement("img",{src:"./images/fast-forward.svg",alt:"forward",className:"noSelect"}))),n.a.createElement("div",{className:"projectItemBottom"},n.a.createElement("div",{className:"projectItemBottomBox"},n.a.createElement("div",{className:"bottomIcon"},0===this.state.detailImage?n.a.createElement("img",{src:"./images/chromeHighlight.svg",alt:"google chrome icon"}):n.a.createElement("img",{src:"./images/chrome.svg",alt:"google chrome icon"})),n.a.createElement("div",{className:"bottomLeftText"},n.a.createElement("h3",null,"Wirehead is a Google Chrome Extension that helps you understand your browsing behavior."))),n.a.createElement("div",{className:"projectItemBottomBox"},n.a.createElement("div",{className:"bottomIcon"},1===this.state.detailImage?n.a.createElement("img",{src:"./images/cpuHighlight.svg",alt:"cpu icon"}):n.a.createElement("img",{src:"./images/cpu.svg",alt:"cpu icon"})),n.a.createElement("div",{className:"bottomLeftText"},n.a.createElement("h3",null,"The extension uses a machine learning algorithm to sort your browsing behavior by work or play."))),n.a.createElement("div",{className:"projectItemBottomBox"},n.a.createElement("div",{className:"bottomIcon"},2===this.state.detailImage?n.a.createElement("img",{src:"./images/pie-chartHighlight.svg",alt:"pie-chart icon"}):n.a.createElement("img",{src:"./images/pie-chart.svg",alt:"pie-chart icon"})),n.a.createElement("div",{className:"bottomLeftText"},n.a.createElement("h3",null,"We then present that data to the user with intuitive and interactive data visualizations.")))))}}]),t}(n.a.Component),H=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).forward=function(){var t=0;2===e.state.detailImage?t=0:(t=e.state.detailImage,t++),e.setState({detailImage:t}),console.log(e.state.detailImage)},e.back=function(){var t=0;0===e.state.detailImage?t=2:(t=e.state.detailImage,t--),e.setState({detailImage:t}),console.log(e.state.detailImage)},e.returnDetail=function(){return 0===e.state.detailImage?n.a.createElement("img",{src:"./images/maskotProducts.png",alt:"detail"}):1===e.state.detailImage?n.a.createElement("img",{src:"./images/maskotLogin.png",alt:"detail"}):2===e.state.detailImage?n.a.createElement("img",{src:"./images/maskotCart.png",alt:"detail"}):void 0},e.returnDetailHover=function(){return 0===e.state.detailImage?n.a.createElement("img",{src:"./images/maskotProducts.gif",alt:"detail"}):1===e.state.detailImage?n.a.createElement("img",{src:"./images/maskotLogin.gif",alt:"detail"}):2===e.state.detailImage?n.a.createElement("img",{src:"./images/maskotCart.gif",alt:"detail"}):void 0},e.toggleHoverOn=function(){e.setState({hover:!0})},e.toggleHoverOff=function(){e.setState({hover:!1})},e.state={detailImage:0,hover:!1},e.forward=e.forward.bind(Object(p.a)(Object(p.a)(e))),e.back=e.back.bind(Object(p.a)(Object(p.a)(e))),e.returnDetail=e.returnDetail.bind(Object(p.a)(Object(p.a)(e))),e.returnDetailHover=e.returnDetailHover.bind(Object(p.a)(Object(p.a)(e))),e.backgroundChange=e.backgroundChange.bind(Object(p.a)(Object(p.a)(e))),e.toggleHoverOn=e.toggleHoverOn.bind(Object(p.a)(Object(p.a)(e))),e.toggleHoverOff=e.toggleHoverOff.bind(Object(p.a)(Object(p.a)(e))),e}return Object(g.a)(t,e),Object(c.a)(t,[{key:"backgroundChange",value:function(){return 0===this.state.detailImage?{backgroundColor:"rgb(172, 181, 163)",transition:"background-color 2s ease-out"}:1===this.state.detailImage?{backgroundColor:"rgb(231, 172, 153)",transition:"background-color 2s ease-out"}:{backgroundColor:"rgb(230, 156, 131)",transition:"background-color 2s ease-out"}}},{key:"render",value:function(){var e=this;return v.a.config({left:function(){if(0===e.state.detailImage)e.setState({detailImage:2});else{var t=e.state.detailImage;t--,e.setState({detailImage:t})}},right:function(){if(2===e.state.detailImage)e.setState({detailImage:0});else{var t=e.state.detailImage;t++,e.setState({detailImage:t})}}}),n.a.createElement("div",{id:"projectOne",style:this.backgroundChange()},n.a.createElement("div",{className:"projectItemTop"},n.a.createElement("div",{className:"detailNav",onClick:this.back},n.a.createElement("div",null,n.a.createElement("img",{src:"./images/rewind.svg",alt:"back",className:"noSelect"}))),n.a.createElement("div",{className:"detailImage",onMouseEnter:this.toggleHoverOn,onMouseLeave:this.toggleHoverOff},n.a.createElement("div",{id:"detailImageContainer"},!1===this.state.hover?this.returnDetail():this.returnDetailHover())),n.a.createElement("div",{className:"detailNav",onClick:this.forward},n.a.createElement("img",{src:"./images/fast-forward.svg",alt:"forward",className:"noSelect"}))),n.a.createElement("div",{className:"projectItemBottom"},n.a.createElement("div",{className:"projectItemBottomBox"},n.a.createElement("div",{className:"bottomIcon"},0===this.state.detailImage?n.a.createElement("img",{src:"./images/shopping-bagHighlight.svg",alt:"shopping-bag icon"}):n.a.createElement("img",{src:"./images/shopping-bag.svg",alt:"shopping-bag icon"})),n.a.createElement("div",{className:"bottomLeftText"},n.a.createElement("h3",null,"Maskot is a fully functional e-commerce site for buying fashion-forward flu masks."))),n.a.createElement("div",{className:"projectItemBottomBox"},n.a.createElement("div",{className:"bottomIcon"},1===this.state.detailImage?n.a.createElement("img",{src:"./images/usersHighlight.svg",alt:"users icon"}):n.a.createElement("img",{src:"./images/users.svg",alt:"users icon"})),n.a.createElement("div",{className:"bottomLeftText"},n.a.createElement("h3",null,"The website supports user registration, administrative controls, and security features to make sure users are where they should be."))),n.a.createElement("div",{className:"projectItemBottomBox"},n.a.createElement("div",{className:"bottomIcon"},2===this.state.detailImage?n.a.createElement("img",{src:"./images/shopping-cartHighlight.svg",alt:"shopping-cart icon"}):n.a.createElement("img",{src:"./images/shopping-cart.svg",alt:"shopping-cart icon"})),n.a.createElement("div",{className:"bottomLeftText"},n.a.createElement("h3",null,"Maskot uses the Stripe API to allow for credit card purchases, complete with email confirmations and unique order numbers.")))))}}]),t}(n.a.Component),B=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).forward=function(){var t=0;2===e.state.detailImage?t=0:(t=e.state.detailImage,t++),e.setState({detailImage:t}),console.log(e.state.detailImage)},e.back=function(){var t=0;0===e.state.detailImage?t=2:(t=e.state.detailImage,t--),e.setState({detailImage:t}),console.log(e.state.detailImage)},e.returnDetail=function(){return 0===e.state.detailImage?n.a.createElement("img",{src:"./images/blogArticle.png",alt:"detail"}):1===e.state.detailImage?n.a.createElement("img",{src:"./images/blogBackend.png",alt:"detail"}):2===e.state.detailImage?n.a.createElement("img",{src:"./images/blogFrontpage.png",alt:"detail"}):void 0},e.returnDetailHover=function(){return 0===e.state.detailImage?n.a.createElement("img",{src:"./images/blogArticle.gif",alt:"detail"}):1===e.state.detailImage?n.a.createElement("img",{src:"./images/blogBackend.gif",alt:"detail"}):2===e.state.detailImage?n.a.createElement("img",{src:"./images/blogFrontpage.gif",alt:"detail"}):void 0},e.toggleHoverOn=function(){e.setState({hover:!0})},e.toggleHoverOff=function(){e.setState({hover:!1})},e.state={detailImage:0,hover:!1},e.forward=e.forward.bind(Object(p.a)(Object(p.a)(e))),e.back=e.back.bind(Object(p.a)(Object(p.a)(e))),e.returnDetail=e.returnDetail.bind(Object(p.a)(Object(p.a)(e))),e.returnDetailHover=e.returnDetailHover.bind(Object(p.a)(Object(p.a)(e))),e.toggleHoverOn=e.toggleHoverOn.bind(Object(p.a)(Object(p.a)(e))),e.toggleHoverOff=e.toggleHoverOff.bind(Object(p.a)(Object(p.a)(e))),e.backgroundChange=e.backgroundChange.bind(Object(p.a)(Object(p.a)(e))),e}return Object(g.a)(t,e),Object(c.a)(t,[{key:"backgroundChange",value:function(){return 0===this.state.detailImage?{backgroundColor:"rgb(230, 156, 131)",transition:"background-color 2s ease-out"}:1===this.state.detailImage?{backgroundColor:"rgb(203, 162, 149)",transition:"background-color 2s ease-out"}:{backgroundColor:"rgb(193, 120, 111)",transition:"background-color 2s ease-out"}}},{key:"render",value:function(){var e=this;return v.a.config({left:function(){if(0===e.state.detailImage)e.setState({detailImage:2});else{var t=e.state.detailImage;t--,e.setState({detailImage:t})}},right:function(){if(2===e.state.detailImage)e.setState({detailImage:0});else{var t=e.state.detailImage;t++,e.setState({detailImage:t})}}}),n.a.createElement("div",{id:"projectOne",style:this.backgroundChange()},n.a.createElement("div",{className:"projectItemTop"},n.a.createElement("div",{className:"detailNav",onClick:this.back},n.a.createElement("div",null,n.a.createElement("img",{src:"./images/rewind.svg",alt:"back",className:"noSelect"}))),n.a.createElement("div",{className:"detailImage",onMouseEnter:this.toggleHoverOn,onMouseLeave:this.toggleHoverOff},n.a.createElement("div",{id:"detailImageContainer"},!1===this.state.hover?this.returnDetail():this.returnDetailHover())),n.a.createElement("div",{className:"detailNav",onClick:this.forward},n.a.createElement("img",{src:"./images/fast-forward.svg",alt:"forward",className:"noSelect"}))),n.a.createElement("div",{className:"projectItemBottom"},n.a.createElement("div",{className:"projectItemBottomBox"},n.a.createElement("div",{className:"bottomIcon"},0===this.state.detailImage?n.a.createElement("img",{src:"./images/book-openHighlight.svg",alt:"book-open icon"}):n.a.createElement("img",{src:"./images/book-open.svg",alt:"book-open icon"})),n.a.createElement("div",{className:"bottomLeftText"},n.a.createElement("h3",null,"From Beyond is a blog app that combines React and Wordpress for the best of both worlds."))),n.a.createElement("div",{className:"projectItemBottomBox"},n.a.createElement("div",{className:"bottomIcon"},1===this.state.detailImage?n.a.createElement("img",{src:"./images/databaseHighlight.svg",alt:"database icon"}):n.a.createElement("img",{src:"./images/database.svg",alt:"database icon"})),n.a.createElement("div",{className:"bottomLeftText"},n.a.createElement("h3",null,"Wordpress's back-end and post editing features are extremely sophisticated, and make the process intuitive for the user."))),n.a.createElement("div",{className:"projectItemBottomBox"},n.a.createElement("div",{className:"bottomIcon"},2===this.state.detailImage?n.a.createElement("img",{src:"./images/layoutHighlight.svg",alt:"layout icon"}):n.a.createElement("img",{src:"./images/layout.svg",alt:"layout icon"})),n.a.createElement("div",{className:"bottomLeftText"},n.a.createElement("h3",null,"Using the Wordpress API, we can hook it up to a React front-end to provide a more modern, unique look to the blog.")))))}}]),t}(n.a.Component),T=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={displayTooltip:!1},a.hideTooltip=a.hideTooltip.bind(Object(p.a)(Object(p.a)(a))),a.showTooltip=a.showTooltip.bind(Object(p.a)(Object(p.a)(a))),a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"hideTooltip",value:function(){this.setState({displayTooltip:!1})}},{key:"showTooltip",value:function(){this.setState({displayTooltip:!0})}},{key:"render",value:function(){var e=this.props.message,t=this.props.position;return n.a.createElement("span",{className:"tooltip",onMouseLeave:this.hideTooltip},this.state.displayTooltip&&n.a.createElement("div",{className:"tooltip-bubble tooltip-".concat(t)},n.a.createElement("div",{className:"tooltip-message-".concat(t)},e)),n.a.createElement("span",{className:"tooltip-trigger",onMouseOver:this.showTooltip},this.props.children))}}]),t}(n.a.Component),z=["Contact","me","here:"],A={mass:5,tension:2e3,friction:200},W=function(){Object(k.b)(z.length,{config:A,opacity:1,x:0,height:100,from:{opacity:0,x:20,height:0}});return n.a.createElement("div",{id:"contact"},n.a.createElement("div",{id:"contactMiddle"},n.a.createElement("a",{href:"https://www.linkedin.com/in/cboetto/"},n.a.createElement("img",{src:"./images/linkedin.png",alt:"linkedin"})),n.a.createElement("a",{href:"https://github.com/CBoetto"},n.a.createElement("img",{src:"./images/github.png",alt:"github"})),n.a.createElement("br",null),n.a.createElement(T,{message:"cmitchellboetto@gmail.com",position:"top"},n.a.createElement("img",{src:"./images/email.png",alt:"email"})),n.a.createElement("a",{href:"http://www.frombeyond.xyz"},n.a.createElement("img",{src:"./images/blog.png",alt:"blog"}))),n.a.createElement("div",{id:"contactRight"},n.a.createElement("img",{src:"./images/fatcellphone.png",alt:"old cell phone"})))};var P=function(){Object(o.useContext)(h.d).location;return n.a.createElement("div",{id:"miniContent"},n.a.createElement(h.c,null,n.a.createElement(h.a,{exact:!0,path:"/",component:M}),n.a.createElement(h.a,{path:"/skills",component:x}),n.a.createElement(h.a,{path:"/projects",component:D}),n.a.createElement(h.a,{path:"/projectone",component:L}),n.a.createElement(h.a,{path:"/projecttwo",component:H}),n.a.createElement(h.a,{path:"/projectthree",component:B}),n.a.createElement(h.a,{path:"/contact",component:W})))};var U=function(e){var t={width:"".concat(e.x/50+20,"%")},a={width:"".concat(e.x/50+1520,"%"),left:"".concat((e.x-800)/100+20,"%")},o={width:"".concat(e.x/50+24,"%"),left:"".concat((e.x-800)/100+40,"%")},i={width:"".concat(e.x/50+26,"%"),left:"".concat((e.x-800)/100+55,"%")},l={width:"".concat(e.x/50+27,"%"),left:"".concat((e.x-800)/100+81,"%")};return n.a.createElement("div",null,n.a.createElement("div",{id:"header",style:e.height<696?{height:"0px",overflow:"hidden"}:null},n.a.createElement("img",{src:"./images/Untitled-1.svg",alt:"header"})),n.a.createElement("div",{id:"headerimg",style:e.height<696?{height:"0px",overflow:"hidden"}:null},n.a.createElement("div",{className:"headerBg1",style:e.height<696?{height:"0px",overflow:"hidden"}:t}),n.a.createElement("div",{className:"headerBg2",style:e.height<696?{height:"0px",overflow:"hidden"}:a}),n.a.createElement("div",{className:"headerBg3",style:e.height<696?{height:"0px",overflow:"hidden"}:o}),n.a.createElement("div",{className:"headerBg4",style:e.height<696?{height:"0px",overflow:"hidden"}:i}),n.a.createElement("div",{className:"headerBg5",style:e.height<696?{height:"0px",overflow:"hidden"}:l})))},Z=(n.a.Component,a(46),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={hover:!1,x:0,y:0,height:window.innerHeight,width:window.innerWidth},a.updateDimensions=a.updateDimensions.bind(Object(p.a)(Object(p.a)(a))),a.toggleOn=a.toggleOn.bind(Object(p.a)(Object(p.a)(a))),a.toggleOff=a.toggleOff.bind(Object(p.a)(Object(p.a)(a))),a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"_onMouseMove",value:function(e){this.setState({x:e.screenX,y:e.screenY})}},{key:"updateDimensions",value:function(){this.setState({height:window.innerHeight,width:window.innerWidth})}},{key:"toggleOn",value:function(){this.setState({hover:!0})}},{key:"toggleOff",value:function(){this.setState({hover:!1})}},{key:"componentDidMount",value:function(){document.getElementById("App").focus(),this.updateDimensions(),window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions.bind(this))}},{key:"render",value:function(){return n.a.createElement(d.a,null,n.a.createElement("div",Object.assign({},v.a.events,b.a.events,{tabIndex:"1",className:"App",id:"App",onMouseMove:this._onMouseMove.bind(this)}),n.a.createElement("div",{id:"top",style:this.state.height<696?{height:"0px",overflow:"hidden",transition:"height 0.2s ease-out"}:{overflow:"hidden"}},n.a.createElement(U,{x:this.state.x,height:this.state.height})),n.a.createElement("div",{id:"middle"},n.a.createElement(h.a,{to:"/",component:f,onMouseEnter:this.toggleOn,onMouseOut:this.toggleOff,props:this.state.hover}),n.a.createElement("div",{id:"content",onMouseEnter:this.toggleOff},n.a.createElement(h.a,{to:"/",component:P})))))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.9877cb39.chunk.js.map