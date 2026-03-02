# AI SuperToolbox - Complete iOS AI Assistant

A comprehensive AI-powered toolbox with 80+ tools for text processing, code analysis, creative writing, translation, and data extraction on iPhone using Claude API and the Scriptable app.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![iOS](https://img.shields.io/badge/iOS-14%2B-blue)](https://www.apple.com/ios/)
[![Scriptable](https://img.shields.io/badge/Scriptable-Required-orange)](https://scriptable.app/)
[![Claude API](https://img.shields.io/badge/Claude-Sonnet%204-purple)](https://www.anthropic.com/)

## 📚 Documentation

- **[Quick Start Guide](QUICKSTART.md)** - Get started in 5 minutes
- **[Usage Examples](EXAMPLES.md)** - Real-world examples and workflows
- **[Shortcuts Guide](shortcuts/README.md)** - Setup prebuilt shortcuts
- **[Contributing](CONTRIBUTING.md)** - Help improve the project
- **[Changelog](CHANGELOG.md)** - Version history and updates

## Features

- **80+ AI-Powered Tools** organized into 8 categories
- **iOS Shortcuts Integration** for quick access to common tasks
- **Scriptable Widget Support** for quick actions from your home screen
- **Powered by Claude Sonnet 4** for high-quality AI assistance

## Installation

### Prerequisites

1. **Scriptable App** - Download from the App Store (free)
2. **Claude API Key** - Get yours from [console.anthropic.com](https://console.anthropic.com/)

### Setup Steps

1. **Install the Main Script**
   - Open the Scriptable app on your iPhone
   - Tap the `+` button to create a new script
   - Copy the entire contents of `AI_SuperToolbox.js`
   - Paste it into the new script
   - Name it "AI SuperToolbox"
   - Save the script

2. **Configure Your API Key**
   - Run the script for the first time
   - Select "⚙️ Settings & Setup"
   - Select "🔑 Set API Key"
   - Enter your Claude API key
   - Tap OK to save

3. **Test the Installation**
   - Return to the main menu
   - Try any tool to verify it works
   - Example: "⚡ Quick Tools" → "🎯 Summarize Text"

## Available Tool Categories

### ⚡ Quick Tools (9 tools)
- Smart Reply Generator
- Improve My Writing
- Draft Email
- Draft Text Message
- Summarize Text
- Explain This
- Grammar Check
- Key Points Extractor
- Categorize & Tag

### 📝 Text & Writing (10 tools)
- Rewrite Different Tone
- Make it Professional
- Make it Casual
- Expand on Idea
- Shorten Text
- Bullet Points to Prose
- Add Examples
- Fact Check Request
- Generate Outline
- Create Action Items

### 💡 Creative & Ideas (10 tools)
- Brainstorm Ideas
- Story Prompt Generator
- Creative Title Ideas
- Metaphor Generator
- Blog Post Ideas
- Social Media Caption
- Product Name Ideas
- Tagline Generator
- Write a Poem
- Create a Joke

### 🔧 Code & Technical (10 tools)
- Explain Code
- Debug Help
- Code Review
- Generate Regex
- SQL Query Help
- API Documentation
- Tech Explanation
- Command Line Help
- Refactor Suggestions
- Unit Test Ideas

### 🧠 Analysis & Research (10 tools)
- Deep Analysis
- Compare & Contrast
- Find Patterns
- Identify Bias
- Logical Fallacy Check
- Argument Evaluation
- Research Questions
- Source Credibility
- Citation Generator
- Literature Review

### 🌍 Language & Translation (8 tools)
- Translate Text
- Language Detection
- Pronunciation Guide
- Cultural Context
- Idiom Explanation
- Formal/Informal Register
- Simplify Language
- Technical Term Lookup

### 📊 Data & Extraction (10 tools)
- Extract Numbers
- Find Dates
- Extract Emails
- Extract URLs
- Extract Names
- Create CSV
- Parse JSON
- Format Data
- Data Cleaning
- Find Duplicates

### 🖼️ Image Tools (4 tools)
- Image Description Request
- OCR Text Request
- Photo Analysis
- Visual Summary

## Prebuilt iOS Shortcuts

Ready-to-use shortcuts for common tasks. See the `shortcuts/` directory for detailed instructions.

### Available Shortcuts:

1. **Quick Summarize** - Summarize any text from Share Sheet
2. **Grammar Check** - Check and fix grammar instantly
3. **Smart Reply** - Generate professional reply options
4. **Translate Text** - Quick translation to any language
5. **Code Explainer** - Explain code snippets
6. **Improve Writing** - Enhance your writing quality
7. **Draft Email** - Quick email composition
8. **Creative Ideas** - Generate creative ideas instantly

See `shortcuts/README.md` for installation instructions.

## Usage

### Interactive Mode
Simply run the "AI SuperToolbox" script from Scriptable to access all 80+ tools through an interactive menu system.

### iOS Shortcuts Integration
Call the script from iOS Shortcuts by passing parameters:
```json
{
  "action": "process",
  "tool": "summarize",
  "text": "Your text here"
}
```

### Widget Mode
Add the script as a widget to your home screen for quick access to favorite tools.

## Supported Tools in Shortcuts

The following tool identifiers can be used in the `tool` parameter:

- `summarize` - Summarize text
- `reply` - Generate reply options
- `improve` - Improve writing
- `translate` - Translate text
- `explain` - Explain concepts
- `grammar` - Check grammar
- `email` - Draft email
- `brainstorm` - Generate ideas
- `code_explain` - Explain code
- `rewrite_professional` - Make text professional

## Privacy & Security

- Your API key is stored securely in Scriptable's keychain
- No data is collected or stored outside of your device
- All AI processing happens through your personal Claude API account

## Troubleshooting

### "API key not configured" error
- Run the main script
- Go to Settings & Setup
- Set your Claude API key

### Tools not responding
- Check your internet connection
- Verify your API key is valid at console.anthropic.com
- Ensure you have API credits available

### Shortcuts not working
- Make sure the main script is named exactly "AI SuperToolbox"
- Verify the script runs successfully in Scriptable first
- Check the shortcut parameters are correct

## Credits

Created by Austin for the iOS productivity community.

## License

This project is open source and available for personal use.

## Support

For issues or questions, please open an issue on GitHub.

## Version

Current version: 1.0.0

## Documentation

- [Quick Start Guide](QUICKSTART.md) - Get up and running in 5 minutes
- [Usage Examples](EXAMPLES.md) - See real-world examples
- [Shortcuts Setup](shortcuts/README.md) - Install prebuilt shortcuts
- [Contributing Guide](CONTRIBUTING.md) - Help improve the project
- [Changelog](CHANGELOG.md) - Version history

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
