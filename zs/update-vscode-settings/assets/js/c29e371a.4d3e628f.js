"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||h[m]||s;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const s={description:"Batch multiple JSON-RPC requests using MetaMask SDK.",sidebar_position:9},i="Batch JSON-RPC requests",o={unversionedId:"how-to/batch-json-rpc-requests",id:"how-to/batch-json-rpc-requests",title:"Batch JSON-RPC requests",description:"Batch multiple JSON-RPC requests using MetaMask SDK.",source:"@site/wallet/how-to/batch-json-rpc-requests.md",sourceDirName:"how-to",slug:"/how-to/batch-json-rpc-requests",permalink:"/zs/update-vscode-settings/wallet/how-to/batch-json-rpc-requests",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/batch-json-rpc-requests.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{description:"Batch multiple JSON-RPC requests using MetaMask SDK.",sidebar_position:9},sidebar:"walletSidebar",previous:{title:"Access a user's MetaMask provider",permalink:"/zs/update-vscode-settings/wallet/how-to/access-provider"},next:{title:"Interact with smart contracts",permalink:"/zs/update-vscode-settings/wallet/how-to/interact-with-smart-contracts/"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Use the metamask_batch method",id:"use-the-metamask_batch-method",level:2},{value:"React / Next.js / React Native example",id:"react--nextjs--react-native-example",level:3},{value:"Vue.js example",id:"vuejs-example",level:3},{value:"Best practices",id:"best-practices",level:3}],p={toc:l},u="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"batch-json-rpc-requests"},"Batch JSON-RPC requests"),(0,r.kt)("p",null,"You can batch multiple JSON-RPC requests using ",(0,r.kt)("a",{parentName:"p",href:"/zs/update-vscode-settings/wallet/concepts/sdk/"},"MetaMask SDK"),"."),(0,r.kt)("p",null,"The SDK's ",(0,r.kt)("inlineCode",{parentName:"p"},"metamask_batch")," method enables you to batch multiple JSON-RPC requests in a single call,\nproviding a streamlined approach for dapps to interact with EVM networks, and enabling complex\nsequences of actions.\nThis method enhances performance, usability, and efficiency by reducing the number of network calls\nmade to MetaMask."),(0,r.kt)("p",null,"Use cases include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Batching multiple signatures")," - Send multiple signing requests in one batch.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Switching networks")," - Switch the EVM network, perform an action such as sending a transaction,\nand switch back, all in one batch.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mixed transactions and signatures")," - Combine transaction sending and signing requests in one batch."))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"metamask_batch")," opens up additional possibilities for sophisticated transaction flows in dapps,\nenhancing the user experience and operational efficiency."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zs/update-vscode-settings/wallet/how-to/use-sdk/javascript/"},"Set up MetaMask SDK")," in your JavaScript dapp."),(0,r.kt)("h2",{id:"use-the-metamask_batch-method"},"Use the metamask_batch method"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"metamask_batch")," takes an array of JSON-RPC requests (",(0,r.kt)("inlineCode",{parentName:"p"},"ChainRPC[]"),") as its parameter."),(0,r.kt)("p",null,"Each request in the batch is independent.\nThe user receives a prompt for each action within the batch, allowing them to approve or reject\nindividual requests.\nIf any request is rejected, the entire batch fails and an error is returned, ensuring integrity in\ntransactional operations."),(0,r.kt)("p",null,"The method returns an array of results corresponding to each request."),(0,r.kt)("h3",{id:"react--nextjs--react-native-example"},"React / Next.js / React Native example"),(0,r.kt)("p",null,"The following is an example of using ",(0,r.kt)("inlineCode",{parentName:"p"},"metamask_batch")," to batch\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/personal_sign"},(0,r.kt)("inlineCode",{parentName:"a"},"personal_sign"))," and\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_sendtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction"))," in React, Next.js, or React Native/Expo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { metamask_batch } from "metamask-sdk";\n\nfunction MyComponent() {\n  const handleBatchRequest = async () => {\n    const batchRequests = [\n      { method: "personal_sign", params: ["message", "address"] },\n      {\n        method: "eth_sendTransaction",\n        params: [\n          {\n            /* transaction parameters */\n          },\n        ],\n      },\n    ];\n\n    try {\n      const results = await metamask_batch(batchRequests);\n      console.log(results); // Process results\n    } catch (error) {\n      console.error("Batch request failed", error);\n    }\n  };\n\n  return <button onClick={handleBatchRequest}>Send Batch Request</button>;\n}\n')),(0,r.kt)("h3",{id:"vuejs-example"},"Vue.js example"),(0,r.kt)("p",null,"The following is an example of using ",(0,r.kt)("inlineCode",{parentName:"p"},"metamask_batch")," to batch\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/personal_sign"},(0,r.kt)("inlineCode",{parentName:"a"},"personal_sign"))," and\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_sendtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction"))," in Vue.js:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'<script>\nimport { metamask_batch } from "metamask-sdk";\n\nexport default {\n  methods: {\n    async sendBatchRequest() {\n      const batchRequests = [\n        { method: "personal_sign", params: ["message", "address"] },\n        {\n          method: "eth_sendTransaction",\n          params: [\n            {\n              /* transaction parameters */\n            },\n          ],\n        },\n      ];\n\n      try {\n        const results = await metamask_batch(batchRequests);\n        console.log(results);\n      } catch (error) {\n        console.error("Error in batch request", error);\n      }\n    }\n  }\n}\n<\/script>\n')),(0,r.kt)("h3",{id:"best-practices"},"Best practices"),(0,r.kt)("p",null,"Follow these guidelines when using ",(0,r.kt)("inlineCode",{parentName:"p"},"metamask_batch"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Ensure each request in the batch is properly formatted")," according to the JSON-RPC specifications.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Handle errors gracefully"),", especially when a batch request is partially approved.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Test batch operations thoroughly")," to ensure consistent behavior across different networks and accounts.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Be aware of the dependencies between chained requests."),"\nAvoid creating a dependency where the outcome of one request directly influences the context or\nvalidity of a subsequent request within the same batch.\nFor example, avoid chaining a ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_switchethereumchain"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_switchEthereumChain")),"\nrequest with ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_signtypeddata_v4"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_signTypedData_v4")),", because\n",(0,r.kt)("inlineCode",{parentName:"p"},"eth_signTypedData_v4")," relies on the current chain ID, which would be altered by ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet_switchEthereumChain"),".\nThis approach ensures that each request in the batch operates independently and maintains its\nintegrity, regardless of changes introduced by preceding requests in the batch."))))}h.isMDXComponent=!0}}]);