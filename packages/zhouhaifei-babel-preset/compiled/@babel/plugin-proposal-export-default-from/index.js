(function(){"use strict";var e={474:function(e){e.exports=require("../core")},28:function(e,r){Object.defineProperty(r,"__esModule",{value:true});r.declare=declare;r.declarePreset=void 0;const t={assertVersion:e=>r=>{throwVersionError(r,e.version)}};{Object.assign(t,{targets:()=>()=>({}),assumption:()=>()=>undefined})}function declare(e){return(r,o,i)=>{var n;let a;for(const e of Object.keys(t)){var s;if(r[e])continue;(s=a)!=null?s:a=copyApiObject(r);a[e]=t[e](a)}return e((n=a)!=null?n:r,o||{},i)}}const o=declare;r.declarePreset=o;function copyApiObject(e){let r=null;if(typeof e.version==="string"&&/^7\./.test(e.version)){r=Object.getPrototypeOf(e);if(r&&(!has(r,"version")||!has(r,"transform")||!has(r,"template")||!has(r,"types"))){r=null}}return Object.assign({},r,e)}function has(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function throwVersionError(e,r){if(typeof e==="number"){if(!Number.isInteger(e)){throw new Error("Expected string or integer value.")}e=`^${e}.0.0-0`}if(typeof e!=="string"){throw new Error("Expected string or integer value.")}const t=Error.stackTraceLimit;if(typeof t==="number"&&t<25){Error.stackTraceLimit=25}let o;if(r.slice(0,2)==="7."){o=new Error(`Requires Babel "^7.0.0-beta.41", but was loaded with "${r}". `+`You'll need to update your @babel/core version.`)}else{o=new Error(`Requires Babel "${e}", but was loaded with "${r}". `+`If you are sure you have a compatible version of @babel/core, `+`it is likely that something in your build process is loading the `+`wrong version. Inspect the stack trace of this error to look for `+`the first entry that doesn't mention "@babel/core" or "babel-core" `+`to see what is calling Babel.`)}if(typeof t==="number"){Error.stackTraceLimit=t}throw Object.assign(o,{code:"BABEL_VERSION_UNSUPPORTED",version:r,range:e})}},144:function(e,r,t){Object.defineProperty(r,"__esModule",{value:true});r["default"]=void 0;var o=t(28);var i=(0,o.declare)((e=>{e.assertVersion(7);return{name:"syntax-export-default-from",manipulateOptions(e,r){r.plugins.push("exportDefaultFrom")}}}));r["default"]=i}};var r={};function __nccwpck_require__(t){var o=r[t];if(o!==undefined){return o.exports}var i=r[t]={exports:{}};var n=true;try{e[t](i,i.exports,__nccwpck_require__);n=false}finally{if(n)delete r[t]}return i.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var t={};!function(){var e=t;Object.defineProperty(e,"__esModule",{value:true});e["default"]=void 0;var r=__nccwpck_require__(28);var o=__nccwpck_require__(144);var i=__nccwpck_require__(474);var n=(0,r.declare)((e=>{e.assertVersion(7);return{name:"proposal-export-default-from",inherits:o.default,visitor:{ExportNamedDeclaration(e){const{node:r}=e;const{specifiers:t,source:o}=r;if(!i.types.isExportDefaultSpecifier(t[0]))return;const{exported:n}=t.shift();if(t.every((e=>i.types.isExportSpecifier(e)))){t.unshift(i.types.exportSpecifier(i.types.identifier("default"),n));return}e.insertBefore(i.types.exportNamedDeclaration(null,[i.types.exportSpecifier(i.types.identifier("default"),n)],i.types.cloneNode(o)))}}}}));e["default"]=n}();module.exports=t})();