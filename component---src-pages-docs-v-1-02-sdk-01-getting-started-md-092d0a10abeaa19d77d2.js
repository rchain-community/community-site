(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{NchJ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return p}));a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP"),a("q1tI");var n=a("7ljp"),s=a("02lv");var o={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},c=i("Info"),r=i("Link"),b={_frontmatter:o},l=s.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,["components"]);return Object(n.b)(l,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c,{mdxType:"Info"},"Uniswap V1, while still fully functional, is no longer under active development. Looking for ",Object(n.b)(r,{style:{display:"contents"},to:"/docs/v2/",mdxType:"Link"},"V2 documentation"),"?"),Object(n.b)("p",null,"The ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/Uniswap/uniswap-sdk/tree/v1"}),"Uniswap SDK")," is meant to simplify every aspect of integrating Uniswap into your project. It’s written in ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://www.typescriptlang.org"}),"TypeScript"),", has a ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/Uniswap/uniswap-sdk/tree/v1/src/__tests__"}),"robust test suite"),", uses ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/MikeMcl/bignumber.js"}),"bignumber.js")," for math, and includes an optional data-fetching module which relies on ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/ethers-io/ethers.js/"}),"ethers.js"),"."),Object(n.b)("p",null,"The SDK was built to be extremely easy to use, but also feature-rich. It offers various levels of abstraction that make it suitable for use nearly anywhere, from hackathon projects to production applications."),Object(n.b)("h1",{id:"overview",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h1"},{href:"#overview","aria-label":"overview permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Overview"),Object(n.b)("p",null,"The SDK is divided into several modular components that perform tightly scoped tasks:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)(r,{to:"/docs/v1/SDK/data",mdxType:"Link"},"Data")," - Fetches Uniswap data from the blockchain"),Object(n.b)("li",{parentName:"ul"},Object(n.b)(r,{to:"/docs/v1/SDK/computation",mdxType:"Link"},"Computation")," - Computes market- and trade-specific statistics using blockchain data"),Object(n.b)("li",{parentName:"ul"},Object(n.b)(r,{to:"/docs/v1/SDK/format",mdxType:"Link"},"Format")," - Formats data for display"),Object(n.b)("li",{parentName:"ul"},Object(n.b)(r,{to:"/docs/v1/SDK/orchestration",mdxType:"Link"},"Orchestration")," - Offers named abstraction functions that seamlessly combine lower-level data- and computation-related functions"),Object(n.b)("li",{parentName:"ul"},Object(n.b)(r,{to:"/docs/v1/SDK/transact",mdxType:"Link"},"Transact")," - Prepares computed trades for execution against Uniswap smart contracts"),Object(n.b)("li",{parentName:"ul"},Object(n.b)(r,{to:"/docs/v1/SDK/constants",mdxType:"Link"},"Constants")," - Exports various helpful constants for use throughout the SDK")),Object(n.b)("p",null,"Additionally, it exports a number of custom types:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)(r,{to:"/docs/v1/SDK/types",mdxType:"Link"},"Types")," - Exports all types used by the SDK")),Object(n.b)("h1",{id:"installation",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h1"},{href:"#installation","aria-label":"installation permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Installation"),Object(n.b)("p",null,"To start using the SDK, simply install it into your project…"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"yarn add @uniswap/sdk\n")),Object(n.b)("p",null,"…import some functions…"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"import { ... } from '@uniswap/sdk'\n")),Object(n.b)("p",null,"…and dive into the rest of the documentation to learn more!"))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-v-1-02-sdk-01-getting-started-md-092d0a10abeaa19d77d2.js.map