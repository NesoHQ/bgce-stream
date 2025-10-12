# Contributing to BGCE Stream

Thank you for your interest in contributing to BGCE Stream! We welcome contributions from the community and appreciate your help in making this project better.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Development Setup](#development-setup)
- [Coding Guidelines](#coding-guidelines)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Community Guidelines](#community-guidelines)

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct.html). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/bgce-stream.git
   cd bgce-stream
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/original-owner/bgce-stream.git
   ```

## Development Workflow

1. **Find or create an Issue** labeled with the appropriate version (e.g., `v0.1.0`)
2. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feat/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```
3. **Make your changes** with small, focused commits
4. **Test your changes** thoroughly
5. **Open a Pull Request** referencing the related Issue
6. **Respond to review feedback** and make necessary changes
7. **Celebrate** when your PR is merged! 🎉

## Development Setup

### Backend (Go)
- **Go version**: 1.19 or higher
- **Setup**:
  ```bash
  cd backend
  go mod tidy
  go run ./cmd/server
  ```
- **Testing**: `go test ./...`

### Frontend
- **Location**: `frontend/public/`
- **Approach**: Static pages with vanilla JavaScript
- **Development**: Simple HTTP server (e.g., `python -m http.server` or `npx serve`)

### General Guidelines
- Keep code small and readable
- Avoid large frameworks unless discussed with maintainers
- Follow existing code patterns and conventions

## Coding Guidelines

### General Principles
- **Clarity over cleverness**: Write code that is easy to understand
- **Small modules**: Break functionality into focused, testable units
- **Consistent style**: Follow existing patterns in the codebase
- **Documentation**: Add comments for non-obvious logic

### Language-Specific Guidelines

#### Go
- Follow `gofmt` formatting
- Use meaningful variable and function names
- Keep functions small and focused
- Add error handling for all operations

#### JavaScript
- Use modern ES6+ features
- Prefer `const` and `let` over `var`
- Use meaningful variable names
- Add JSDoc comments for functions

### API Guidelines
- **Backward compatibility**: Avoid breaking changes without discussion
- **Versioning**: Use semantic versioning for API changes
- **Documentation**: Keep API docs up to date

## Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```
feat(api): add room creation endpoint
fix(websocket): handle connection drops gracefully
docs(readme): update installation instructions
```

### Best Practices
- Use imperative mood: "Add feature" not "Added feature"
- Keep first line under 50 characters
- Reference Issues: `Closes #123` or `Fixes #456`
- Be descriptive but concise

## Pull Request Process

### Before Submitting
- [ ] Code follows project guidelines
- [ ] Tests pass locally
- [ ] Documentation updated if needed
- [ ] No merge conflicts with `main`

### PR Template
When opening a PR, please include:

1. **Description**: What does this PR do?
2. **Related Issue**: Link to the issue this addresses
3. **Testing**: How was this tested?
4. **Screenshots**: If UI changes, include before/after
5. **Breaking Changes**: Any breaking changes?

### Review Process
1. **Automated checks** must pass (CI/CD)
2. **Code review** by maintainers
3. **Address feedback** and make requested changes
4. **Approval** from at least one maintainer
5. **Merge** by maintainer

### PR Size Guidelines
- **Small PRs** are preferred (< 400 lines changed)
- **Large PRs** may be asked to be split
- **Focused changes**: One feature/fix per PR

## Issue Guidelines

### Bug Reports
Please include:
- **Description**: Clear description of the bug
- **Steps to reproduce**: Exact steps to reproduce the issue
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Environment**: OS, browser, version info
- **Screenshots**: If applicable

### Feature Requests
Please include:
- **Description**: Clear description of the feature
- **Use case**: Why is this feature needed?
- **Proposed solution**: How should it work?
- **Alternatives**: Other solutions considered

### Issue Labels
- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements to documentation
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed
- `v0.1.0`, `v0.1.1`, etc.: Version-specific issues

## Community Guidelines

### Getting Help
- **GitHub Discussions**: For questions and general discussion
- **Issues**: For bug reports and feature requests
- **Pull Requests**: For code contributions

## Questions?

If you have questions about contributing, please:
1. Check existing [Issues](https://github.com/owner/bgce-stream/issues)
2. Start a [Discussion](https://github.com/owner/bgce-stream/discussions)
3. Contact maintainers directly

Thank you for contributing to BGCE Stream! 🚀