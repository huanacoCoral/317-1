"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4749],{38914:function(e,t,n){n.d(t,{D:function(){return u}});var l=n(97458),r=n(52983);let s=(e,t,n)=>{(0,r.useEffect)(()=>{let l=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&t()})},n),r=e.current;return r&&l.observe(r),()=>{r&&l.unobserve(r)}},[e,t,n])};var o=n(88983),a=n(3514),i=n(77837),c=n.n(i);let u=e=>{let{children:t,fetchNextPage:n,hasNextPage:i,showLoadingState:u,itemsToRender:d}=e,h=(0,r.useRef)(n);h.current=n;let m=(0,r.useRef)(c()(()=>h.current(),300)),f=(0,r.useRef)(null);return s(f,m.current,{rootMargin:"50px",threshold:0}),(0,l.jsxs)(l.Fragment,{children:[t,u&&(0==d.length?(0,l.jsx)(o.ZP,{className:"py-sm",children:(0,l.jsx)(a.Z,{animateLines:!1,blockCount:12,divider:!0})}):(0,l.jsx)(o.ZP,{className:"py-md",children:(0,l.jsx)(a.Z,{animateLines:!1,blockCount:1})})),d.length>0&&i&&(0,l.jsx)("div",{ref:f,className:"border border-transparent"})]})}},46975:function(e,t,n){n.d(t,{W:function(){return i}});var l=n(97458),r=n(35649),s=n(52983),o=n(6071),a=n(23298);let i=s.memo(e=>(0,l.jsxs)("div",{className:"flex items-center  gap-x-xs",children:[(0,l.jsx)(o.Z,{variant:"tiny",color:"light",children:(0,l.jsx)(r.G,{size:"sm",icon:e.icon})}),(0,l.jsx)(o.Z,{variant:"tiny",color:"light",children:(0,a.uf)(e.count)})]}),(e,t)=>e.count===t.count&&e.icon===t.icon)},10055:function(e,t,n){var l=n(97458),r=n(52983),s=n(71485),o=n(64088),a=n(10785),i=n(80937),c=n(4028),u=n(33326),d=n(61904),h=n(32100),m=n(97905),f=n(7717),x=n(79738),v=n(71166);t.Z=e=>{let{show:t,onDelete:n,onAddToCollection:g,onSwapCollection:p,onRemoveFromCollection:y,currentCollection:j,rwToken:N,type:I}=e,{isMobileStyle:w}=(0,h.d)(),A=I===o.W.LIBRARY&&null==j&&null!=g,C=null!=j&&null!=p&&null!=N,D=null!=y&&null!=j&&((0,m.mF)(j.user_permission)||null!=N),T=null!=n&&null!=N,[k,b]=(0,r.useState)(!1),E=(0,s.useTranslations)("threadItem"),Z=(0,s.useTranslations)("shared");if(!t||!A&&!C&&!D&&!T)return null;let _=[{icon:i.r8,text:Z("addToCollection"),show:A,onClick:g,testId:"thread-add-to-collection"},{icon:c.a_,text:Z("swapCollections"),show:C,onClick:p,testId:"thread-swap-collection"},{icon:d.faXmark,text:Z("removeFromCollection"),show:D,onClick:y,testId:"thread-remove-from-collection"},{icon:u.$,text:E("deleteThread"),show:T,onClick:()=>b(!0),testId:"thread-delete"}];return(0,l.jsxs)("div",{className:"-mr-xs",children:[(0,l.jsx)(f.G,{items:_,isMobileStyle:w,children:(0,l.jsx)(x.Z,{testId:"thread-dropdown-menu",size:"small",icon:a.faEllipsis})}),(0,l.jsx)(v.Z,{isOpen:k,onClose:()=>b(!1),message:E("deleteThreadConfirmation"),actionList:[{text:Z("nevermind"),onClick:()=>b(!1)},{text:Z("confirm"),variant:"rejected",onClick:n}]})]})}},64088:function(e,t,n){n.d(t,{W:function(){return r},B:function(){return U}});var l,r,s=n(97458),o=n(52983),a=n(71485),i=n(65531),c=n.n(i),u=n(62361),d=n(80425),h=n(93314);let m=e=>{let{collections:t}=(0,h.l)();if(!e)return null;let n=null==t?void 0:t.find(t=>t.uuid===e);return null!=n?n:null};var f=n(22119),x=n(37852),v=n(68213),g=n(21026),p=n(75313),y=n(32647),j=n(10055),N=n(90691),I=n.n(N);let w=o.memo(e=>{let{type:t,featuredImage:n,title:l,href:o}=e;return n&&t===r.DISCOVER?(0,s.jsx)(c(),{href:o,children:(0,s.jsx)("div",{className:"relative h-24 w-24 flex-none overflow-hidden rounded-md",children:(0,s.jsx)(I(),{src:n,alt:l,sizes:"33vw",fill:!0,priority:!0,style:{objectFit:"cover"}})})}):null});var A=n(58076),C=n(46975),D=n(51253),T=n(49544),k=n(51746);let b=o.memo(e=>{var t,n;let{threadAccess:l,socialInfo:r}=e;if(!l||!r||l<k.uv.PUBLIC_READ)return null;let o=null!==(t=r.view_count)&&void 0!==t?t:0,a=null!==(n=r.fork_count)&&void 0!==n?n:0;return(0,s.jsxs)(s.Fragment,{children:[o>0&&(0,s.jsx)(C.W,{icon:T.Md,count:o}),a>0&&(0,s.jsx)(C.W,{icon:D.MD,count:a})]})});var E=n(34957),Z=n(21429);let _=o.memo(e=>{let{threadCount:t,threadAccess:n,lastUpdated:l,socialInfo:r,assistant:o}=e,i=(0,a.useTranslations)("shared");return(0,s.jsxs)("div",{className:"flex items-center gap-x-md",children:[!!t&&t>1&&(0,s.jsx)(C.W,{icon:E.Oq,count:t}),(0,s.jsx)(b,{socialInfo:r,threadAccess:n}),(0,s.jsx)(Z.Z,{timestamp:l,translations:{yearsAgo:i("yearsAgo"),monthsAgo:i("monthsAgo"),daysAgo:i("daysAgo"),hoursAgo:i("hoursAgo"),minutesAgo:i("minutesAgo")}}),(0,s.jsx)(A.Z,{textColor:"light",textVariant:"tiny",assistant:o})]})});var R=n(80937),Q=n(32100),O=n(88983),S=n(6071),L=n(79738);let M=e=>{let{title:t,preview:n,threadCount:l,lastUpdated:i,href:N="/",rwToken:I,assistant:A,socialInfo:C,showActionMenu:D=!0,authorImage:T,threadAccess:k,type:b,featuredImage:E,entryUUID:Z,collection:M}=e,P=m(null==M?void 0:M.uuid),{openModal:W}=(0,v.X)(),{collections:U}=(0,h.l)(),{searchTerm:X}=(0,g.p)(),{deleteThread:F}=(0,f.l)(),{removeThreadFromCollection:z}=(0,d.Fb)(),V=(0,u.useRouter)(),{isMobileStyle:q}=(0,Q.d)(),{trackEvent:B}=(0,x.WS)(),G=(0,a.useTranslations)("shared"),K=(0,o.useCallback)(e=>{let{entryUUID:t}=e;0===U.length?W("collectionCreateOrEdit",{existingCollection:P,frontendContextUUID:void 0,searchTerm:X}):W("collectionSelectModal",{entryUUID:t,userCollections:U,currentCollection:P,searchTerm:X})},[P,U,W,X]),J=(0,o.useCallback)(async e=>{F({entryUUID:e,collectionSlug:null==P?void 0:P.slug}),B("delete thread from history click",{entryUUID:e})},[null==P?void 0:P.slug,F,B]);return(0,s.jsxs)(O.ZP,{className:"flex items-center gap-x-md py-md md:px-0",children:[(0,s.jsx)(w,{featuredImage:E,type:b,title:t,href:N}),(0,s.jsxs)("div",{className:"w-full grow",children:[(0,s.jsx)(c(),{href:N,className:"group block",children:(0,s.jsxs)(O.ZP,{className:"",children:[(0,s.jsxs)("div",{className:"flex items-center gap-x-md",children:[(0,s.jsx)(S.Z,{className:"grow",variant:"baseSemi",children:(0,s.jsx)("div",{"data-testid":"thread-title",className:"break-all transition duration-300 line-clamp-1 md:group-hover:text-super md:dark:group-hover:text-superDark",children:t})}),null!=T&&(0,s.jsx)(y.Z,{size:"small",user:T})]}),(0,s.jsx)(S.Z,{color:"light",className:"break-word text-balance mt-two line-clamp-2",children:n})]})}),(0,s.jsx)("div",{className:D?"mt-xs":"mt-sm",children:(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)(_,{threadCount:l,threadAccess:k,lastUpdated:i,socialInfo:C,assistant:A}),(0,s.jsxs)("div",{className:"flex items-center gap-x-xs",children:[(null==M?void 0:M.title)&&b===r.LIBRARY&&(0,s.jsx)(c(),{href:"/collections/".concat(null==M?void 0:M.slug),className:"block",children:(0,s.jsx)(O.ZP,{className:"rounded-full border px-xs",children:(0,s.jsxs)(S.Z,{variant:"tiny",className:"flex cursor-pointer select-none items-center gap-x-xs px-sm py-xs transition duration-300 hover:opacity-70",testId:"thread-collection-pill",children:[(0,s.jsx)(p.B,{unified:M.emoji,size:"tiny"}),(0,s.jsx)("div",{className:"line-clamp-1",children:M.title})]})})}),D&&!(null==M?void 0:M.title)&&(0,s.jsx)(L.Z,{testId:"add-to-collection",toolTip:G("addToCollection"),onClick:()=>K({entryUUID:Z}),icon:R.r8,size:"small"}),(0,s.jsx)(j.Z,{show:D,onDelete:()=>J(Z),onAddToCollection:()=>K({entryUUID:Z}),onSwapCollection:()=>K({entryUUID:Z}),onRemoveFromCollection:()=>z({entryUUID:Z,oldCollectionUUID:P.uuid,callback:()=>{b===r.COLLECTION&&V.push("/library")}}),currentCollection:P,rwToken:I,type:b})]})]})})]})]})};var P=n(64808),W=n(38914);(l=r||(r={})).LIBRARY="library",l.COLLECTION="collection",l.DISCOVER="discover";let U=e=>{let{threads:t,fetchNextPage:n,hasNextPage:l=!1,showLoadingState:r=!1,showEmptyState:o=!1,type:i}=e,c=(null!=t?t:[]).map(P.gN),u=(0,a.useTranslations)("threads.main");return o&&0===c.length?(0,s.jsx)(O.ZP,{variant:"offset",className:"mt-md flex items-center justify-center rounded p-xl",children:"collection"===i?(0,s.jsx)(S.Z,{color:"light",children:u("threadsPlaceholder")}):(0,s.jsx)(S.Z,{color:"light",children:u("noThreads")})}):(0,s.jsx)(W.D,{fetchNextPage:n,hasNextPage:l,showLoadingState:r,itemsToRender:c,children:(0,s.jsx)(O.ZP,{className:"divide-y",children:c.map(e=>{var t;return(0,s.jsx)(M,{href:e.href,rwToken:e.rwToken,title:e.title,preview:e.preview,threadCount:e.threadCount,lastUpdated:e.lastUpdated,copilot:e.copilot,assistant:e.assistant,socialInfo:e.socialInfo,threadAccess:e.threadAccess,authorImage:e.authorImage,featuredImage:null!==(t=e.featuredImage)&&void 0!==t?t:null,showActionMenu:"discover"!==i,type:i,entryUUID:e.entryUUID,collection:e.collection},e.entryUUID)})})})}},58076:function(e,t,n){var l=n(97458),r=n(35649);n(52983);var s=n(47056),o=n(88983),a=n(6071);t.Z=e=>{let{textVariant:t="baseSemi",textColor:n="default",assistant:i}=e,{AssistantConfigs:c,Assistant:u}=(0,s.I)();return i&&i!=u.internet&&null!=c[i]?(0,l.jsx)(o.ZP,{children:(0,l.jsxs)(a.Z,{variant:t,color:n,className:"flex items-center gap-x-xs",children:[(0,l.jsx)(r.G,{size:"1x",icon:c[i].icon}),(0,l.jsx)("div",{children:c[i].text})]})}):null}},32647:function(e,t,n){var l=n(97458),r=n(35649),s=n(52983),o=n(36353),a=n(9269),i=n(42970),c=n(88983),u=n(6071),d=n(19494),h=n(51865),m=n.n(h);t.Z=e=>{let{size:t="medium",user:n,showEdit:h,onChange:f,anon:x,altText:v,defaultIcon:g=a.IL}=e,p="xs";"medium"===t?p="1x":"large"===t&&(p="2x");let y=(0,s.useCallback)(()=>{let e=document.createElement("input");e.type="file",e.accept="image/*",e.onchange=e=>{var t;let n=null===(t=e.target.files)||void 0===t?void 0:t[0];if(n){let e=new FileReader;e.onload=e=>{var t;f&&f(null===(t=e.target)||void 0===t?void 0:t.result)},e.readAsDataURL(n)}},e.click()},[f]);return(0,l.jsx)("div",{className:"relative",children:(0,l.jsxs)(c.ZP,{variant:"offsetPlus",className:m()("flex aspect-square items-center justify-center overflow-hidden rounded-full ",{"w-5":"small"===t,"w-8":"medium"===t,"w-[80px]":"large"===t}),children:[n&&!x?(0,l.jsx)("img",{alt:null!=v?v:"User avatar",className:"h-full w-full object-cover",src:n}):(0,l.jsx)(u.Z,{color:"light",children:(0,l.jsx)(r.G,{size:p,icon:x?i.BC:g})}),h&&"small"!==t&&(0,l.jsx)("div",{className:"absolute bottom-0 right-0",children:(0,l.jsx)(d.Z,{size:"small",pill:!0,icon:o.Y,onClick:y})})]})})}},93314:function(e,t,n){n.d(t,{l:function(){return o}});var l=n(83427),r=n(4544),s=n(80425);let o=()=>{var e;let t=(0,r.nO)(),n=async e=>{let{pageParam:n}=e;(!n||n<1)&&(n=1);let l=(n-1)*20;return await t.emitWithAck("list_user_collections",{limit:20,offset:l})},{data:o}=(0,l.N)({enabled:!!t,queryKey:s.Xt,queryFn:e=>{let{pageParam:t=1}=e;return n({pageParam:t})},getNextPageParam:(e,t)=>{var n;return e&&(null===(n=e[0])||void 0===n?void 0:n.has_next_page)?t.length+1:void 0}});return{collections:null!==(e=null==o?void 0:o.pages[o.pages.length-1])&&void 0!==e?e:[]}}},22119:function(e,t,n){n.d(t,{l:function(){return d}});var l=n(78931),r=n(82129),s=n(7939),o=n(4544),a=n(37423),i=n(21026),c=n(80425),u=n(28305);let d=()=>{let e=(0,l.NL)(),t=(0,o.nO)(),{searchTerm:n}=(0,i.p)(),{threadMetadata:d}=(0,a.a0)(),{clearSidebarRecentItems:h,removeItemFromSidebar:m}=(0,s.f)(),f=[u.Tb,{search_term:null!=n?n:""}],{mutate:x}=(0,r.D)({mutationFn:async()=>{if(!t)throw Error("No socket connection");await t.emitWithAck("delete_all_threads")},onMutate:async()=>{h(),await e.cancelQueries(f),await e.cancelQueries(c.Xt);let t=e.getQueryData(f),n=e.getQueryData(c.Xt);return e.setQueryData(c.Xt,e=>{let t=e.pages.map(e=>e.map(e=>({...e,thread_count:0})));return{...e,pages:t}}),e.setQueryData(f,e=>({...e,pages:[]})),{previousThreads:t,previousCollections:n}},onSettled:(t,n,l,r)=>{n?(e.setQueryData(f,r.previousThreads),e.setQueryData(c.Xt,r.previousCollections)):(e.invalidateQueries({queryKey:f}),e.invalidateQueries({queryKey:c.Xt}))}}),{mutate:v}=(0,r.D)({mutationFn:async e=>{let{entryUUID:n,callback:l}=e;if(!t)throw Error("No socket connection");null==l||l(),await t.emitWithAck("delete_thread_by_entry_uuid",n,{read_write_token:null==d?void 0:d.rwToken}),m(n)},onMutate:async t=>{let{entryUUID:n,collectionSlug:l}=t;await e.cancelQueries(f),await e.cancelQueries(c.Xt);let r=e.getQueryData(f),s=e.getQueryData(c.Xt);return e.setQueryData(f,e=>{let t=(e=e||{pages:[],pageParams:[]}).pages.map(e=>e.filter(e=>e.uuid!==n));return{...e,pages:t}}),l&&(e.setQueryData(c.Xt,e=>{let t=(e=e||{pages:[],pageParams:[]}).pages.map(e=>e.map(e=>e.slug===l?{...e,thread_count:e.thread_count-1}:e));return{...e,pages:t}}),e.setQueryData(["list_collection_threads",{collection_slug:l.slice(-22)}],e=>{let t=(e=e||{pages:[],pageParams:[]}).pages.map(e=>e.filter(e=>e.uuid!==n));return{...e,pages:t}})),{previousThreads:r,previousCollections:s}},onSettled:(t,n,l,r)=>{n?(e.setQueryData(f,r.previousThreads),e.setQueryData(c.Xt,r.previousCollections)):(e.invalidateQueries({queryKey:f}),e.invalidateQueries({queryKey:c.Xt}))}});return{deleteAllThreads:x,deleteThread:v}}},7939:function(e,t,n){n.d(t,{G:function(){return a},f:function(){return u}});var l=n(78931),r=n(13417),s=n(52983),o=n(9205);let a=8,i="recentItems",c=()=>{let e=localStorage.getItem(i);return e?JSON.parse(e):[]},u=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,o.f)(),n=(0,l.NL)(),u=(0,r.a)([i],c,{enabled:e}),d=(0,s.useCallback)(e=>{n.setQueryData([i],function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=[e,...t.filter(t=>t.id!==e.id)].slice(0,a);return localStorage.setItem(i,JSON.stringify(n)),n})},[n]),h=(0,s.useCallback)(e=>{n.setQueryData([i],function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!t)return;let l=n.filter(t=>t.id!==e&&!t.permalink.endsWith(e));return localStorage.setItem(i,JSON.stringify(l)),l})},[t,n]),m=(0,s.useCallback)(()=>{n.setQueryData([i],[]),localStorage.removeItem(i)},[n]);return{...u,addItemToSidebar:d,removeItemFromSidebar:h,clearSidebarRecentItems:m}}},71166:function(e,t,n){var l=n(97458);n(52983);var r=n(6071),s=n(84160);t.Z=e=>{let{message:t,...n}=e;return(0,l.jsx)(s.Z,{title:void 0,subtitle:void 0,...n,children:(0,l.jsx)(r.Z,{variant:"section-title",className:"pb-md text-center",children:t})})}},21429:function(e,t,n){var l=n(97458),r=n(95194),s=n(35649),o=n(51987);n(52983);var a=n(9205),i=n(97495),c=n(6071);t.Z=e=>{let{timestamp:t,isRecentHidden:n=!1,layoutType:u="right",textVariant:d="tiny",textColor:h="light",translations:m={yearsAgo:"years ago",monthsAgo:"months ago",daysAgo:"days ago",hoursAgo:"hours ago",minutesAgo:"minutes ago"}}=e,f=(0,a.f)();if(!t||!f)return null;let x=o.ou.fromISO("".concat(t,"Z")),v=(e=>{var t,l,r,s,a,i;let c=o.ou.local().diff(e,["years","months","days","hours","minutes","seconds"]).toObject(),u=null!==(t=c.years)&&void 0!==t?t:0,d=null!==(l=c.months)&&void 0!==l?l:0,h=null!==(r=c.days)&&void 0!==r?r:0,f=null!==(s=c.hours)&&void 0!==s?s:0,x=null!==(a=c.minutes)&&void 0!==a?a:0,{yearsAgo:v,monthsAgo:g,daysAgo:p,hoursAgo:y,minutesAgo:j}=m;return u>=1?"".concat(Math.round(u)," ").concat(v):d>=1?"".concat(Math.round(d)," ").concat(g):h>=1?"".concat(Math.round(h)," ").concat(p):f>=1?"".concat(Math.round(f)," ").concat(y):x>=1?"".concat(Math.round(x)," ").concat(j):n?null:"".concat(Math.round(null!==(i=c.seconds)&&void 0!==i?i:0),"s ago")})(x),g=x.toLocaleString(o.ou.DATETIME_FULL);return v?null!==v&&(0,l.jsx)(i.Z,{tooltipText:g,tooltipLayout:u,children:(0,l.jsxs)(c.Z,{variant:d,color:h,className:"flex gap-x-xs items-center cursor-default",children:[(0,l.jsx)("span",{children:(0,l.jsx)(s.G,{size:"sm",icon:r.SZw})}),v]})}):null}},97905:function(e,t,n){var l,r,s,o;n.d(t,{Om:function(){return d},Wi:function(){return f},XJ:function(){return l},Xc:function(){return r},gO:function(){return v},hT:function(){return m},hf:function(){return h},i5:function(){return c},mF:function(){return u},rj:function(){return x},rm:function(){return g},xL:function(){return i},yM:function(){return a}});let a=5;function i(){return[1,2,3,4]}function c(){return[11,12,13]}function u(e){return 4===e}function d(e){return e>=3&&e<11}function h(e){return e>=2&&e<11}function m(e){return e>=1&&e<11}function f(e){return 0===e}function x(e){return c().includes(e)}function v(e){let t=e.owner_user,n=e.contributor_users,l=[],r=[];return null==n||n.forEach(e=>{11===e.permission||12===e.permission||13===e.permission?l.push(e):r.push(e)}),{ownerUser:t,contributorUsers:r,invitedUsers:l}}(s=l||(l={}))[s.NONE=0]="NONE",s[s.READER=1]="READER",s[s.WRITER=2]="WRITER",s[s.ADMIN=3]="ADMIN",s[s.OWNER=4]="OWNER",s[s.INVITED_READER=11]="INVITED_READER",s[s.INVITED_WRITER=12]="INVITED_WRITER",s[s.INVITED_ADMIN=13]="INVITED_ADMIN",(o=r||(r={})).ThreadAccessNotAllowed="ThreadAccessNotAllowed",o.InvalidThread="InvalidThread",o.ArticleAccessNotAllowed="ArticleAccessNotAllowed",o.CollectionAccessNotAllowed="CollectionAccessNotAllowed",o.InvalidCollection="InvalidCollection";let g={ThreadAccessNotAllowed:"Cannot view this thread",InvalidThread:"This thread does not exist.",ArticleAccessNotAllowed:"Cannot view this article",CollectionAccessNotAllowed:"Cannot view this collection",InvalidCollection:"This collection does not exist."}}}]);