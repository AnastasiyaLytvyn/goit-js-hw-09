let t=t=>document.querySelector(t);function o(){setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,console.log("Start")}),1e3)}t(".start").addEventListener("click",o),t(".stop").addEventListener("click",(function(){clearInterval(o),console.log("Stop")}));
//# sourceMappingURL=01-color-switcher.1dab90b5.js.map
