(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{3232:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return a}));var i=e(3030);function a(t){const{formData:n,queryData:e,width:a,height:o}=t,{allColumnsX:u,entity:r,minLeafNodeEventCount:d}=n,{data:h}=e;if(h&&h.length>0){const t=r,n=u,e={[i.ENTITY_ID]:n=>String(n[t]),[i.EVENT_NAME]:t=>t[n],[i.TS]:t=>new Date(t.__timestamp)};return{data:Object(i.cleanEvents)(h,e),height:o,initialMinEventCount:d,width:a}}return{data:null,height:o,width:a}}}}]);