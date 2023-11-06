(function(){"use strict";var e={474:function(e){e.exports=require("../core")},28:function(e,r){Object.defineProperty(r,"__esModule",{value:true});r.declare=declare;r.declarePreset=void 0;const t={assertVersion:e=>r=>{throwVersionError(r,e.version)}};{Object.assign(t,{targets:()=>()=>({}),assumption:()=>()=>undefined})}function declare(e){return(r,o,n)=>{var i;let s;for(const e of Object.keys(t)){var a;if(r[e])continue;(a=s)!=null?a:s=copyApiObject(r);s[e]=t[e](s)}return e((i=s)!=null?i:r,o||{},n)}}const o=declare;r.declarePreset=o;function copyApiObject(e){let r=null;if(typeof e.version==="string"&&/^7\./.test(e.version)){r=Object.getPrototypeOf(e);if(r&&(!has(r,"version")||!has(r,"transform")||!has(r,"template")||!has(r,"types"))){r=null}}return Object.assign({},r,e)}function has(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function throwVersionError(e,r){if(typeof e==="number"){if(!Number.isInteger(e)){throw new Error("Expected string or integer value.")}e=`^${e}.0.0-0`}if(typeof e!=="string"){throw new Error("Expected string or integer value.")}const t=Error.stackTraceLimit;if(typeof t==="number"&&t<25){Error.stackTraceLimit=25}let o;if(r.slice(0,2)==="7."){o=new Error(`Requires Babel "^7.0.0-beta.41", but was loaded with "${r}". `+`You'll need to update your @babel/core version.`)}else{o=new Error(`Requires Babel "${e}", but was loaded with "${r}". `+`If you are sure you have a compatible version of @babel/core, `+`it is likely that something in your build process is loading the `+`wrong version. Inspect the stack trace of this error to look for `+`the first entry that doesn't mention "@babel/core" or "babel-core" `+`to see what is calling Babel.`)}if(typeof t==="number"){Error.stackTraceLimit=t}throw Object.assign(o,{code:"BABEL_VERSION_UNSUPPORTED",version:r,range:e})}},19:function(e,r,t){Object.defineProperty(r,"__esModule",{value:true});r["default"]=void 0;var o=t(28);var n=(0,o.declare)((e=>{e.assertVersion(7);return{name:"syntax-throw-expressions",manipulateOptions(e,r){r.plugins.push("throwExpressions")}}}));r["default"]=n}};var r={};function __nccwpck_require__(t){var o=r[t];if(o!==undefined){return o.exports}var n=r[t]={exports:{}};var i=true;try{e[t](n,n.exports,__nccwpck_require__);i=false}finally{if(i)delete r[t]}return n.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var t={};!function(){var e=t;Object.defineProperty(e,"__esModule",{value:true});e["default"]=void 0;var r=__nccwpck_require__(28);var o=__nccwpck_require__(19);var n=__nccwpck_require__(474);var i=(0,r.declare)((e=>{e.assertVersion(7);return{name:"proposal-throw-expressions",inherits:o.default,visitor:{UnaryExpression(e){const{operator:r,argument:t}=e.node;if(r!=="throw")return;const o=n.types.functionExpression(null,[n.types.identifier("e")],n.types.blockStatement([n.types.throwStatement(n.types.identifier("e"))]));e.replaceWith(n.types.callExpression(o,[t]))}}}}));e["default"]=i}();module.exports=t})();