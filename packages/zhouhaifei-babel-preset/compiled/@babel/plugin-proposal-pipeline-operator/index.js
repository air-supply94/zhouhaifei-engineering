(function(){"use strict";var e={474:function(e){e.exports=require("../core")},28:function(e,r){Object.defineProperty(r,"__esModule",{value:true});r.declare=declare;r.declarePreset=void 0;const t={assertVersion:e=>r=>{throwVersionError(r,e.version)}};{Object.assign(t,{targets:()=>()=>({}),assumption:()=>()=>undefined})}function declare(e){return(r,o,s)=>{var i;let n;for(const e of Object.keys(t)){var a;if(r[e])continue;(a=n)!=null?a:n=copyApiObject(r);n[e]=t[e](n)}return e((i=n)!=null?i:r,o||{},s)}}const o=declare;r.declarePreset=o;function copyApiObject(e){let r=null;if(typeof e.version==="string"&&/^7\./.test(e.version)){r=Object.getPrototypeOf(e);if(r&&(!has(r,"version")||!has(r,"transform")||!has(r,"template")||!has(r,"types"))){r=null}}return Object.assign({},r,e)}function has(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function throwVersionError(e,r){if(typeof e==="number"){if(!Number.isInteger(e)){throw new Error("Expected string or integer value.")}e=`^${e}.0.0-0`}if(typeof e!=="string"){throw new Error("Expected string or integer value.")}const t=Error.stackTraceLimit;if(typeof t==="number"&&t<25){Error.stackTraceLimit=25}let o;if(r.slice(0,2)==="7."){o=new Error(`Requires Babel "^7.0.0-beta.41", but was loaded with "${r}". `+`You'll need to update your @babel/core version.`)}else{o=new Error(`Requires Babel "${e}", but was loaded with "${r}". `+`If you are sure you have a compatible version of @babel/core, `+`it is likely that something in your build process is loading the `+`wrong version. Inspect the stack trace of this error to look for `+`the first entry that doesn't mention "@babel/core" or "babel-core" `+`to see what is calling Babel.`)}if(typeof t==="number"){Error.stackTraceLimit=t}throw Object.assign(o,{code:"BABEL_VERSION_UNSUPPORTED",version:r,range:e})}},441:function(e,r,t){Object.defineProperty(r,"__esModule",{value:true});r["default"]=void 0;var o=t(474);function isConciseArrowExpression(e){return o.types.isArrowFunctionExpression(e)&&o.types.isExpression(e.body)&&!e.async}const buildOptimizedSequenceExpression=({call:e,path:r,placeholder:t})=>{const{callee:s}=e;const i=r.node.left;const n=o.types.assignmentExpression("=",o.types.cloneNode(t),i);const a=isConciseArrowExpression(s);if(a){let e;let a=true;const{params:c}=s;if(c.length===1&&o.types.isIdentifier(c[0])){e=c[0]}else if(c.length>0){a=false}if(a&&!e){return o.types.sequenceExpression([i,s.body])}else if(e){r.scope.push({id:o.types.cloneNode(t)});r.get("right").scope.rename(e.name,t.name);return o.types.sequenceExpression([n,s.body])}}else if(o.types.isIdentifier(s,{name:"eval"})){const r=o.types.sequenceExpression([o.types.numericLiteral(0),s]);e.callee=r}r.scope.push({id:o.types.cloneNode(t)});return o.types.sequenceExpression([n,e])};var s=buildOptimizedSequenceExpression;r["default"]=s},394:function(e,r,t){Object.defineProperty(r,"__esModule",{value:true});r["default"]=void 0;var o=t(474);var s=t(441);const i={BinaryExpression(e){const{scope:r,node:t}=e;const{operator:i,left:n,right:a}=t;if(i!=="|>")return;const c=r.generateUidIdentifierBasedOnNode(n);const p=a.type==="AwaitExpression"?o.types.awaitExpression(o.types.cloneNode(c)):o.types.callExpression(a,[o.types.cloneNode(c)]);const l=(0,s.default)({placeholder:c,call:p,path:e});e.replaceWith(l)}};var n=i;r["default"]=n},926:function(e,r,t){Object.defineProperty(r,"__esModule",{value:true});r["default"]=void 0;var o=t(474);const s={exit(e,r){if(e.isTopicReference()){r.topicReferences.push(e)}else{if(r.topicReferences.length===0&&!r.sideEffectsBeforeFirstTopicReference&&!e.isPure()){r.sideEffectsBeforeFirstTopicReference=true}}},"ClassBody|Function"(e,r){if(r.topicReferences.length===0){r.sideEffectsBeforeFirstTopicReference=true}}};const i={BinaryExpression:{exit(e){const{scope:r,node:t}=e;if(t.operator!=="|>"){return}const i=e.get("right");if(i.node.type==="TopicReference"){e.replaceWith(t.left);return}const n={topicReferences:[],sideEffectsBeforeFirstTopicReference:i.isFunction()};i.traverse(s,n);if(n.topicReferences.length===1&&(!n.sideEffectsBeforeFirstTopicReference||e.scope.isPure(t.left,true))){n.topicReferences[0].replaceWith(t.left);e.replaceWith(t.right);return}const a=r.generateUidIdentifierBasedOnNode(t);r.push({id:a});n.topicReferences.forEach((e=>e.replaceWith(o.types.cloneNode(a))));e.replaceWith(o.types.sequenceExpression([o.types.assignmentExpression("=",o.types.cloneNode(a),t.left),t.right]))}}};var n=i;r["default"]=n},247:function(e,r,t){Object.defineProperty(r,"__esModule",{value:true});r["default"]=void 0;var o=t(474);var s=t(441);const i={BinaryExpression(e){const{scope:r,node:t}=e;const{operator:i,left:n,right:a}=t;if(i!=="|>")return;const c=r.generateUidIdentifierBasedOnNode(n);const p=o.types.callExpression(a,[o.types.cloneNode(c)]);e.replaceWith((0,s.default)({placeholder:c,call:p,path:e}))}};var n=i;r["default"]=n},178:function(e,r,t){Object.defineProperty(r,"__esModule",{value:true});r["default"]=void 0;var o=t(474);const s={PipelinePrimaryTopicReference(e){e.replaceWith(o.types.cloneNode(this.topicId))},PipelineTopicExpression(e){e.skip()}};const i={BinaryExpression(e){const{scope:r}=e;const{node:t}=e;const{operator:i,left:n,right:a}=t;if(i!=="|>")return;const c=r.generateUidIdentifierBasedOnNode(n);r.push({id:c});let p;if(o.types.isPipelineTopicExpression(a)){e.get("right").traverse(s,{topicId:c});p=a.expression}else{let e=a.callee;if(o.types.isIdentifier(e,{name:"eval"})){e=o.types.sequenceExpression([o.types.numericLiteral(0),e])}p=o.types.callExpression(e,[o.types.cloneNode(c)])}e.replaceWith(o.types.sequenceExpression([o.types.assignmentExpression("=",o.types.cloneNode(c),n),p]))}};var n=i;r["default"]=n},250:function(e,r,t){Object.defineProperty(r,"__esModule",{value:true});r["default"]=void 0;var o=t(28);const s=["minimal","fsharp","hack","smart"];const i=["^^","@@","^","%","#"];const n="https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator";var a=(0,o.declare)(((e,{proposal:r,topicToken:t})=>{e.assertVersion(7);if(typeof r!=="string"||!s.includes(r)){const e=s.map((e=>`"${e}"`)).join(", ");throw new Error(`The pipeline plugin requires a "proposal" option. "proposal" must be one of: ${e}. See <${n}>.`)}if(r==="hack"&&!i.includes(t)){const e=i.map((e=>`"${e}"`)).join(", ");throw new Error(`The pipeline plugin in "proposal": "hack" mode also requires a "topicToken" option. "topicToken" must be one of: ${e}. See <${n}>.`)}return{name:"syntax-pipeline-operator",manipulateOptions(e,o){o.plugins.push(["pipelineOperator",{proposal:r,topicToken:t}]);e.generatorOpts.topicToken=t}}}));r["default"]=a}};var r={};function __nccwpck_require__(t){var o=r[t];if(o!==undefined){return o.exports}var s=r[t]={exports:{}};var i=true;try{e[t](s,s.exports,__nccwpck_require__);i=false}finally{if(i)delete r[t]}return s.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var t={};!function(){var e=t;Object.defineProperty(e,"__esModule",{value:true});e["default"]=void 0;var r=__nccwpck_require__(28);var o=__nccwpck_require__(250);var s=__nccwpck_require__(247);var i=__nccwpck_require__(926);var n=__nccwpck_require__(394);var a=__nccwpck_require__(178);const c={minimal:s.default,hack:i.default,fsharp:n.default,smart:a.default};var p=(0,r.declare)(((e,r)=>{e.assertVersion(7);const{proposal:t}=r;if(t==="smart"){console.warn(`The smart-mix pipe operator is deprecated. Use "proposal": "hack" instead.`)}return{name:"proposal-pipeline-operator",inherits:o.default,visitor:c[r.proposal]}}));e["default"]=p}();module.exports=t})();