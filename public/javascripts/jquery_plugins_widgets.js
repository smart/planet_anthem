/**
 * jQuery Widget Plugins
 *   Includes both ui widgets, and plugins that are too large to be considered utilities.
 *   Gilt Originals have full source, other plugins are compressed (otherwise, this file would be 10000 lines long)
 *
 * TOC:
 *   (3rd Party)
 *     CoolInput
 *     qTip
 *     Form
 *     Validation
 *     Jcrop
 *     History
 *     Autocomplete
 *
 *   (Gilt Originals)
 *     Zoom
 *     Rollover
 *     Carousel
 *     Size Chart
 */

/**
 * CoolInput Plugin
 *
 * @version 1.2 (17/09/2008)
 * @requires jQuery v1.2.6
 * @author Alex Weber <alexweber.info>
 * @copyright Copyright (c) 2008, Alex Weber
 *
 * Distributed under the terms of the GNU General Public License
 * http://www.gnu.org/licenses/gpl-3.0.html
 *
 */
eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('4.g.h=1(c){5 d={8:\'i\',3:\'6\',7:j,9:k};0(c){4.l(d,c)}m e.n(1(){5 a=4(e);5 b=a.o(d.8);0(b){a.6(1(){0(a.2()==\'\'){a.2(b).f(d.3)}}).p(1(){0(a.2()==b){a.2(\'\').q(d.3)}});0(d.9){a.r(\'s:t\').u(1(){0(a.v(d.3)){a.2(\'\')}})}0(d.7){a.f(d.7)}a.6()}})};',32,32,'if|function|val|blurClass|jQuery|var|blur|iconClass|source|clearText|||||this|addClass|fn|coolinput|title|false|true|extend|return|each|attr|focus|removeClass|parents|form|first|submit|hasClass'.split('|'),0,{}));

/**
 * jquery.qtip. The jQuery tooltip plugin
 *
 * Copyright (c) 2009 Craig Thompson
 * http://craigsworks.com
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Launch  : February 2009
 * Version : 1.0.0-rc3
 * Released: Tuesday 12th May, 2009 - 00:00
 * Debug: jquery.qtip.debug.js
 */
