export default {
    themeConfig: {
      mode: 'dark',
    },
    title: 'Cybersecurity Handbook',
    files: 'src/**/*.{md,markdown,mdx}',
    menu: [
        'Welcome',
        {
          name:'Attackers', 
          menu: [
            'Cyberwar',
            'Cyber Kill Chain (CKC)'
          ]
        }, {
          name:'OWASP Top 10', 
          menu: [
            'A1 Injection',
            'A2 Broken Authentication',
            'A3 Sensitive Data Exposure',
            'A4 XML External Entities (XXE)',
            'A5 Broken Access Control',
            'A6 Security Misconfiguration',
            'A7 Cross-site scripting (XSS)',
            'A8 Insecure Deserialization',
            'A9 Using Components with Known Vulnerabilities',
            'A10 Insufficient logging and monitoring'
          ]
        }, {
          name:'Other attacks', 
          menu: [
            'Buffer',
            'HTTP Parameter Pollution',
            'Insecure Randomness',
            'Leaking Application Secrets',
            'Open Redirections',
            'Path Traversal',
            'Prototype Pollution',
            'Regex Denial of Service (ReDoS)',
            'Symlink'
          ]
        }, {
          name:'OWASP Proactive Controls', 
          menu: [
            'C1 Define Security Requirements',
            'C2 Leverage Security Frameworks and Libraries',
            'C3 Secure Database Access',
            'C4 Encode and Escape Data',
            'C5 Validate All Inputs',
            'C6 Implement Digital Identity',
            'C7 Enforce Access Controls',
            'C8 Protect Data Everywhere',
            'C9 Implement Security Logging and Monitoring',
            'C10 Handle all Errors and Exceptions'
          ]
        }, {
          name: 'HTTP Headers',
          menu: [
            'Content Security Policy',
            'Cross Domain Policies',
            'DNS Prefetch Control',
            'Don\'t Sniff Mimetype',
            'Expect Certificate Transparency',
            'Feature Policy',
            'Frameguard',
            'Strict Transport Security',
            'IE No Open',
            'Powered by',
            'Referrer Policy',
            'XSS Filter'
          ]
        }, {
          name: "Best practices",
          menu: [
            'General',
            'Version Control Systems',
            'Nodejs',
            'Npm and dependencies',
            'Express',
            'Docker',
            'Databases',
            'Crypto',
            'Session and Tokens',
            'JWT',
            'Cookies'
          ]
        },
        {
          name: "Checklists",
          menu: [
            'General',
            'Nodejs',
            'Express',
            'Docker',
            'Databases',
            'Authorization and authentication'
          ]
        },
        'Resources',
        'Acknowledgments and credits'
    ]
  }