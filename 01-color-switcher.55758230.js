let t=t=>document.querySelector(t);t(".start").addEventListener("click",(function(){t(".start").disabled=!0,e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,console.log("Start")}),1e3)})),t(".stop").addEventListener("click",(function(){clearInterval(e),t(".start").disabled=!1,console.log("Stop")}));let e=null;
//# sourceMappingURL=01-color-switcher.55758230.js.map