(function(f){f.fn.qtip=function(B,u){var y,t,A,s,x,w,v,z;if(typeof B=="string"){if(typeof f(this).data("qtip")!=="object"){f.fn.qtip.log.error.call(self,1,f.fn.qtip.constants.NO_TOOLTIP_PRESENT,false)}if(B=="api"){return f(this).data("qtip").interfaces[f(this).data("qtip").current]}else{if(B=="interfaces"){return f(this).data("qtip").interfaces}}}else{if(!B){B={}}if(typeof B.content!=="object"||(B.content.jquery&&B.content.length>0)){B.content={text:B.content}}if(typeof B.content.title!=="object"){B.content.title={text:B.content.title}}if(typeof B.position!=="object"){B.position={corner:B.position}}if(typeof B.position.corner!=="object"){B.position.corner={target:B.position.corner,tooltip:B.position.corner}}if(typeof B.show!=="object"){B.show={when:B.show}}if(typeof B.show.when!=="object"){B.show.when={event:B.show.when}}if(typeof B.show.effect!=="object"){B.show.effect={type:B.show.effect}}if(typeof B.hide!=="object"){B.hide={when:B.hide}}if(typeof B.hide.when!=="object"){B.hide.when={event:B.hide.when}}if(typeof B.hide.effect!=="object"){B.hide.effect={type:B.hide.effect}}if(typeof B.style!=="object"){B.style={name:B.style}}B.style=c(B.style);s=f.extend(true,{},f.fn.qtip.defaults,B);s.style=a.call({options:s},s.style);s.user=f.extend(true,{},B)}return f(this).each(function(){if(typeof B=="string"){w=B.toLowerCase();A=f(this).qtip("interfaces");if(typeof A=="object"){if(u===true&&w=="destroy"){while(A.length>0){A[A.length-1].destroy()}}else{if(u!==true){A=[f(this).qtip("api")]}for(y=0;y<A.length;y++){if(w=="destroy"){A[y].destroy()}else{if(A[y].status.rendered===true){if(w=="show"){A[y].show()}else{if(w=="hide"){A[y].hide()}else{if(w=="focus"){A[y].focus()}else{if(w=="disable"){A[y].disable(true)}else{if(w=="enable"){A[y].disable(false)}}}}}}}}}}}else{v=f.extend(true,{},s);v.hide.effect.length=s.hide.effect.length;v.show.effect.length=s.show.effect.length;if(v.position.container===false){v.position.container=f(document.body)}if(v.position.target===false){v.position.target=f(this)}if(v.show.when.target===false){v.show.when.target=f(this)}if(v.hide.when.target===false){v.hide.when.target=f(this)}t=f.fn.qtip.interfaces.length;for(y=0;y<t;y++){if(typeof f.fn.qtip.interfaces[y]=="undefined"){t=y;break}}x=new d(f(this),v,t);f.fn.qtip.interfaces[t]=x;if(typeof f(this).data("qtip")=="object"){if(typeof f(this).attr("qtip")==="undefined"){f(this).data("qtip").current=f(this).data("qtip").interfaces.length}f(this).data("qtip").interfaces.push(x)}else{f(this).data("qtip",{current:0,interfaces:[x]})}if(v.content.prerender===false&&v.show.when.event!==false&&v.show.ready!==true){v.show.when.target.bind(v.show.when.event+".qtip-"+t+"-create",{qtip:t},function(C){z=f.fn.qtip.interfaces[C.data.qtip];z.options.show.when.target.unbind(z.options.show.when.event+".qtip-"+C.data.qtip+"-create");z.cache.mouse={x:C.pageX,y:C.pageY};p.call(z);z.options.show.when.target.trigger(z.options.show.when.event)})}else{x.cache.mouse={x:v.show.when.target.offset().left,y:v.show.when.target.offset().top};p.call(x)}}})};function d(u,t,v){var s=this;s.id=v;s.options=t;s.status={animated:false,rendered:false,disabled:false,focused:false};s.elements={target:u.addClass(s.options.style.classes.target),tooltip:null,wrapper:null,content:null,contentWrapper:null,title:null,button:null,tip:null,bgiframe:null};s.cache={mouse:{},position:{},toggle:0};s.timers={};f.extend(s,s.options.api,{show:function(y){var x,z;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"show")}if(s.elements.tooltip.css("display")!=="none"){return s}s.elements.tooltip.stop(true,false);x=s.beforeShow.call(s,y);if(x===false){return s}function w(){if(s.options.position.type!=="static"){s.focus()}s.onShow.call(s,y);if(f.browser.msie){s.elements.tooltip.get(0).style.removeAttribute("filter")}}s.cache.toggle=1;if(s.options.position.type!=="static"){s.updatePosition(y,(s.options.show.effect.length>0))}if(typeof s.options.show.solo=="object"){z=f(s.options.show.solo)}else{if(s.options.show.solo===true){z=f("div.qtip").not(s.elements.tooltip)}}if(z){z.each(function(){if(f(this).qtip("api").status.rendered===true){f(this).qtip("api").hide()}})}if(typeof s.options.show.effect.type=="function"){s.options.show.effect.type.call(s.elements.tooltip,s.options.show.effect.length);s.elements.tooltip.queue(function(){w();f(this).dequeue()})}else{switch(s.options.show.effect.type.toLowerCase()){case"fade":s.elements.tooltip.fadeIn(s.options.show.effect.length,w);break;case"slide":s.elements.tooltip.slideDown(s.options.show.effect.length,function(){w();if(s.options.position.type!=="static"){s.updatePosition(y,true)}});break;case"grow":s.elements.tooltip.show(s.options.show.effect.length,w);break;default:s.elements.tooltip.show(null,w);break}s.elements.tooltip.addClass(s.options.style.classes.active)}return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_SHOWN,"show")},hide:function(y){var x;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"hide")}else{if(s.elements.tooltip.css("display")==="none"){return s}}clearTimeout(s.timers.show);s.elements.tooltip.stop(true,false);x=s.beforeHide.call(s,y);if(x===false){return s}function w(){s.onHide.call(s,y)}s.cache.toggle=0;if(typeof s.options.hide.effect.type=="function"){s.options.hide.effect.type.call(s.elements.tooltip,s.options.hide.effect.length);s.elements.tooltip.queue(function(){w();f(this).dequeue()})}else{switch(s.options.hide.effect.type.toLowerCase()){case"fade":s.elements.tooltip.fadeOut(s.options.hide.effect.length,w);break;case"slide":s.elements.tooltip.slideUp(s.options.hide.effect.length,w);break;case"grow":s.elements.tooltip.hide(s.options.hide.effect.length,w);break;default:s.elements.tooltip.hide(null,w);break}s.elements.tooltip.removeClass(s.options.style.classes.active)}return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_HIDDEN,"hide")},updatePosition:function(w,x){var C,G,L,J,H,E,y,I,B,D,K,A,F,z;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"updatePosition")}else{if(s.options.position.type=="static"){return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.CANNOT_POSITION_STATIC,"updatePosition")}}G={position:{left:0,top:0},dimensions:{height:0,width:0},corner:s.options.position.corner.target};L={position:s.getPosition(),dimensions:s.getDimensions(),corner:s.options.position.corner.tooltip};if(s.options.position.target!=="mouse"){if(s.options.position.target.get(0).nodeName.toLowerCase()=="area"){J=s.options.position.target.attr("coords").split(",");for(C=0;C<J.length;C++){J[C]=parseInt(J[C])}H=s.options.position.target.parent("map").attr("name");E=f('img[usemap="#'+H+'"]:first').offset();G.position={left:Math.floor(E.left+J[0]),top:Math.floor(E.top+J[1])};switch(s.options.position.target.attr("shape").toLowerCase()){case"rect":G.dimensions={width:Math.ceil(Math.abs(J[2]-J[0])),height:Math.ceil(Math.abs(J[3]-J[1]))};break;case"circle":G.dimensions={width:J[2]+1,height:J[2]+1};break;case"poly":G.dimensions={width:J[0],height:J[1]};for(C=0;C<J.length;C++){if(C%2==0){if(J[C]>G.dimensions.width){G.dimensions.width=J[C]}if(J[C]<J[0]){G.position.left=Math.floor(E.left+J[C])}}else{if(J[C]>G.dimensions.height){G.dimensions.height=J[C]}if(J[C]<J[1]){G.position.top=Math.floor(E.top+J[C])}}}G.dimensions.width=G.dimensions.width-(G.position.left-E.left);G.dimensions.height=G.dimensions.height-(G.position.top-E.top);break;default:return f.fn.qtip.log.error.call(s,4,f.fn.qtip.constants.INVALID_AREA_SHAPE,"updatePosition");break}G.dimensions.width-=2;G.dimensions.height-=2}else{if(s.options.position.target.add(document.body).length===1){G.position={left:f(document).scrollLeft(),top:f(document).scrollTop()};G.dimensions={height:f(window).height(),width:f(window).width()}}else{if(typeof s.options.position.target.attr("qtip")!=="undefined"){G.position=s.options.position.target.qtip("api").cache.position}else{G.position=s.options.position.target.offset()}G.dimensions={height:s.options.position.target.outerHeight(),width:s.options.position.target.outerWidth()}}}y=f.extend({},G.position);if(G.corner.search(/right/i)!==-1){y.left+=G.dimensions.width}if(G.corner.search(/bottom/i)!==-1){y.top+=G.dimensions.height}if(G.corner.search(/((top|bottom)Middle)|center/)!==-1){y.left+=(G.dimensions.width/2)}if(G.corner.search(/((left|right)Middle)|center/)!==-1){y.top+=(G.dimensions.height/2)}}else{G.position=y={left:s.cache.mouse.x,top:s.cache.mouse.y};G.dimensions={height:1,width:1}}if(L.corner.search(/right/i)!==-1){y.left-=L.dimensions.width}if(L.corner.search(/bottom/i)!==-1){y.top-=L.dimensions.height}if(L.corner.search(/((top|bottom)Middle)|center/)!==-1){y.left-=(L.dimensions.width/2)}if(L.corner.search(/((left|right)Middle)|center/)!==-1){y.top-=(L.dimensions.height/2)}I=(f.browser.msie)?1:0;B=(f.browser.msie&&parseInt(f.browser.version.charAt(0))===6)?1:0;if(s.options.style.border.radius>0){if(L.corner.search(/Left/)!==-1){y.left-=s.options.style.border.radius}else{if(L.corner.search(/Right/)!==-1){y.left+=s.options.style.border.radius}}if(L.corner.search(/Top/)!==-1){y.top-=s.options.style.border.radius}else{if(L.corner.search(/Bottom/)!==-1){y.top+=s.options.style.border.radius}}}if(I){if(L.corner.search(/top/)!==-1){y.top-=I}else{if(L.corner.search(/bottom/)!==-1){y.top+=I}}if(L.corner.search(/left/)!==-1){y.left-=I}else{if(L.corner.search(/right/)!==-1){y.left+=I}}if(L.corner.search(/leftMiddle|rightMiddle/)!==-1){y.top-=1}}if(s.options.position.adjust.screen===true){y=o.call(s,y,G,L)}if(s.options.position.target==="mouse"&&s.options.position.adjust.mouse===true){if(s.options.position.adjust.screen===true&&s.elements.tip){K=s.elements.tip.attr("rel")}else{K=s.options.position.corner.tooltip}y.left+=(K.search(/right/i)!==-1)?-6:6;y.top+=(K.search(/bottom/i)!==-1)?-6:6}if(!s.elements.bgiframe&&f.browser.msie&&parseInt(f.browser.version.charAt(0))==6){f("select, object").each(function(){A=f(this).offset();A.bottom=A.top+f(this).height();A.right=A.left+f(this).width();if(y.top+L.dimensions.height>=A.top&&y.left+L.dimensions.width>=A.left){k.call(s)}})}y.left+=s.options.position.adjust.x;y.top+=s.options.position.adjust.y;F=s.getPosition();if(y.left!=F.left||y.top!=F.top){z=s.beforePositionUpdate.call(s,w);if(z===false){return s}s.cache.position=y;if(x===true){s.status.animated=true;s.elements.tooltip.animate(y,200,"swing",function(){s.status.animated=false})}else{s.elements.tooltip.css(y)}s.onPositionUpdate.call(s,w);if(typeof w!=="undefined"&&w.type&&w.type!=="mousemove"){f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_POSITION_UPDATED,"updatePosition")}}return s},updateWidth:function(w){var x;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"updateWidth")}else{if(w&&typeof w!=="number"){return f.fn.qtip.log.error.call(s,2,"newWidth must be of type number","updateWidth")}}x=s.elements.contentWrapper.siblings().add(s.elements.tip).add(s.elements.button);if(!w){if(typeof s.options.style.width.value=="number"){w=s.options.style.width.value}else{s.elements.tooltip.css({width:"auto"});x.hide();if(f.browser.msie){s.elements.wrapper.add(s.elements.contentWrapper.children()).css({zoom:"normal"})}w=s.getDimensions().width+1;if(!s.options.style.width.value){if(w>s.options.style.width.max){w=s.options.style.width.max}if(w<s.options.style.width.min){w=s.options.style.width.min}}}}if(w%2!==0){w-=1}s.elements.tooltip.width(w);x.show();if(s.options.style.border.radius){s.elements.tooltip.find(".qtip-betweenCorners").each(function(y){f(this).width(w-(s.options.style.border.radius*2))})}if(f.browser.msie){s.elements.wrapper.add(s.elements.contentWrapper.children()).css({zoom:"1"});s.elements.wrapper.width(w);if(s.elements.bgiframe){s.elements.bgiframe.width(w).height(s.getDimensions.height)}}return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_WIDTH_UPDATED,"updateWidth")},updateStyle:function(w){var z,A,x,y,B;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"updateStyle")}else{if(typeof w!=="string"||!f.fn.qtip.styles[w]){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.STYLE_NOT_DEFINED,"updateStyle")}}s.options.style=a.call(s,f.fn.qtip.styles[w],s.options.user.style);s.elements.content.css(q(s.options.style));if(s.options.content.title.text!==false){s.elements.title.css(q(s.options.style.title,true))}s.elements.contentWrapper.css({borderColor:s.options.style.border.color});if(s.options.style.tip.corner!==false){if(f("<canvas>").get(0).getContext){z=s.elements.tooltip.find(".qtip-tip canvas:first");x=z.get(0).getContext("2d");x.clearRect(0,0,300,300);y=z.parent("div[rel]:first").attr("rel");B=b(y,s.options.style.tip.size.width,s.options.style.tip.size.height);h.call(s,z,B,s.options.style.tip.color||s.options.style.border.color)}else{if(f.browser.msie){z=s.elements.tooltip.find('.qtip-tip [nodeName="shape"]');z.attr("fillcolor",s.options.style.tip.color||s.options.style.border.color)}}}if(s.options.style.border.radius>0){s.elements.tooltip.find(".qtip-betweenCorners").css({backgroundColor:s.options.style.border.color});if(f("<canvas>").get(0).getContext){A=g(s.options.style.border.radius);s.elements.tooltip.find(".qtip-wrapper canvas").each(function(){x=f(this).get(0).getContext("2d");x.clearRect(0,0,300,300);y=f(this).parent("div[rel]:first").attr("rel");r.call(s,f(this),A[y],s.options.style.border.radius,s.options.style.border.color)})}else{if(f.browser.msie){s.elements.tooltip.find('.qtip-wrapper [nodeName="arc"]').each(function(){f(this).attr("fillcolor",s.options.style.border.color)})}}}return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_STYLE_UPDATED,"updateStyle")},updateContent:function(A,y){var z,x,w;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"updateContent")}else{if(!A){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.NO_CONTENT_PROVIDED,"updateContent")}}z=s.beforeContentUpdate.call(s,A);if(typeof z=="string"){A=z}else{if(z===false){return}}if(f.browser.msie){s.elements.contentWrapper.children().css({zoom:"normal"})}if(A.jquery&&A.length>0){A.clone(true).appendTo(s.elements.content).show()}else{s.elements.content.html(A)}x=s.elements.content.find("img[complete=false]");if(x.length>0){w=0;x.each(function(C){f('<img src="'+f(this).attr("src")+'" />').load(function(){if(++w==x.length){B()}})})}else{B()}function B(){s.updateWidth();if(y!==false){if(s.options.position.type!=="static"){s.updatePosition(s.elements.tooltip.is(":visible"),true)}if(s.options.style.tip.corner!==false){n.call(s)}}}s.onContentUpdate.call(s);return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_CONTENT_UPDATED,"loadContent")},loadContent:function(w,z,A){var y;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"loadContent")}y=s.beforeContentLoad.call(s);if(y===false){return s}if(A=="post"){f.post(w,z,x)}else{f.get(w,z,x)}function x(B){s.onContentLoad.call(s);f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_CONTENT_LOADED,"loadContent");s.updateContent(B)}return s},updateTitle:function(w){if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"updateTitle")}else{if(!w){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.NO_CONTENT_PROVIDED,"updateTitle")}}returned=s.beforeTitleUpdate.call(s);if(returned===false){return s}if(s.elements.button){s.elements.button=s.elements.button.clone(true)}s.elements.title.html(w);if(s.elements.button){s.elements.title.prepend(s.elements.button)}s.onTitleUpdate.call(s);return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_TITLE_UPDATED,"updateTitle")},focus:function(A){var y,x,w,z;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"focus")}else{if(s.options.position.type=="static"){return f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.CANNOT_FOCUS_STATIC,"focus")}}y=parseInt(s.elements.tooltip.css("z-index"));x=6000+f("div.qtip[qtip]").length-1;if(!s.status.focused&&y!==x){z=s.beforeFocus.call(s,A);if(z===false){return s}f("div.qtip[qtip]").not(s.elements.tooltip).each(function(){if(f(this).qtip("api").status.rendered===true){w=parseInt(f(this).css("z-index"));if(typeof w=="number"&&w>-1){f(this).css({zIndex:parseInt(f(this).css("z-index"))-1})}f(this).qtip("api").status.focused=false}});s.elements.tooltip.css({zIndex:x});s.status.focused=true;s.onFocus.call(s,A);f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_FOCUSED,"focus")}return s},disable:function(w){if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"disable")}if(w){if(!s.status.disabled){s.status.disabled=true;f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_DISABLED,"disable")}else{f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.TOOLTIP_ALREADY_DISABLED,"disable")}}else{if(s.status.disabled){s.status.disabled=false;f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_ENABLED,"disable")}else{f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.TOOLTIP_ALREADY_ENABLED,"disable")}}return s},destroy:function(){var w,x,y;x=s.beforeDestroy.call(s);if(x===false){return s}if(s.status.rendered){s.options.show.when.target.unbind("mousemove.qtip",s.updatePosition);s.options.show.when.target.unbind("mouseout.qtip",s.hide);s.options.show.when.target.unbind(s.options.show.when.event+".qtip");s.options.hide.when.target.unbind(s.options.hide.when.event+".qtip");s.elements.tooltip.unbind(s.options.hide.when.event+".qtip");s.elements.tooltip.unbind("mouseover.qtip",s.focus);s.elements.tooltip.remove()}else{s.options.show.when.target.unbind(s.options.show.when.event+".qtip-create")}if(typeof s.elements.target.data("qtip")=="object"){y=s.elements.target.data("qtip").interfaces;if(typeof y=="object"&&y.length>0){for(w=0;w<y.length-1;w++){if(y[w].id==s.id){y.splice(w,1)}}}}delete f.fn.qtip.interfaces[s.id];if(typeof y=="object"&&y.length>0){s.elements.target.data("qtip").current=y.length-1}else{s.elements.target.removeData("qtip")}s.onDestroy.call(s);f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_DESTROYED,"destroy");return s.elements.target},getPosition:function(){var w,x;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"getPosition")}w=(s.elements.tooltip.css("display")!=="none")?false:true;if(w){s.elements.tooltip.css({visiblity:"hidden"}).show()}x=s.elements.tooltip.offset();if(w){s.elements.tooltip.css({visiblity:"visible"}).hide()}return x},getDimensions:function(){var w,x;if(!s.status.rendered){return f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.TOOLTIP_NOT_RENDERED,"getDimensions")}w=(!s.elements.tooltip.is(":visible"))?true:false;if(w){s.elements.tooltip.css({visiblity:"hidden"}).show()}x={height:s.elements.tooltip.outerHeight(),width:s.elements.tooltip.outerWidth()};if(w){s.elements.tooltip.css({visiblity:"visible"}).hide()}return x}})}function p(){var s,w,u,t,v,y,x;s=this;s.beforeRender.call(s);s.status.rendered=true;s.elements.tooltip='<div qtip="'+s.id+'" class="qtip '+(s.options.style.classes.tooltip||s.options.style)+'"style="display:none; -moz-border-radius:0; -webkit-border-radius:0; border-radius:0;position:'+s.options.position.type+';">  <div class="qtip-wrapper" style="position:relative; overflow:hidden; text-align:left;">    <div class="qtip-contentWrapper" style="overflow:hidden;">       <div class="qtip-content '+s.options.style.classes.content+'"></div></div></div></div>';s.elements.tooltip=f(s.elements.tooltip);s.elements.tooltip.appendTo(s.options.position.container);s.elements.tooltip.data("qtip",{current:0,interfaces:[s]});s.elements.wrapper=s.elements.tooltip.children("div:first");s.elements.contentWrapper=s.elements.wrapper.children("div:first").css({background:s.options.style.background});s.elements.content=s.elements.contentWrapper.children("div:first").css(q(s.options.style));if(f.browser.msie){s.elements.wrapper.add(s.elements.content).css({zoom:1})}if(s.options.hide.when.event=="unfocus"){s.elements.tooltip.attr("unfocus",true)}if(typeof s.options.style.width.value=="number"){s.updateWidth()}if(f("<canvas>").get(0).getContext||f.browser.msie){if(s.options.style.border.radius>0){m.call(s)}else{s.elements.contentWrapper.css({border:s.options.style.border.width+"px solid "+s.options.style.border.color})}if(s.options.style.tip.corner!==false){e.call(s)}}else{s.elements.contentWrapper.css({border:s.options.style.border.width+"px solid "+s.options.style.border.color});s.options.style.border.radius=0;s.options.style.tip.corner=false;f.fn.qtip.log.error.call(s,2,f.fn.qtip.constants.CANVAS_VML_NOT_SUPPORTED,"render")}if((typeof s.options.content.text=="string"&&s.options.content.text.length>0)||(s.options.content.text.jquery&&s.options.content.text.length>0)){u=s.options.content.text}else{if(typeof s.elements.target.attr("title")=="string"&&s.elements.target.attr("title").length>0){u=s.elements.target.attr("title").replace("\\n","<br />");s.elements.target.attr("title","")}else{if(typeof s.elements.target.attr("alt")=="string"&&s.elements.target.attr("alt").length>0){u=s.elements.target.attr("alt").replace("\\n","<br />");s.elements.target.attr("alt","")}else{u=" ";f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.NO_VALID_CONTENT,"render")}}}if(s.options.content.title.text!==false){j.call(s)}s.updateContent(u);l.call(s);if(s.options.show.ready===true){s.show()}if(s.options.content.url!==false){t=s.options.content.url;v=s.options.content.data;y=s.options.content.method||"get";s.loadContent(t,v,y)}s.onRender.call(s);f.fn.qtip.log.error.call(s,1,f.fn.qtip.constants.EVENT_RENDERED,"render")}function m(){var F,z,t,B,x,E,u,G,D,y,w,C,A,s,v;F=this;F.elements.wrapper.find(".qtip-borderBottom, .qtip-borderTop").remove();t=F.options.style.border.width;B=F.options.style.border.radius;x=F.options.style.border.color||F.options.style.tip.color;E=g(B);u={};for(z in E){u[z]='<div rel="'+z+'" style="'+((z.search(/Left/)!==-1)?"left":"right")+":0; position:absolute; height:"+B+"px; width:"+B+'px; overflow:hidden; line-height:0.1px; font-size:1px">';if(f("<canvas>").get(0).getContext){u[z]+='<canvas height="'+B+'" width="'+B+'" style="vertical-align: top"></canvas>'}else{if(f.browser.msie){G=B*2+3;u[z]+='<v:arc stroked="false" fillcolor="'+x+'" startangle="'+E[z][0]+'" endangle="'+E[z][1]+'" style="width:'+G+"px; height:"+G+"px; margin-top:"+((z.search(/bottom/)!==-1)?-2:-1)+"px; margin-left:"+((z.search(/Right/)!==-1)?E[z][2]-3.5:-1)+'px; vertical-align:top; display:inline-block; behavior:url(#default#VML)"></v:arc>'}}u[z]+="</div>"}D=F.getDimensions().width-(Math.max(t,B)*2);y='<div class="qtip-betweenCorners" style="height:'+B+"px; width:"+D+"px; overflow:hidden; background-color:"+x+'; line-height:0.1px; font-size:1px;">';w='<div class="qtip-borderTop" dir="ltr" style="height:'+B+"px; margin-left:"+B+'px; line-height:0.1px; font-size:1px; padding:0;">'+u.topLeft+u.topRight+y;F.elements.wrapper.prepend(w);C='<div class="qtip-borderBottom" dir="ltr" style="height:'+B+"px; margin-left:"+B+'px; line-height:0.1px; font-size:1px; padding:0;">'+u.bottomLeft+u.bottomRight+y;F.elements.wrapper.append(C);if(f("<canvas>").get(0).getContext){F.elements.wrapper.find("canvas").each(function(){A=E[f(this).parent("[rel]:first").attr("rel")];r.call(F,f(this),A,B,x)})}else{if(f.browser.msie){F.elements.tooltip.append('<v:image style="behavior:url(#default#VML);"></v:image>')}}s=Math.max(B,(B+(t-B)));v=Math.max(t-B,0);F.elements.contentWrapper.css({border:"0px solid "+x,borderWidth:v+"px "+s+"px"})}function r(u,w,s,t){var v=u.get(0).getContext("2d");v.fillStyle=t;v.beginPath();v.arc(w[0],w[1],s,0,Math.PI*2,false);v.fill()}function e(v){var t,s,x,u,w;t=this;if(t.elements.tip!==null){t.elements.tip.remove()}s=t.options.style.tip.color||t.options.style.border.color;if(t.options.style.tip.corner===false){return}else{if(!v){v=t.options.style.tip.corner}}x=b(v,t.options.style.tip.size.width,t.options.style.tip.size.height);t.elements.tip='<div class="'+t.options.style.classes.tip+'" dir="ltr" rel="'+v+'" style="position:absolute; height:'+t.options.style.tip.size.height+"px; width:"+t.options.style.tip.size.width+'px; margin:0 auto; line-height:0.1px; font-size:1px;">';if(f("<canvas>").get(0).getContext){t.elements.tip+='<canvas height="'+t.options.style.tip.size.height+'" width="'+t.options.style.tip.size.width+'"></canvas>'}else{if(f.browser.msie){u=t.options.style.tip.size.width+","+t.options.style.tip.size.height;w="m"+x[0][0]+","+x[0][1];w+=" l"+x[1][0]+","+x[1][1];w+=" "+x[2][0]+","+x[2][1];w+=" xe";t.elements.tip+='<v:shape fillcolor="'+s+'" stroked="false" filled="true" path="'+w+'" coordsize="'+u+'" style="width:'+t.options.style.tip.size.width+"px; height:"+t.options.style.tip.size.height+"px; line-height:0.1px; display:inline-block; behavior:url(#default#VML); vertical-align:"+((v.search(/top/)!==-1)?"bottom":"top")+'"></v:shape>';t.elements.tip+='<v:image style="behavior:url(#default#VML);"></v:image>';t.elements.contentWrapper.css("position","relative")}}t.elements.tooltip.prepend(t.elements.tip+"</div>");t.elements.tip=t.elements.tooltip.find("."+t.options.style.classes.tip).eq(0);if(f("<canvas>").get(0).getContext){h.call(t,t.elements.tip.find("canvas:first"),x,s)}if(v.search(/top/)!==-1&&f.browser.msie&&parseInt(f.browser.version.charAt(0))===6){t.elements.tip.css({marginTop:-4})}n.call(t,v)}function h(t,v,s){var u=t.get(0).getContext("2d");u.fillStyle=s;u.beginPath();u.moveTo(v[0][0],v[0][1]);u.lineTo(v[1][0],v[1][1]);u.lineTo(v[2][0],v[2][1]);u.fill()}function n(u){var t,w,s,x,v;t=this;if(t.options.style.tip.corner===false||!t.elements.tip){return}if(!u){u=t.elements.tip.attr("rel")}w=positionAdjust=(f.browser.msie)?1:0;t.elements.tip.css(u.match(/left|right|top|bottom/)[0],0);if(u.search(/top|bottom/)!==-1){if(f.browser.msie){if(parseInt(f.browser.version.charAt(0))===6){positionAdjust=(u.search(/top/)!==-1)?-3:1}else{positionAdjust=(u.search(/top/)!==-1)?1:2}}if(u.search(/Middle/)!==-1){t.elements.tip.css({left:"50%",marginLeft:-(t.options.style.tip.size.width/2)})}else{if(u.search(/Left/)!==-1){t.elements.tip.css({left:t.options.style.border.radius-w})}else{if(u.search(/Right/)!==-1){t.elements.tip.css({right:t.options.style.border.radius+w})}}}if(u.search(/top/)!==-1){t.elements.tip.css({top:-positionAdjust})}else{t.elements.tip.css({bottom:positionAdjust})}}else{if(u.search(/left|right/)!==-1){if(f.browser.msie){positionAdjust=(parseInt(f.browser.version.charAt(0))===6)?1:((u.search(/left/)!==-1)?1:2)}if(u.search(/Middle/)!==-1){t.elements.tip.css({top:"50%",marginTop:-(t.options.style.tip.size.height/2)})}else{if(u.search(/Top/)!==-1){t.elements.tip.css({top:t.options.style.border.radius-w})}else{if(u.search(/Bottom/)!==-1){t.elements.tip.css({bottom:t.options.style.border.radius+w})}}}if(u.search(/left/)!==-1){t.elements.tip.css({left:-positionAdjust})}else{t.elements.tip.css({right:positionAdjust})}}}s="padding-"+u.match(/left|right|top|bottom/)[0];x=t.options.style.tip.size[(s.search(/left|right/)!==-1)?"width":"height"];t.elements.tooltip.css("padding",0);t.elements.tooltip.css(s,x);if(f.browser.msie&&parseInt(f.browser.version.charAt(0))==6){v=parseInt(t.elements.tip.css("margin-top"))||0;v+=parseInt(t.elements.content.css("margin-top"))||0;t.elements.tip.css({marginTop:v})}}function j(){var s=this;if(s.elements.title!==null){s.elements.title.remove()}s.elements.title=f('<div class="'+s.options.style.classes.title+'">').css(q(s.options.style.title,true)).css({zoom:(f.browser.msie)?1:0}).prependTo(s.elements.contentWrapper);if(s.options.content.title.text){s.updateTitle.call(s,s.options.content.title.text)}if(s.options.content.title.button!==false&&typeof s.options.content.title.button=="string"){s.elements.button=f('<a class="'+s.options.style.classes.button+'" style="float:right; position: relative"></a>').css(q(s.options.style.button,true)).html(s.options.content.title.button).prependTo(s.elements.title).click(function(t){if(!s.status.disabled){s.hide(t)}})}}function l(){var t,v,u,s;t=this;v=t.options.show.when.target;u=t.options.hide.when.target;if(t.options.hide.fixed){u=u.add(t.elements.tooltip)}if(t.options.hide.when.event=="inactive"){s=["click","dblclick","mousedown","mouseup","mousemove","mouseout","mouseenter","mouseleave","mouseover"];function y(z){if(t.status.disabled===true){return}clearTimeout(t.timers.inactive);t.timers.inactive=setTimeout(function(){f(s).each(function(){u.unbind(this+".qtip-inactive");t.elements.content.unbind(this+".qtip-inactive")});t.hide(z)},t.options.hide.delay)}}else{if(t.options.hide.fixed===true){t.elements.tooltip.bind("mouseover.qtip",function(){if(t.status.disabled===true){return}clearTimeout(t.timers.hide)})}}function x(z){if(t.status.disabled===true){return}if(t.options.hide.when.event=="inactive"){f(s).each(function(){u.bind(this+".qtip-inactive",y);t.elements.content.bind(this+".qtip-inactive",y)});y()}clearTimeout(t.timers.show);clearTimeout(t.timers.hide);t.timers.show=setTimeout(function(){t.show(z)},t.options.show.delay)}function w(z){if(t.status.disabled===true){return}if(t.options.hide.fixed===true&&t.options.hide.when.event.search(/mouse(out|leave)/i)!==-1&&f(z.relatedTarget).parents("div.qtip[qtip]").length>0){z.stopPropagation();z.preventDefault();clearTimeout(t.timers.hide);return false}clearTimeout(t.timers.show);clearTimeout(t.timers.hide);t.elements.tooltip.stop(true,true);t.timers.hide=setTimeout(function(){t.hide(z)},t.options.hide.delay)}if((t.options.show.when.target.add(t.options.hide.when.target).length===1&&t.options.show.when.event==t.options.hide.when.event&&t.options.hide.when.event!=="inactive")||t.options.hide.when.event=="unfocus"){t.cache.toggle=0;v.bind(t.options.show.when.event+".qtip",function(z){if(t.cache.toggle==0){x(z)}else{w(z)}})}else{v.bind(t.options.show.when.event+".qtip",x);if(t.options.hide.when.event!=="inactive"){u.bind(t.options.hide.when.event+".qtip",w)}}if(t.options.position.type.search(/(fixed|absolute)/)!==-1){t.elements.tooltip.bind("mouseover.qtip",t.focus)}if(t.options.position.target==="mouse"&&t.options.position.type!=="static"){v.bind("mousemove.qtip",function(z){t.cache.mouse={x:z.pageX,y:z.pageY};if(t.status.disabled===false&&t.options.position.adjust.mouse===true&&t.options.position.type!=="static"&&t.elements.tooltip.css("display")!=="none"){t.updatePosition(z)}})}}function o(u,v,A){var z,s,x,y,t,w;z=this;if(A.corner=="center"){return v.position}s=f.extend({},u);y={x:false,y:false};t={left:(s.left<f.fn.qtip.cache.screen.scroll.left),right:(s.left+A.dimensions.width+2>=f.fn.qtip.cache.screen.width+f.fn.qtip.cache.screen.scroll.left),top:(s.top<f.fn.qtip.cache.screen.scroll.top),bottom:(s.top+A.dimensions.height+2>=f.fn.qtip.cache.screen.height+f.fn.qtip.cache.screen.scroll.top)};x={left:(t.left&&(A.corner.search(/right/i)!=-1||(A.corner.search(/right/i)==-1&&!t.right))),right:(t.right&&(A.corner.search(/left/i)!=-1||(A.corner.search(/left/i)==-1&&!t.left))),top:(t.top&&A.corner.search(/top/i)==-1),bottom:(t.bottom&&A.corner.search(/bottom/i)==-1)};if(x.left){if(z.options.position.target!=="mouse"){s.left=v.position.left+v.dimensions.width}else{s.left=z.cache.mouse.x}y.x="Left"}else{if(x.right){if(z.options.position.target!=="mouse"){s.left=v.position.left-A.dimensions.width}else{s.left=z.cache.mouse.x-A.dimensions.width}y.x="Right"}}if(x.top){if(z.options.position.target!=="mouse"){s.top=v.position.top+v.dimensions.height}else{s.top=z.cache.mouse.y}y.y="top"}else{if(x.bottom){if(z.options.position.target!=="mouse"){s.top=v.position.top-A.dimensions.height}else{s.top=z.cache.mouse.y-A.dimensions.height}y.y="bottom"}}if(s.left<0){s.left=u.left;y.x=false}if(s.top<0){s.top=u.top;y.y=false}if(z.options.style.tip.corner!==false){s.corner=new String(A.corner);if(y.x!==false){s.corner=s.corner.replace(/Left|Right|Middle/,y.x)}if(y.y!==false){s.corner=s.corner.replace(/top|bottom/,y.y)}if(s.corner!==z.elements.tip.attr("rel")){e.call(z,s.corner)}}return s}function q(u,t){var v,s;v=f.extend(true,{},u);for(s in v){if(t===true&&s.search(/(tip|classes)/i)!==-1){delete v[s]}else{if(!t&&s.search(/(width|border|tip|title|classes|user)/i)!==-1){delete v[s]}}}return v}function c(s){if(typeof s.tip!=="object"){s.tip={corner:s.tip}}if(typeof s.tip.size!=="object"){s.tip.size={width:s.tip.size,height:s.tip.size}}if(typeof s.border!=="object"){s.border={width:s.border}}if(typeof s.width!=="object"){s.width={value:s.width}}if(typeof s.width.max=="string"){s.width.max=parseInt(s.width.max.replace(/([0-9]+)/i,"$1"))}if(typeof s.width.min=="string"){s.width.min=parseInt(s.width.min.replace(/([0-9]+)/i,"$1"))}if(typeof s.tip.size.x=="number"){s.tip.size.width=s.tip.size.x;delete s.tip.size.x}if(typeof s.tip.size.y=="number"){s.tip.size.height=s.tip.size.y;delete s.tip.size.y}return s}function a(){var s,t,u,x,v,w;s=this;u=[true,{}];for(t=0;t<arguments.length;t++){u.push(arguments[t])}x=[f.extend.apply(f,u)];while(typeof x[0].name=="string"){x.unshift(c(f.fn.qtip.styles[x[0].name]))}x.unshift(true,{classes:{tooltip:"qtip-"+(arguments[0].name||"defaults")}},f.fn.qtip.styles.defaults);v=f.extend.apply(f,x);w=(f.browser.msie)?1:0;v.tip.size.width+=w;v.tip.size.height+=w;if(v.tip.size.width%2>0){v.tip.size.width+=1}if(v.tip.size.height%2>0){v.tip.size.height+=1}if(v.tip.corner===true){v.tip.corner=(s.options.position.corner.tooltip==="center")?false:s.options.position.corner.tooltip}return v}function b(v,u,t){var s={bottomRight:[[0,0],[u,t],[u,0]],bottomLeft:[[0,0],[u,0],[0,t]],topRight:[[0,t],[u,0],[u,t]],topLeft:[[0,0],[0,t],[u,t]],topMiddle:[[0,t],[u/2,0],[u,t]],bottomMiddle:[[0,0],[u,0],[u/2,t]],rightMiddle:[[0,0],[u,t/2],[0,t]],leftMiddle:[[u,0],[u,t],[0,t/2]]};s.leftTop=s.bottomRight;s.rightTop=s.bottomLeft;s.leftBottom=s.topRight;s.rightBottom=s.topLeft;return s[v]}function g(s){var t;if(f("<canvas>").get(0).getContext){t={topLeft:[s,s],topRight:[0,s],bottomLeft:[s,0],bottomRight:[0,0]}}else{if(f.browser.msie){t={topLeft:[-90,90,0],topRight:[-90,90,-s],bottomLeft:[90,270,0],bottomRight:[90,270,-s]}}}return t}function k(){var s,t,u;s=this;u=s.getDimensions();t='<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:false" style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=\'0\'); border: 1px solid red; height:'+u.height+"px; width:"+u.width+'px" />';s.elements.bgiframe=s.elements.wrapper.prepend(t).children(".qtip-bgiframe:first")}f(document).ready(function(){f.fn.qtip.cache={screen:{scroll:{left:f(window).scrollLeft(),top:f(window).scrollTop()},width:f(window).width(),height:f(window).height()}};var s;f(window).bind("resize scroll",function(t){clearTimeout(s);s=setTimeout(function(){if(t.type==="scroll"){f.fn.qtip.cache.screen.scroll={left:f(window).scrollLeft(),top:f(window).scrollTop()}}else{f.fn.qtip.cache.screen.width=f(window).width();f.fn.qtip.cache.screen.height=f(window).height()}for(i=0;i<f.fn.qtip.interfaces.length;i++){var u=f.fn.qtip.interfaces[i];if(u.status.rendered===true&&(u.options.position.type!=="static"||u.options.position.adjust.scroll&&t.type==="scroll"||u.options.position.adjust.resize&&t.type==="resize")){u.updatePosition(t,true)}}},100)});f(document).bind("mousedown.qtip",function(t){if(f(t.target).parents("div.qtip").length===0){f(".qtip[unfocus]").each(function(){var u=f(this).qtip("api");if(f(this).is(":visible")&&!u.status.disabled&&f(t.target).add(u.elements.target).length>1){u.hide(t)}})}})});f.fn.qtip.interfaces=[];f.fn.qtip.log={error:function(){return this}};f.fn.qtip.constants={};f.fn.qtip.defaults={content:{prerender:false,text:false,url:false,data:null,title:{text:false,button:false}},position:{target:false,corner:{target:"bottomRight",tooltip:"topLeft"},adjust:{x:0,y:0,mouse:true,screen:false,scroll:true,resize:true},type:"absolute",container:false},show:{when:{target:false,event:"mouseover"},effect:{type:"fade",length:100},delay:140,solo:false,ready:false},hide:{when:{target:false,event:"mouseout"},effect:{type:"fade",length:100},delay:0,fixed:false},api:{beforeRender:function(){},onRender:function(){},beforePositionUpdate:function(){},onPositionUpdate:function(){},beforeShow:function(){},onShow:function(){},beforeHide:function(){},onHide:function(){},beforeContentUpdate:function(){},onContentUpdate:function(){},beforeContentLoad:function(){},onContentLoad:function(){},beforeTitleUpdate:function(){},onTitleUpdate:function(){},beforeDestroy:function(){},onDestroy:function(){},beforeFocus:function(){},onFocus:function(){}}};f.fn.qtip.styles={defaults:{background:"white",color:"#111",overflow:"hidden",textAlign:"left",width:{min:0,max:250},padding:"5px 9px",border:{width:1,radius:0,color:"#d3d3d3"},tip:{corner:false,color:false,size:{width:13,height:13},opacity:1},title:{background:"#e1e1e1",fontWeight:"bold",padding:"7px 12px"},button:{cursor:"pointer"},classes:{target:"",tip:"qtip-tip",title:"qtip-title",button:"qtip-button",content:"qtip-content",active:"qtip-active"}},cream:{border:{width:3,radius:0,color:"#F9E98E"},title:{background:"#F0DE7D",color:"#A27D35"},background:"#FBF7AA",color:"#A27D35",classes:{tooltip:"qtip-cream"}},light:{border:{width:3,radius:0,color:"#E2E2E2"},title:{background:"#f1f1f1",color:"#454545"},background:"white",color:"#454545",classes:{tooltip:"qtip-light"}},dark:{border:{width:3,radius:0,color:"#303030"},title:{background:"#404040",color:"#f3f3f3"},background:"#505050",color:"#f3f3f3",classes:{tooltip:"qtip-dark"}},red:{border:{width:3,radius:0,color:"#CE6F6F"},title:{background:"#f28279",color:"#9C2F2F"},background:"#F79992",color:"#9C2F2F",classes:{tooltip:"qtip-red"}},green:{border:{width:3,radius:0,color:"#A9DB66"},title:{background:"#b9db8c",color:"#58792E"},background:"#CDE6AC",color:"#58792E",classes:{tooltip:"qtip-green"}},blue:{border:{width:3,radius:0,color:"#ADD9ED"},title:{background:"#D0E9F5",color:"#5E99BD"},background:"#E5F6FE",color:"#4D9FBF",classes:{tooltip:"qtip-blue"}}}})(jQuery);

