export default {
    themeConfig: {
      mode: 'dark',
    },
    title: 'Cybersecurity Handbook',
    files: 'src/**/*.{md,markdown,mdx}',
    menu: [
        'Welcome',
        {
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
        'Resources',
        'Acknowledgments and credits'
    ]
  }