# ISDP Demo - Integrated Dependency Security Pipeline

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![AWS Lambda](https://img.shields.io/badge/AWS-Lambda-orange.svg)](https://aws.amazon.com/lambda/)

## 📋 Overview

This repository demonstrates the implementation of the **Integrated Dependency Security Pipeline (IDSP)** framework for serverless applications, based on academic research conducted on vulnerability analysis and mitigation strategies for insecure third-party dependencies in serverless functions.

The project addresses critical security challenges in serverless computing environments, particularly focusing on dependency vulnerabilities in AWS Lambda functions within the Node.js/npm ecosystem.

## 🎯 Project Background

Modern serverless applications heavily rely on third-party dependencies, with npm hosting over 1 million packages. This creates significant security risks including:

- **Limited Visibility**: Ephemeral execution environments make traditional monitoring difficult
- **Risk Amplification**: Vulnerable dependencies replicate across hundreds of microservice functions
- **Supply Chain Attacks**: Malicious code in legitimate packages can provide persistent access
- **Transitive Dependencies**: Hidden vulnerabilities multiple layers deep in dependency trees

This demonstration implements research findings to provide a comprehensive security solution for serverless development workflows.

## 🔬 Research Foundation

This implementation is based on systematic research analyzing:

- Security challenges in serverless computing architectures
- Vulnerability patterns in the npm ecosystem
- Comparative analysis of automated scanning tools (Snyk, Dependabot, GitHub Advanced Security)
- CI/CD integration patterns for shift-left security
- Best practices for dependency management in serverless environments

**Research Team:**
- Muhammad Muneeb (22L-7893)
- Muhammad Wahaj Asif (22L-7879)
- Miraal Fatima (22L-7902)

**Institution:** National University of Computer and Emerging Sciences, Lahore, Pakistan

## ✨ Key Features

### 🛡️ Multi-Layer Security Scanning
- **Pre-commit hooks** for early vulnerability detection
- **Pull request automation** with security feedback
- **CI/CD pipeline integration** with deployment gates
- **Runtime monitoring** for deployed Lambda functions

### 🔍 Advanced Vulnerability Detection
- Reachability analysis to reduce false positives
- CVSS-based severity classification
- Transitive dependency scanning
- Zero-day vulnerability protection

### 🤖 Automated Remediation
- Automatic dependency updates via Dependabot
- Auto-generated fix pull requests with Snyk
- Policy-based deployment blocking
- Continuous compliance monitoring

### 📊 Comprehensive Reporting
- Software Bill of Materials (SBOM) generation
- Vulnerability impact assessment
- Compliance tracking for NIST, GDPR standards
- Real-time security dashboards

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────┐
│          Integrated Dependency Security Pipeline     │
├─────────────────────────────────────────────────────┤
│                                                       │
│  IDE Integration (VSCode/IntelliJ)                   │
│         ↓                                             │
│  Pre-commit Hooks (Git Hooks)                        │
│         ↓                                             │
│  Pull Request Scanning (GitHub Actions)              │
│         ↓                                             │
│  Build Pipeline (Snyk + Dependabot)                  │
│         ↓                                             │
│  Deployment Gates (CVSS Threshold Policies)          │
│         ↓                                             │
│  Runtime Monitoring (Continuous Scanning)            │
│         ↓                                             │
│  AWS Lambda Functions (Production)                   │
└─────────────────────────────────────────────────────┘
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- AWS CLI configured with appropriate credentials
- GitHub account (for Dependabot and GitHub Advanced Security)
- Snyk account (optional, for enhanced scanning)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/themuneeeb/isdp-demo.git
   cd isdp-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your AWS and scanning tool credentials
   ```

4. **Set up pre-commit hooks**
   ```bash
   npm run setup-hooks
   ```

### Configuration

#### 1. Snyk Integration
```bash
# Install Snyk CLI
npm install -g snyk

# Authenticate with Snyk
snyk auth

# Test for vulnerabilities
snyk test

# Monitor project
snyk monitor
```

#### 2. Dependabot Setup
Enable Dependabot in your GitHub repository:
- Go to Settings → Security → Dependabot
- Enable "Dependabot security updates"
- Configure `dependabot.yml` (included in repo)

#### 3. GitHub Advanced Security
- Enable GitHub Advanced Security in repository settings
- Configure code scanning with provided workflows
- Review dependency alerts in Security tab

## 📦 Project Structure

```
isdp-demo/
├── .github/
│   ├── workflows/          # CI/CD pipeline configurations
│   ├── dependabot.yml      # Dependabot configuration
│   └── SECURITY.md         # Security policy
├── src/
│   ├── functions/          # AWS Lambda functions
│   ├── utils/              # Utility modules
│   └── config/             # Configuration files
├── tests/
│   ├── unit/               # Unit tests
│   ├── integration/        # Integration tests
│   └── security/           # Security tests
├── scripts/
│   ├── scan.js             # Dependency scanning script
│   ├── deploy.js           # Deployment script
│   └── monitor.js          # Runtime monitoring
├── docs/
│   ├── RESEARCH.md         # Full research documentation
│   ├── ARCHITECTURE.md     # Architecture details
│   └── SECURITY.md         # Security guidelines
├── .snyk                   # Snyk policy file
├── package.json
├── serverless.yml          # Serverless Framework config
└── README.md
```

## 🔧 Usage

### Running Security Scans

```bash
# Run full dependency audit
npm run security:audit

# Scan with Snyk
npm run security:snyk

# Generate SBOM
npm run security:sbom

# Check for outdated dependencies
npm run security:outdated
```

### Deploying Functions

```bash
# Deploy to development
npm run deploy:dev

# Deploy to staging (with security checks)
npm run deploy:staging

# Deploy to production (strict security gates)
npm run deploy:prod
```

### Monitoring

```bash
# Start runtime monitoring
npm run monitor:start

# View security dashboard
npm run monitor:dashboard

# Generate security report
npm run monitor:report
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run security-specific tests
npm run test:security

# Run with coverage
npm run test:coverage
```

## 📊 Vulnerability Severity Classification

The project uses CVSS scoring to classify vulnerabilities:

| Severity | CVSS Score | Action Required |
|----------|------------|-----------------|
| 🔴 Critical | 9.0-10.0 | Block deployment immediately |
| 🟠 High | 7.0-8.9 | Fix before production deployment |
| 🟡 Medium | 4.0-6.9 | Track and remediate in next sprint |
| 🟢 Low | 0.1-3.9 | Monitor and address as resources permit |

## 🛠️ Tools Comparison

| Feature | Snyk | Dependabot | GitHub Advanced Security |
|---------|------|------------|-------------------------|
| Reachability Analysis | ✅ Advanced | ❌ None | ⚠️ Basic |
| Vulnerability Database | ✅ Proprietary + Public | ⚠️ Public Only | ⚠️ Public Only |
| Auto-remediation | ✅ Yes | ✅ Yes | ⚠️ Limited |
| CI/CD Integration | ✅ Excellent | ✅ Native GitHub | ✅ Native GitHub |
| Runtime Monitoring | ✅ Yes | ❌ No | ❌ No |
| Cost | 💰 Paid (Free tier) | ✅ Free | 💰 Enterprise Only |

## 🔒 Security Best Practices

1. **Pin Dependency Versions**: Always use exact versions in `package.json`
2. **Regular Updates**: Enable automated updates with Dependabot
3. **Multi-stage Scanning**: Implement scanning at IDE, PR, build, and runtime stages
4. **Least Privilege**: Apply minimal IAM permissions to Lambda functions
5. **SBOM Generation**: Maintain updated Software Bill of Materials
6. **Continuous Monitoring**: Track deployed functions for new vulnerabilities
7. **Policy Enforcement**: Block deployments with critical/high severity issues

## 📈 Performance Impact

Based on research findings:

- **Pre-commit scanning**: +2-5 seconds per commit
- **PR scanning**: +30-60 seconds per pull request
- **Build pipeline scanning**: +1-3 minutes per deployment
- **Runtime monitoring**: Negligible impact on function execution

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting pull requests.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

All contributions must pass security scanning before merge.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📚 Research References

This implementation is based on comprehensive research including:

1. Escaleira, P., et al. (2025). "A systematic review on security mechanisms for serverless computing"
2. Marin, E., et al. (2022). "Serverless computing: A security perspective"
3. Li, X., et al. (2023). "Securing serverless computing: Challenges, solutions, and opportunities"
4. Ni, K., et al. (2024). "Toward security quantification of serverless computing"
5. Shuai, Z., et al. (2024). "ATSSC: An attack tolerant system in serverless computing"

Full research paper available in [docs/RESEARCH.md](docs/RESEARCH.md)

## 🙏 Acknowledgments

- Supervisor: Mr. Zeeshan Ali Khan
- National University of Computer and Emerging Sciences (NUCES)
- Department of Computer Science, Lahore, Pakistan
- Open-source security community

## 📧 Contact

For questions, issues, or collaboration opportunities:

- **Muhammad Muneeb** - [@themuneeeb](https://github.com/themuneeeb)
- **Project Link**: [https://github.com/themuneeeb/isdp-demo](https://github.com/themuneeeb/isdp-demo)

## 🔗 Additional Resources

- [AWS Lambda Security Best Practices](https://docs.aws.amazon.com/lambda/latest/dg/lambda-security.html)
- [Snyk Documentation](https://docs.snyk.io/)
- [GitHub Security Features](https://docs.github.com/en/code-security)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [OWASP Serverless Top 10](https://owasp.org/www-project-serverless-top-10/)

---

⭐ **If you find this project useful, please consider giving it a star!**

**Built with security in mind for the serverless era.**