/**
 * jQuery Form Plugin
 * version: 2.28 (10-MAY-2009)
 * @requires jQuery v1.2.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(B){B.fn.ajaxSubmit=function(O){if(!this.length){A("ajaxSubmit: skipping submit process - no element selected");return this}if(typeof O=="function"){O={success:O}}var E=B.trim(this.attr("action"));if(E){E=(E.match(/^([^#]+)/)||[])[1]}E=E||window.location.href||"";O=B.extend({url:E,type:this.attr("method")||"GET"},O||{});var Q={};this.trigger("form-pre-serialize",[this,O,Q]);if(Q.veto){A("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(O.beforeSerialize&&O.beforeSerialize(this,O)===false){A("ajaxSubmit: submit aborted via beforeSerialize callback");return this}var K=this.formToArray(O.semantic);if(O.data){O.extraData=O.data;for(var F in O.data){if(O.data[F] instanceof Array){for(var G in O.data[F]){K.push({name:F,value:O.data[F][G]})}}else{K.push({name:F,value:O.data[F]})}}}if(O.beforeSubmit&&O.beforeSubmit(K,this,O)===false){A("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[K,this,O,Q]);if(Q.veto){A("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}var D=B.param(K);if(O.type.toUpperCase()=="GET"){O.url+=(O.url.indexOf("?")>=0?"&":"?")+D;O.data=null}else{O.data=D}var P=this,J=[];if(O.resetForm){J.push(function(){P.resetForm()})}if(O.clearForm){J.push(function(){P.clearForm()})}if(!O.dataType&&O.target){var M=O.success||function(){};J.push(function(R){B(O.target).html(R).each(M,arguments)})}else{if(O.success){J.push(O.success)}}O.success=function(U,S){for(var T=0,R=J.length;T<R;T++){J[T].apply(O,[U,S,P])}};var C=B("input:file",this).fieldValue();var N=false;for(var I=0;I<C.length;I++){if(C[I]){N=true}}var H=false;if(O.iframe||N||H){if(O.closeKeepAlive){B.get(O.closeKeepAlive,L)}else{L()}}else{B.ajax(O)}this.trigger("form-submit-notify",[this,O]);return this;function L(){var V=P[0];if(B(":input[name=submit]",V).length){alert('Error: Form elements must not be named "submit".');return }var T=B.extend({},B.ajaxSettings,O);var f=B.extend(true,{},B.extend(true,{},B.ajaxSettings),T);var U="jqFormIO"+(new Date().getTime());var b=B('<iframe id="'+U+'" name="'+U+'" src="about:blank" />');var d=b[0];b.css({position:"absolute",top:"-1000px",left:"-1000px"});var e={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){this.aborted=1;b.attr("src","about:blank")}};var c=T.global;if(c&&!B.active++){B.event.trigger("ajaxStart")}if(c){B.event.trigger("ajaxSend",[e,T])}if(f.beforeSend&&f.beforeSend(e,f)===false){f.global&&B.active--;return }if(e.aborted){return }var S=0;var X=0;var R=V.clk;if(R){var W=R.name;if(W&&!R.disabled){O.extraData=O.extraData||{};O.extraData[W]=R.value;if(R.type=="image"){O.extraData[name+".x"]=V.clk_x;O.extraData[name+".y"]=V.clk_y}}}setTimeout(function(){var i=P.attr("target"),g=P.attr("action");V.setAttribute("target",U);if(V.getAttribute("method")!="POST"){V.setAttribute("method","POST")}if(V.getAttribute("action")!=T.url){V.setAttribute("action",T.url)}if(!O.skipEncodingOverride){P.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"})}if(T.timeout){setTimeout(function(){X=true;Y()},T.timeout)}var h=[];try{if(O.extraData){for(var j in O.extraData){h.push(B('<input type="hidden" name="'+j+'" value="'+O.extraData[j]+'" />').appendTo(V)[0])}}b.appendTo("body");d.attachEvent?d.attachEvent("onload",Y):d.addEventListener("load",Y,false);V.submit()}finally{V.setAttribute("action",g);i?V.setAttribute("target",i):P.removeAttr("target");B(h).remove()}},10);var Z=0;function Y(){if(S++){return }d.detachEvent?d.detachEvent("onload",Y):d.removeEventListener("load",Y,false);var h=true;try{if(X){throw"timeout"}var i,k;k=d.contentWindow?d.contentWindow.document:d.contentDocument?d.contentDocument:d.document;if((k.body==null||k.body.innerHTML=="")&&!Z){Z=1;S--;setTimeout(Y,100);return }e.responseText=k.body?k.body.innerHTML:null;e.responseXML=k.XMLDocument?k.XMLDocument:k;e.getResponseHeader=function(m){var l={"content-type":T.dataType};return l[m]};if(T.dataType=="json"||T.dataType=="script"){var g=k.getElementsByTagName("textarea")[0];e.responseText=g?g.value:e.responseText}else{if(T.dataType=="xml"&&!e.responseXML&&e.responseText!=null){e.responseXML=a(e.responseText)}}i=B.httpData(e,T.dataType)}catch(j){h=false;B.handleError(T,e,"error",j)}if(h){T.success(i,"success");if(c){B.event.trigger("ajaxSuccess",[e,T])}}if(c){B.event.trigger("ajaxComplete",[e,T])}if(c&&!--B.active){B.event.trigger("ajaxStop")}if(T.complete){T.complete(e,h?"success":"error")}setTimeout(function(){b.remove();e.responseXML=null},100)}function a(g,h){if(window.ActiveXObject){h=new ActiveXObject("Microsoft.XMLDOM");h.async="false";h.loadXML(g)}else{h=(new DOMParser()).parseFromString(g,"text/xml")}return(h&&h.documentElement&&h.documentElement.tagName!="parsererror")?h:null}}};B.fn.ajaxForm=function(C){return this.ajaxFormUnbind().bind("submit.form-plugin",function(){B(this).ajaxSubmit(C);return false}).each(function(){B(":submit,input:image",this).bind("click.form-plugin",function(E){var D=this.form;D.clk=this;if(this.type=="image"){if(E.offsetX!=undefined){D.clk_x=E.offsetX;D.clk_y=E.offsetY}else{if(typeof B.fn.offset=="function"){var F=B(this).offset();D.clk_x=E.pageX-F.left;D.clk_y=E.pageY-F.top}else{D.clk_x=E.pageX-this.offsetLeft;D.clk_y=E.pageY-this.offsetTop}}}setTimeout(function(){D.clk=D.clk_x=D.clk_y=null},10)})})};B.fn.ajaxFormUnbind=function(){this.unbind("submit.form-plugin");return this.each(function(){B(":submit,input:image",this).unbind("click.form-plugin")})};B.fn.formToArray=function(N){var M=[];if(this.length==0){return M}var D=this[0];var H=N?D.getElementsByTagName("*"):D.elements;if(!H){return M}for(var I=0,K=H.length;I<K;I++){var E=H[I];var F=E.name;if(!F){continue}if(N&&D.clk&&E.type=="image"){if(!E.disabled&&D.clk==E){M.push({name:F,value:B(E).val()});M.push({name:F+".x",value:D.clk_x},{name:F+".y",value:D.clk_y})}continue}var O=B.fieldValue(E,true);if(O&&O.constructor==Array){for(var G=0,C=O.length;G<C;G++){M.push({name:F,value:O[G]})}}else{if(O!==null&&typeof O!="undefined"){M.push({name:F,value:O})}}}if(!N&&D.clk){var J=B(D.clk),L=J[0],F=L.name;if(F&&!L.disabled&&L.type=="image"){M.push({name:F,value:J.val()});M.push({name:F+".x",value:D.clk_x},{name:F+".y",value:D.clk_y})}}return M};B.fn.formSerialize=function(C){return B.param(this.formToArray(C))};B.fn.fieldSerialize=function(D){var C=[];this.each(function(){var H=this.name;if(!H){return }var F=B.fieldValue(this,D);if(F&&F.constructor==Array){for(var G=0,E=F.length;G<E;G++){C.push({name:H,value:F[G]})}}else{if(F!==null&&typeof F!="undefined"){C.push({name:this.name,value:F})}}});return B.param(C)};B.fn.fieldValue=function(H){for(var G=[],E=0,C=this.length;E<C;E++){var F=this[E];var D=B.fieldValue(F,H);if(D===null||typeof D=="undefined"||(D.constructor==Array&&!D.length)){continue}D.constructor==Array?B.merge(G,D):G.push(D)}return G};B.fieldValue=function(C,I){var E=C.name,N=C.type,O=C.tagName.toLowerCase();if(typeof I=="undefined"){I=true}if(I&&(!E||C.disabled||N=="reset"||N=="button"||(N=="checkbox"||N=="radio")&&!C.checked||(N=="submit"||N=="image")&&C.form&&C.form.clk!=C||O=="select"&&C.selectedIndex==-1)){return null}if(O=="select"){var J=C.selectedIndex;if(J<0){return null}var L=[],D=C.options;var G=(N=="select-one");var K=(G?J+1:D.length);for(var F=(G?J:0);F<K;F++){var H=D[F];if(H.selected){var M=H.value;if(!M){M=(H.attributes&&H.attributes.value&&!(H.attributes.value.specified))?H.text:H.value}if(G){return M}L.push(M)}}return L}return C.value};B.fn.clearForm=function(){return this.each(function(){B("input,select,textarea",this).clearFields()})};B.fn.clearFields=B.fn.clearInputs=function(){return this.each(function(){var D=this.type,C=this.tagName.toLowerCase();if(D=="text"||D=="password"||C=="textarea"){this.value=""}else{if(D=="checkbox"||D=="radio"){this.checked=false}else{if(C=="select"){this.selectedIndex=-1}}}})};B.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=="function"||(typeof this.reset=="object"&&!this.reset.nodeType)){this.reset()}})};B.fn.enable=function(C){if(C==undefined){C=true}return this.each(function(){this.disabled=!C})};B.fn.selected=function(C){if(C==undefined){C=true}return this.each(function(){var D=this.type;if(D=="checkbox"||D=="radio"){this.checked=C}else{if(this.tagName.toLowerCase()=="option"){var E=B(this).parent("select");if(C&&E[0]&&E[0].type=="select-one"){E.find("option").selected(false)}this.selected=C}}})};function A(){if(B.fn.ajaxSubmit.debug&&window.console&&window.console.log){window.console.log("[jquery.form] "+Array.prototype.join.call(arguments,""))}}})(jQuery);

/**
 * jQuery validation plug-in 1.5.5
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2008 J√∂rn Zaefferer
 *
 * $Id: jquery.validate.js 6403 2009-06-17 14:27:16Z joern.zaefferer $
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(A){A.extend(A.fn,{validate:function(B){if(!this.length){B&&B.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing");return }var C=A.data(this[0],"validator");if(C){return C}C=new A.validator(B,this[0]);A.data(this[0],"validator",C);if(C.settings.onsubmit){this.find("input, button").filter(".cancel").click(function(){C.cancelSubmit=true});if(C.settings.submitHandler){this.find("input, button").filter(":submit").click(function(){C.submitButton=this})}this.submit(function(D){if(C.settings.debug){D.preventDefault()}function E(){if(C.settings.submitHandler){if(C.submitButton){var F=A("<input type='hidden'/>").attr("name",C.submitButton.name).val(C.submitButton.value).appendTo(C.currentForm)}C.settings.submitHandler.call(C,C.currentForm);if(C.submitButton){F.remove()}return false}return true}if(C.cancelSubmit){C.cancelSubmit=false;return E()}if(C.form()){if(C.pendingRequest){C.formSubmitted=true;return false}return E()}else{C.focusInvalid();return false}})}return C},valid:function(){if(A(this[0]).is("form")){return this.validate().form()}else{var C=true;var B=A(this[0].form).validate();this.each(function(){C&=B.element(this)});return C}},removeAttrs:function(D){var B={},C=this;A.each(D.split(/\s/),function(E,F){B[F]=C.attr(F);C.removeAttr(F)});return B},rules:function(E,B){var G=this[0];if(E){var D=A.data(G.form,"validator").settings;var I=D.rules;var J=A.validator.staticRules(G);switch(E){case"add":A.extend(J,A.validator.normalizeRule(B));I[G.name]=J;if(B.messages){D.messages[G.name]=A.extend(D.messages[G.name],B.messages)}break;case"remove":if(!B){delete I[G.name];return J}var H={};A.each(B.split(/\s/),function(K,L){H[L]=J[L];delete J[L]});return H}}var F=A.validator.normalizeRules(A.extend({},A.validator.metadataRules(G),A.validator.classRules(G),A.validator.attributeRules(G),A.validator.staticRules(G)),G);if(F.required){var C=F.required;delete F.required;F=A.extend({required:C},F)}return F}});A.extend(A.expr[":"],{blank:function(B){return !A.trim(B.value)},filled:function(B){return !!A.trim(B.value)},unchecked:function(B){return !B.checked}});A.validator=function(B,C){this.settings=A.extend({},A.validator.defaults,B);this.currentForm=C;this.init()};A.validator.format=function(B,C){if(arguments.length==1){return function(){var D=A.makeArray(arguments);D.unshift(B);return A.validator.format.apply(this,D)}}if(arguments.length>2&&C.constructor!=Array){C=A.makeArray(arguments).slice(1)}if(C.constructor!=Array){C=[C]}A.each(C,function(D,E){B=B.replace(new RegExp("\\{"+D+"\\}","g"),E)});return B};A.extend(A.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:A([]),errorLabelContainer:A([]),onsubmit:true,ignore:[],ignoreTitle:false,onfocusin:function(B){this.lastActive=B;if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,B,this.settings.errorClass,this.settings.validClass);this.errorsFor(B).hide()}},onfocusout:function(B){if(!this.checkable(B)&&(B.name in this.submitted||!this.optional(B))){this.element(B)}},onkeyup:function(B){if(B.name in this.submitted||B==this.lastElement){this.element(B)}},onclick:function(B){if(B.name in this.submitted){this.element(B)}},highlight:function(D,B,C){A(D).addClass(B).removeClass(C)},unhighlight:function(D,B,C){A(D).removeClass(B).addClass(C)}},setDefaults:function(B){A.extend(A.validator.defaults,B)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",dateDE:"Bitte geben Sie ein gültiges Datum ein.",number:"Please enter a valid number.",numberDE:"Bitte geben Sie eine Nummer ein.",digits:"Please enter only digits",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:A.validator.format("Please enter no more than {0} characters."),minlength:A.validator.format("Please enter at least {0} characters."),rangelength:A.validator.format("Please enter a value between {0} and {1} characters long."),range:A.validator.format("Please enter a value between {0} and {1}."),max:A.validator.format("Please enter a value less than or equal to {0}."),min:A.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){this.labelContainer=A(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||A(this.currentForm);this.containers=A(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var B=(this.groups={});A.each(this.settings.groups,function(E,F){A.each(F.split(/\s/),function(H,G){B[G]=E})});var D=this.settings.rules;A.each(D,function(E,F){D[E]=A.validator.normalizeRule(F)});function C(F){var E=A.data(this[0].form,"validator");E.settings["on"+F.type]&&E.settings["on"+F.type].call(E,this[0])}A(this.currentForm).delegate("focusin focusout keyup",":text, :password, :file, select, textarea",C).delegate("click",":radio, :checkbox",C);if(this.settings.invalidHandler){A(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)}},form:function(){this.checkForm();A.extend(this.submitted,this.errorMap);this.invalid=A.extend({},this.errorMap);if(!this.valid()){A(this.currentForm).triggerHandler("invalid-form",[this])}this.showErrors();return this.valid()},checkForm:function(){this.prepareForm();for(var B=0,C=(this.currentElements=this.elements());C[B];B++){this.check(C[B])}return this.valid()},element:function(C){C=this.clean(C);this.lastElement=C;this.prepareElement(C);this.currentElements=A(C);var B=this.check(C);if(B){delete this.invalid[C.name]}else{this.invalid[C.name]=true}if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers)}this.showErrors();return B},showErrors:function(C){if(C){A.extend(this.errorMap,C);this.errorList=[];for(var B in C){this.errorList.push({message:C[B],element:this.findByName(B)[0]})}this.successList=A.grep(this.successList,function(D){return !(D.name in C)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){if(A.fn.resetForm){A(this.currentForm).resetForm()}this.submitted={};this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(D){var C=0;for(var B in D){C++}return C},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return this.size()==0},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid){try{A(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus()}catch(B){}}},findLastActive:function(){var B=this.lastActive;return B&&A.grep(this.errorList,function(C){return C.element.name==B.name}).length==1&&B},elements:function(){var C=this,B={};return A([]).add(this.currentForm.elements).filter(":input").not(":submit, :reset, :image, [disabled], :hidden").not(this.settings.ignore).filter(function(){!this.name&&C.settings.debug&&window.console&&console.error("%o has no name assigned",this);if(this.name in B||!C.objectLength(A(this).rules())){return false}B[this.name]=true;return true})},clean:function(B){return A(B)[0]},errors:function(){return A(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext)},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=A([]);this.toHide=A([]);this.formSubmitted=false;this.currentElements=A([])},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers)},prepareElement:function(B){this.reset();this.toHide=this.errorsFor(B)},check:function(C){C=this.clean(C);if(this.checkable(C)){C=this.findByName(C.name)[0]}var G=A(C).rules();var D=false;for(method in G){var F={method:method,parameters:G[method]};try{var B=A.validator.methods[method].call(this,C.value.replace(/\r/g,""),C,F.parameters);if(B=="dependency-mismatch"){D=true;continue}D=false;if(B=="pending"){this.toHide=this.toHide.not(this.errorsFor(C));return }if(!B){this.formatAndAdd(C,F);return false}}catch(E){this.settings.debug&&window.console&&console.log("exception occured when checking element "+C.id+", check the '"+F.method+"' method");throw E}}if(D){return }if(this.objectLength(G)){this.successList.push(C)}return true},customMetaMessage:function(B,D){if(!A.metadata){return }var C=this.settings.meta?A(B).metadata()[this.settings.meta]:A(B).metadata();return C&&C.messages&&C.messages[D]},customMessage:function(C,D){var B=this.settings.messages[C];return B&&(B.constructor==String?B:B[D])},findDefined:function(){for(var B=0;B<arguments.length;B++){if(arguments[B]!==undefined){return arguments[B]}}return undefined},defaultMessage:function(B,C){return this.findDefined(this.customMessage(B.name,C),this.customMetaMessage(B,C),!this.settings.ignoreTitle&&B.title||undefined,A.validator.messages[C],"<strong>Warning: No message defined for "+B.name+"</strong>")},formatAndAdd:function(B,D){var C=this.defaultMessage(B,D.method);if(typeof C=="function"){C=C.call(this,D.parameters,B)}this.errorList.push({message:C,element:B});this.errorMap[B.name]=C;this.submitted[B.name]=C},addWrapper:function(B){if(this.settings.wrapper){B=B.add(B.parent(this.settings.wrapper))}return B},defaultShowErrors:function(){for(var C=0;this.errorList[C];C++){var B=this.errorList[C];this.settings.highlight&&this.settings.highlight.call(this,B.element,this.settings.errorClass,this.settings.validClass);this.showLabel(B.element,B.message)}if(this.errorList.length){this.toShow=this.toShow.add(this.containers)}if(this.settings.success){for(var C=0;this.successList[C];C++){this.showLabel(this.successList[C])}}if(this.settings.unhighlight){for(var C=0,D=this.validElements();D[C];C++){this.settings.unhighlight.call(this,D[C],this.settings.errorClass,this.settings.validClass)}}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return A(this.errorList).map(function(){return this.element})},showLabel:function(C,D){var B=this.errorsFor(C);if(B.length){B.removeClass().addClass(this.settings.errorClass);B.attr("generated")&&B.html(D)}else{B=A("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(C),generated:true}).addClass(this.settings.errorClass).html(D||"");if(this.settings.wrapper){B=B.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()}if(!this.labelContainer.append(B).length){this.settings.errorPlacement?this.settings.errorPlacement(B,A(C)):B.insertAfter(C)}}if(!D&&this.settings.success){B.text("");typeof this.settings.success=="string"?B.addClass(this.settings.success):this.settings.success(B)}this.toShow=this.toShow.add(B)},errorsFor:function(B){return this.errors().filter("[for='"+this.idOrName(B)+"']")},idOrName:function(B){return this.groups[B.name]||(this.checkable(B)?B.name:B.id||B.name)},checkable:function(B){return/radio|checkbox/i.test(B.type)},findByName:function(B){var C=this.currentForm;return A(document.getElementsByName(B)).map(function(D,E){return E.form==C&&E.name==B&&E||null})},getLength:function(C,B){switch(B.nodeName.toLowerCase()){case"select":return A("option:selected",B).length;case"input":if(this.checkable(B)){return this.findByName(B.name).filter(":checked").length}}return C.length},depend:function(C,B){return this.dependTypes[typeof C]?this.dependTypes[typeof C](C,B):true},dependTypes:{"boolean":function(C,B){return C},string:function(C,B){return !!A(C,B.form).length},"function":function(C,B){return C(B)}},optional:function(B){return !A.validator.methods.required.call(this,A.trim(B.value),B)&&"dependency-mismatch"},startRequest:function(B){if(!this.pending[B.name]){this.pendingRequest++;this.pending[B.name]=true}},stopRequest:function(B,C){this.pendingRequest--;if(this.pendingRequest<0){this.pendingRequest=0}delete this.pending[B.name];if(C&&this.pendingRequest==0&&this.formSubmitted&&this.form()){A(this.currentForm).submit()}else{if(!C&&this.pendingRequest==0&&this.formSubmitted){A(this.currentForm).triggerHandler("invalid-form",[this])}}},previousValue:function(B){return A.data(B,"previousValue")||A.data(B,"previousValue",previous={old:null,valid:true,message:this.defaultMessage(B,"remote")})}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(B,C){B.constructor==String?this.classRuleSettings[B]=C:A.extend(this.classRuleSettings,B)},classRules:function(C){var D={};var B=A(C).attr("class");B&&A.each(B.split(" "),function(){if(this in A.validator.classRuleSettings){A.extend(D,A.validator.classRuleSettings[this])}});return D},attributeRules:function(C){var E={};var B=A(C);for(method in A.validator.methods){var D=B.attr(method);if(D){E[method]=D}}if(E.maxlength&&/-1|2147483647|524288/.test(E.maxlength)){delete E.maxlength}return E},metadataRules:function(B){if(!A.metadata){return{}}var C=A.data(B.form,"validator").settings.meta;return C?A(B).metadata()[C]:A(B).metadata()},staticRules:function(C){var D={};var B=A.data(C.form,"validator");if(B.settings.rules){D=A.validator.normalizeRule(B.settings.rules[C.name])||{}}return D},normalizeRules:function(C,B){A.each(C,function(F,E){if(E===false){delete C[F];return }if(E.param||E.depends){var D=true;switch(typeof E.depends){case"string":D=!!A(E.depends,B.form).length;break;case"function":D=E.depends.call(B,B);break}if(D){C[F]=E.param!==undefined?E.param:true}else{delete C[F]}}});A.each(C,function(D,E){C[D]=A.isFunction(E)?E(B):E});A.each(["minlength","maxlength","min","max"],function(){if(C[this]){C[this]=Number(C[this])}});A.each(["rangelength","range"],function(){if(C[this]){C[this]=[Number(C[this][0]),Number(C[this][1])]}});if(A.validator.autoCreateRanges){if(C.min&&C.max){C.range=[C.min,C.max];delete C.min;delete C.max}if(C.minlength&&C.maxlength){C.rangelength=[C.minlength,C.maxlength];delete C.minlength;delete C.maxlength}}if(C.messages){delete C.messages}return C},normalizeRule:function(C){if(typeof C=="string"){var B={};A.each(C.split(/\s/),function(){B[this]=true});C=B}return C},addMethod:function(B,D,C){A.validator.methods[B]=D;A.validator.messages[B]=C||A.validator.messages[B];if(D.length<3){A.validator.addClassRules(B,A.validator.normalizeRule(B))}},methods:{required:function(D,C,E){if(!this.depend(E,C)){return"dependency-mismatch"}switch(C.nodeName.toLowerCase()){case"select":var B=A("option:selected",C);return B.length>0&&(C.type=="select-multiple"||(A.browser.msie&&!(B[0].attributes.value.specified)?B[0].text:B[0].value).length>0);case"input":if(this.checkable(C)){return this.getLength(D,C)>0}default:return A.trim(D).length>0}},remote:function(F,C,G){if(this.optional(C)){return"dependency-mismatch"}var D=this.previousValue(C);if(!this.settings.messages[C.name]){this.settings.messages[C.name]={}}this.settings.messages[C.name].remote=typeof D.message=="function"?D.message(F):D.message;G=typeof G=="string"&&{url:G}||G;if(D.old!==F){D.old=F;var B=this;this.startRequest(C);var E={};E[C.name]=F;A.ajax(A.extend(true,{url:G,mode:"abort",port:"validate"+C.name,dataType:"json",data:E,success:function(I){var J=I===true;if(J){var H=B.formSubmitted;B.prepareElement(C);B.formSubmitted=H;B.successList.push(C);B.showErrors()}else{var K={};K[C.name]=D.message=I||B.defaultMessage(C,"remote");B.showErrors(K)}D.valid=J;B.stopRequest(C,J)}},G));return"pending"}else{if(this.pending[C.name]){return"pending"}}return D.valid},minlength:function(C,B,D){return this.optional(B)||this.getLength(A.trim(C),B)>=D},maxlength:function(C,B,D){return this.optional(B)||this.getLength(A.trim(C),B)<=D},rangelength:function(D,B,E){var C=this.getLength(A.trim(D),B);return this.optional(B)||(C>=E[0]&&C<=E[1])},min:function(C,B,D){return this.optional(B)||C>=D},max:function(C,B,D){return this.optional(B)||C<=D},range:function(C,B,D){return this.optional(B)||(C>=D[0]&&C<=D[1])},email:function(C,B){return this.optional(B)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(C)},url:function(C,B){return this.optional(B)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(C)},date:function(C,B){return this.optional(B)||!/Invalid|NaN/.test(new Date(C))},dateISO:function(C,B){return this.optional(B)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(C)},dateDE:function(C,B){return this.optional(B)||/^\d\d?\.\d\d?\.\d\d\d?\d?$/.test(C)},number:function(C,B){return this.optional(B)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(C)},numberDE:function(C,B){return this.optional(B)||/^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(C)},digits:function(C,B){return this.optional(B)||/^\d+$/.test(C)},creditcard:function(F,C){if(this.optional(C)){return"dependency-mismatch"}if(/[^0-9-]+/.test(F)){return false}var G=0,E=0,B=false;F=F.replace(/\D/g,"");for(n=F.length-1;n>=0;n--){var D=F.charAt(n);var E=parseInt(D,10);if(B){if((E*=2)>9){E-=9}}G+=E;B=!B}return(G%10)==0},accept:function(C,B,D){D=typeof D=="string"?D.replace(/,/g,"|"):"png|jpe?g|gif";return this.optional(B)||C.match(new RegExp(".("+D+")$","i"))},equalTo:function(C,B,D){return C==A(D).val()}}});A.format=A.validator.format})(jQuery);(function(C){var B=C.ajax;var A={};C.ajax=function(E){E=C.extend(E,C.extend({},C.ajaxSettings,E));var D=E.port;if(E.mode=="abort"){if(A[D]){A[D].abort()}return(A[D]=B.apply(this,arguments))}return B.apply(this,arguments)}})(jQuery);(function(A){A.each({focus:"focusin",blur:"focusout"},function(C,B){A.event.special[B]={setup:function(){if(A.browser.msie){return false}this.addEventListener(C,A.event.special[B].handler,true)},teardown:function(){if(A.browser.msie){return false}this.removeEventListener(C,A.event.special[B].handler,true)},handler:function(D){arguments[0]=A.event.fix(D);arguments[0].type=B;return A.event.handle.apply(this,arguments)}}});A.extend(A.fn,{delegate:function(D,C,B){return this.bind(D,function(E){var F=A(E.target);if(F.is(C)){return B.apply(F,arguments)}})},triggerEvent:function(B,C){return this.triggerHandler(B,[A.event.fix({type:B,target:C})])}})})(jQuery);

// Gilt Group Customization:
jQuery.validator.defaults.ignore = [":hidden"];

/**
 * Additional Validation Methods for jQuery Validation Plugin
 *
 */
