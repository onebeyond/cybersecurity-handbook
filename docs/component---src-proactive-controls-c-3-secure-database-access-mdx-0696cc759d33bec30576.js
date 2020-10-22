(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{XNyE:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return u}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var a=n("/FXl"),i=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/proactive_controls/c3_secure_database_access.mdx"}});var s={_frontmatter:r},c=i.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(c,o({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"ℹ️ This section will be part of ",Object(a.b)("a",o({parentName:"em"},{href:"https://github.com/guidesmiths/cybersecurity-handbook/issues/41"}),"1.0.0 Release"))),Object(a.b)("h1",{id:"c3-secure-database-access"},"C3: Secure Database Access"),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"This section describes secure access to all data stores, including both relational databases and\nNoSQL databases. Some areas to consider:"),Object(a.b)("h3",{id:"secure-queries"},"Secure Queries"),Object(a.b)("p",null,"SQL Injection occurs when untrusted user input is dynamically added to a SQL query in an\ninsecure manner, often via basic string concatenation. SQL Injection is one of the most\ndangerous application security risks. SQL Injection is easy to exploit and could lead to the\nentire database being stolen, wiped, or modified. The application can even be used to run\ndangerous commands against the operating system hosting your database, thereby giving an\nattacker a foothold on your network."),Object(a.b)("p",null,"In order to mitigate SQL injection, untrusted input should be prevented from being\ninterpreted as part of a SQL command. The best way to do this is with the programming\ntechnique known as ‘Query Parameterization’. This defense should be applied to SQL, OQL, as\nwell as stored procedure construction."),Object(a.b)("h3",{id:"sql-injection"},"SQL Injection"),Object(a.b)("p",null,"occurs when untrusted user input is dynamically added to a SQL query in an\ninsecure manner, often via basic string concatenation. SQL Injection is one of the most\ndangerous application security risks. SQL Injection is easy to exploit and could lead to the\nentire database being stolen, wiped, or modified. The application can even be used to run\ndangerous commands against the operating system hosting your database, thereby giving an\nattacker a foothold on your network.\nIn order to mitigate SQL injection, untrusted input should be prevented from being\ninterpreted as part of a SQL command. The best way to do this is with the programming\ntechnique known as ‘Query Parameterization’. This defense should be applied to SQL, OQL, as\nwell as stored procedure construction."),Object(a.b)("h3",{id:"caution-on-query-parameterization"},"Caution on Query Parameterization"),Object(a.b)("p",null,"Certain locations in a database query are not parameterizable. These locations are different\nfor each database vendor. Be certain to do very careful exact-match validation or manual\nescaping when confronting database query parameters that cannot be bound to a\nparameterized query. Also, while the use of parameterized queries largely has a positive\nimpact on performance, certain parameterized queries in specific database implementations\nwill affect performance negatively. Be sure to test queries for performance; especially\ncomplex queries with extensive like clause or text searching capabilities. "),Object(a.b)("h2",{id:"implementation"},"Implementation"),Object(a.b)("h3",{id:"secure-configuration"},"Secure Configuration"),Object(a.b)("p",null,"Unfortunately, database management systems do not always ship in a “secure by default”\nconfiguration. Care must be taken to ensure that the security controls available from the\nDatabase Management System (DBMS) and hosting platform are enabled and properly\nconfigured. There are standards, guides, and benchmarks available for most common DBMS."),Object(a.b)("h3",{id:"secure-authentication"},"Secure Authentication"),Object(a.b)("p",null,"All access to the database should be properly authenticated. Authentication to the DBMS\nshould be accomplished in a secure manner. Authentication should take place only over a\nsecure channel. Credentials must be properly secured and available for use. "),Object(a.b)("h3",{id:"secure-communication"},"Secure Communication"),Object(a.b)("p",null,"Most DBMS support a variety of communications methods (services, APIs, etc) - secure\n(authenticated, encrypted) and insecure (unauthenticated or unencrypted). It is a good\npractice to only use the secure communications options per the Protect Data Everywhere\ncontrol."),Object(a.b)("h2",{id:"specific-mitigations"},"Specific Mitigations"),Object(a.b)("h3",{id:"owasp-top-10-vulnerabilities-mitigated"},"OWASP Top 10 Vulnerabilities Mitigated"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"/cybersecurity-handbook/owasp/a1_injection"}),"A1:2017-Injection"))),Object(a.b)("h3",{id:"owasp-mobile-top-10-vulnerabilities-mitigated"},"OWASP Mobile Top 10 Vulnerabilities Mitigated"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://owasp.org/www-project-mobile-top-10/2016-risks/m1-improper-platform-usage"}),"M1: Improper Platform Usage"))))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/proactive_controls/c3_secure_database_access.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-proactive-controls-c-3-secure-database-access-mdx-0696cc759d33bec30576.js.map