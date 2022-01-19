"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8517],{58215:(t,e,a)=>{a.d(e,{Z:()=>r});var n=a(67294);const r=function(t){var e=t.children,a=t.hidden,r=t.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},e)}},82895:(t,e,a)=>{a.d(e,{Z:()=>s});var n=a(87462),r=a(67294),l=a(72389),i=a(79443);const o=function(){var t=(0,r.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t};var u=a(15779),c=a(86010);const d="tabItem_vU9c";function p(t){var e,a,l,i=t.lazy,p=t.block,s=t.defaultValue,m=t.values,k=t.groupId,g=t.className,h=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=m?m:h.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),f=(0,u.lx)(N,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===s?s:null!=(e=null!=s?s:null==(a=h.find((function(t){return t.props.default})))?void 0:a.props.value)?e:null==(l=h[0])?void 0:l.props.value;if(null!==b&&!N.some((function(t){return t.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+N.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=o(),y=v.tabGroupChoices,C=v.setTabGroupChoices,D=(0,r.useState)(b),A=D[0],P=D[1],T=[],w=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var x=y[k];null!=x&&x!==A&&N.some((function(t){return t.value===x}))&&P(x)}var B=function(t){var e=t.currentTarget,a=T.indexOf(e),n=N[a].value;n!==A&&(w(e),P(n),null!=k&&C(k,n))},S=function(t){var e,a=null;switch(t.key){case"ArrowRight":var n=T.indexOf(t.currentTarget)+1;a=T[n]||T[0];break;case"ArrowLeft":var r=T.indexOf(t.currentTarget)-1;a=T[r]||T[T.length-1]}null==(e=a)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":p},g)},N.map((function(t){var e=t.value,a=t.label,l=t.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:A===e?0:-1,"aria-selected":A===e,key:e,ref:function(t){return T.push(t)},onKeyDown:S,onFocus:B,onClick:B},l,{className:(0,c.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":A===e})}),null!=a?a:e)}))),i?(0,r.cloneElement)(h.filter((function(t){return t.props.value===A}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==A})}))))}function s(t){var e=(0,l.Z)();return r.createElement(p,(0,n.Z)({key:String(e)},t))}},94174:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>u,contentTitle:()=>c,metadata:()=>d,toc:()=>p,default:()=>m});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(30973),o=(a(34738),a(82895),a(58215),["components"]),u={id:"pricingcard",title:"PricingCard",slug:"/pricingcard"},c=void 0,d={unversionedId:"main/pricingcard",id:"main/pricingcard",title:"PricingCard",description:"Pricing is a convenience component used to display features and pricing tables in a beautiful and engaging way.",source:"@site/docs/main/PricingCard.mdx",sourceDirName:"main",slug:"/pricingcard",permalink:"/docs/next/pricingcard",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/PricingCard.mdx",tags:[],version:"current",frontMatter:{id:"pricingcard",title:"PricingCard",slug:"/pricingcard"},sidebar:"docs",previous:{title:"Overlay",permalink:"/docs/next/overlay"},next:{title:"Rating",permalink:"/docs/next/rating"}},p=[{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[{value:"PricingCard",id:"pricingcard",children:[],level:3}],level:2},{value:"Reference",id:"reference",children:[{value:"PricingCard",id:"pricingcard-1",children:[{value:"button",id:"button",children:[],level:4},{value:"color",id:"color",children:[],level:4},{value:"containerStyle",id:"containerstyle",children:[],level:4},{value:"info",id:"info",children:[],level:4},{value:"infoStyle",id:"infostyle",children:[],level:4},{value:"onButtonPress",id:"onbuttonpress",children:[],level:4},{value:"price",id:"price",children:[],level:4},{value:"pricingStyle",id:"pricingstyle",children:[],level:4},{value:"title",id:"title",children:[],level:4},{value:"titleStyle",id:"titlestyle",children:[],level:4},{value:"wrapperStyle",id:"wrapperstyle",children:[],level:4}],level:3}],level:2}],s={toc:p};function m(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Pricing is a convenience component used to display features and pricing tables in a beautiful and engaging way."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(i.default,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("h3",{id:"pricingcard"},"PricingCard"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#button"},"button")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#color"},"color")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#containerstyle"},"containerStyle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#info"},"info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#infostyle"},"infoStyle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onbuttonpress"},"onButtonPress")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#price"},"price")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#pricingstyle"},"pricingStyle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#title"},"title")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#titlestyle"},"titleStyle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#wrapperstyle"},"wrapperStyle"))),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"pricingcard-1"},"PricingCard"),(0,l.kt)("h4",{id:"button"},"button"),(0,l.kt)("p",null,"Button information."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ButtonProps or ButtonInformation"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"color"},"color"),(0,l.kt)("p",null,"Color scheme for button & title."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Color(Primary)")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"containerstyle"},"containerStyle"),(0,l.kt)("p",null,"Outer component styling."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"info"},"info"),(0,l.kt)("p",null,"Pricing information."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string[]"),(0,l.kt)("td",{parentName:"tr",align:null},"[]")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"infostyle"},"infoStyle"),(0,l.kt)("p",null,"Specify pricing information style."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"onbuttonpress"},"onButtonPress"),(0,l.kt)("p",null,"Function to be run when button is pressed."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"price"},"price"),(0,l.kt)("p",null,"Price mentioned in the pricing card."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string or number"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"pricingstyle"},"pricingStyle"),(0,l.kt)("p",null,"Specify pricing text style."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"title"},"title"),(0,l.kt)("p",null,"Add title in the pricing card."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"titlestyle"},"titleStyle"),(0,l.kt)("p",null,"Specify title text style."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"wrapperstyle"},"wrapperStyle"),(0,l.kt)("p",null,"Inner wrapper component styling."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null))}m.isMDXComponent=!0},30973:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>u,contentTitle:()=>c,metadata:()=>d,toc:()=>p,default:()=>m});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(94632),o=["components"],u={},c=void 0,d={unversionedId:"main/usage/PricingCard/PricingCard",id:"main/usage/PricingCard/PricingCard",title:"PricingCard",description:"",source:"@site/docs/main/usage/PricingCard/PricingCard.mdx",sourceDirName:"main/usage/PricingCard",slug:"/main/usage/PricingCard/",permalink:"/docs/next/main/usage/PricingCard/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/PricingCard/PricingCard.mdx",tags:[],version:"current",frontMatter:{}},p=[],s={toc:p};function m(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(i.default,{mdxType:"Snack"}))}m.isMDXComponent=!0},94632:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>o,contentTitle:()=>u,metadata:()=>c,toc:()=>d,default:()=>s});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={},u=void 0,c={unversionedId:"main/usage/PricingCard/snack/index",id:"main/usage/PricingCard/snack/index",title:"index",description:"",source:"@site/docs/main/usage/PricingCard/snack/index.md",sourceDirName:"main/usage/PricingCard/snack",slug:"/main/usage/PricingCard/snack/",permalink:"/docs/next/main/usage/PricingCard/snack/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/PricingCard/snack/index.md",tags:[],version:"current",frontMatter:{}},d=[],p={toc:d};function s(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE Pricing","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20ScrollView%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20PricingCard%2C%20colors%20%7D%20from%20'react-native-elements'%3B%0A%0Atype%20PricingCardComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Pricing%3A%20React.FunctionComponent%3CPricingCardComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%20%20%3CPricingCard%0A%20%20%20%20%20%20%20%20%20%20color%3D%7Bcolors.primary%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Free%22%0A%20%20%20%20%20%20%20%20%20%20price%3D%22%240%22%0A%20%20%20%20%20%20%20%20%20%20info%3D%7B%5B'1%20User'%2C%20'Basic%20Support'%2C%20'All%20Core%20Features'%5D%7D%0A%20%20%20%20%20%20%20%20%20%20button%3D%7B%7B%20title%3A%20'%20GET%20STARTED'%2C%20icon%3A%20'flight-takeoff'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPricingCard%0A%20%20%20%20%20%20%20%20%20%20color%3D%7Bcolors.secondary%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Starter%22%0A%20%20%20%20%20%20%20%20%20%20price%3D%22%2419%22%0A%20%20%20%20%20%20%20%20%20%20info%3D%7B%5B'10%20Users'%2C%20'Basic%20Support'%2C%20'All%20Core%20Features'%5D%7D%0A%20%20%20%20%20%20%20%20%20%20button%3D%7B%7B%20title%3A%20'%20GET%20STARTED'%2C%20icon%3A%20'flight-takeoff'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPricingCard%0A%20%20%20%20%20%20%20%20%20%20color%3D%7Bcolors.secondary2%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Enterprise%22%0A%20%20%20%20%20%20%20%20%20%20price%3D%22%2449%22%0A%20%20%20%20%20%20%20%20%20%20info%3D%7B%5B'100%20Users'%2C%20'One%20on%20One%20Support'%2C%20'All%20Core%20Features'%5D%7D%0A%20%20%20%20%20%20%20%20%20%20button%3D%7B%7B%20title%3A%20'%20GET%20STARTED'%2C%20icon%3A%20'flight-takeoff'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20Pricing%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}s.isMDXComponent=!0}}]);