jQuery.validator.addMethod("maxWords",function(b,a,c){return this.optional(a)||b.match(/\b\w+\b/g).length<c},jQuery.validator.format("Please enter {0} words or less."));jQuery.validator.addMethod("minWords",function(b,a,c){return this.optional(a)||b.match(/\b\w+\b/g).length>=c},jQuery.validator.format("Please enter at least {0} words."));jQuery.validator.addMethod("rangeWords",function(b,a,c){return this.optional(a)||b.match(/\b\w+\b/g).length>=c[0]&&b.match(/bw+b/g).length<c[1]},jQuery.validator.format("Please enter between {0} and {1} words."));jQuery.validator.addMethod("letterswithbasicpunc",function(b,a){return this.optional(a)||/^[a-z-.,()'\"\s]+$/i.test(b)},"Letters or punctuation only please");jQuery.validator.addMethod("alphanumeric",function(b,a){return this.optional(a)||/^\w+$/i.test(b)},"Letters, numbers, spaces or underscores only please");jQuery.validator.addMethod("lettersonly",function(b,a){return this.optional(a)||/^[a-z]+$/i.test(b)},"Letters only please");jQuery.validator.addMethod("nowhitespace",function(b,a){return this.optional(a)||/^\S+$/i.test(b)},"No white space please");jQuery.validator.addMethod("ziprange",function(b,a){return this.optional(a)||/^90[2-5]\d\{2}-\d{4}$/.test(b)},"Your ZIP-code must be in the range 902xx-xxxx to 905-xx-xxxx");jQuery.validator.addMethod("vinUS",function(o){if(o.length!=17){return false}var h,a,l,j,b,k;var c=["A","B","C","D","E","F","G","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y","Z"];var m=[1,2,3,4,5,6,7,8,1,2,3,4,5,7,9,2,3,4,5,6,7,8,9];var g=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2];var e=0;for(h=0;h<17;h++){j=g[h];l=o.slice(h,h+1);if(h==8){k=l}if(!isNaN(l)){l*=j}else{for(a=0;a<c.length;a++){if(l.toUpperCase()===c[a]){l=m[a];l*=j;if(isNaN(k)&&a==8){k=c[a]}break}}}e+=l}b=e%11;if(b==10){b="X"}if(b==k){return true}return false},"The specified vehicle identification number (VIN) is invalid.");jQuery.validator.addMethod("dateITA",function(e,c){var a=false;var g=/^\d{1,2}\/\d{1,2}\/\d{4}$/;if(g.test(e)){var i=e.split("/");var d=parseInt(i[0],10);var b=parseInt(i[1],10);var f=parseInt(i[2],10);var h=new Date(f,b-1,d);if((h.getFullYear()==f)&&(h.getMonth()==b-1)&&(h.getDate()==d)){a=true}else{a=false}}else{a=false}return this.optional(c)||a},"Please enter a correct date");jQuery.validator.addMethod("dateNL",function(b,a){return this.optional(a)||/^\d\d?[\.\/-]\d\d?[\.\/-]\d\d\d?\d?$/.test(b)},"Vul hier een geldige datum in.");jQuery.validator.addMethod("time",function(b,a){return this.optional(a)||/^([01][0-9])|(2[0123]):([0-5])([0-9])$/.test(b)},"Please enter a valid time, between 00:00 and 23:59");jQuery.validator.addMethod("phone",function(a,b){a=a.replace(/\s+/g,"");return this.optional(b)||a.length>9&&a.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/)},"Please specify a valid phone number");jQuery.validator.addMethod("strippedminlength",function(b,a,c){return jQuery(b).text().length>=c},jQuery.validator.format("Please enter at least {0} characters"));jQuery.validator.addMethod("email2",function(b,a,c){return this.optional(a)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(b)},jQuery.validator.messages.email);jQuery.validator.addMethod("url2",function(b,a,c){return this.optional(a)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(b)},jQuery.validator.messages.url);jQuery.validator.addMethod("creditcardtypes",function(b,a,c){if(/[^0-9-]+/.test(b)){return false}b=b.replace(/\D/g,"");var d=0;if(c.mastercard){d|=1}if(c.visa){d|=2}if(c.amex){d|=4}if(c.dinersclub){d|=8}if(c.enroute){d|=16}if(c.discover){d|=32}if(c.jcb){d|=64}if(c.unknown){d|=128}if(c.all){d=1|2|4|8|16|32|64|128}if(d&1&&/^(51|52|53|54|55)/.test(b)){return b.length==16}if(d&2&&/^(4)/.test(b)){return b.length==16}if(d&4&&/^(34|37)/.test(b)){return b.length==15}if(d&8&&/^(300|301|302|303|304|305|36|38)/.test(b)){return b.length==14}if(d&16&&/^(2014|2149)/.test(b)){return b.length==15}if(d&32&&/^(6011)/.test(b)){return b.length==16}if(d&64&&/^(3)/.test(b)){return b.length==16}if(d&64&&/^(2131|1800)/.test(b)){return b.length==15}if(d&128){return true}return false},"Please enter a valid credit card number.");

/**
 * Gilt Groupe Custom Validators:
 */
jQuery.validator.addMethod("zipcode", function(value, element) {
    return this.optional(element) || /^\d{5}([\- ]?\d{4})?$/.test(value);
}, "Your ZIP-code is invalid");

jQuery.validator.addMethod("phone_number", function(phone_number, element) {
    phone_number = phone_number.replace(/\s+/g, "");
	return this.optional(element) || /^(1-?)?\s*(\([2-9]\d{2}\)|[2-9]\d{2})(-?|\s*)[2-9]\d{2}(-?|\s*)\d{4}(\s*x?\d+)?$/.test(phone_number);
}, "Please specify a valid phone number");

// consistent email validation with blackbird email validation
jQuery.validator.addMethod("bb_email", function(value, element) {
    return this.optional(element) || /^[\w\+-]+(\.[\w\+-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/i.test(value);
}, jQuery.validator.messages.email);

// same as email, but accepts a csv of emails
jQuery.validator.addMethod("multiemail", function(value, element) {
    return this.optional(element) || /^(((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?\s*[,;]?\s*)+$/i.test(value);
}, jQuery.validator.messages.email);

jQuery.validator.addMethod("currencyUS", function(value, element, range) {
    if (this.optional(element)) {
      return true;
    }
    value = value.replace(/\$|\,/, '');
    if (!/^\d+(\.\d{2})?$/.test(value)) {
      return false;
    }
    value = parseFloat(value);
    if (range) {
      if (range[0] > value || range[1] < value) {
        return false;
      }
    }
    return true;
}, "Please enter a valid dollar amount");

jQuery.validator.addMethod("futureMonth", function(value, element, yearElement) {
  return this.optional(element) || !$(yearElement).val() || (new Date($(yearElement).val(), value, 0)).getTime() > (new Date()).getTime();
}, "Please enter a date in the future");

jQuery.validator.addMethod("creditcard2", function(value, element) {
    if (this.optional(element)) {
        return "dependency-mismatch";
    }
    // accept only digits and dashes and spaces
    if (/[^0-9\-\s]+/.test(value)) {
        return false;
    }
    var nCheck = 0,
        bEven = false;

    value = value.replace(/\D/g, "");

    for (n = value.length - 1; n >= 0; n--) {
        var cDigit = value.charAt(n);
        var nDigit = parseInt(cDigit, 10);
        if (bEven) {
            if ((nDigit *= 2) > 9)
                nDigit -= 9;
        }
        nCheck += nDigit;
        bEven = !bEven;
    }

    return (nCheck % 10) == 0;
}, jQuery.validator.messages.creditcard);

// Combines Luhn+5 & Prefix validation
jQuery.validator.addMethod("creditcard3", function(value, element, param) {
    if (this.optional(element)) {
        return "dependency-mismatch";
    }
    // accept only digits and dashes and spaces
	if (/[^0-9\-\s]+/.test(value)) {
        return false;
    }

	value = value.replace(/\D/g, "");

  if ("4222222222222" == value) { // Authorize.net force error code credit card number
    $(element).data("creditcardtype", "errorcode");
    return true;
  }

  var nCheck = 0,
      bEven = false;
  for (n = value.length - 1; n >= 0; n--) {
      var cDigit = value.charAt(n);
      var nDigit = parseInt(cDigit, 10);
      if (bEven) {
          if ((nDigit *= 2) > 9)
              nDigit -= 9;
      }
      nCheck += nDigit;
      bEven = !bEven;
  }

  if (nCheck % 10 != 0 && nCheck % 10 != 5) {
      $(element).data("creditcardtype", "checksum");
      return false;
  }

  param = jQuery.extend({}, jQuery.validator.methods.creditcard3.types, param);

	var validTypes = 0x0000;

    if (param.mastercard)
        validTypes |= 0x0001;
    if (param.visa)
        validTypes |= 0x0002;
    if (param["american express"])
        validTypes |= 0x0004;
    if (param.dinersclub)
        validTypes |= 0x0008;
    if (param.enroute)
        validTypes |= 0x0010;
    if (param.discover)
        validTypes |= 0x0020;
    if (param.jcb)
        validTypes |= 0x0040;
    if (param.unknown)
        validTypes |= 0x0080;
    if (param.all)
        validTypes = 0x0001 | 0x0002 | 0x0004 | 0x0008 | 0x0010 | 0x0020 | 0x0040 | 0x0080;

	if (validTypes & 0x0001 && /^(51|52|53|54|55)/.test(value)) { //mastercard
        $(element).data("creditcardtype", "mastercard");
		return value.length == 16;
	}
	if (validTypes & 0x0002 && /^(4)/.test(value)) { //visa
        $(element).data("creditcardtype", "visa");
		return value.length == 16;
	}
	if (validTypes & 0x0004 && /^(34|37)/.test(value)) { //amex
        $(element).data("creditcardtype", "american express");
		return value.length == 15;
	}
	if (validTypes & 0x0008 && /^(300|301|302|303|304|305|36|38)/.test(value)) { //dinersclub
        $(element).data("creditcardtype", "dinersclub");
		return value.length == 14;
	}
	if (validTypes & 0x0010 && /^(2014|2149)/.test(value)) { //enroute
        $(element).data("creditcardtype", "enroute");
		return value.length == 15;
	}
	if (validTypes & 0x0020 && /^(6011)/.test(value)) { //discover
        $(element).data("creditcardtype", "discover");
		return value.length == 16;
	}
	if (validTypes & 0x0040 && /^(3)/.test(value)) { //jcb
        $(element).data("creditcardtype", "jcb");
		return value.length == 16;
	}
	if (validTypes & 0x0040 && /^(2131|1800)/.test(value)) { //jcb
        $(element).data("creditcardtype", "jcb");
		return value.length == 15;
	}
    $(element).data("creditcardtype", "unknown");
	return (validTypes & 0x0080); //unknown
}, function(params, el) {
    return jQuery.validator.methods.creditcard3.messages[$(el).data("creditcardtype")];
});
jQuery.validator.methods.creditcard3.messages = {
    checksum: "Please enter a valid credit card number.",
    mastercard: "The credit card number you entered is not a valid Mastercard",
    visa: "The credit card number you entered is not a valid Visa card",
    "american express": "The credit card number you entered is not a valid American Express card",
    dinersclub: "The credit card number you entered is not a valid Diners Club card",
    enroute: "The credit card number you entered is not a valid Enroute card",
    discover: "The credit card number you entered is not a valid Discover card",
    jcb: "The credit card number you entered is not a valid JCB card",
    unknown: "The credit card number you entered is not recognized as a valid credit card."
};
jQuery.validator.methods.creditcard3.types = {
    mastercard: true,
    visa: true,
    "american express": true,
    dinersclub: false,
    enroute: false,
    discover: true,
    jcb: true,
    unknown: false
};

/**
 * jquery.Jcrop.js v0.9.8
 * jQuery Image Cropping Plugin
 * @author Kelly Hallman <khallman@gmail.com>
 * Copyright (c) 2008-2009 Kelly Hallman - released under MIT License
 */
(function(A){A.Jcrop=function(D,X){var D=D,X=X;if(typeof (D)!=="object"){D=A(D)[0]}if(typeof (X)!=="object"){X={}}if(!("trackDocument" in X)){X.trackDocument=A.browser.msie?false:true;if(A.browser.msie&&A.browser.version.split(".")[0]=="8"){X.trackDocument=true}}if(!("keySupport" in X)){X.keySupport=A.browser.msie?false:true}var t={trackDocument:false,baseClass:"jcrop",addClass:null,bgColor:"black",bgOpacity:0.6,borderOpacity:0.4,handleOpacity:0.5,handlePad:5,handleSize:9,handleOffset:5,edgeMargin:14,aspectRatio:0,keySupport:true,cornerHandles:true,sideHandles:true,drawBorders:true,dragEdges:true,boxWidth:0,boxHeight:0,boundary:8,animationDelay:20,swingSpeed:3,allowSelect:true,allowMove:true,allowResize:true,minSelect:[0,0],maxSize:[0,0],minSize:[0,0],onChange:function(){},onSelect:function(){}};var e=t;W(X);var v=A(D);var AL=v.clone().removeAttr("id").css({position:"absolute"});AL.width(v.width());AL.height(v.height());v.after(AL).hide();s(AL,e.boxWidth,e.boxHeight);var p=AL.width(),n=AL.height(),z=A("<div />").width(p).height(n).addClass(Z("holder")).css({position:"relative",backgroundColor:e.bgColor}).insertAfter(v).append(AL);if(e.addClass){z.addClass(e.addClass)}var f=A("<img />").attr("src",AL.attr("src")).css("position","absolute").width(p).height(n);var I=A("<div />").width(j(100)).height(j(100)).css({zIndex:310,position:"absolute",overflow:"hidden"}).append(f);var k=A("<div />").width(j(100)).height(j(100)).css("zIndex",320);var V=A("<div />").css({position:"absolute",zIndex:300}).insertBefore(AL).append(I,k);var R=e.boundary;var B=AE().width(p+(R*2)).height(n+(R*2)).css({position:"absolute",top:J(-R),left:J(-R),zIndex:290}).mousedown(AC);var U,AH,N,r;var l,E,L=true;var AD=a(AL),P,AN,AM,Y,AB;var AA=function(){var AQ=0,Ab=0,AP=0,Aa=0,AT,AR;function AV(Ae){var Ae=AS(Ae);AP=AQ=Ae[0];Aa=Ab=Ae[1]}function AU(Ae){var Ae=AS(Ae);AT=Ae[0]-AP;AR=Ae[1]-Aa;AP=Ae[0];Aa=Ae[1]}function Ad(){return[AT,AR]}function AO(Ag){var Af=Ag[0],Ae=Ag[1];if(0>AQ+Af){Af-=Af+AQ}if(0>Ab+Ae){Ae-=Ae+Ab}if(n<Aa+Ae){Ae+=n-(Aa+Ae)}if(p<AP+Af){Af+=p-(AP+Af)}AQ+=Af;AP+=Af;Ab+=Ae;Aa+=Ae}function AW(Ae){var Af=Ac();switch(Ae){case"ne":return[Af.x2,Af.y];case"nw":return[Af.x,Af.y];case"se":return[Af.x2,Af.y2];case"sw":return[Af.x,Af.y2]}}function Ac(){if(!e.aspectRatio){return AZ()}var Ag=e.aspectRatio,An=e.minSize[0]/l,Am=e.minSize[1]/E,Af=e.maxSize[0]/l,Ap=e.maxSize[1]/E,Ah=AP-AQ,Ao=Aa-Ab,Ai=Math.abs(Ah),Aj=Math.abs(Ao),Ak=Ai/Aj,Ae,Al;if(Af==0){Af=p*10}if(Ap==0){Ap=n*10}if(Ak<Ag){Al=Aa;w=Aj*Ag;Ae=Ah<0?AQ-w:w+AQ;if(Ae<0){Ae=0;h=Math.abs((Ae-AQ)/Ag);Al=Ao<0?Ab-h:h+Ab}else{if(Ae>p){Ae=p;h=Math.abs((Ae-AQ)/Ag);Al=Ao<0?Ab-h:h+Ab}}}else{Ae=AP;h=Ai/Ag;Al=Ao<0?Ab-h:Ab+h;if(Al<0){Al=0;w=Math.abs((Al-Ab)*Ag);Ae=Ah<0?AQ-w:w+AQ}else{if(Al>n){Al=n;w=Math.abs(Al-Ab)*Ag;Ae=Ah<0?AQ-w:w+AQ}}}if(Ae>AQ){if(Ae-AQ<An){Ae=AQ+An}else{if(Ae-AQ>Af){Ae=AQ+Af}}if(Al>Ab){Al=Ab+(Ae-AQ)/Ag}else{Al=Ab-(Ae-AQ)/Ag}}else{if(Ae<AQ){if(AQ-Ae<An){Ae=AQ-An}else{if(AQ-Ae>Af){Ae=AQ-Af}}if(Al>Ab){Al=Ab+(AQ-Ae)/Ag}else{Al=Ab-(AQ-Ae)/Ag}}}if(Ae<0){AQ-=Ae;Ae=0}else{if(Ae>p){AQ-=Ae-p;Ae=p}}if(Al<0){Ab-=Al;Al=0}else{if(Al>n){Ab-=Al-n;Al=n}}return last=AY(AX(AQ,Ab,Ae,Al))}function AS(Ae){if(Ae[0]<0){Ae[0]=0}if(Ae[1]<0){Ae[1]=0}if(Ae[0]>p){Ae[0]=p}if(Ae[1]>n){Ae[1]=n}return[Ae[0],Ae[1]]}function AX(Ah,Aj,Ag,Ai){var Al=Ah,Ak=Ag,Af=Aj,Ae=Ai;if(Ag<Ah){Al=Ag;Ak=Ah}if(Ai<Aj){Af=Ai;Ae=Aj}return[Math.round(Al),Math.round(Af),Math.round(Ak),Math.round(Ae)]}function AZ(){var Af=AP-AQ;var Ae=Aa-Ab;if(U&&(Math.abs(Af)>U)){AP=(Af>0)?(AQ+U):(AQ-U)}if(AH&&(Math.abs(Ae)>AH)){Aa=(Ae>0)?(Ab+AH):(Ab-AH)}if(r&&(Math.abs(Ae)<r)){Aa=(Ae>0)?(Ab+r):(Ab-r)}if(N&&(Math.abs(Af)<N)){AP=(Af>0)?(AQ+N):(AQ-N)}if(AQ<0){AP-=AQ;AQ-=AQ}if(Ab<0){Aa-=Ab;Ab-=Ab}if(AP<0){AQ-=AP;AP-=AP}if(Aa<0){Ab-=Aa;Aa-=Aa}if(AP>p){var Ag=AP-p;AQ-=Ag;AP-=Ag}if(Aa>n){var Ag=Aa-n;Ab-=Ag;Aa-=Ag}if(AQ>p){var Ag=AQ-n;Aa-=Ag;Ab-=Ag}if(Ab>n){var Ag=Ab-n;Aa-=Ag;Ab-=Ag}return AY(AX(AQ,Ab,AP,Aa))}function AY(Ae){return{x:Ae[0],y:Ae[1],x2:Ae[2],y2:Ae[3],w:Ae[2]-Ae[0],h:Ae[3]-Ae[1]}}return{flipCoords:AX,setPressed:AV,setCurrent:AU,getOffset:Ad,moveOffset:AO,getCorner:AW,getFixed:Ac}}();var x=function(){var AV,AR,Ab,Aa,Aj=370;var AU={};var An={};var AQ=false;var AZ=e.handleOffset;if(e.drawBorders){AU={top:AW("hline").css("top",A.browser.msie?J(-1):J(0)),bottom:AW("hline"),left:AW("vline"),right:AW("vline")}}if(e.dragEdges){An.t=Ai("n");An.b=Ai("s");An.r=Ai("e");An.l=Ai("w")}e.sideHandles&&Ae(["n","s","e","w"]);e.cornerHandles&&Ae(["sw","nw","ne","se"]);function AW(Aq){var Ar=A("<div />").css({position:"absolute",opacity:e.borderOpacity}).addClass(Z(Aq));I.append(Ar);return Ar}function AP(Aq,Ar){var As=A("<div />").mousedown(C(Aq)).css({cursor:Aq+"-resize",position:"absolute",zIndex:Ar});k.append(As);return As}function Ac(Aq){return AP(Aq,Aj++).css({top:J(-AZ+1),left:J(-AZ+1),opacity:e.handleOpacity}).addClass(Z("handle"))}function Ai(As){var Av=e.handleSize,Aw=AZ,Au=Av,Ar=Av,At=Aw,Aq=Aw;switch(As){case"n":case"s":Ar=j(100);break;case"e":case"w":Au=j(100);break}return AP(As,Aj++).width(Ar).height(Au).css({top:J(-At+1),left:J(-Aq+1)})}function Ae(Aq){for(i in Aq){An[Aq[i]]=Ac(Aq[i])}}function Ag(Ax){var As=Math.round((Ax.h/2)-AZ),Ar=Math.round((Ax.w/2)-AZ),Av=west=-AZ+1,Au=Ax.w-AZ,At=Ax.h-AZ,Aq,Aw;"e" in An&&An.e.css({top:J(As),left:J(Au)})&&An.w.css({top:J(As)})&&An.s.css({top:J(At),left:J(Ar)})&&An.n.css({left:J(Ar)});"ne" in An&&An.ne.css({left:J(Au)})&&An.se.css({top:J(At),left:J(Au)})&&An.sw.css({top:J(At)});"b" in An&&An.b.css({top:J(At)})&&An.r.css({left:J(Au)})}function AY(Aq,Ar){f.css({top:J(-Ar),left:J(-Aq)});V.css({top:J(Ar),left:J(Aq)})}function Ap(Aq,Ar){V.width(Aq).height(Ar)}function AS(){var Aq=AA.getFixed();AA.setPressed([Aq.x,Aq.y]);AA.setCurrent([Aq.x2,Aq.y2]);Am()}function Am(){if(Aa){return AX()}}function AX(){var Aq=AA.getFixed();Ap(Aq.w,Aq.h);AY(Aq.x,Aq.y);e.drawBorders&&AU.right.css({left:J(Aq.w-1)})&&AU.bottom.css({top:J(Aq.h-1)});AQ&&Ag(Aq);Aa||Ao();e.onChange(y(Aq))}function Ao(){V.show();AL.css("opacity",e.bgOpacity);Aa=true}function Ak(){Al();V.hide();AL.css("opacity",1);Aa=false}function AO(){if(AQ){Ag(AA.getFixed());k.show()}}function Af(){AQ=true;if(e.allowResize){Ag(AA.getFixed());k.show();return true}}function Al(){AQ=false;k.hide()}function Ah(Aq){(Y=Aq)?Al():Af()}function Ad(){Ah(false);AS()}var AT=AE().mousedown(C("move")).css({cursor:"move",position:"absolute",zIndex:360});I.append(AT);Al();return{updateVisible:Am,update:AX,release:Ak,refresh:AS,setCursor:function(Aq){AT.css("cursor",Aq)},enableHandles:Af,enableOnly:function(){AQ=true},showHandles:AO,disableHandles:Al,animMode:Ah,done:Ad}}();var o=function(){var AP=function(){},AR=function(){},AQ=e.trackDocument;if(!AQ){B.mousemove(AO).mouseup(AS).mouseout(AS)}function AW(){B.css({zIndex:450});if(AQ){A(document).mousemove(AO).mouseup(AS)}}function AV(){B.css({zIndex:290});if(AQ){A(document).unbind("mousemove",AO).unbind("mouseup",AS)}}function AO(AX){AP(c(AX))}function AS(AX){AX.preventDefault();AX.stopPropagation();if(P){P=false;AR(c(AX));e.onSelect(y(AA.getFixed()));AV();AP=function(){};AR=function(){}}return false}function AT(AY,AX){P=true;AP=AY;AR=AX;AW();return false}function AU(AX){B.css("cursor",AX)}AL.before(B);return{activateHandlers:AT,setCursor:AU}}();var AK=function(){var AR=A('<input type="radio" />').css({position:"absolute",left:"-30px"}).keypress(AO).blur(AS),AT=A("<div />").css({position:"absolute",overflow:"hidden"}).append(AR);function AP(){if(e.keySupport){AR.show();AR.focus()}}function AS(AU){AR.hide()}function AQ(AV,AU,AW){if(e.allowMove){AA.moveOffset([AU,AW]);x.updateVisible()}AV.preventDefault();AV.stopPropagation()}function AO(AV){if(AV.ctrlKey){return true}AB=AV.shiftKey?true:false;var AU=AB?10:1;switch(AV.keyCode){case 37:AQ(AV,-AU,0);break;case 39:AQ(AV,AU,0);break;case 38:AQ(AV,0,-AU);break;case 40:AQ(AV,0,AU);break;case 27:x.release();break;case 9:return true}return nothing(AV)}if(e.keySupport){AT.insertBefore(AL)}return{watchKeys:AP}}();function J(AO){return""+parseInt(AO)+"px"}function j(AO){return""+parseInt(AO)+"%"}function Z(AO){return e.baseClass+"-"+AO}function a(AO){var AP=A(AO).offset();return[AP.left,AP.top]}function c(AO){return[(AO.pageX-AD[0]),(AO.pageY-AD[1])]}function b(AO){if(AO!=AN){o.setCursor(AO);AN=AO}}function F(AQ,AS){AD=a(AL);o.setCursor(AQ=="move"?AQ:AQ+"-resize");if(AQ=="move"){return o.activateHandlers(q(AS),M)}var AO=AA.getFixed();var AP=O(AQ);var AR=AA.getCorner(O(AP));AA.setPressed(AA.getCorner(AP));AA.setCurrent(AR);o.activateHandlers(d(AQ,AO),M)}function d(AP,AO){return function(AQ){if(!e.aspectRatio){switch(AP){case"e":AQ[1]=AO.y2;break;case"w":AQ[1]=AO.y2;break;case"n":AQ[0]=AO.x2;break;case"s":AQ[0]=AO.x2;break}}else{switch(AP){case"e":AQ[1]=AO.y+1;break;case"w":AQ[1]=AO.y+1;break;case"n":AQ[0]=AO.x+1;break;case"s":AQ[0]=AO.x+1;break}}AA.setCurrent(AQ);x.update()}}function q(AP){var AO=AP;AK.watchKeys();return function(AQ){AA.moveOffset([AQ[0]-AO[0],AQ[1]-AO[1]]);AO=AQ;x.update()}}function O(AO){switch(AO){case"n":return"sw";case"s":return"nw";case"e":return"nw";case"w":return"ne";case"ne":return"sw";case"nw":return"se";case"se":return"nw";case"sw":return"ne"}}function C(AO){return function(AP){if(e.disabled){return false}if((AO=="move")&&!e.allowMove){return false}P=true;F(AO,c(AP));AP.stopPropagation();AP.preventDefault();return false}}function s(AS,AP,AR){var AO=AS.width(),AQ=AS.height();if((AO>AP)&&AP>0){AO=AP;AQ=(AP/AS.width())*AS.height()}if((AQ>AR)&&AR>0){AQ=AR;AO=(AR/AS.height())*AS.width()}l=AS.width()/AO;E=AS.height()/AQ;AS.width(AO).height(AQ)}function y(AO){return{x:parseInt(AO.x*l),y:parseInt(AO.y*E),x2:parseInt(AO.x2*l),y2:parseInt(AO.y2*E),w:parseInt(AO.w*l),h:parseInt(AO.h*E)}}function M(AP){var AO=AA.getFixed();if(AO.w>e.minSelect[0]&&AO.h>e.minSelect[1]){x.enableHandles();x.done()}else{x.release()}o.setCursor(e.allowSelect?"crosshair":"default")}function AC(AO){if(e.disabled){return false}if(!e.allowSelect){return false}P=true;AD=a(AL);x.disableHandles();b("crosshair");var AP=c(AO);AA.setPressed(AP);o.activateHandlers(AJ,M);AK.watchKeys();x.update();AO.stopPropagation();AO.preventDefault();return false}function AJ(AO){AA.setCurrent(AO);x.update()}function AE(){var AO=A("<div></div>").addClass(Z("tracker"));A.browser.msie&&AO.css({opacity:0,backgroundColor:"white"});return AO}function Q(Af){var Aa=Af[0]/l,AP=Af[1]/E,AZ=Af[2]/l,AO=Af[3]/E;if(Y){return }var AY=AA.flipCoords(Aa,AP,AZ,AO);var Ad=AA.getFixed();var AR=initcr=[Ad.x,Ad.y,Ad.x2,Ad.y2];var AQ=e.animationDelay;var AW=AR[0];var AV=AR[1];var AZ=AR[2];var AO=AR[3];var Ac=AY[0]-initcr[0];var AT=AY[1]-initcr[1];var Ab=AY[2]-initcr[2];var AS=AY[3]-initcr[3];var AX=0;var AU=e.swingSpeed;x.animMode(true);var Ae=function(){return function(){AX+=(100-AX)/AU;AR[0]=AW+((AX/100)*Ac);AR[1]=AV+((AX/100)*AT);AR[2]=AZ+((AX/100)*Ab);AR[3]=AO+((AX/100)*AS);if(AX<100){Ag()}else{x.done()}if(AX>=99.8){AX=100}AI(AR)}}();function Ag(){window.setTimeout(Ae,AQ)}Ag()}function g(AO){AI([AO[0]/l,AO[1]/E,AO[2]/l,AO[3]/E])}function AI(AO){AA.setPressed([AO[0],AO[1]]);AA.setCurrent([AO[2],AO[3]]);x.update()}function W(AO){if(typeof (AO)!="object"){AO={}}e=A.extend(e,AO);if(typeof (e.onChange)!=="function"){e.onChange=function(){}}if(typeof (e.onSelect)!=="function"){e.onSelect=function(){}}}function H(){return y(AA.getFixed())}function AG(){return AA.getFixed()}function S(AO){W(AO);m()}function T(){e.disabled=true;x.disableHandles();x.setCursor("default");o.setCursor("default")}function u(){e.disabled=false;m()}function K(){x.done();o.activateHandlers(null,null)}function AF(){z.remove();v.show()}function m(AO){e.allowResize?AO?x.enableOnly():x.enableHandles():x.disableHandles();o.setCursor(e.allowSelect?"crosshair":"default");x.setCursor(e.allowMove?"move":"default");z.css("backgroundColor",e.bgColor);if("setSelect" in e){g(X.setSelect);x.done();delete (e.setSelect)}if("trueSize" in e){l=e.trueSize[0]/p;E=e.trueSize[1]/n}U=e.maxSize[0]||0;AH=e.maxSize[1]||0;N=e.minSize[0]||0;r=e.minSize[1]||0;if("outerImage" in e){AL.attr("src",e.outerImage);delete (e.outerImage)}x.refresh()}k.hide();m(true);var G={animateTo:Q,setSelect:g,setOptions:S,tellSelect:H,tellScaled:AG,disable:T,enable:u,cancel:K,focus:AK.watchKeys,getBounds:function(){return[p*l,n*E]},getWidgetSize:function(){return[p,n]},release:x.release,destroy:AF};v.data("Jcrop",G);return G};A.fn.Jcrop=function(C){function B(F){var E=C.useImg||F.src;var D=new Image();D.onload=function(){A.Jcrop(F,C)};D.src=E}if(typeof (C)!=="object"){C={}}this.each(function(){if(A(this).data("Jcrop")){if(C=="api"){return A(this).data("Jcrop")}else{A(this).data("Jcrop").setOptions(C)}}else{B(this)}});return this}})(jQuery);

/**
 * History - New Wave Browser History Management
 *
 * Copyright (c) 2008 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/History
 */
(function(a){a.ui=a.ui||{};a.ui.hmanager=new function(){var c={},e=function(){};var g=a(window),f=location.hash;function b(){return f.replace("#","")}var d;return{enable:function(){if(a.browser.msie&&parseInt(a.browser.version)<8){a(function(){d=a('<iframe id="ui-history-iframe" style="display: none;" src="javascript: false;"></iframe>').prependTo(document.body)[0];d.contentWindow.document.open();d.contentWindow.document.close();if(b()){d.contentWindow.document.location.hash=b()}})}g.bind("hashchange",function(h){if(!d&&f==location.hash||d&&f==d.contentWindow.document.location.hash){return false}if(a.browser.msie&&parseInt(a.browser.version)<8){f=d.contentWindow.document.location.hash}else{f=location.hash}if(b()){c[b()]()}else{}});if(!(a.browser.msie&&parseInt(a.browser.version)>=8)){setInterval((a.browser.msie?function(){if(f!=d.contentWindow.document.location.hash){g.trigger("hashchange")}}:function(){if(f!=location.hash){g.trigger("hashchange")}else{}}),200)}},add:function(i,h){c[i]=h},go:function(h){if(h){if(a.browser.msie&&parseInt(a.browser.version)<8){d.contentWindow.document.open();d.contentWindow.document.close();d.contentWindow.document.location.hash=h}location.hash=h;g.trigger("hashchange")}else{console.log("TODO do default state")}}}};a.ui.history=function(){var b=Array.prototype.slice.call(arguments,1);a.ui.hmanager[arguments[0]].apply(a.ui.hmanager,b)}})(jQuery);

/**
 *  Ajax Autocomplete for jQuery, version 1.0.7
 *  (c) 2009 Tomas Kirda
 *
 *  Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license.
 *  For details, see the web site: http://www.devbridge.com/projects/autocomplete/jquery/
 *
 *  Last Review: 07/27/2009
 */
(function($){$.fn.autocomplete=function(options){return this.each(function(){return new Autocomplete(this,options);});};var reEscape=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\"].join("|\\")+")","g");var fnFormatResult=function(value,data,currentValue){var pattern="("+currentValue.replace(reEscape,"\\$1")+")";return value.replace(new RegExp(pattern,"gi"),"<strong>$1</strong>");};var Autocomplete=function(el,options){this.el=$(el);this.el.attr("autocomplete","off");this.suggestions=[];this.data=[];this.badQueries=[];this.selectedIndex=-1;this.currentValue=this.el.val();this.intervalId=0;this.cachedResponse=[];this.onChangeInterval=null;this.ignoreValueChange=false;this.serviceUrl=options.serviceUrl;this.isLocal=false;this.options={autoSubmit:false,minChars:1,maxHeight:300,deferRequestBy:0,width:0,highlight:true,params:{},fnFormatResult:fnFormatResult,delimiter:null};if(options){$.extend(this.options,options);}if(this.options.lookup){this.isLocal=true;if($.isArray(this.options.lookup)){this.options.lookup={suggestions:this.options.lookup,data:[]};}}this.initialize();};Autocomplete.prototype={killerFn:null,initialize:function(){var me,zindex;me=this;zindex=Math.max.apply(null,$.map($("body > *"),function(e,n){var pos=$(e).css("position");if(pos==="absolute"||pos==="relative"){return parseInt($(e).css("z-index"),10)||1;}}));this.killerFn=function(e){if($(e.target).parents(".autocomplete").size()===0){me.killSuggestions();me.disableKillerFn();}};var uid=new Date().getTime();var autocompleteElId="Autocomplete_"+uid;if(!this.options.width){this.options.width=this.el.width();}this.mainContainerId="AutocompleteContainter_"+uid;$('<div id="'+this.mainContainerId+'" style="position:absolute;z-index:'+zindex+'"><div class="autocomplete-w1"><div class="autocomplete" id="'+autocompleteElId+'" style="display:none; width:'+this.options.width+'px;"></div></div></div>').appendTo("body");this.container=$("#"+autocompleteElId);this.fixPosition();if(window.opera){this.el.keypress(function(e){me.onKeyPress(e);});}else{this.el.keydown(function(e){me.onKeyPress(e);});}this.el.keyup(function(e){me.onKeyUp(e);});this.el.blur(function(){me.enableKillerFn();});this.el.focus(function(){me.fixPosition();});this.container.css({maxHeight:this.options.maxHeight+"px"});},fixPosition:function(){var offset=this.el.offset();$("#"+this.mainContainerId).css({top:(offset.top+this.el.innerHeight())+"px",left:offset.left+"px"});},enableKillerFn:function(){var me=this;$(document).bind("click",me.killerFn);},disableKillerFn:function(){var me=this;$(document).unbind("click",me.killerFn);},killSuggestions:function(){var me=this;this.stopKillSuggestions();this.intervalId=window.setInterval(function(){me.hide();me.stopKillSuggestions();},300);},stopKillSuggestions:function(){window.clearInterval(this.intervalId);},onKeyPress:function(e){if(!this.enabled){return;}switch(e.keyCode){case 27:this.el.val(this.currentValue);this.hide();break;case 9:case 13:if(this.selectedIndex===-1){this.hide();return;}this.select(this.selectedIndex);if(e.keyCode===9){return;}break;case 38:this.moveUp();break;case 40:this.moveDown();break;default:return;}e.stopImmediatePropagation();e.preventDefault();},onKeyUp:function(e){switch(e.keyCode){case 38:case 40:return;}clearInterval(this.onChangeInterval);if(this.currentValue!==this.el.val()){if(this.options.deferRequestBy>0){var me=this;this.onChangeInterval=setInterval(function(){me.onValueChange();},this.options.deferRequestBy);}else{this.onValueChange();}}},onValueChange:function(){clearInterval(this.onChangeInterval);this.currentValue=this.el.val();var q=this.getQuery(this.currentValue);this.selectedIndex=-1;if(this.ignoreValueChange){this.ignoreValueChange=false;return;}if(q===""||q.length<this.options.minChars){this.hide();}else{this.getSuggestions(q);}},getQuery:function(val){var d,arr;d=this.options.delimiter;if(!d){return $.trim(val);}arr=val.split(d);return $.trim(arr[arr.length-1]);},getSuggestionsLocal:function(q){var ret,arr,len,val;arr=this.options.lookup;len=arr.suggestions.length;ret={suggestions:[],data:[]};for(var i=0;i<len;i++){val=arr.suggestions[i];if(val.toLowerCase().indexOf(q.toLowerCase())===0){ret.suggestions.push(val);ret.data.push(arr.data[i]);}}return ret;},getSuggestions:function(q){var cr,me,ls;cr=this.isLocal?this.getSuggestionsLocal(q):this.cachedResponse[q];if(cr&&$.isArray(cr.suggestions)){this.suggestions=cr.suggestions;this.data=cr.data;this.suggest();}else{if(!this.isBadQuery(q)){me=this;me.options.params.query=q;$.get(this.serviceUrl,me.options.params,function(txt){me.processResponse(txt);},"text");}}},isBadQuery:function(q){var i=this.badQueries.length;while(i--){if(q.indexOf(this.badQueries[i])===0){return true;}}return false;},hide:function(){this.enabled=false;this.selectedIndex=-1;this.container.hide();},suggest:function(){if(this.suggestions.length===0){this.hide();return;}var me,len,div,f;me=this;len=this.suggestions.length;f=this.options.fnFormatResult;v=this.getQuery(this.currentValue);this.container.hide().empty();for(var i=0;i<len;i++){div=$((me.selectedIndex===i?'<div class="selected"':"<div")+' title="'+this.suggestions[i]+'">'+f(this.suggestions[i],this.data[i],v)+"</div>");div.mouseover((function(xi){return function(){me.activate(xi);};})(i));div.click((function(xi){return function(){me.select(xi);};})(i));this.container.append(div);}this.enabled=true;this.container.show();},processResponse:function(text){var response;try{response=eval("("+text+")");}catch(err){return;}if(!$.isArray(response.data)){response.data=[];}this.cachedResponse[response.query]=response;if(response.suggestions.length===0){this.badQueries.push(response.query);}if(response.query===this.getQuery(this.currentValue)){this.suggestions=response.suggestions;this.data=response.data;this.suggest();}},activate:function(index){var divs=this.container.children();var activeItem;if(this.selectedIndex!==-1&&divs.length>this.selectedIndex){$(divs.get(this.selectedIndex)).attr("class","");}this.selectedIndex=index;if(this.selectedIndex!==-1&&divs.length>this.selectedIndex){activeItem=divs.get(this.selectedIndex);$(activeItem).attr("class","selected");}return activeItem;},deactivate:function(div,index){div.className="";if(this.selectedIndex===index){this.selectedIndex=-1;}},select:function(i){var selectedValue=this.suggestions[i];if(selectedValue){this.el.val(selectedValue);if(this.options.autoSubmit){var f=this.el.parents("form");if(f.length>0){f.get(0).submit();}}this.ignoreValueChange=true;this.hide();this.onSelect(i);}},moveUp:function(){if(this.selectedIndex===-1){return;}if(this.selectedIndex===0){this.container.children().get(0).className="";this.selectedIndex=-1;this.el.val(this.currentValue);return;}this.adjustScroll(this.selectedIndex-1);},moveDown:function(){if(this.selectedIndex===(this.suggestions.length-1)){return;}this.adjustScroll(this.selectedIndex+1);},adjustScroll:function(i){var activeItem,offsetTop,upperBound,lowerBound;activeItem=this.activate(i);offsetTop=activeItem.offsetTop;upperBound=this.container.scrollTop();lowerBound=upperBound+this.options.maxHeight-25;if(offsetTop<upperBound){this.container.scrollTop(offsetTop);}else{if(offsetTop>lowerBound){this.container.scrollTop(offsetTop-this.options.maxHeight+25);}}},onSelect:function(i){var me,onSelect,getValue,s,d;me=this;onSelect=me.options.onSelect;getValue=function(value){var del,currVal;del=me.options.delimiter;currVal=me.currentValue;if(!del){return value;}var arr=currVal.split(del);if(arr.length===1){return value;}return currVal.substr(0,currVal.length-arr[arr.length-1].length)+value;};s=me.suggestions[i];d=me.data[i];me.el.val(getValue(s));if($.isFunction(onSelect)){onSelect(s,d);}}};})(jQuery);

/**
 * Zoom plugin
 *
 * @version 0.9
 * @requires jQuery v1.3
 * @author Kevan Davis
 * @copyright Copyright (c) 2009, Gilt Groupe
 *
 * Distributed under the terms of the GNU General Public License
 * http://www.gnu.org/licenses/gpl-3.0.html
 *
 * Usage:
 *   $(".thumbnails").zoom({ container: $("#fullsizeimage") })
 *   With 1 or more thumbnail images selected, zoom will make it so when you are mousing over them, a fullsize version
 *   will pan around in a medium sized container.  Examples can be found on any product page at www.gilt.com
 *
 * Required parameters:
 *   container:  a jquery object for the full size image parent
 *
 * Optional parameters:
 *   triggerEvent:  the event that triggers the zoom effect, by default it's mouseover, but if you want, you can attach it to something else,
 *   easing:        easing function for the panning effect, default is "swing", "easeOutElastic" looks cool too
 *   panSpeed:      speed at which to pan around, default is "normal",
 *   zoomInSpeed:   speed at which to zoom in, default is "slow",
 *   zoomOutSpeed:  speed at which to zoom out, default is "fast",
 *   useZoomInEffect: whether or not to use the zoom in effect, default is true,
 *   useZoomOutEffect: whether or not to use the zoom out effect, default is true
 *
 * TODO: remaining bug:  if you zoomout from the bottom, it visibly moves from the left
 */
(function($) {
	$.fn.zoom = function(options) {
		var opts = $.extend({}, $.fn.zoom.defaults, options);
        var elements = $(this);
        var el;
        var data;
        var offset;

        // Preload the full size images, and get their dimensions
        elements.each(function(_, el) {
            var full = $("<img/>").attr("src", $(el).attr("fullsrc")).hide();
            full.load(function() {
                $(el).data("zoomed", { src: $(el).attr("fullsrc"), height: full.height(), width: full.width() });
            }).appendTo("body");
        });

        // Normalize zoom and pan speeds.  Need these in numeric form for some calculations
        if (opts.useZoomInEffect) {
            opts.zoomInSpeed = $.speed(opts.zoomInSpeed).duration;
            opts.panSpeed = $.speed(opts.panSpeed).duration;
        }

        if (!opts.container || opts.container.data("iszoomconfigured")) {
            return elements;
        }

        var img = opts.container.find("img");
        if (!img.length) {
            img = $("<img/>");
        }

        opts.container
            .data("iszoomconfigured",true)
            .empty()
            .css({ position: 'relative' })
            .append("<div/>")
            .children("div")
                .css({ overflow: 'hidden', position: 'relative', height: '100%', width: '100%' })
                .append(img)
                .children("img")
                    .css({ position: 'absolute', top: 0, left: 0 });

        var hide = (opts.container.filter(":hidden").length > 0);
        var zoomLastTS;
        var zoomElapsed;
        var started;
        var f = function(event) {
            if (!event.pageX && !event.pageY) {
                return;
            }

            var x = event.pageX;//||(el.width()/2 + offset.left);
            var y = event.pageY;//||(el.height()/2 + offset.top);

            var new_offset = {
                top:  ((y - offset.top) / el.height()) * 100.0,
                left: ((x - offset.left) / el.width()) * 100.0
            };
            var zoom = {
                top:  (data.height * new_offset.top / 100) - opts.container.height() / 2,
                left: (data.width * new_offset.left / 100) - opts.container.width() / 2

            };
            if (data.width - opts.container.width() < zoom.left) {
                zoom.left = data.width - opts.container.width();
            } else if (0 > zoom.left) {
                zoom.left = 0;
            }
            if (data.height - opts.container.height() < zoom.top) {
                zoom.top = data.height - opts.container.height();
            } else if (0 > zoom.top) {
                zoom.top = 0;
            }
            var css1;
            var css2 = {
                marginTop: -zoom.top,
                marginRight: data.width - zoom.left,
                marginBottom: data.height - zoom.top,
                marginLeft: -zoom.left
            };
            if (!started) {
                started = true;
                if (opts.useZoomInEffect) {
                    img.css({
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0
                    });
                } else {
                    img.stop(true,false).css(css2);
                    return;
                }
            }
            if (opts.useZoomInEffect) {
                var newTS = (new Date()).getTime();
                zoomElapsed += newTS - zoomLastTS;
                zoomLastTS = newTS;
                if (img.height() != data.height || img.width() != data.width) {
                    var ratio;
                    if (zoomElapsed < opts.zoomInSpeed) {
                        ratio = opts.panSpeed / (opts.zoomInSpeed - zoomElapsed);
                        if (1 < ratio) {
                            ratio = 1;
                        }
                        css1 = $.extend({}, css2, { height: data.height, width: data.width });
                    }
                }
            }
            img.stop(true, false);
            if (css1) {
                img.animate(css1, { duration: opts.zoomInSpeed - zoomElapsed, easing: "linear" });
            }
            img.animate(css2, { duration: opts.panSpeed, easing: opts.easing });
        };
        elements.bind(opts.triggerEvent,
            function() {
                el = $(this);
                offset = el.offset();
                data = el.data("zoomed");
                if (!data) {
                    return;
                }
                var newData = img.data("unzoomed");
                if (newData){
                    $.extend(newData, { src: img.attr("src") });
                } else {
                    newData = {
                        src: img.attr("src"),
                        height: img.height(),
                        width: img.width()
                    };
                }
                img.data("unzoomed", newData);
                img.attr("src", data.src)
                    .stop(true, true);
                if (!opts.useZoomInEffect) {
                    img.height(data.height)
                        .width(data.width);
                }
                if (hide) {
                    opts.container.show();
                }
                zoomLastTS = (new Date()).getTime();
                zoomElapsed = 0;
                started = false;
                $().mousemove(f).mousemove();
            }
        );
        return elements.mouseout(
            function() {
                $().unbind("mousemove", f);
                if (hide) {
                    opts.container.hide();
                }
                el = null;
                offset = null;
                data = img.data("unzoomed");
                if (!data) {
                    return;
                }
                img.attr("src", data.src)
                    .stop(true, false);
                if (opts.useZoomOutEffect) { // TODO: this part needs some work
                    img.animate({
                        margin: 0,
                        height: data.height,
                        width: data.width
                    }, { duration: opts.zoomOutSpeed });
                } else {
                    img.css({
                        margin: 0,
                        height: data.height,
                        width: data.width
                    });
                }
                data = null;
            }
        );
	};

	$.fn.zoom.defaults = {
        triggerEvent: "mouseover",
        easing: "swing",
        panSpeed: "normal",
        zoomInSpeed: "slow",
        zoomOutSpeed: "fast",
        useZoomInEffect: true,
        useZoomOutEffect: true
    };
})(jQuery);

/**
 * Rollover plugin
 *
 * @version 1.0
 * @requires jQuery v1.3
 * @author Kevan Davis
 * @copyright Copyright (c) 2009, Gilt Groupe
 *
 * Distributed under the terms of the GNU General Public License
 * http://www.gnu.org/licenses/gpl-3.0.html
 *
 */
(function($) {
	$.fn.rollover = function(options) {
		var opts = $.extend({}, $.fn.rollover.defaults, options);
        var elements = this;
        var i = elements.length;

        var fOver = function() {
            var j = opts.states.length;
            while (j--) {
                opts.states[j].element.attr("src", opts.states[j].rollover.attr("src"));
            }
        };
        var fOut = function() {
            var j = opts.states.length;
            while (j--) {
                opts.states[j].element.attr("src", opts.states[j].rollout);
            }
        };

        while (i--) {
            var el = $(elements[i]);
            if (el.attr(opts.rollover_source)) {
                var e = el.attr(opts.rollover_target);
                if (e) {
                    e = $(e);
                } else {
                    e = el;
                }
                opts.states.push({ rollover: $("<img/>").attr("src", el.attr(opts.rollover_source)), rollout: e.attr("src"), element: e });
            }
            if (el.attr(opts.otherrollover_sources) && el.attr(opts.otherrollover_targets)) {
                var srcs = el.attr(opts.otherrollover_sources).split(/[, ]/g);
                var targets = el.attr(opts.otherrollover_targets).split(/[, ]/g);
                var j = srcs.length;
                while (j--) {
                    var t = $(targets[j]);
                    if (!t.length) {
                        t = $("#" + targets[j]);
                    }
                    opts.states.push({ rollover: $("<img/>").attr("src", srcs[j]), rollout: t.attr("src"), element: t });
                }
            }
            el.hover(fOver, fOut);
        }

        return $(elements);
	};

	$.fn.rollover.defaults = {
        rollover_source: "rollSrc",
        rollover_target: "rollTarget",
        otherrollover_sources: "rolloverSources",
        otherrollover_targets: "rolloverTargets",
        states: []
	};
})(jQuery);

/**
 * @name Gilt Carousel Plugin
 */
(function($) {
  $.widget("ui.carousel", {
    _init: function() {
      var This = this;
      this.element
        .addClass(this.widgetBaseClass)
        .append(this.options.templates.leftArrow)
        .append(this.options.templates.rightArrow);
      if (this.options.showFooter) {
        var footer = $(this.options.templates.footer);
        footer
          .addClass(this.widgetBaseClass + "-footer")
          .find("span")
            .addClass(this.widgetBaseClass + "-footer-group")
            .append(this.options.templates.leftArrowSmall)
            .append(this.options.templates.rightArrowSmall)
          .end()
          .appendTo(this.element);
      }
      this.options.maxIndex = this.element.children("ul:first").children("li").length;
      for (var i = 0; i < this.element.children("ul").length; ++i) {
        if (!this.options.transitions[i]) {
          this.options.transitions[i] = $.extend({}, this.options.defaultTransition);
        } else if (!this.options.transitions[i].left) {
          var transition = this.options.transitions[i];
          this.options.transitions[i] = {
            left: transition,
            right: transition
          };
        }
      }
      for (i = 0; i < this.options.maxIndex; ++i) {
        this.element.children("ul").find("> li:eq(" + i + ")").addClass(this.widgetBaseClass + "-state-" + i);
        if (this.options.showFooter) {
          var numeral = $(this.options.templates.number);
          numeral
            .addClass("ui-icon-numeral-" + (i + 1) + (i == this.options.state ? " ui-state-active" : ""))
            .click((function(i) {
              return function() {
                This.frame(i);
                if (This.options.autoRotate) {
                  This.autorotate("stop");
                }
              };
            })(i))
            .html($.isFunction(this.options.customFooterTemplate) ? this.options.customFooterTemplate(i) : (i + 1))
            .insertBefore(footer.children("span").children(":last"));
        }
      }
      if (this.options.showFooter) {
        this.element.find("." + this.widgetBaseClass + "-footer-group").css({
          left: (this.element.find("." + this.widgetBaseClass + "-footer").width() - this.element.find("." + this.widgetBaseClass + "-footer-group").width()) / 2
        });
      }
      this.element
        .children("ul")
          .children("li")
            .hide()
            .filter("." + this.widgetBaseClass + "-state-" + this.options.state)
              .show()
            .end()
          .end()
        .end()
        .hover(
        function() {
          $(this).addClass("ui-state-hover");
          if (This.options.keyHandler) {
            $(document).bind("keydown", This, This._keyHandler);
          }
        },
        function() {
          $(this).removeClass("ui-state-hover");
          if (This.options.keyHandler) {
            $(document).unbind("keydown", This._keyHandler);
          }
        }
      ).find(".ui-icon").hover(
        function() {
          This.element.removeClass("ui-state-hover");
          $(this).addClass($(this).attr("class").match(/\b[^\s]*arrow[^\s]*\b/)[0] + "-hover");
        },
        function() {
          This.element.addClass("ui-state-hover");
          $(this).removeClass($(this).attr("class").match(/\b[^\s]*-hover\b/)[0]);
        }
      ).filter(".ui-icon-arrow-1-w, .ui-icon-arrowthick-1-w")
         .click(function() {
           This.rotate("left");
           if (This.options.autoRotate) {
             This.autorotate("start", "left");
           }
         })
       .end()
       .filter(".ui-icon-arrow-1-e, .ui-icon-arrowthick-1-e")
         .click(function() {
           This.rotate("right");
           if (This.options.autoRotate) {
             This.autorotate("start", "right");
           }
         });
      if (this.options.autoRotate) {
        this.autorotate("start");
      }
    },
    frame: function(index, dir) {
      var old_index = this.options.state;
      if (index != old_index) {
        this.options.state = index;
        if (!dir) {
          dir = old_index - index;
          dir = dir / Math.abs(dir);
          dir = (1 == dir ? "left" : "right");
        }
        var dir2 = ("right" == dir ? "left" : "right");
        this.element.find(":animated").stop(true, true);
        var This = this;
        this.element.children("ul").each(function(i) {
          var transition = This.options.transitions[i];
          $.fn.show.apply($(this).children("li." + This.widgetBaseClass + "-state-" + index), transition[dir]);
          $.fn.hide.apply($(this).children("li." + This.widgetBaseClass + "-state-" + old_index), transition[dir2]);
        });
        this.element
          .find("." + this.widgetBaseClass + "-footer-group .ui-icon")
            .removeClass("ui-state-active")
            .filter(".ui-icon-numeral-" + (index + 1))
              .addClass("ui-state-active");
      }
      this._trigger("frame");
    },
    rotate: function(direction) {
      var new_index = this.options.state;
      if ("left" == direction) {
        new_index--;
        if (new_index < 0) {
          if (this.options.loop) {
            new_index = this.options.maxIndex - 1;
          } else {
            new_index = this.options.state;
          }
        }
      } else if ("right" == direction) {
        new_index++;
        if (new_index == this.options.maxIndex) {
          if (this.options.loop) {
            new_index = 0;
          } else {
            new_index = this.options.state;
          }
        }
      }
      this._trigger("rotate", null, { direction: direction });
      this.frame(new_index, direction);
    },
    autorotate: function(action, direction) {
      clearInterval(this.options.autoplayInterval);
      if ("start" == action) {
        if (this.options.autoRotateChangesDirection) {
          this.options.autoplayDirection = direction || this.options.autoRotateDefaultDirection;
        } else {
          this.options.autoplayDirection = this.options.autoRotateDefaultDirection;
        }
        var This = this;
        this.options.autoplayInterval = setInterval(function() {
          This.rotate(This.options.autoplayDirection);
        }, this.options.autoRotateInterval);
        this._trigger("autorotate-start");
      } else if ("stop" == action) {
        this._trigger("autorotate-stop");
      }
    },
    _keyHandler: function(ev) {
      var This = ev.data;
      if (37 == ev.keyCode) {
        This.rotate("left");
      } else if (39 == ev.keyCode) {
        This.rotate("right");
      } else if ((0 == ev.keyCode || (47 < ev.keyCode && 58 > ev.keyCode)) && 47 < ev.which && 58 > ev.which) {
        This.frame(ev.which - 49);
      } else if (13 == ev.keyCode || 32 == ev.keyCode || (0 == ev.keyCode && 32 == ev.which)) {
        document.location = This.element.find("li:visible a:first").attr("href");
      } else {
        return;
      }
      ev.preventDefault();
    }
  });
  $.ui.carousel.defaults = {
    autoRotate: true,
    autoRotateInterval: 10000,
    autoRotateDefaultDirection: "right",
    autoRotateChangesDirection: true,
    transitions: [],
    defaultTransition: {
      left: ["slide", { direction: "left", easing: "easeOutQuint" }],
      right: ["slide", { direction: "right", easing: "easeOutQuint" }]
    },
    loop: true,
    keyHandler: true,
    showFooter: true,
    state: 0,
    templates: {
      leftArrowSmall: "<span class='ui-icon ui-icon-arrow-1-w'>&lt;</span>",
      rightArrowSmall: "<span class='ui-icon ui-icon-arrow-1-e'>&gt;</span>",
      leftArrow: "<span class='ui-icon ui-icon-arrowthick-1-w'>&lt;</span>",
      rightArrow: "<span class='ui-icon ui-icon-arrowthick-1-e'>&gt;</span>",
      number: "<span class='ui-icon'></span>",
      footer: "<div><span></span></div>"
    }
  };
})(jQuery);

/** Gilt Groupe SizeChart Plugin
 *
 * @version 0.9
 * @requires jQuery v1.3, jQueryUI v1.7, Caret Plugin
 * @author Kevan Davis
 * @copyright Copyright (c) 2009, Gilt Groupe
 *
 * Distributed under the terms of the GNU General Public License
 * http://www.gnu.org/licenses/gpl-3.0.html
 *
 * @TODO: Compress it, once it's stable
 */
(function($) {
  $.widget("ui.sizechart", {
    _init: function() {
      if (!this.options.testElement) {
        this.options.testElement = this.element;
      }
      this.render();
      var sortStartIndex, sortStopIndex;
      var This = this;
      if (this.options.editable) {
        this.element.sortable({
          axis: 'y',
          containment: this.element,
          items: "tr",
          tolerance: 'pointer',
          start: function(ev, ui) {
            sortStartIndex = ui.item.prevAll().length;
            if (ui.item.parent("tbody").length) {
              sortStartIndex++;
            }
          },
          stop: function(ev, ui) {
            sortStopIndex = ui.item.prevAll().length;
            if (ui.item.parent("tbody").length && sortStartIndex) {
              sortStopIndex++;
            }
            var row = This.options.data.splice(sortStartIndex, 1)[0];
            This.options.data.splice(sortStopIndex, 0, row);
            if (ui.item.parent("thead").length) {
              This.element.find("tbody").prepend(This.element.find("thead tr:last"));
            } else if (!This.element.find("thead tr").length) {
              This.element.find("thead").prepend(This.element.find("tbody tr:first"));
            }
            This.render();
          }
        });
      }
    },
    _calcMinWidth: function(col) {
      var min = 0;
      var testTable = $(this.options.templates.table).appendTo(this.options.testElement);
      var testRow = $("<tr/>");
      testTable.append(testRow);
      for (var i = 0; i < this.options.data.length; ++i) {
        var test = $("<td>" + this.options.data[i].entries[col] + "</td>").appendTo(testRow);
        var borderSpacing;
        try {
          borderSpacing = parseInt(testTable.css("border-spacing")) || 0;
        } catch(e) {
          borderSpacing = 0;
        }
        if (!this.options.padding) {
          this.options.padding = {
            l: parseInt(test.css("padding-left") || "0"),
            r: parseInt(test.css("padding-right") || "0"),
            t: borderSpacing
          };
        }
        min = Math.max(min, test.width());
        test.remove();
      }
      testTable.remove();
      var changed = false;
      if (this.options.widths[col] != min) {
        changed = true;
      }
      this.options.widths[col] = min;
      return changed;
    },
    _calcColumnSets: function() {
      var sets = [];
      var colsRemaining = this.options.data[0].entries.length - this.options.repeatFirstNColumns;
      var sanity = 100;
      var nextCol = this.options.repeatFirstNColumns;
      var padding = this.options.padding;
      while (colsRemaining && sanity--) {
        var set = { snap: false, cols:[] };
        var curWidth = -padding.t;
        for (var i = 0; i < this.options.repeatFirstNColumns; ++i) {
          set.cols.push(i);
          curWidth += this.options.widths[i] + padding.l + padding.r + padding.t + this.options.fudgeFactor;
        }
        if (curWidth >= this.options.width) {
          throw "Min Width of Repeating Columns exceeds Max Width of the Table";
        }
        for (i = nextCol; i < this.options.data[0].entries.length; ++i) {
          if (curWidth + this.options.widths[i] + padding.l + padding.r + padding.t + this.options.fudgeFactor <= this.options.width) {
            set.cols.push(i);
            curWidth += this.options.widths[i] + padding.l + padding.r + padding.t + this.options.fudgeFactor;
            colsRemaining--;
            nextCol++;
          } else {
            break;
          }
        }
        set.width = curWidth;
        set.snap = (curWidth >= this.options.snapPoint);
        sets.push(set);
      }
      //console.debug(sets);
      return sets;
    },
    _clickCell: function() {
      var This = $(this).closest("table").parent().data("sizechart");
      if (!(This.options.sizeMode && this == This.element.find("td:first")[0])) {
        var wasrerendered = false;
        var t_row = $(this).closest('tr').prevAll().length;
        if ($(this).closest("tbody").length) {
          t_row++;
        }
        var t_col = $(this).closest("td").prevAll().length;
        $(this).closest("table").prevAll("table").each(function() {
          t_col += $(this).find("tr:first td").length - This.options.repeatFirstNColumns;
        });
        This.element.find("td input").each(function() {
          var row = $(this).closest('tr').prevAll().length;
          if ($(this).closest("tbody").length) {
            row++;
          }
          var col = $(this).closest("td").prevAll().length;
          if (col >= This.options.repeatFirstNColumns) {
            $(this).closest("table").prevAll("table").each(function() {
              col += $(this).find("tr:first td").length - This.options.repeatFirstNColumns;
            });
          }
          This.options.data[row].entries[col] = $(this).val();
          if (This._calcMinWidth(col)) {
            This.render();
            wasrerendered = true;
          }
          var p = $(this).parent();
          var extra = p.find("a");
          p.html($(this).val() || "&nbsp;").prepend(extra);
        });
        if (wasrerendered) {
          var t_check = 0;
          This.element.find("table").each(function() {
            t_check += $(this).find("tr:first td").length;
            if (t_check < t_col) {
              t_col += This.options.repeatFirstNColumns;
            } else {
              return false;
            }
          });
          This.element.find("table").find("tr:eq(" + t_row + ") td").eq(t_col).trigger("click");
          return;
        }
        var input = $("<input type='text'/>");
        var extra = $(this).find("a");
        $("body").append(extra);
        input.val($.trim($(this).text()));
        $(this).html("").append(input);
        input.before(extra);
        input.focus().blur(function() {
          $("body").append(extra);
          var p = input.parent();
          var row = p.parent().prevAll().length;
          if (p.closest("tbody").length) {
            row++;
          }
          var col = p.prevAll().length;
          if (col >= This.options.repeatFirstNColumns) {
            p.closest("table").prevAll("table").each(function() {
              col += $(this).find("tr:first td").length - This.options.repeatFirstNColumns;
            });
          }
          console.debug(col);
          This.options.data[row].entries[col] = input.val();
          if (This._calcMinWidth(col)) {
            This.render();
          }
          p.html(input.val() || "&nbsp;");
          p.prepend(extra);
        });
        if (This.options.editable) {
          input.keydown(function(ev) {
            switch (ev.which) {
              case 38: // up
                if (!ev.shiftKey && !input.caret()) {
                  ev.preventDefault();
                  if (input.closest("tr").prevAll("tr").length) {
                    target = input.closest("tr").prev("tr").find("td:eq(" + input.parent().prevAll("td").length + ")");
                    target.trigger("click");
                    input.blur();
                  } else if (input.closest("tbody").length) {
                    target = input.closest("table").find("thead td:eq(" + input.parent().prevAll("td").length + ")");
                    target.trigger("click");
                    input.blur();
                  }
                }
                break;
              case 40: // down
                if (!ev.shiftKey && input.caret() == input.val().length) {
                  ev.preventDefault();
                  if (ev.altKey && This.options.editable) {
                    var col = input.closest("td").prevAll().length;
                    This.addrow();
                    This.element.find("tr:eq(" + (This.element.find("tr").length - 2) + ") td:eq(" + col + ")").trigger("click");
                  }
                  if (input.closest("tr").nextAll("tr").length) {
                    target = input.closest("tr").next("tr").find("td:eq(" + input.parent().prevAll("td").length + ")");
                    target.trigger("click");
                    input.blur();
                  } else if (input.closest("thead").length) {
                    target = input.closest("table").find("tbody tr:first td:eq(" + input.parent().prevAll("td").length + ")");
                    target.trigger("click");
                    input.blur();
                  }
                }
                break;
              case 37: // left
                if (!ev.shiftKey && !input.caret()) {
                  ev.preventDefault();
                  if (input.parent().prevAll("td").length) {
                    var target = input.parent().prev("td");
                    target.trigger("click");
                    input.blur();
                  }
                }
                break;
              case 39: // right
                if (!ev.shiftKey && input.caret() == input.val().length) {
                  ev.preventDefault();
                  if (ev.altKey && This.options.editable) {
                    var row = input.closest('tr').prevAll().length;
                    if (input.closest("tbody").length) {
                      row++;
                    }
                    This.addcolumn();
                    This.element.find("tr:eq(" + row + ") td:last").trigger("click");
                  }
                  if (input.parent().nextAll("td").length) {
                    target = input.parent().next("td");
                    target.trigger("click");
                    input.blur();
                  }
                }
                break;
              case 9: // tab
                ev.preventDefault();
                var cell = $(this).parent()[0];
                var pos = $(this).prevAll("td").length;
                var set = This.element.find("td");
                if (This.options.sizeMode) {
                  set = set.not(":first");
                }
                set.each(function(i) {
                  if (this == cell) {
                    pos = i;
                    return false;
                  }
                });
                if (!ev.shiftKey) {
                  if (pos++ == set.length - 1) {
                    pos = 0;
                  }
                } else {
                  if (pos-- == 0) {
                    pos = set.length - 1;
                  }
                }
                set.eq(pos).trigger("click");
                $(this).blur();
                break;
              case 13: // enter
                ev.preventDefault();
                break;
            }
          });
        }
      } else {
        $(this).next("td").trigger('click');
      }
    },
    render: function() {
      this.element.empty();
      if (this.options.data.length) {
        for (var i = 0; i < this.options.data[0].entries.length; ++i) {
          this._calcMinWidth(i);
        }
        this._render();
      }
    },
    _render: function() {
      var This = this;
      var sets = this._calcColumnSets();
      for (var i = 0; i < sets.length; ++i) {
        var table = $(this.options.templates.table);
        this.element.append(table);
        var section;
        for (var j = 0; j < this.options.data.length; ++j) {
          if (this.options.data[j]._delete) {
            continue;
          }
          var row = $("<tr/>");
          if (!j) {
            section = $("<thead/>").appendTo(table);
            section.append(row);
            section = $("<tbody/>").appendTo(table);
          } else {
            section.append(row);
          }
          for (var k = 0; k < sets[i].cols.length; ++k) {
            if (j || k || !this.options.sizeMode) {
              var cell = $("<td>" + (this.options.data[j].entries[sets[i].cols[k]] || "&nbsp;") + "</td>");
              if (this.options.editable) {
                cell.click(this._clickCell);
              }
            } else {
              cell = $("<td/>");
            }
            row.append(cell);
            if (!k) {
              if (j && this.options.editable && this.options.data.length > 2) {
                var btn = $(this.options.templates.removeRowButton);
                btn.click(function(ev) {
                  ev.preventDefault();
                  var i = $(this).closest('tr').prevAll().length + 1;
                  //This.options.data.splice(i, 1);
                  This.options.data[i]._delete = true;
                  This.render();
                });
                cell.prepend(btn);
              }
              if (this.options.sizeMode) {
                cell.addClass("first");
              }
            }
          }
        }
        if (this.options.editable && this.options.data[0].entries.length > this.options.repeatFirstNColumns + 1) {
          var lastrow = $("<tr/>");
          table.append(lastrow);
          $.each(sets[i].cols, function(j) {
            var set = sets[i];
            btn = $(This.options.templates.removeColButton);
            if (j >= This.options.repeatFirstNColumns) {
              btn.find("a").click(function(ev) {
                ev.preventDefault();
                var index = set.cols[j];
                for (var k = 0; k < This.options.data.length; ++k) {
                  This.options.data[k].entries.splice(index, 1);
                }
                This.render();
              });
            } else {
              btn.empty();
            }
            lastrow.append(btn);
          });
        }
        if (sets[i].snap) {
          table.css("width", "");
        }
      }
      this.element.find("thead td:not(.first)").hover(
        function() {
          This.element.find(".hover").removeClass("hover");
          var i = $(this).prevAll().length;
          $(this).closest("table").find("tbody tr").find("td:eq(" + i + ")").addClass("hover");
        },
        function() {
          This.element.find(".hover").removeClass("hover");
        }
      );
      this.element.find("tbody tr").hover(
        function() {
          This.element.find(".hover").removeClass("hover");
          var i = $(this).prevAll().length;
          This.element.find("tbody").find("tr:eq(" + i + ")").find("td").addClass("hover");
        },
        function() {
          This.element.find(".hover").removeClass("hover");
        }
      );
    },
    addcolumn: function() {
      var rows = this.options.data.length;
      for (var i = 0; i < rows; i++) {
        this.options.data[i].entries.push("&nbsp;");
      }
      this.render();
    },
    addrow: function() {
      var cols = this.options.data[0].entries.length;
      var newrow = { entries: [] };
      for (var i = 0; i < cols; i++) {
        newrow.entries.push("&nbsp;");
      }
      this.options.data.push(newrow);
      this.render();
    },
    _setData: function(key, value) {
      this.options[key] = value;
      if ("disabled" == key) {
        this.element[value ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled " + this.namespace + "-state-disabled").attr("aria-disabled", value);
      } else if ("data" == key || "width" == key || "snapPoint" == key || "repeatFirstNColumns" == key || "sizeMode" == key) {
        this.render();
      }
    }
  });
  $.ui.sizechart.defaults = {
    data: [],
    width: 1000,
    snapPoint: 0.5,
    repeatFirstNColumns: 1,
    editable: false,
    sizeMode: true,
    widths: [],
    fudgeFactor: 8,
    testElement: null,
    templates: {
      removeColButton: "<td class='nobg'><a href='#' class='delcol'>x</a></td>",
      removeRowButton: "<a href='#' class='delrow'>x</a>",
      table: "<table style='width: auto;'/>"
    }
  };
})(jQuery);
