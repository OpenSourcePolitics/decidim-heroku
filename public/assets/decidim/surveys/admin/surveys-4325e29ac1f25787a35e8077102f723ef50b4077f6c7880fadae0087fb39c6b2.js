function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}!function(e){function t(t,n,i,o){var r={data:o||(n?n.data:{}),_wrap:n?n._wrap:null,tmpl:null,parent:n||null,nodes:[],calls:c,nest:s,wrap:d,html:p,update:f};return t&&e.extend(r,t,{nodes:[],parent:n}),i&&(r.tmpl=i,r._ctnt=r._ctnt||r.tmpl(e,r),r.key=++g,(b.length?_:$)[g]=r),r}function n(t,o,r){var l,a=r?e.map(r,function(e){return"string"==typeof e?t.key?e.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+v+'="'+t.key+'" $2'):e:n(e,t,e._ctnt)}):t;return o?a:(a=a.join(""),a.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(t,n,o,r){l=e(o).get(),u(l),n&&(l=i(n).concat(l)),r&&(l=l.concat(i(r)))}),l||i(a))}function i(t){var n=document.createElement("div");return n.innerHTML=t,e.makeArray(n.childNodes)}function o(t){return new Function("jQuery","$item","var $=jQuery,call,_=[],$data=$item.data;with($data){_.push('"+e.trim(t).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(t,n,i,o,r,a,u){var c,s,d,p=e.tmpl.tag[i];if(!p)throw"Template command not found: "+i;return c=p._default||[],a&&!/\w$/.test(r)&&(r+=a,a=""),r?(r=l(r),u=u?","+l(u)+")":a?")":"",s=a?r.indexOf(".")>-1?r+a:"("+r+").call($item"+u:r,d=a?s:"(typeof("+r+")==='function'?("+r+").call($item):("+r+"))"):d=s=c.$1||"null",o=l(o),"');"+p[n?"close":"open"].split("$notnull_1").join(r?"typeof("+r+")!=='undefined' && ("+r+")!=null":"true").split("$1a").join(d).split("$1").join(s).split("$2").join(o?o.replace(/\s*([^\(]+)\s*(\((.*?)\))?/g,function(e,t,n,i){return i=i?","+i+")":n?")":"",i?"("+t+").call($item"+i:e}):c.$2||"")+"_.push('"})+"');}return _;")}function r(t,i){t._wrap=n(t,!0,e.isArray(i)?i:[y.test(i)?i:e(i).html()]).join("")}function l(e){return e?e.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function a(e){var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}function u(n){function i(n){function i(e){e+=c,l=s[e]=s[e]||t(l,$[l.parent.key+c]||l.parent,null,!0)}var o,r,l,a,u=n;if(a=n.getAttribute(v)){for(;u.parentNode&&1===(u=u.parentNode).nodeType&&!(o=u.getAttribute(v)););o!==a&&(u=u.parentNode?11===u.nodeType?0:u.getAttribute(v)||0:0,(l=$[a])||(l=_[a],l=t(l,$[u]||_[u],null,!0),l.key=++g,$[g]=l),S&&i(a)),n.removeAttribute(v)}else S&&(l=e.data(n,"tmplItem"))&&(i(l.key),$[l.key]=l,u=e.data(n.parentNode,"tmplItem"),u=u?u.key:0);if(l){for(r=l;r&&r.key!=u;)r.nodes.push(n),r=r.parent;delete l._ctnt,delete l._wrap,e.data(n,"tmplItem",l)}}var o,r,l,a,u,c="_"+S,s={};for(l=0,a=n.length;l<a;l++)if(1===(o=n[l]).nodeType){for(r=o.getElementsByTagName("*"),u=r.length-1;u>=0;u--)i(r[u]);i(o)}}function c(e,t,n,i){if(!e)return b.pop();b.push({_:e,tmpl:t,item:this,data:n,options:i})}function s(t,n,i){return e.tmpl(e.template(t),n,i,this)}function d(t,n){var i=t.options||{};return i.wrapped=n,e.tmpl(e.template(t.tmpl),t.data,i,t.item)}function p(t,n){var i=this._wrap;return e.map(e(e.isArray(i)?i.join(""):i).filter(t||"*"),function(e){return n?e.innerText||e.textContent:e.outerHTML||a(e)})}function f(){var t=this.nodes;e.tmpl(null,null,null,this).insertBefore(t[0]),e(t).remove()}var m,h=e.fn.domManip,v="_tmplitem",y=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,$={},_={},w={key:0,data:{}},g=0,S=0,b=[];e.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,n){e.fn[t]=function(i){var o,r,l,a,u=[],c=e(i),s=1===this.length&&this[0].parentNode;if(m=$||{},s&&11===s.nodeType&&1===s.childNodes.length&&1===c.length)c[n](this[0]),u=this;else{for(r=0,l=c.length;r<l;r++)S=r,o=(r>0?this.clone(!0):this).get(),e.fn[n].apply(e(c[r]),o),u=u.concat(o);S=0,u=this.pushStack(u,t,c.selector)}return a=m,m=null,e.tmpl.complete(a),u}}),e.fn.extend({tmpl:function(t,n,i){return e.tmpl(this[0],t,n,i)},tmplItem:function(){return e.tmplItem(this[0])},template:function(t){return e.template(t,this[0])},domManip:function(t,n,i){if(t[0]&&t[0].nodeType){for(var o,r=e.makeArray(arguments),l=t.length,a=0;a<l&&!(o=e.data(t[a++],"tmplItem")););l>1&&(r[0]=[e.makeArray(t)]),o&&S&&(r[2]=function(t){e.tmpl.afterManip(this,t,i)}),h.apply(this,r)}else h.apply(this,arguments);return S=0,m||e.tmpl.complete($),this}}),e.extend({tmpl:function(i,o,l,a){var u,c=!a;if(c)a=w,i=e.template[i]||e.template(null,i),_={};else if(!i)return i=a.tmpl,$[a.key]=a,a.nodes=[],a.wrapped&&r(a,a.wrapped),e(n(a,null,a.tmpl(e,a)));return i?("function"==typeof o&&(o=o.call(a||{})),l&&l.wrapped&&r(l,l.wrapped),u=e.isArray(o)?e.map(o,function(e){return e?t(l,a,i,e):null}):[t(l,a,i,o)],c?e(n(a,null,u)):u):[]},tmplItem:function(t){var n;for(t instanceof e&&(t=t[0]);t&&1===t.nodeType&&!(n=e.data(t,"tmplItem"))&&(t=t.parentNode););return n||w},template:function(t,n){return n?("string"==typeof n?n=o(n):n instanceof e&&(n=n[0]||{}),n.nodeType&&(n=e.data(n,"tmpl")||e.data(n,"tmpl",o(n.innerHTML))),"string"==typeof t?e.template[t]=n:n):t?"string"!=typeof t?e.template(null,t):e.template[t]||e.template(null,y.test(t)?t:e(t)):null},encode:function(e){return(""+e).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}}),e.extend(e.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){_=_.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(_,$1,$2);_=[];",close:"call=$item.calls();_=call._.concat($item.wrap(call,_));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){_.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){_.push($.encode($1a));}"},"!":{open:""}},complete:function(){$={}},afterManip:function(t,n,i){var o=11===n.nodeType?e.makeArray(n.childNodes):1===n.nodeType?[n]:[];i.call(t,n),u(o),S++}})}(jQuery);var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();!function(e){var t=function(){function e(){var t=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];_classCallCheck(this,e),this.listSelector=t.listSelector,this.labelSelector=t.labelSelector,this.onPositionComputed=t.onPositionComputed,this.run()}return _createClass(e,[{key:"run",value:function(){var e=this;$(this.listSelector).each(function(t,n){var i=$(n).find(e.labelSelector),o=i.html();o.match(/#(\d+)/)?i.html(o.replace(/#(\d+)/,"#"+(t+1))):i.html(o+" #"+(t+1)),e.onPositionComputed&&e.onPositionComputed(n,t)})}}]),e}();e.DecidimAdmin=e.DecidimAdmin||{},e.DecidimAdmin.AutoLabelByPositionComponent=t}(window);var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();!function(e){var t=function(){function e(){var t=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];_classCallCheck(this,e),this.templateId=t.templateId,this.wrapperSelector=t.wrapperSelector,this.containerSelector=t.containerSelector,this.fieldSelector=t.fieldSelector,this.addFieldButtonSelector=t.addFieldButtonSelector,this.removeFieldButtonSelector=t.removeFieldButtonSelector,this.onAddField=t.onAddField,this.onRemoveField=t.onRemoveField,this.tabsPrefix=t.tabsPrefix,this._compileTemplate(),this._bindEvents()}return _createClass(e,[{key:"_compileTemplate",value:function(){$.template(this.templateId,$("#"+this.templateId).html())}},{key:"_bindEvents",value:function(){var e=this;$(this.wrapperSelector).on("click",this.addFieldButtonSelector,function(t){return e._bindSafeEvent(t,function(){return e._addField()})}),$(this.wrapperSelector).on("click",this.removeFieldButtonSelector,function(t){return e._bindSafeEvent(t,function(t){return e._removeField(t)})})}},{key:"_bindSafeEvent",value:function(e,t){e.preventDefault(),e.stopPropagation();try{return t(e.target)}catch(e){return console.error(e),e}}},{key:"_addField",value:function(){var e=$(this.wrapperSelector).find(this.containerSelector),t=this._getUID(),n=this.tabsPrefix+"-"+t,i=$.tmpl(this.templateId,{tabsId:n});i.attr("id",n+"-field"),i.find("[disabled]").attr("disabled",!1),i.find("ul.tabs").attr("data-tabs",!0),i.appendTo(e),i.foundation(),this.onAddField&&this.onAddField(i)}},{key:"_removeField",value:function(e){var t=$(e),n=t.parents(this.fieldSelector);if(n.find("input").filter(function(e,t){return t.name.match(/id/)}).length>0){var i=n.find("input").filter(function(e,t){return t.name.match(/delete/)});i.length>0&&$(i[0]).val(!0),n.addClass("hidden"),n.hide()}else n.remove();this.onRemoveField&&this.onRemoveField(n)}},{key:"_getUID",value:function(){return(new Date).getTime()+"-"+Math.floor(1e6*Math.random())}}]),e}();e.DecidimAdmin=e.DecidimAdmin||{},e.DecidimAdmin.DynamicFieldsComponent=t,e.DecidimAdmin.createDynamicFields=function(e){return new t(e)}}(window),function(e){var t=e.DecidimAdmin,n=t.AutoLabelByPositionComponent,i=t.createDynamicFields,o=t.createSortList,r=".survey-questions",l=".survey-question",a='[name="survey[questions][][question_type]"]',u=".survey-question-answer-options",c=new n({listSelector:".survey-question:not(.hidden)",labelSelector:".card-title span:first",onPositionComputed:function(e,t){$(e).find('input[name="survey[questions][][position]"]').val(t)}}),s=function(){o(".survey-questions-list:not(.published)",{handle:".question-divider",placeholder:'<div style="border-style: dashed; border-color: #000"></div>',forcePlaceholderSize:!0,onSortUpdate:function(){c.run()}})},d=function(e){i({templateId:"survey-question-answer-option-tmpl",tabsPrefix:"survey-question-answer-option",wrapperSelector:"#"+e+" "+u,containerSelector:".survey-question-answer-options-list",fieldSelector:".survey-question-answer-option",addFieldButtonSelector:".add-answer-option",removeFieldButtonSelector:".remove-answer-option"})},p=function(e){var t=e.parents(l).find(u),n=e.val();t.hide(),"single_option"!==n&&"multiple_option"!==n||t.show()};i({templateId:"survey-question-tmpl",tabsPrefix:"survey-question",wrapperSelector:r,containerSelector:".survey-questions-list",fieldSelector:l,addFieldButtonSelector:".add-question",removeFieldButtonSelector:".remove-question",onAddField:function(e){var t=e.attr("id");s(),c.run(),d(t),p(e.find(a))},onRemoveField:function(){c.run()}}),s(),$(l).each(function(e,t){d($(t).attr("id")),p($(t).find(a))}),$(r).on("change",a,function(e){var t=$(e.target);p(t)})}(window);