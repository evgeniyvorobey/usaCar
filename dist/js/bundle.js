!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){document.querySelector(".our-services-item")&&document.querySelectorAll(".our-services-item").forEach(function(e){var t=window.innerHeight;e.addEventListener("scroll",function(){var e=this.getBoundingClientRect();console.log("scroll"),firstEl.top<=t-100?e[0].classList.add("active"):e[0].classList.remove("active")})}),document.addEventListener("scroll",function(){var e=window.innerHeight;window.scrollY>110?(document.querySelector("header").classList.add("fix-header"),document.querySelector("main").classList.add("when-header-fixed")):(document.querySelector("header").classList.remove("fix-header"),document.querySelector("main").classList.remove("when-header-fixed")),document.querySelector(".our-services-item")&&document.querySelectorAll(".our-services-item").forEach(function(t){t.getBoundingClientRect().top<=e-50?t.classList.add("active"):t.classList.remove("active")})}),foggingOn=function(){return document.querySelector(".fogging").classList.add("active")},foggingOff=function(){return document.querySelector(".fogging").classList.remove("active")},closeHeaderMenu=function(){return document.querySelector(".hamburger").classList.remove("active")},document.querySelector(".fogging").addEventListener("click",function(){foggingOff(),document.querySelector(".navigation-panel").classList.remove("active")}),document.querySelector(".hamburger").addEventListener("click",function(){this.parentNode.classList.toggle("active"),foggingOn()}),document.querySelector(".wy-by-in-usa-item")&&document.querySelectorAll(".wy-by-in-usa-item span").forEach(function(e){e.addEventListener("click",function(){this.parentNode.classList.contains("active")?this.parentNode.classList.remove("active"):(document.querySelectorAll(".wy-by-in-usa-item span").forEach(function(e){e.parentNode.classList.remove("active")}),this.parentNode.classList.add("active"))})}),document.querySelectorAll(".questions").forEach(function(e){e.addEventListener("click",function(){this.parentNode.classList.toggle("active")})}),document.querySelector(".count")&&(document.querySelectorAll(".count").forEach(function(e){e.addEventListener("click",function(e){this.parentNode.parentNode.classList.add("active")})}),document.querySelectorAll(".agree").forEach(function(e){e.addEventListener("click",function(){this.parentNode.parentNode.classList.remove("active")})})),document.querySelector("form.send-data")&&document.querySelector("form.send-data").addEventListener("submit",function(e){e.preventDefault();var t=this.querySelector("#name-callback-form"),n=this.querySelector("#tel-callback-form"),o=!1,r=!1,c=/^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;console.log(n.value.match(c)),t.value.length<2?(t.value="",t.setAttribute("placeholder","Введите имя"),t.parentNode.classList.add("false"),console.log("enter valid name")):(t.parentNode.classList.remove("false"),o=!0),null===n.value.match(c)?(n.value="",n.setAttribute("placeholder","Введите номер 123-456-7890"),n.parentNode.classList.add("false"),console.log("enter valid number")):(n.parentNode.classList.remove("false"),r=!0),console.log(o,r),1==o&&1==r&&(this.classList.add("active"),setTimeout(function(){document.querySelector(".callback-block").classList.remove("active")},4e3),function(e){var t=e.querySelector("#name-callback-form").value,n=e.querySelector("#tel-callback-form").value;fetch("../php/send.php",{method:"POST",headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},body:"firstname="+t+"&phone="+n}).then(function(e){e.ok&&console.log("Do something")})}(this))})},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map