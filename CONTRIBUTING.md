# Contributing to AI SuperToolbox

Thank you for your interest in contributing to AI SuperToolbox! This document provides guidelines for contributing new shortcuts, improvements, and documentation.

## How to Contribute

### Adding New Shortcuts

1. **Create the shortcut configuration**
   - Copy an existing `.json` file from `shortcuts/` as a template
   - Update the name, description, icon, and tool identifier
   - Document the actions required to build the shortcut

2. **Update the index**
   - Add your shortcut to `shortcuts/shortcuts-index.json`
   - Include category, difficulty, and description

3. **Document the shortcut**
   - Add setup instructions to `shortcuts/README.md`
   - Add usage examples to `EXAMPLES.md` if applicable

4. **Test your shortcut**
   - Verify it works with the AI SuperToolbox script
   - Test with various inputs
   - Document any limitations or special requirements

### Improving Documentation

- **Clarity**: Make instructions clear for non-technical users
- **Examples**: Include real-world examples and use cases
- **Troubleshooting**: Add common issues and solutions
- **Visual Aids**: Consider adding screenshots or diagrams

### Enhancing the Core Script

When modifying `AI_SuperToolbox.js`:

1. **Maintain compatibility**: Don't break existing shortcuts
2. **Add tool identifiers**: Document new tools in README.md
3. **Test thoroughly**: Verify all existing tools still work
4. **Update documentation**: Keep docs in sync with code changes

## Shortcut Naming Conventions

- Use descriptive, action-oriented names
- Keep names short (2-3 words ideal)
- Use consistent emoji for categories
- Examples: "Quick Summarize", "Grammar Check", "Draft Email"

## Tool Identifier Guidelines

When adding new tool identifiers to the script:

```javascript
// Use snake_case for tool identifiers
"tool_name": "Clear prompt description:\n\n"

// Examples of good tool identifiers:
"summarize": "Provide a concise summary of:\n\n"
"code_explain": "Explain the following code:\n\n"
"rewrite_professional": "Rewrite in professional tone:\n\n"
```

### Tool Identifier Rules:

1. Use lowercase with underscores
2. Be descriptive but concise
3. Consistent with similar tools
4. Include clear prompt instructions

## JSON Configuration Format

Each shortcut configuration should follow this structure:

```json
{
  "name": "Shortcut Name",
  "description": "Brief description of what it does",
  "icon": "🔥",
  "tool": "tool_identifier",
  "shareSheet": true,
  "acceptedTypes": ["Text", "Safari web pages"],
  "actions": [
    {
      "type": "Action Type",
      "description": "What this action does"
    }
  ],
  "usage": "How to use the shortcut"
}
```

## Testing Guidelines

Before submitting:

1. ✅ Test shortcut with multiple inputs
2. ✅ Verify it works from Share Sheet (if applicable)
3. ✅ Check error handling
4. ✅ Test on different iOS versions if possible
5. ✅ Validate JSON files with a JSON validator
6. ✅ Spell-check documentation

## Documentation Standards

### README Files

- Start with a clear overview
- Use sections with descriptive headers
- Include examples for complex concepts
- Add troubleshooting section
- Keep formatting consistent

### Code Comments

```javascript
// Use clear, concise comments
// Explain WHY, not just WHAT
// Document parameters and return values for functions
```

### Markdown Style

- Use proper heading hierarchy (h1 → h2 → h3)
- Include code blocks with syntax highlighting
- Use bullet points for lists
- Add horizontal rules to separate major sections

## Submitting Changes

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Update relevant documentation
6. Submit a pull request with clear description

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New shortcut
- [ ] Bug fix
- [ ] Documentation improvement
- [ ] Enhancement to existing shortcut

## Testing
- [ ] Tested on iOS [version]
- [ ] Verified with AI SuperToolbox script
- [ ] Updated documentation

## Screenshots (if applicable)
Add screenshots showing the shortcut in action
```

## Code of Conduct

- Be respectful and constructive
- Help others learn and improve
- Give credit where it's due
- Focus on making the project better for everyone

## Questions?

If you have questions about contributing:
1. Check existing documentation
2. Look at similar examples in the repository
3. Open an issue for discussion
4. Reach out to maintainers

## Recognition

Contributors will be acknowledged in:
- CONTRIBUTORS.md file
- Release notes
- Project documentation

Thank you for making AI SuperToolbox better! 🚀
