(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),o=t(3),c=t.n(o),r=(t(13),t(1));t(15);function s(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"/about"},"About"))),n.a.createElement("div",{className:"form-check form-switch"},n.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toggle}),n.a.createElement("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode")))))}s.defaultProps={title:"Set Title Here "};var i=s,d=function(e){var a=Object(l.useState)(""),t=Object(r.a)(a,2),o=t[0],c=t[1];return n.a.createElement("div",null,n.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#000"}},n.a.createElement("h1",null,e.hello),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"8",value:o,onChange:function(e){c(e.target.value)},onInput:function(){for(var e=0,a=document.getElementById("exampleFormControlTextarea1").value.split(" "),t=0;t<a.length;t++)""!=a[t]&&(e+=1);document.getElementById("show").innerHTML=e},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#000"},placeholder:"Enter Your Text Here"})),n.a.createElement("button",{onClick:function(){var a=o.toUpperCase();c(a),e.showalert("Text Converted to Uppercase","success")},className:"btn btn-primary"},"Convert to Uppercase"),n.a.createElement("button",{onClick:function(){var a=o.toLowerCase();c(a),e.showalert("Converted to Lowercase","success")},className:"btn btn-primary mx-2"},"Convert to Lowercase"),n.a.createElement("button",{onClick:function(){document.getElementById("exampleFormControlTextarea1").select(),document.execCommand("copy"),e.showalert("Text Copied","success")},className:"btn btn-primary mx-2"},"Copy Text"),n.a.createElement("button",{onClick:function(){c(""),e.showalert("Text Cleared","success")},className:"btn btn-primary mx-2"},"Clear Text")),n.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#000"}},n.a.createElement("h1",null,"Your Text Summary"),n.a.createElement("p",null,"Your Text Includes ",n.a.createElement("span",{id:"show"},"0"),"  Words and ",o.length," Characters"),n.a.createElement("h2",null,"Preview"),n.a.createElement("p",null,o)))};function m(){var e=Object(l.useState)({backgroundColor:"white",color:"black",padding:"20px"}),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)("Enable Dark Mode"),s=Object(r.a)(c,2),i=s[0],d=s[1];return n.a.createElement("div",null,n.a.createElement("div",{className:"container my-3",style:t},n.a.createElement("div",{className:"accordion ",id:"accordionExample"},n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingOne"},n.a.createElement("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:t},"Accordion Item #1")),n.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:t},n.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:t},"Accordion Item #2")),n.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:t},n.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingThree"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:t},"Accordion Item #3")),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:t},n.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))),n.a.createElement("button",{onClick:function(){"black"===t.color?(o({backgroundColor:"black",color:"white",padding:"20px"}),d("Enable Light Mode")):(o({backgroundColor:"white",color:"black"}),d("Enable Dark Mode"))},type:"button",className:"btn btn-primary my-3"},i)))}var u=function(e){return e.alert&&n.a.createElement("div",null,n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,e.alert.msg)))};var h=function(){var e=Object(l.useState)("light"),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)(null),s=Object(r.a)(c,2),h=s[0],b=s[1],p=function(e,a){b({msg:e,type:a}),setTimeout(function(){b(null)},3e3)};return n.a.createElement("div",{className:"App"},n.a.createElement(i,{title:"Text-Utility",mode:t,toggle:function(){"light"===t?(o("dark"),document.body.style.backgroundColor="grey",p("Dark Mode has been enabled","success"),document.title="Text Utility - Dark Mode"):(o("light"),document.body.style.backgroundColor="white",p("Light Mode has been enabled","success"),document.title="Text Utility - Light Mode")}}),n.a.createElement(u,{alert:h}),n.a.createElement(d,{showalert:p,mode:t,hello:"Please Enter Your Text To Uppercase"}),n.a.createElement(m,null))},b=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,18)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null))),b()},4:function(e,a,t){e.exports=t(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.fa457cf7.chunk.js.map