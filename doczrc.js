export default {
    themeConfig: {
      mode: 'dark',
    },
    title: 'Cybersecurity Handbook',
    files: 'src/**/*.{md,markdown,mdx}',
    menu: [
        'Welcome',
        {
          name:'About Cybersecurity', 
          menu: [
            'Intro',
            'Common Attacks',
            'Cyber Kill Chain (CKC)',
            'State of Open Source'
          ]
        }, 
        'Notable Security Incidents',
        {
          name:'OWASP Top 10', 
          menu: [
            'Intro',
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
          name:'Attacks explained', 
          menu: [
            'Intro',
            'Clickjacking',
            'Cross-site scripting (XSS)',
            'Cross Site Request Forgery (CSRF)',
            'Lockfile',
            'CSS Exfil',
            'Buffer',
            'Exhausting System Resources',
            'HTTP Parameter Pollution',
            'Insecure Randomness',
            'Leaking Application Secrets',
            'Open Redirections',
            'Path Traversal',
            'Prototype Pollution',
            'Regex Denial of Service (ReDoS)',
            'Symlink',
            'XML Bomb'
          ]
        }, {
          name:'Security Design', 
          menu: [
            'Intro',
            'Trust',
            'Authentication',
            'Authorization',
            'Separation',
            'Data validation',
            'Cryptography',
            'Sensitive data',
            'Users',
            'External components',
            'Future changes'
          ]
        }, {
          name:'OWASP Proactive Controls', 
          menu: [
            'Intro',
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
            'Intro',
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
            'XSS Filter',
            'ETag',
            'CORS'
          ]
        }, {
          name: "Best practices",
          menu: [
            'Intro',
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
        'Tooling',
        {
          name: "Checklists",
          menu: [
            'Intro',
            'Nodejs',
            'Express',
            'Databases',
            'Authorization and authentication',
            'Docker'
          ]
        },
        'Testing Guides',
        'Cheat Sheets',
        'Resources',
        'Acknowledgments and credits'
    ]
  }