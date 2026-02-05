# Changelog

All notable changes to AI SuperToolbox will be documented in this file.

## [1.0.0] - 2026-02-05

### Added - Initial Release

#### Core Features
- **AI SuperToolbox JavaScript script** - Complete Scriptable app with 80+ AI-powered tools
- **8 Tool Categories**:
  - ⚡ Quick Tools (9 tools)
  - 📝 Text & Writing (10 tools)
  - 💡 Creative & Ideas (10 tools)
  - 🔧 Code & Technical (10 tools)
  - 🧠 Analysis & Research (10 tools)
  - 🌍 Language & Translation (8 tools)
  - 📊 Data & Extraction (10 tools)
  - 🖼️ Image Tools (4 tools)
- **iOS Shortcuts Integration** - Call tools directly from iOS Shortcuts
- **Widget Support** - Quick access from home screen
- **Claude Sonnet 4 Integration** - Powered by latest Claude AI model

#### Prebuilt Shortcuts
1. **Quick Summarize** - Instant text summarization
2. **Grammar Check** - Automatic grammar correction
3. **Smart Reply** - Professional reply generation
4. **Translate Text** - Multi-language translation
5. **Code Explainer** - Plain English code explanation
6. **Improve Writing** - Writing quality enhancement
7. **Draft Email** - Professional email composition
8. **Creative Ideas** - Brainstorming assistant

#### Documentation
- **README.md** - Comprehensive project documentation
- **QUICKSTART.md** - 5-minute getting started guide
- **EXAMPLES.md** - Real-world usage examples and workflows
- **CONTRIBUTING.md** - Guidelines for contributors
- **shortcuts/README.md** - Detailed shortcut setup instructions
- **LICENSE** - MIT License

#### Configuration Files
- 8 JSON configuration files for each shortcut
- `shortcuts-index.json` - Centralized shortcut catalog
- Individual shortcut documentation

### Enhanced Features
- **Extended Tool Support** - Added support for 14 tool identifiers:
  - `summarize`, `reply`, `improve`, `translate`, `explain`
  - `grammar`, `email`, `brainstorm`, `code_explain`
  - `rewrite_professional`, `rewrite_casual`
  - `expand`, `shorten`, `keypoints`
- **Share Sheet Integration** - Works with iOS native share functionality
- **Clipboard Operations** - Seamless copy/paste workflows
- **Error Handling** - Graceful handling of API and network errors

### Developer Features
- Clean, maintainable JavaScript code
- Modular function structure
- Extensible tool system
- Well-documented codebase
- JSON-based configuration

### Security
- API key stored securely in keychain
- No data collection or external storage
- All processing via personal Claude API account
- Open source and auditable

### Performance
- Fast response times (<2 seconds typical)
- Efficient API usage
- Low cost per operation (~0.001-0.01 cents)
- Optimized for mobile devices

## Coming Soon

Future enhancements being considered:
- Additional shortcuts for specialized workflows
- Batch processing capabilities
- Custom prompt templates
- Advanced automation examples
- Integration with more iOS apps
- Community-contributed shortcuts

## Support

For issues, questions, or contributions:
- GitHub Issues: Report bugs or request features
- Pull Requests: Submit improvements and new shortcuts
- Documentation: Help improve guides and examples

---

### Version Format

This project follows [Semantic Versioning](https://semver.org/):
- **MAJOR**: Incompatible API changes
- **MINOR**: New functionality (backwards compatible)
- **PATCH**: Bug fixes (backwards compatible)

### Release Notes

Each release includes:
- Feature additions and improvements
- Bug fixes
- Documentation updates
- Breaking changes (if any)
- Migration guides (when needed)
