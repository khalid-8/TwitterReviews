(this["webpackJsonptwitter-reviews"]=this["webpackJsonptwitter-reviews"]||[]).push([[0],{10:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return j}));var n=a(4),c=a(1),s=a.n(c),r=a(2),i=s.a.createContext(),o=s.a.createContext(),l=function(){return Object(c.useContext)(i)},u=function(){return Object(c.useContext)(o)},j=function(e){var t=e.children,a=(e.value,null===localStorage.getItem("lang")?"en":localStorage.getItem("lang")),s=Object(c.useState)(a),l=Object(n.a)(s,2),u=l[0],j=l[1];return console.log(u),Object(r.jsx)(i.Provider,{value:u,children:Object(r.jsx)(o.Provider,{value:j,children:t})})}},100:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(9),r=a.n(s),i=(a(52),a(34)),o=a(10),l=a(12),u=a(2);a(103).config();var j=function(){return Object(u.jsxs)(o.a,{children:[Object(u.jsx)(i.a,{}),Object(u.jsx)(l.a,{vertical:"top",horizontal:"right"})]})},d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,127)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),d()},12:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return l}));var n,c=a(4),s=a(1),r=a(125),i=a(2);function o(e){var t=Object(s.useState)(!1),a=Object(c.a)(t,2),o=a[0],l=a[1],u=Object(s.useState)(""),j=Object(c.a)(u,2),d=j[0],b=j[1],p=Object(s.useState)("bottom"),h=Object(c.a)(p,2),m=h[0],O=h[1],f=Object(s.useState)("right"),x=Object(c.a)(f,2),g=x[0],v=x[1],_=function(e){l(!0),b(e)};Object(s.useEffect)((function(){n=_}),[]),Object(s.useEffect)((function(){void 0!==e.horizontal&&v(e.horizontal),void 0!==e.vertical&&O(e.vertical)}),[e]);var w=Object(i.jsx)("span",{id:"snackbar-message-id",dangerouslySetInnerHTML:{__html:d}}),y=Object(i.jsx)(r.a,{anchorOrigin:{vertical:m,horizontal:g},message:w,autoHideDuration:3e3,onClose:function(){l(!1),b("")},open:o,ContentProps:{"aria-describedby":"snackbar-message-id"}});return void 0===d||""===d?null:y}var l=function(e){n(e)}},25:function(e,t,a){"use strict";var n=a(36),c=a(37),s=a.n(c).a.create({baseURL:"https://api.twitterreviews.xyz/"}),r=new function e(){Object(n.a)(this,e),this.Search=function(e){return s.post("twitter/",e).then((function(e){return e.data})).catch((function(e){return console.log(e.response),void 0===e.response?-1:401===e.response.status?-2:-1}))},this.GetIpAddress=function(){return s.get("http://geolocation-db.com/json/").then((function(e){return console.log(e.data),e.data})).catch((function(e){return console.log(e),-1}))}};t.a=r},34:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return m}));var n=a(8),c=a.n(n),s=a(11),r=a(4),i=(a(59),a(1)),o=a(35),l=a.n(o),u=a(45),j=a(25),d=a(38),b=a(5),p=a(12),h=a(2);function m(){var t=Object(i.useState)(!1),a=Object(r.a)(t,2),n=a[0],o=a[1],m=Object(i.useState)(!1),O=Object(r.a)(m,2),f=O[0],x=O[1],g=Object(i.useState)(),v=Object(r.a)(g,2),_=v[0],w=v[1],y=Object(b.b)();function N(){return S.apply(this,arguments)}function S(){return(S=Object(s.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!localStorage.address){t.next=2;break}return t.abrupt("return",e.from(localStorage.address,"base64").toString("ascii"));case 2:return t.next=4,j.a.GetIpAddress();case 4:return a=t.sent,console.log(a.IPv4),localStorage.address=e.from(a.IPv4).toString("base64"),console.log("ADDED NEW IP ADDRESS"),t.abrupt("return",e.from(localStorage.address,"base64").toString("ascii"));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(e){return L.apply(this,arguments)}function L(){return(L=Object(s.a)(c.a.mark((function e(t){var a,n,s,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.trim()){e.next=3;break}return Object(p.b)(b.a.MainPage[y].emptyError),e.abrupt("return",-1);case 3:return e.next=5,N();case 5:return a=e.sent,o(!0),n=new RegExp("[\u0621-\u064a]+"),s={query:t,lan:n.test(t)?"ar":"en",ip_address:a},e.next=11,j.a.Search(s);case 11:if(-1!==(r=e.sent)){e.next=15;break}return Object(p.b)(b.a.MainPage[y].generalError),e.abrupt("return",-1);case 15:if(-2!==r){e.next=18;break}return Object(p.b)(b.a.MainPage[y].exceedError),e.abrupt("return",-1);case 18:return e.abrupt("return",r);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(s.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.code&&"NumpadEnter"!==t.code){e.next=8;break}return t.preventDefault(),document.getElementById("SeachBar").blur(),e.next=6,E(t.target.value);case 6:-1!==(a=e.sent)?(w(a),document.getElementById("main_area").classList.add("mainArea_slide"),document.getElementById("twit_revLogo").classList.add("animate_logo"),o(!1),x(!0)):(o(!1),console.warn("Something Went Wrong!"));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{className:"Header",children:Object(h.jsx)("img",{id:"twit_revLogo",className:"Logo",src:"images/Logo.png",alt:"Twitter Reviews's Logo"})}),Object(h.jsx)("div",{className:"ChangLang",children:Object(h.jsx)(d.a,{})}),Object(h.jsxs)("div",{id:"main_area",className:"MainArea",children:[Object(h.jsx)("h1",{style:f?{visibility:"hidden",opacity:0,transition:" visibility 1s, opacity 0.5s linear"}:{},className:"Title",children:"Twitter Reviews"}),Object(h.jsx)("input",{id:"SeachBar",type:"text",style:{direction:"".concat("en"===y?"ltr":"rtl")},placeholder:b.a.MainPage[y].placeHolder,onKeyUp:function(e){return k.apply(this,arguments)}})]}),f?Object(h.jsx)(u.a,{data:_}):"",n?Object(h.jsxs)("div",{className:"blurBG",children:[" ",Object(h.jsx)(l.a,{className:"Loader",type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:6e4})," "]}):""]})}}).call(this,a(53).Buffer)},38:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(4),c=(a(100),a(1)),s=a(13),r=a(39),i=a(10),o=a(2);function l(){var e=localStorage.getItem("lang"),t=Object(c.useState)("false"),a=Object(n.a)(t,2),l=a[0],u=a[1],j=Object(c.useState)("en"===e?"true":"false"),d=Object(n.a)(j,2),b=d[0],p=d[1],h=Object(c.useState)("ar"===e?"true":"false"),m=Object(n.a)(h,2),O=m[0],f=m[1],x=Object(i.c)();return Object(o.jsxs)("div",{className:"LangMenu",children:[Object(o.jsxs)("div",{className:"LangPicker",onClick:function(){u("true"===l?"false":"true")},children:[Object(o.jsx)(s.a,{className:"LangPickerIcons",size:30}),Object(o.jsx)(r.a,{className:"LangPickerIcons",size:24})]}),Object(o.jsxs)("div",{className:"LangOptions",display:l,children:[Object(o.jsxs)("div",{className:"LangOptionsText",onClick:function(){p("true"),f("false"),localStorage.setItem("lang","en"),x("en"),setTimeout((function(){u("false")}),2e3)},display:b,children:[" ",Object(o.jsx)("b",{children:"English"})," "]}),Object(o.jsxs)("div",{className:"LangOptionsText",onClick:function(){f("true"),p("false"),localStorage.setItem("lang","ar"),x("ar"),setTimeout((function(){u("false")}),2e3)},display:O,children:[" ",Object(o.jsx)("b",{children:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"})," "]})]})]})}},45:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(1),c=(a(80),a(8)),s=a.n(c),r=a(11),i=a(4),o=a(126),l=(a(81),a(23)),u=a(22),j=a(21),d=a(13),b=a(20),p=a(5),h=a(2);function m(e){var t=e.postive,a=e.negative,c=e.searchTerm,m=Object(n.useState)([]),O=Object(i.a)(m,2),f=O[0],x=O[1],g=Object(n.useState)([]),v=Object(i.a)(g,2),_=v[0],w=v[1],y=Object(n.useState)("true"),N=Object(i.a)(y,2),S=N[0],E=N[1],L=Object(n.useState)("false"),k=Object(i.a)(L,2),P=k[0],C=k[1],I=Object(n.useState)([]),T=Object(i.a)(I,2),F=T[0],A=T[1],B=Object(n.useState)(0),R=Object(i.a)(B,2),M=R[0],z=R[1],D=Object(n.useState)(0),G=Object(i.a)(D,2),H=G[0],W=G[1],U=Object(n.useState)(0),Y=Object(i.a)(U,2),J=Y[0],K=Y[1],q=document.getElementById("display_btns"),Q=Object(p.b)(),V=180,X=40;function Z(e){return e<1e3?e:e>=1e3?+(e/1e3).toFixed(1)+"K":void 0}function $(e){var t=e.replace("+0000 ",""),a=/:\d{2} /.exec(t);return t=t.replace(a," ")}function ee(e,t){return e.retweet_count+e.favorite_count>t.retweet_count+t.favorite_count?-1:e.retweet_count+e.favorite_count<t.retweet_count+t.favorite_count?1:0}Object(n.useEffect)((function(){x([]),w([]),t.sort(ee),a.sort(ee),x(t),w(a);var e=document.getElementById("display_btns");K(e.clientHeight)}),[t,a]);var te=function(){return"true"===S?f.map((function(e){return Object(h.jsxs)("span",{className:"tweet_container",children:[Object(h.jsx)("div",{className:"profile_img",children:Object(h.jsx)("img",{src:e.profile_image_url,alt:"profile_img"})}),Object(h.jsxs)("div",{className:"tweet_info",children:[Object(h.jsx)("span",{className:"user_info",children:Object(h.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(h.jsx)("b",{style:{color:"#F5F8FA",fontSize:"1em"},children:e.screen_name}),e.verified?Object(h.jsx)(d.b,{className:"verified_icon"}):null,Object(h.jsx)("p",{style:{color:"#AAB8C2",fontSize:"0.8em",marginLeft:"0.5em"},children:"@".concat(e.username)}),Object(h.jsx)(b.a,{className:"open_tweet",onClick:function(){var t="https://twitter.com/"+e.username+"/status/"+e.id;window.open(t,"_blank")}})]})}),Object(h.jsx)("p",{className:"tweet_text",id:"tweet_txt",children:e.tweet}),Object(h.jsx)("p",{className:"tweet_date",children:$(e.date)}),Object(h.jsxs)("div",{className:"tweet_analatics",children:[Object(h.jsxs)("span",{className:"tweet_analatics_replies",children:[Object(h.jsx)(j.a,{className:"analatics_icon"}),Object(h.jsxs)("p",{children:[" ",Z(e.reply_count)," "]})]}),Object(h.jsxs)("span",{className:"tweet_analatics_retweets",children:[Object(h.jsx)(u.a,{className:"analatics_icon analatics_icon_retweet"}),Object(h.jsxs)("p",{children:[Z(e.retweet_count)," "]})]}),Object(h.jsxs)("span",{className:"tweet_analatics_likes",children:[Object(h.jsx)(l.a,{className:"analatics_icon"}),Object(h.jsx)("p",{children:Z(e.favorite_count)})]})]})]})]},e.id+Object(o.a)())})):_.map((function(e){return e.tweet.replace(c,"<b style={{'color': '#1DA1F2'}}>"+c+"</b>"),Object(h.jsxs)("span",{className:"tweet_container",children:[Object(h.jsx)("div",{className:"profile_img",children:Object(h.jsx)("img",{src:e.profile_image_url,alt:"profile_img"})}),Object(h.jsxs)("div",{className:"tweet_info",children:[Object(h.jsx)("span",{className:"user_info",children:Object(h.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(h.jsx)("b",{style:{color:"#F5F8FA",fontSize:"1em"},children:e.screen_name}),e.verified?Object(h.jsx)(d.b,{className:"verified_icon"}):null,Object(h.jsx)("p",{style:{color:"#AAB8C2",fontSize:"0.8em",marginLeft:"0.5em"},children:"@".concat(e.username)}),Object(h.jsx)(b.a,{className:"open_tweet",onClick:function(){var t="https://twitter.com/"+e.username+"/status/"+e.id;window.open(t,"_blank")}})]})}),Object(h.jsx)("p",{className:"tweet_text",id:"tweet_txt",children:e.tweet}),Object(h.jsx)("p",{className:"tweet_date",children:$(e.date)}),Object(h.jsxs)("div",{className:"tweet_analatics",children:[Object(h.jsxs)("span",{className:"tweet_analatics_replies",children:[Object(h.jsx)(j.a,{className:"analatics_icon"}),Object(h.jsxs)("p",{children:[" ",Z(e.reply_count)," "]})]}),Object(h.jsxs)("span",{className:"tweet_analatics_retweets",children:[Object(h.jsx)(u.a,{className:"analatics_icon analatics_icon_retweet"}),Object(h.jsxs)("p",{children:[Z(e.retweet_count)," "]})]}),Object(h.jsxs)("span",{className:"tweet_analatics_likes",children:[Object(h.jsx)(l.a,{className:"analatics_icon"}),Object(h.jsx)("p",{children:Z(e.favorite_count)})]})]})]})]},e.id+Object(o.a)())}))};return Object(n.useEffect)((function(){function e(){return(e=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A([]),e.next=3,A(te());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(){for(var e=c.charAt(0).toUpperCase()+c.slice(1).toLowerCase(),t=c.replace(" ","_"),a=document.getElementsByClassName("tweet_text"),n=0;n<a.length;n++)a[n].innerHTML=a[n].innerHTML.replaceAll("".concat(e),"<b>"+e+"</b>"),a[n].innerHTML=a[n].innerHTML.replaceAll("".concat(t),"<b>"+t+"</b>")}))}),[f,_,S,P,c]),Object(h.jsxs)("div",{className:"display_tweets",children:[Object(h.jsxs)("div",{className:"display_btns",id:"display_btns",children:[Object(h.jsxs)("button",{className:"positive_btn",clicked:S,onClick:function(){C("false"),E("true")},children:[" ",Object(h.jsx)("b",{children:p.a.Twitter[Q].postive})," "]}),Object(h.jsxs)("button",{className:"negative_btn",clicked:P,onClick:function(){E("false"),C("true")},children:[" ",Object(h.jsx)("b",{children:p.a.Twitter[Q].Negative})," "]})]}),Object(h.jsx)("div",{className:"scroll_tweets",onScroll:function(e){var t=e.target.scrollTop;return t<V?(q.style.removeProperty("bottom"),q.style.removeProperty("height")):t>M?H>M?(t-M<90&&q.style.setProperty("bottom","".concat(t-M,"px")),void(J-(t-M)>=40?q.style.setProperty("height","".concat(J-(t-M),"px")):(W(t),z(t)))):(z(t),W(t),t-V<90&&q.style.setProperty("bottom","".concat(t-V,"px")),void(J-(t-V)>=40&&q.style.setProperty("height","".concat(J-(t-V),"px")))):t<H?t-H+140<0&&J-(H-t+X)<0?z(t):(t-H+140>=0&&q.style.setProperty("bottom","".concat(t-H+140,"px")),void(J-(H-t+X)>=0&&q.style.setProperty("height","".concat(H-t+X,"px")))):void 0},children:F})]})}function O(e){var t=e.data,a=Object(p.b)(),c=t.total_count,s=t.postive_count,r=t.negative_count;function i(e){var t={0:"\u0660",1:"\u0661",2:"\u0662",3:"\u0663",4:"\u0664",5:"\u0665",6:"\u0666",7:"\u0667",8:"\u0668",9:"\u0669"},a=Array.from(String(e),Number),n="";return a.forEach((function(e){n+=t[e]})),n}return Object(n.useEffect)((function(){document.getElementById("Search_Results").classList.add("SResults_Appear")}),[]),Object(h.jsxs)("div",{id:"Search_Results",className:"SResults",children:[Object(h.jsxs)("div",{className:"text_results",children:[Object(h.jsxs)("strong",{children:[" ",p.a.SearchResults[a].Found," ","en"===a?c:i(c)," ",p.a.SearchResults[a].Tweests]}),Object(h.jsxs)("p",{children:[" ","en"===a?s:i(s),Object(h.jsxs)("span",{style:{color:"#52B8F1"},children:[" ",p.a.SearchResults[a].postive]}),","," ".concat("en"===a?r:i(r)),Object(h.jsxs)("span",{style:{color:"#F15265"},children:[" ",p.a.SearchResults[a].Negative]})," "]})]}),Object(h.jsxs)("span",{className:"graphs_results",children:[Object(h.jsx)("div",{className:"Graph_Container ChartsGraphs",children:Object(h.jsx)("img",{className:"Graph_Img ChartsGraphs_img",src:"data:image/png;base64, ".concat(t.charts_graph),alt:"Bar Chart"})}),Object(h.jsx)("div",{className:"Graph_Container PieGraphs",children:Object(h.jsx)("img",{className:"Graph_Img PieGraphs_img",src:"data:image/png;base64, ".concat(t.pie_graph),alt:"Pie Chart"})})]}),Object(h.jsx)(m,{postive:t.postive_tweets,negative:t.negative_tweets,searchTerm:t.search_term})]})}},5:function(e,t,a){"use strict";a.d(t,"b",(function(){return n.b})),a.d(t,"a",(function(){return c}));var n=a(10),c={MainPage:{en:{placeHolder:"Search For a product or services",generalError:"Something Went Wrong",emptyError:"You can't Leave the Search Box Empty",exceedError:"You Exceeded Your Daily Search Limit"},ar:{placeHolder:"\u0627\u0628\u062d\u062b \u0639\u0646 \u0645\u0646\u062a\u062c \u0627\u0648 \u062e\u062f\u0645\u0629",generalError:"\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627",emptyError:"\u0644\u0627 \u064a\u0645\u0643\u0646\u0643 \u062a\u0631\u0643 \u062e\u0627\u0646\u0629 \u0627\u0644\u0628\u062d\u062b \u0641\u0627\u0631\u063a\u0629",exceedError:"\u0644\u0642\u062f \u062a\u062c\u0627\u0648\u0632\u062a \u062d\u062f\u0643 \u0627\u0644\u064a\u0648\u0645\u064a \u0644\u0644\u0628\u062d\u062b"}},SearchResults:{en:{Found:"Found",Tweests:"Tweests",postive:"Positive",Negative:"Negative"},ar:{Found:"\u0648\u062c\u062f\u0646\u0627",Tweests:"\u062a\u063a\u0631\u064a\u062f\u0629",postive:"\u0625\u064a\u062c\u0627\u0628\u064a\u0629",Negative:"\u0633\u0644\u0628\u064a\u0629"}},Twitter:{en:{postive:"Positive",Negative:"Negative"},ar:{postive:"\u0625\u064a\u062c\u0627\u0628\u064a\u0629",Negative:"\u0633\u0644\u0628\u064a\u0629"}}}},52:function(e,t,a){},59:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.7fee23a3.chunk.js.map