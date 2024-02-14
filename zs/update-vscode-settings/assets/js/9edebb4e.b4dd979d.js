"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7440],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93018:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={description:"Learn about wallet interoperability.",sidebar_position:6},o="Wallet interoperability",l={unversionedId:"concepts/wallet-interoperabilty",id:"concepts/wallet-interoperabilty",title:"Wallet interoperability",description:"Learn about wallet interoperability.",source:"@site/wallet/concepts/wallet-interoperabilty.md",sourceDirName:"concepts",slug:"/concepts/wallet-interoperabilty",permalink:"/zs/update-vscode-settings/wallet/concepts/wallet-interoperabilty",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/wallet-interoperabilty.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"Learn about wallet interoperability.",sidebar_position:6},sidebar:"walletSidebar",previous:{title:"Signing methods",permalink:"/zs/update-vscode-settings/wallet/concepts/signing-methods"},next:{title:"Tutorials",permalink:"/zs/update-vscode-settings/wallet/tutorials"}},s={},p=[{value:"Third-party library support",id:"third-party-library-support",level:2},{value:"MetaMask SDK",id:"metamask-sdk",level:3},{value:"MIPD Store",id:"mipd-store",level:3},{value:"Wallet support",id:"wallet-support",level:2},{value:"Backwards compatibility",id:"backwards-compatibility",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"wallet-interoperability"},"Wallet interoperability"),(0,n.kt)("p",null,"A web dapp can integrate with multiple wallets simultaneously by adding support for\n",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963"),", which introduces an alternative discovery\nmechanism to the ",(0,n.kt)("a",{parentName:"p",href:"/zs/update-vscode-settings/wallet/concepts/wallet-api#ethereum-provider-api"},(0,n.kt)("inlineCode",{parentName:"a"},"window.ethereum"))," injected provider.\nThis discovery is enabled by using the standardized events and interfaces defined by EIP-6963."),(0,n.kt)("p",null,"The following is a visual demo of the user experience, showing the data provided from each installed wallet:"),(0,n.kt)("p",{align:"center"},(0,n.kt)("video",{width:"100%",controls:!0},(0,n.kt)("source",{src:"/eip-6963.mp4"}))),(0,n.kt)("p",null,"Learn ",(0,n.kt)("a",{parentName:"p",href:"/zs/update-vscode-settings/wallet/how-to/detect-wallet/metamask#detect-multiple-wallets"},"how to detect multiple wallets"),"\nand see the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/vite-react-ts-eip-6963/tree/main"},"EIP-6963 Vite React + TypeScript demo"),"\nfor more information."),(0,n.kt)("h2",{id:"third-party-library-support"},"Third-party library support"),(0,n.kt)("p",null,"The following third-party libraries support EIP-6963:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/zs/update-vscode-settings/wallet/how-to/use-sdk/javascript/"},"MetaMask SDK")),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"MetaMask SDK does not support connecting to non-MetaMask wallets via EIP-6963.\nIf you intend to support discovery of other wallets, we recommend using other methods of adding\nEIP-6963 support such as Wagmi 2+."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://wagmi.sh"},"Wagmi 2+"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.walletconnect.com/web3modal/about"},"Web3Modal 3+"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/wevm/mipd"},"MIPD Store")))),(0,n.kt)("h3",{id:"metamask-sdk"},"MetaMask SDK"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/zs/update-vscode-settings/wallet/how-to/use-sdk/javascript/"},"MetaMask JavaScript SDK")," automatically checks\nfor the presence of the MetaMask extension via EIP-6963.\nThis eliminates the need for manual configuration or detection methods, simplifying the initial\nsetup process for both developers and users."),(0,n.kt)("p",null,"By adhering to the standards set by EIP-6963, the SDK unambiguously identifies and connects to\nMetaMask, resolving potential conflicts that might arise with other wallet extensions, ensuring a\nmore stable and reliable interaction for users."),(0,n.kt)("p",null,"The SDK is also being integrated into ",(0,n.kt)("a",{parentName:"p",href:"https://wagmi.sh/"},"Wagmi 2+"),", which supports EIP-6963.\nThe SDK on its own supports connecting ",(0,n.kt)("em",{parentName:"p"},"only")," to MetaMask via EIP-6963, so if you intend to support\ndiscovery of other wallets, we recommend using other methods of adding EIP-6963 support, such as\nWagmi 2+."),(0,n.kt)("h3",{id:"mipd-store"},"MIPD Store"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wevm/mipd"},"MIPD Store")," stores the wallet providers and enables you to\nsubscribe to the store and retrieve the providers.\nUnlike Wagmi and Web3-Onboard, which are libraries that provide components and connectors for\nmultiple wallets and depend on MetaMask SDK for integration, the MIPD Store is a utility library\nthat makes it easier to work with EIP-6963 and supports TypeScript types."),(0,n.kt)("h2",{id:"wallet-support"},"Wallet support"),(0,n.kt)("p",null,"The EIP-6963 alternative discovery mechanism works for wallets that have implemented support for EIP-6963.\nThis includes MetaMask, Coinbase, Trust Wallet, OKX, and other major wallets.\nSee the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WalletConnect/EIP6963/blob/master/src/utils/constants.ts"},"list of wallets that support EIP-6963"),"."),(0,n.kt)("h2",{id:"backwards-compatibility"},"Backwards compatibility"),(0,n.kt)("p",null,"Dapps that do not support EIP-6963 can still\n",(0,n.kt)("a",{parentName:"p",href:"/zs/update-vscode-settings/wallet/how-to/detect-wallet/metamask"},"detect MetaMask using the ",(0,n.kt)("inlineCode",{parentName:"a"},"window.ethereum")," provider"),".\nHowever, we recommend adding support to improve the user experience for multiple installed wallets.\nRead more about ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963#backwards-compatibility"},"EIP-6963 backwards compatibility"),"."))}u.isMDXComponent=!0}}]);