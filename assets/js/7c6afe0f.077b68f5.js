"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[249],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var l=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,l,o=function(e,t){if(null==e)return{};var i,l,o={},n=Object.keys(e);for(l=0;l<n.length;l++)i=n[l],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)i=n[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=l.createContext({}),u=function(e){var t=l.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),h=u(i),p=o,m=h["".concat(s,".").concat(p)]||h[p]||d[p]||n;return i?l.createElement(m,a(a({ref:t},c),{},{components:i})):l.createElement(m,a({ref:t},c))}));function m(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,a=new Array(n);a[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[h]="string"==typeof e?e:o,a[1]=r;for(var u=2;u<n;u++)a[u]=i[u];return l.createElement.apply(null,a)}return l.createElement.apply(null,i)}p.displayName="MDXCreateElement"},4842:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>r,toc:()=>u});var l=i(7462),o=(i(7294),i(3905));const n={sidebar_position:110},a="Modes",r={unversionedId:"Tutorial - Setup/Modes",id:"Tutorial - Setup/Modes",title:"Modes",description:'The mode selector tab enables several modes and functions to be enabled or disabled via the TX. This is done by configuring a channel on the TX, such as a switch, that you wish to use for operating the mode. From the Modes tab, select the required Mode you wish to assign and click Add Range, then select the Aux channel matching your TX switch and set a range where you wish the mode to be active. If the mode you wish to use is not visible deselect "Hide unused modes".',source:"@site/docs/Tutorial - Setup/Modes.md",sourceDirName:"Tutorial - Setup",slug:"/Tutorial - Setup/Modes",permalink:"/docs/Tutorial - Setup/Modes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Tutorial - Setup/Modes.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{sidebar_position:110},sidebar:"tutorialSidebar",previous:{title:"RPM Filters",permalink:"/docs/Tutorial - Setup/RPM Filters"},next:{title:"LUA Scripts",permalink:"/docs/Tutorial - Setup/LUA Scripts"}},s={},u=[{value:"ARM",id:"arm",level:2},{value:"Rescue",id:"rescue",level:2},{value:"Enable Rescue",id:"enable-rescue",level:4},{value:"Pull up collective",id:"pull-up-collective",level:4},{value:"Pull up time",id:"pull-up-time",level:4},{value:"Climb collective",id:"climb-collective",level:4},{value:"Climb up time",id:"climb-up-time",level:4},{value:"Hover collective",id:"hover-collective",level:4},{value:"Flip Fail time",id:"flip-fail-time",level:4},{value:"Exit time",id:"exit-time",level:4},{value:"Leveling gain",id:"leveling-gain",level:4},{value:"Flip to upright gain",id:"flip-to-upright-gain",level:4},{value:"Max level rate",id:"max-level-rate",level:4},{value:"Max acceleration",id:"max-acceleration",level:4},{value:"6G flight modes",id:"6g-flight-modes",level:2},{value:"Horizon Mode leveling gain",id:"horizon-mode-leveling-gain",level:4},{value:"Angle Mode leveling gain",id:"angle-mode-leveling-gain",level:4},{value:"Angle Mode maximum angle",id:"angle-mode-maximum-angle",level:4},{value:"Acro Trainer gain",id:"acro-trainer-gain",level:4},{value:"Acro Trainer level limit",id:"acro-trainer-level-limit",level:4}],c={toc:u},h="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modes"},"Modes"),(0,o.kt)("p",null,"The mode selector tab enables several modes and functions to be enabled or disabled via the TX. This is done by configuring a channel on the TX, such as a switch, that you wish to use for operating the mode. From the ",(0,o.kt)("strong",{parentName:"p"},"Modes")," tab, select the required Mode you wish to assign and click ",(0,o.kt)("strong",{parentName:"p"},"Add Range"),', then select the Aux channel matching your TX switch and set a range where you wish the mode to be active. If the mode you wish to use is not visible deselect "Hide unused modes".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Modes",src:i(3209).Z,width:"1131",height:"248"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the example below Aux1 is assigned to a 3 position switch on the TX. "),(0,o.kt)("li",{parentName:"ul"},"Horizon mode has been assigned to the Aux1 Range when the middle position of Aux1 switch."),(0,o.kt)("li",{parentName:"ul"},"Angle mode is assigned to Aux1 at full up position of the Aux1 switch."),(0,o.kt)("li",{parentName:"ul"},"Nothing is assigned when Aux1 switch fully down. This means the Heli is in Normal or Acro mode. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Modes",src:i(6484).Z,width:"1360",height:"702"}),"    "),(0,o.kt)("h2",{id:"arm"},"ARM"),(0,o.kt)("p",null,"All flight controllers need to be enabled before the motors are able to spool up. Once the Arming mode is configured (as shown above) the flight controller can be Armed ready for flight. If the flight controller detects an unsafe condition Arming will be disabled. If this occurs you can look at the Arming flag status on the ",(0,o.kt)("strong",{parentName:"p"},"Status")," Tab to identify what is preventing Arming being enabled.    "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Modes",src:i(8455).Z,width:"569",height:"215"})),(0,o.kt)("p",null,"You can find out a description of these flags from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/betaflight/betaflight/wiki/Arming-Sequence-%26-Safety#description-of-arming-prevention-flags"},"List of Arming prevention flags")),(0,o.kt)("p",null,"This function can also provide the ability to prevent arming of the heli unless the correct model has been selected on your transmitter (if your RX does not have this functionality). This is done by adjusting the endpoint of your AUX channel to a different value for each model and setting the ARM range to enable the FC only for that model.      "),(0,o.kt)("h2",{id:"rescue"},"Rescue"),(0,o.kt)("p",null,"Enable Rescue mode from the tabs. Allocate the Aux channel and range to suit."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The purpose of the rescue mode is to arrest any decent, then put the helicopter at a safe altitude in a stable attitude. It does this in stages.   "),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Immediately levels in current orientation (upright or inverted)"),(0,o.kt)("li",{parentName:"ul"},"Applies a pull up collective to rapidly stop any decent  "),(0,o.kt)("li",{parentName:"ul"},"Applies a climb Collective to gain some height"),(0,o.kt)("li",{parentName:"ul"},"if it is still inverted (and the flip toggle enabled) it will flip to upright."),(0,o.kt)("li",{parentName:"ul"},"Hover collective is now applied."))),(0,o.kt)("p",null,"After enabling Rescue mode configure the rescue settings from the ",(0,o.kt)("strong",{parentName:"p"},"Profiles")," Tab shown below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Modes",src:i(6787).Z,width:"768",height:"468"})),(0,o.kt)("h4",{id:"enable-rescue"},"Enable Rescue"),(0,o.kt)("p",null,"Enable or disable the rescue mode.  "),(0,o.kt)("h4",{id:"pull-up-collective"},"Pull up collective"),(0,o.kt)("p",null,"Values 0.0-100. This is to be set to a level where the helicopter rapidly gains height.  "),(0,o.kt)("h4",{id:"pull-up-time"},"Pull up time"),(0,o.kt)("p",null,"How long pull up collective should be applied. This is usually about 0.3 to 0.5s"),(0,o.kt)("h4",{id:"climb-collective"},"Climb collective"),(0,o.kt)("p",null,"Values 0.0-100. This is to be set to a level where the helicopter gains height. "),(0,o.kt)("h4",{id:"climb-up-time"},"Climb up time"),(0,o.kt)("p",null,"How long Climb collective should be applied. This is usually about 0.5 to 1.5s"),(0,o.kt)("h4",{id:"hover-collective"},"Hover collective"),(0,o.kt)("p",null,"Set this to a value where the heli only showly increases "),(0,o.kt)("h4",{id:"flip-fail-time"},"Flip Fail time"),(0,o.kt)("p",null,"This is a safety feature. If there is a mechanical issue preventing the helicopter from completing the flip during this time the rescue mode will exit"),(0,o.kt)("h4",{id:"exit-time"},"Exit time"),(0,o.kt)("p",null,"This slows the transition from rescue back to normal mode. This is helpful if you have rescued from inverted where your collective may be in the opposite direction. This prevents it from rapidly pitching down."),(0,o.kt)("h4",{id:"leveling-gain"},"Leveling gain"),(0,o.kt)("p",null,"How strong the helicopter will level. Too low and the helicopter will be sluggish to level. Too hich and it will wobble/vibrate"),(0,o.kt)("h4",{id:"flip-to-upright-gain"},"Flip to upright gain"),(0,o.kt)("p",null,"How strong the helicopter will flip to upright."),(0,o.kt)("h4",{id:"max-level-rate"},"Max level rate"),(0,o.kt)("p",null,"Used to control how fast the helicopter levels. Set this to a value that is achievable by your helicopter. Larger slower helicopters may need this reduced "),(0,o.kt)("h4",{id:"max-acceleration"},"Max acceleration"),(0,o.kt)("p",null,"Limit how fast the controller tries to accelerate the helicopter to level or flip. Larger slower helicopters may need this reduced "),(0,o.kt)("h2",{id:"6g-flight-modes"},"6G flight modes"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"There are 3 types of self leveling stabilisation modes available in Rototflight. 6G modes (unlike the normal Acro) will auto level when the transmitter sticks are released. These modes make the heli fly more like a drone.  "),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Angle  "),(0,o.kt)("li",{parentName:"ul"},"Horizon  "),(0,o.kt)("li",{parentName:"ul"},"Acro Trainer  "))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Modes",src:i(3400).Z,width:"768",height:"468"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Horizon")," - Horizon mode provides attitude stabilisation which will level the helicopter when the transmitter sticks are let go. Constant stick input is required to keep the helicopter moving.  ")),(0,o.kt)("h4",{id:"horizon-mode-leveling-gain"},"Horizon Mode leveling gain"),(0,o.kt)("p",null,"Gain to define how aggressively the helicopter levels while in Horizon mode."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Angle")," - Angle mode provides similar functionality to Horizon mode with the addition of limiting the helicopter attitude to the angle specified.  ")),(0,o.kt)("h4",{id:"angle-mode-leveling-gain"},"Angle Mode leveling gain"),(0,o.kt)("p",null,"Gain to define how aggressively the helicopter levels while at the Angle limit."),(0,o.kt)("h4",{id:"angle-mode-maximum-angle"},"Angle Mode maximum angle"),(0,o.kt)("p",null,"Limit the helicopter to a maximum of this angle while in Angle mode."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Acro Trainer")," - Acro trainer mode does not provide self leveling of the helicopter. It does however limit the angle the helicopter can reach. ")),(0,o.kt)("h4",{id:"acro-trainer-gain"},"Acro Trainer gain"),(0,o.kt)("p",null,"Gain to define how aggressively the helicopter corrects while at the level limit."),(0,o.kt)("h4",{id:"acro-trainer-level-limit"},"Acro Trainer level limit"),(0,o.kt)("p",null,"Limit the helicopter to a maximum of this angle while in Acro trainer mode."))}d.isMDXComponent=!0},3209:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/modes_1-d4abe821c1c83f589c7e08e25b10c3bc.png"},6484:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/modes_2-e9dea23620ce84ee62880de68980d2ec.png"},6787:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/modes_3-c232a9eaba3d089362b47821a30c5ff5.png"},3400:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/modes_4-1ad293ed5153fe0daa3a1afba09299a7.png"},8455:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/status_1-088f65751d09fac7a093b218e9a0292a.png"}}]);