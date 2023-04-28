(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{CAHa:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return l}));a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk"),a("mXGw");var n=a("/FXl"),s=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/owasp_top_10/a2_broken_authentication.mdx"}});var o={_frontmatter:i},c=s.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,["components"]);return Object(n.b)(c,r({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"a2-broken-authentication"},"A2 Broken Authentication"),Object(n.b)("h2",{id:"definition"},"Definition"),Object(n.b)("p",null,"Application functions related to authentication and session management are often implemented\nincorrectly, allowing attackers to compromise passwords, keys, or session tokens, or to exploit\nother implementation flaws to assume other users’ identities temporarily or permanently."),Object(n.b)("h2",{id:"risk-factor-summary"},"Risk Factor Summary"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Score: 7.0"),Object(n.b)("li",{parentName:"ul"},"Attack Vectors Exploitability: 3"),Object(n.b)("li",{parentName:"ul"},"Security Weakness Prevalence: 2"),Object(n.b)("li",{parentName:"ul"},"Security Weakness Detectability: 2"),Object(n.b)("li",{parentName:"ul"},"Impact Technical: 3")),Object(n.b)("h2",{id:"context"},"Context"),Object(n.b)("iframe",{width:"100%",height:"450",src:"https://www.youtube.com/embed/mruO75ONWy8"}),Object(n.b)("p",null,"Attackers have access to hundreds of\nmillions of valid username and\npassword combinations for credential\nstuffing, default administrative\naccount lists, automated brute force,\nand dictionary attack tools. Session\nmanagement attacks are well\nunderstood, particularly in relation to\nunexpired session tokens. "),Object(n.b)("p",null,"The prevalence of broken authentication is\nwidespread due to the design and implementation of\nmost identity and access controls. Session management is the bedrock of authentication and access\ncontrols, and is present in all stateful applications."),Object(n.b)("p",null,"Attackers can detect broken authentication using\nmanual means and exploit them using automated\ntools with password lists and dictionary attacks."),Object(n.b)("p",null,"Attackers have to gain access to only\na few accounts, or just one admin\naccount to compromise the system.\nDepending on the domain of the\napplication, this may allow money\nlaundering, social security fraud, and\nidentity theft, or disclose legally\nprotected highly sensitive information."),Object(n.b)("h2",{id:"is-the-application-vulnerable"},"Is the Application Vulnerable?"),Object(n.b)("p",null,"Confirmation of the user's identity, authentication, and session\nmanagement are critical to protect against authentication-related\nattacks.\nThere may be authentication weaknesses if the application:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Permits automated attacks such as ",Object(n.b)("a",r({parentName:"li"},{href:"https://owasp.org/www-community/attacks/Credential_stuffing"}),"credential stuffing"),", where\nthe attacker has a list of valid usernames and passwords."),Object(n.b)("li",{parentName:"ul"},"Permits brute force or other automated attacks."),Object(n.b)("li",{parentName:"ul"},'Permits default, weak, or well-known passwords, such as\n"Password1" or "admin/admin“.'),Object(n.b)("li",{parentName:"ul"},'Uses weak or ineffective credential recovery and forgotpassword processes, such as "knowledge-based answers",\nwhich cannot be made safe.'),Object(n.b)("li",{parentName:"ul"},"Uses plain text, encrypted, or weakly hashed passwords (see\n",Object(n.b)("a",r({parentName:"li"},{href:"/cybersecurity-handbook/owasp/a3_sensitived_data_exposure"}),"A3:2017-Sensitive Data Exposure"),")."),Object(n.b)("li",{parentName:"ul"},"Has missing or ineffective multi-factor authentication."),Object(n.b)("li",{parentName:"ul"},"Exposes Session IDs in the URL (e.g., URL rewriting)."),Object(n.b)("li",{parentName:"ul"},"Does not rotate Session IDs after successful login."),Object(n.b)("li",{parentName:"ul"},"Does not properly invalidate Session IDs. User sessions or\nauthentication tokens (particularly single sign-on (SSO) tokens)\naren’t properly invalidated during logout or a period of inactivity. ")),Object(n.b)("h2",{id:"conceptual-attacks"},"Conceptual Attacks"),Object(n.b)("h3",{id:"scenario-1"},"Scenario #1:"),Object(n.b)("p",null,Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/danielmiessler/SecLists"}),"Credential stuffing"),", the use of ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/danielmiessler/SecLists"}),"lists of known passwords"),", is a common attack. If an application does not\nimplement automated threat or credential stuffing protections, the\napplication can be used as a password oracle to determine if the\ncredentials are valid."),Object(n.b)("h3",{id:"scenario-2"},"Scenario #2:"),Object(n.b)("p",null,"Most authentication attacks occur due to the\ncontinued use of passwords as a sole factor. Once considered\nbest practices, password rotation and complexity requirements\nare viewed as encouraging users to use, and reuse, weak\npasswords. Organizations are recommended to stop these\npractices per NIST 800-63 and use multi-factor authentication."),Object(n.b)("h3",{id:"scenario-3"},"Scenario #3:"),Object(n.b)("p",null,"Application session timeouts aren’t set properly. A\nuser uses a public computer to access an application. Instead of\nselecting “logout” the user simply closes the browser tab and\nwalks away. An attacker uses the same browser an hour later,\nand the user is still authenticated."),Object(n.b)("h2",{id:"example-attack-scenarios"},"Example Attack Scenarios"),Object(n.b)("h3",{id:"passwords-are-not-properly-hashed-and-salted"},"Passwords are not properly hashed and salted:"),Object(n.b)("p",null,"NEVER Store a password in plain text. "),Object(n.b)("p",null,"Some good practices to store passwords:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"Validate the password strength"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("ol",r({parentName:"li"},{start:2}),Object(n.b)("li",{parentName:"ol"},"Use ",Object(n.b)("a",r({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Bcrypt"}),"bcrypt")," with a high cost (>=15) or a secure salt system to generate the password hash."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("ol",r({parentName:"li"},{start:3}),Object(n.b)("li",{parentName:"ol"},"Optional: Force the users to change the password every 90 days maximum.")))),Object(n.b)("p",null,"Extra features:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"Use A Two-Factor Authentication System"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("ol",r({parentName:"li"},{start:2}),Object(n.b)("li",{parentName:"ol"},"Ensure that the password Verify is not listed In known Password Dictionaries (",Object(n.b)("a",r({parentName:"li"},{href:"https://crackstation.net/crackstation-wordlist-password-cracking-dictionary.htm"}),"crackstation"),", ",Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/danielmiessler/SecLists/tree/master/Passwords"}),"danielmiessler/SecLists"),"...)"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("ol",r({parentName:"li"},{start:3}),Object(n.b)("li",{parentName:"ol"},"Validate that the user/pass wasn't compromised using ",Object(n.b)("a",r({parentName:"li"},{href:"https://haveibeenpwned.com/API/v3"}),"haveibeenpwned API")," or similar")))),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),'const bcrypt = require(\'bcrypt\'); //https://www.npmjs.com/package/bcrypt\nconst saltRounds = 15;\n\nconst isPassStrong = (pass) => {\n    // @see: https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/\n    const criteria = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})"\n    return criteria.test(pass)\n}\n\nconst hashPass = async (pass) => {\n    if(!isPassStrong(pass)) throw new Error("The password is weak!")\n    bcrypt.hash(pass, saltRounds, (err, hash) => {\n        if(err) throw err;\n        return hash\n    });\n}\n')),Object(n.b)("h3",{id:"session-ids-in-the-url"},"Session IDs in the URL:"),Object(n.b)("p",null,"This example is based on  ",Object(n.b)("a",r({parentName:"p"},{href:"http://scottksmith.com/blog/2015/06/15/secure-node-apps-against-owasp-top-10-authentication-and-sessions/"}),"Scott Smith example about Authentication and sessions")),Object(n.b)("p",null,"NEVER use the session ID in the URL as your application will be very vulnerable:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Much more visible and thus more dangerous and the sharing of link grants others full access"),Object(n.b)("li",{parentName:"ul"},"Stored on cache servers and browser history"),Object(n.b)("li",{parentName:"ul"},"Leaked through the Referer header and logs not properly protected")),Object(n.b)("p",null,"Some good practices to manage session IDs:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You can use cookies for session"),Object(n.b)("li",{parentName:"ul"},"You can use Authentication headers if you are using JWT or similar "),Object(n.b)("li",{parentName:"ul"},"You need to ensure that all the traffic is handled using https"),Object(n.b)("li",{parentName:"ul"},"If you are using cookies, please ensure that you use ",Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/expressjs/session#cookiesecure"}),Object(n.b)("inlineCode",{parentName:"a"},"secure"))," and ",Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/expressjs/session#cookiehttponly"}),Object(n.b)("inlineCode",{parentName:"a"},"httpOnly"))," flags."),Object(n.b)("li",{parentName:"ul"},"As well ensure that you are using Strict Transport Security (HSTS)."),Object(n.b)("li",{parentName:"ul"},"If you are using a proxy don't forget to enable ",Object(n.b)("a",r({parentName:"li"},{href:"http://expressjs.com/en/guide/behind-proxies.html"}),Object(n.b)("inlineCode",{parentName:"a"},"trust proxy")," in Express"))),Object(n.b)("p",null,"Extra:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Check the documentation for ",Object(n.b)("a",r({parentName:"li"},{href:"/cybersecurity-handbook/http_headers/"}),"HTTP headers in this guide"),"."),Object(n.b)("li",{parentName:"ul"},"Check the details about ",Object(n.b)("a",r({parentName:"li"},{href:"/cybersecurity-handbook/http_headers/hsts"}),"Strict Transport Security (HSTS) in this guide"),".")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"const express = require('express');\nconst session = require('express-session');\nconst helmet  = require('helmet');\nconst {secretSession} = require('./config).express\n\nconst app = express();\n\n// HSTS\napp.use(helmet.hsts({\n  maxAge: 7776000000, // 90 days\n  includeSubdomains: true\n}));\n\n// Proxy setup\napp.set('trust proxy', 1);\n\n// Cookie session details\napp.use(session({\n  secret: 'secret session secret',\n  cookie: {\n    maxAge: 3600000, // 2 hours in milliseconds\n    secure: true,\n    httpOnly: true\n  }\n}));\n\napp.listen(8080);\n")),Object(n.b)("h2",{id:"how-to-prevent"},"How to Prevent"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Where possible, implement multi-factor authentication to\nprevent automated, credential stuffing, brute force, and stolen\ncredential re-use attacks."),Object(n.b)("li",{parentName:"ul"},"Do not ship or deploy with any default credentials, particularly\nfor admin users."),Object(n.b)("li",{parentName:"ul"},"Implement weak-password checks, such as testing new or\nchanged passwords against a list of ",Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/danielmiessler/SecLists/tree/master/Passwords"}),"the top 10000 worst\npasswords"),"."),Object(n.b)("li",{parentName:"ul"},"Align password length, complexity and rotation policies with\n",Object(n.b)("a",r({parentName:"li"},{href:"https://pages.nist.gov/800-63-3/sp800-63b.html#memsecret"}),"NIST 800-63 B's guidelines in section 5.1.1 for Memorized\nSecrets")," or other modern, evidence based password policies."),Object(n.b)("li",{parentName:"ul"},"Ensure registration, credential recovery, and API pathways are\nhardened against account enumeration attacks by using the\nsame messages for all outcomes."),Object(n.b)("li",{parentName:"ul"},"Limit or increasingly delay failed login attempts. Log all failures\nand alert administrators when credential stuffing, brute force, or\nother attacks are detected."),Object(n.b)("li",{parentName:"ul"},"Use a server-side, secure, built-in session manager that\ngenerates a new random session ID with high entropy after\nlogin. Session IDs should not be in the URL, be securely stored\nand invalidated after logout, idle, and absolute timeouts.")),Object(n.b)("h2",{id:"hacking-playground"},"Hacking Playground"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://nodegoat.herokuapp.com/tutorial/a2"}),"🐐 NodeGoat | A2 Broken Authentication")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://pwning.owasp-juice.shop/part2/broken-authentication.html"}),"🧃 Pwning OWASP Juice Shop | A2 - Broken Authentication")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://application.security/free-application-security-training/owasp-top-10-token-exposure-in-url"}),"Kontra | Token Exposure in URL")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://application.security/free-application-security-training/owasp-top-10-weak-randomness"}),"Kontra | Weak Randomness")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://application.security/free-application-security-training/owasp-top-10-user-enumeration"}),"Kontra | User Enumeration"))),Object(n.b)("h2",{id:"references"},"References"),Object(n.b)("h3",{id:"owasp"},"OWASP"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"}),"OWASP Cheat Sheet: Authentication")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://cheatsheetseries.owasp.org/cheatsheets/Credential_Stuffing_Prevention_Cheat_Sheet.html"}),"OWASP Cheat Sheet: Credential Stuffing")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html"}),"OWASP Cheat Sheet: Forgot Password")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html"}),"OWASP Cheat Sheet: Session Management"))),Object(n.b)("h3",{id:"cwes"},"CWEs"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://cwe.mitre.org/data/definitions/287.html"}),"CWE-287: Improper Authentication")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://cwe.mitre.org/data/definitions/384.html"}),"CWE-384: Session Fixation"))),Object(n.b)("h3",{id:"other"},"Other"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://security.stackexchange.com/a/31846"}),"stackexchange | How to securely hash passwords?")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://security.stackexchange.com/questions/4781/do-any-security-experts-recommend-bcrypt-for-password-storage"}),"stackexchange | Do any security experts recommend bcrypt for password storage?"))))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/owasp_top_10/a2_broken_authentication.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-owasp-top-10-a-2-broken-authentication-mdx-0344aad158b1617c2ddc.js.map