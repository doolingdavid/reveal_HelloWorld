try{window.parent._dv_win['dvCallback_1466184676860692']($dv,window,'b5c4343966f8467d80a813053b054321','tps10233.doubleverify.com');}catch(e){try{var image=window.document.createElement('img');image.src=window.location.protocol+'//tps30.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_cbError='+encodeURIComponent(e.message)}catch(e){}}$dv.pubSub.subscribe('ImpressionServed', $uid, 'RTN_LatencyTemp', function () {try {var beforeVisitCall = '';var templateStartTime = parent.getCurrentTime();var dv_win = parent.window._dv_win;if (dv_win && dv_win.t2tTimestampData) {if (dv_win.t2tTimestampData.length >= 2) {beforeVisitCall = dv_win.t2tTimestampData[1].beforeVisitCall;}}var latency = 0;if (beforeVisitCall != '' && templateStartTime != '') {latency = templateStartTime - beforeVisitCall;}if(latency > 1000 && latency < 90000) {$dv.registerEventCall($uid, { dvp_ltncy: latency });}} catch (e) {};});$dv.pubSub.subscribe('ImpressionServed', $uid, 'RTN_CollectDvtpSrcPerformanceData', function(){ try {var dvTagCreated = '';var dvTagCreatedSetInCallBack = '';var beforeVisitCall = '';var callTPSFromIframe = window.callTPSFromIframe;var beginVisitCallbackTS = '';var templateStartTime = parent.getCurrentTime();var dv_win = parent.window._dv_win;if(dv_win && dv_win.t2tTimestampData) {if (dv_win.t2tTimestampData.length >= 1) {dvTagCreated = dv_win.t2tTimestampData[0].dvTagCreated;}if (dv_win.t2tTimestampData.length >= 2) {beforeVisitCall = dv_win.t2tTimestampData[1].beforeVisitCall;}}if ($dv.tags[$uid]) {dvTagCreatedSetInCallBack = $dv.tags[$uid].t2tIframeCreationTime;beginVisitCallbackTS = $dv.tags[$uid].beginVisitCallbackTS;}var message = $dv.tags[$uid].dv_protocol + '//' + $dv.tags[$uid].ServerPublicDns + '/event.gif?impid=' + $uid;message += '&dvp_dvTagCreated='+dvTagCreated+'&dvp_dvTagCreatedSetInCallBack='+dvTagCreatedSetInCallBack+'&dvp_callTPSFromIframe='+callTPSFromIframe+'&dvp_beforeVisitCall='+beforeVisitCall+'&dvp_beginVisitCallbackTS='+beginVisitCallbackTS+'&dvp_templateStartTime='+templateStartTime+'&dvp_tpsProcessingTime=+0';var image = window.document.createElement('img');image.src = message;} catch(e) {};});    	$dv.pubSub.subscribe ('ImpressionServed', $uid, 'SendAdEntitiesForBSBAConsolidation', function() {
            'use strict';
            var stringifyFunc = null;
			if(window.JSON){
				stringifyFunc = window.JSON.stringify;
			} else {
				if(window.parent && window.parent.JSON){
					stringifyFunc = window.parent.JSON.stringify;
				}
			}
			if(!stringifyFunc){
				return;
			}
            var targetWin;
            var tag = $dv.tags[$uid];
            var bsmsg = {
                action : 'notifyBrandShieldAdEntityInformation',
                bsAdEntityInformation : {
                    comparisonItems : [{name : 'cmp', value : 3331968},{name : 'plmt', value : 3332007}], verboseReporting : false  }
            };
            var bsstring = stringifyFunc(bsmsg);

            var findAndSend = function(){
                if(!targetWin) {
                    if (tag) {
                        targetWin = tag.t2tIframeWindow;
                        if (!targetWin) {
                            var t2tIframeId = tag.t2tIframeId;
                            //get t2t window and post the AdEntities to it.
                            if (t2tIframeId) {
                                var iFrame = window.parent.getElementById(t2tIframeId);
                                if (iFrame) {
                                    targetWin = iFrame.contentWindow;
                                }
                            }
                        }
                    }
                }

                if(targetWin){
                    targetWin.postMessage(bsstring, '*');
                }
            };

            findAndSend();
            setTimeout(findAndSend, 100);
            setTimeout(findAndSend, 500);
        });var impId = 'b5c4343966f8467d80a813053b054321';var dvObj = $dv;var rtnName = dvObj==window.$dv ? 'ImpressionServed' : 'BeforeDecisionRender';dvObj.pubSub.subscribe(rtnName, impId, 'HE_RTN', function () { try {var ifu = '';var alu = 'http://ad.doubleclick.net/ddm/clk/291583327;106680815;k';var lbl='';var d=null,e=dvObj==window.$dv,h=e?parent:window,k=dvObj.tags[impId].protocol+"//"+(dvObj.tags[impId].ServerPublicDns||dvObj.tags[impId].serverPublicDns)+"/"+(e?"event":"bsevent")+".gif?impid="+impId,l=0,m=0,n=[],p=[],q=10;function r(a,c){function b(b){return f=function(g){g.preventDefault();if(!u[c<<q*b]&&(rhe(c,c<<q*b),u[c<<q*b]=!0,a)){events=i[b];for(g=0;g<events.length;g++)a.removeEventListener?a.removeEventListener(events[g],f):a.detachEvent?a.detachEvent("on"+events[g],f):a["on"+events[g]]=f}}}var i=[["click"],["focus"],"input change keyup textInput keypress paste".split(" ")],u=[];u[c]=!1;if(a)for(var j=0;j<i.length;j++){events=i[j];for(var o=0;o<events.length;o++)a.addEventListener?a.addEventListener(events[o],b(j),!0):a.attachEvent?a.attachEvent("on"+events[o],b(j)):a["on"+events[o]]=b(j)}}window.rhe=function(a,c){void 0==c&&(c=a);var b="",i="";"number"===typeof a&&void 0==n[a]&&(n[a]=!0,l+=a,b="&"+lbl+"heas="+l);"number"===typeof c&&void 0==p[c]&&(p[c]=!0,m+=c,i="&dvp_hease="+m);dvObj.domUtilities.addImage(k+"&"+lbl+"hea=1"+b+i,dvObj.tags[impId].tagElement.parentNode)};h.rhe=rhe;function s(a,c){var b=document.createElement(a);b.id=(c||a)+"-"+impId;b.style.visibility="hidden";b.style.position="absolute";b.style.display="none";return b}function t(a){var c=v;Object.defineProperty(c,a,{get:function(){return this.getAttribute(a)},set:function(b){this.setAttribute(a,b);"createEvent"in document?(b=document.createEvent("HTMLEvents"),b.initEvent("change",!1,!0),c.dispatchEvent(b)):(b=document.createEventObject(),c.fireEvent("onchange",b))}})}var w=s("form");w.submit=function(){window.rhe(1,1)};var v=s("input","txt");v.name=v.id;v.type="text";t("value");t("textContent");var x=s("input","btn");x.name=x.id;x.type="button";var y=s("input","sbmt");y.name=y.id;y.type="submit";y.click=function(){window.rhe(2,2)};var z=s("a");z.href="javascript:window.rhe(16,16);";if(""!=alu){var A=s("a");A.href=alu}h.document.body.insertBefore(w,d);h.document.body.insertBefore(z,d);w.insertBefore(v,d);w.insertBefore(x,d);w.insertBefore(y,d);r(v,8);r(x,4);r(y,2);r(w,1);""!=alu&&(A=s("a","alu"),A.href=alu,h.document.body.insertBefore(A,d),r(A,32));if(""!=ifu){var B=s("iframe");B.src=ifu;h.document.body.insertBefore(B,d);r(B,64)};} catch (e) {}; });$dv.tags[$uid].set({"billable":{adArea: 100, duration: 100}});$dv.tags[$uid].set({"gmmod":{ gmp: 1,gmpv: 1, gmpvr: 0.322931, gmperr: 0.044972}});$dv.tags[$uid].set({is_projected_viewability: 1, projected_view_rate: 0.481878, projected_error_rate: 0.049171});$dv.CommonData.deviceType = 1;function IVCallback(ViewAssureBootstrapper) {if(ViewAssureBootstrapper && typeof(ViewAssureBootstrapper)==='function'){ViewAssureBootstrapper({"protocol":"http://","serverSettings":{"protocol":"http://","templateVersion":"10","TKH":"-876795158590127334"},"prjct": { p: 1,pv: 0, pvr: 0.481878, perr: 0.049171, fb: 1 }});}else{new dv_InViewService({"protocol":"http://"}).inViewManager();}};document.write('<scr' + 'ipt src="http://cdn.doubleverify.com/avs602.js" type="text/javascript"></scr' + 'ipt>');try{$dv.pubSub.publish('ImpressionServed', $uid);}catch(e){}