# iOS Shortcuts Installation Guide

This directory contains prebuilt iOS Shortcuts that integrate with the AI SuperToolbox Scriptable script.

## Quick Installation

Since iOS Shortcuts cannot be easily distributed as files, follow these step-by-step instructions to create each shortcut manually. Each shortcut takes about 30 seconds to set up.

## Available Shortcuts

1. **Quick Summarize** - Summarize text from anywhere
2. **Grammar Check** - Check and fix grammar
3. **Smart Reply** - Generate reply options
4. **Translate Text** - Quick translation
5. **Code Explainer** - Explain code snippets
6. **Improve Writing** - Enhance text quality
7. **Draft Email** - Quick email composition
8. **Creative Ideas** - Generate ideas

---

## 1. Quick Summarize

**Purpose**: Summarize any text from the Share Sheet or clipboard.

### Setup Steps:
1. Open the **Shortcuts** app
2. Tap **+** to create a new shortcut
3. Tap **Add Action**
4. Add these actions in order:

   **Action 1**: Get text from **Shortcut Input**
   - Search for "Get Text from Input"
   - Add it

   **Action 2**: Run Script
   - Search for "Run Script"
   - Select "AI SuperToolbox"
   - Tap "Show More" if needed
   - Add a **Dictionary** input with:
     - Key: `action`, Value: `process` (Text)
     - Key: `tool`, Value: `summarize` (Text)
     - Key: `text`, Value: *Select "Shortcut Input"* (Magic Variable)

   **Action 3**: Show Result
   - Search for "Show Result"
   - Set input to the result from Run Script

5. Tap the ⋮ button (top right)
6. Name it "Quick Summarize"
7. Enable "Show in Share Sheet"
8. Select "Text" and "Safari web pages" as accepted types
9. Tap "Done"

**Usage**: Select any text, tap Share, choose "Quick Summarize"

---

## 2. Grammar Check

**Purpose**: Check and fix grammar in any text.

### Setup Steps:
1. Open the **Shortcuts** app
2. Tap **+** to create a new shortcut
3. Add these actions:

   **Action 1**: Get text from **Shortcut Input** (or Clipboard)
   
   **Action 2**: Run Script
   - Script: "AI SuperToolbox"
   - Dictionary input:
     - Key: `action`, Value: `process`
     - Key: `tool`, Value: `grammar`
     - Key: `text`, Value: *Shortcut Input*

   **Action 3**: Copy to Clipboard
   - Input: Result from Run Script

   **Action 4**: Show Notification
   - Text: "Grammar checked! Fixed text copied to clipboard."

4. Name it "Grammar Check"
5. Enable "Show in Share Sheet"
6. Tap "Done"

**Usage**: Select text, Share → "Grammar Check"

---

## 3. Smart Reply

**Purpose**: Generate professional reply options for messages.

### Setup Steps:
1. Create new shortcut
2. Add actions:

   **Action 1**: Get Clipboard
   
   **Action 2**: Run Script
   - Script: "AI SuperToolbox"
   - Dictionary:
     - `action`: `process`
     - `tool`: `reply`
     - `text`: *Clipboard*

   **Action 3**: Choose from List
   - Input: Split Text (Result from Run Script)
   - Split by: New Lines

   **Action 4**: Copy to Clipboard
   - Input: Chosen Item

3. Name it "Smart Reply"
4. Add to Share Sheet
5. Done

**Usage**: Copy a message, run "Smart Reply", select from options

---

## 4. Translate Text

**Purpose**: Quick translation to any language.

### Setup Steps:
1. Create new shortcut
2. Add actions:

   **Action 1**: Get text from Shortcut Input

   **Action 2**: Ask for Input
   - Prompt: "Translate to which language?"
   - Default: "Spanish"

   **Action 3**: Run Script
   - Script: "AI SuperToolbox"
   - Dictionary:
     - `action`: `process`
     - `tool`: `translate`
     - `text`: *Combine "Translate to [Input] : [Shortcut Input]"*

   **Action 4**: Show Result

3. Name it "Translate Text"
4. Enable Share Sheet
5. Done

**Usage**: Select text, Share → "Translate Text", enter target language

---

## 5. Code Explainer

**Purpose**: Explain code snippets in plain English.

### Setup Steps:
1. Create new shortcut
2. Add actions:

   **Action 1**: Get text from Shortcut Input
   
   **Action 2**: Run Script
   - Script: "AI SuperToolbox"
   - Dictionary:
     - `action`: `process`
     - `tool`: `code_explain`
     - `text`: *Shortcut Input*

   **Action 3**: Show Result
   - Display: Scrolling Text

3. Name it "Code Explainer"
4. Enable Share Sheet for Text
5. Done

**Usage**: Copy code, Share → "Code Explainer"

---

## 6. Improve Writing

**Purpose**: Enhance the quality and clarity of any text.

### Setup Steps:
1. Create new shortcut
2. Add actions:

   **Action 1**: Get text from Shortcut Input
   
   **Action 2**: Run Script
   - Script: "AI SuperToolbox"
   - Dictionary:
     - `action`: `process`
     - `tool`: `improve`
     - `text`: *Shortcut Input*

   **Action 3**: Copy to Clipboard
   
   **Action 4**: Show Notification
   - "Improved text copied to clipboard!"

3. Name it "Improve Writing"
4. Enable Share Sheet
5. Done

**Usage**: Select text, Share → "Improve Writing"

---

## 7. Draft Email

**Purpose**: Quickly compose a professional email.

### Setup Steps:
1. Create new shortcut
2. Add actions:

   **Action 1**: Ask for Input
   - Prompt: "What should the email be about?"
   
   **Action 2**: Run Script
   - Script: "AI SuperToolbox"
   - Dictionary:
     - `action`: `process`
     - `tool`: `email`
     - `text`: *Provided Input*

   **Action 3**: Copy to Clipboard
   
   **Action 4**: Open App
   - App: Mail

3. Name it "Draft Email"
4. Done

**Usage**: Run "Draft Email" from shortcuts, describe topic

---

## 8. Creative Ideas

**Purpose**: Generate creative ideas for any topic.

### Setup Steps:
1. Create new shortcut
2. Add actions:

   **Action 1**: Get text from Shortcut Input (or ask for input)
   
   **Action 2**: Run Script
   - Script: "AI SuperToolbox"
   - Dictionary:
     - `action`: `process`
     - `tool`: `brainstorm`
     - `text`: *Input*

   **Action 3**: Show Result

3. Name it "Creative Ideas"
4. Done

**Usage**: Run shortcut, enter topic, get ideas

---

## Creating Custom Shortcuts

You can create your own shortcuts using any tool from the AI SuperToolbox. The basic pattern is:

1. **Get Input** (from Share Sheet, Clipboard, or user input)
2. **Run Script** with dictionary:
   ```
   action: process
   tool: [tool_name]
   text: [input_text]
   ```
3. **Handle Output** (Show, Copy, or use in another action)

### Available Tool Names:

- `summarize` - Summarize text
- `reply` - Generate replies
- `improve` - Improve writing
- `translate` - Translate text
- `explain` - Explain concepts
- `grammar` - Check grammar
- `email` - Draft email
- `brainstorm` - Generate ideas
- `code_explain` - Explain code
- `rewrite_professional` - Make professional
- `rewrite_casual` - Make casual
- `expand` - Expand on ideas
- `shorten` - Shorten text
- `keypoints` - Extract key points

## Tips

1. **Testing**: Always test shortcuts with sample text first
2. **Share Sheet**: Enable "Show in Share Sheet" for quick access
3. **Widgets**: Add shortcuts to your home screen for one-tap access
4. **Folders**: Organize shortcuts in folders by category
5. **Naming**: Use clear, descriptive names for easy finding

## Troubleshooting

### "Script not found" error
- Ensure the Scriptable script is named exactly "AI SuperToolbox"
- Run the script once manually before using shortcuts

### No output or error
- Check your API key is configured in the Scriptable script
- Verify internet connection
- Check Claude API credits

### Shortcut doesn't accept text
- Enable "Show in Share Sheet" in shortcut settings
- Add "Text" and "Web Pages" as accepted types

## Advanced Usage

### Chaining Shortcuts
You can chain multiple shortcuts together. For example:
1. Grammar Check → Improve Writing → Copy to Email

### Custom Prompts
Modify the `text` value to include custom instructions:
```
text: "Translate to Spanish (formal): [input text]"
```

### Automation
Use shortcuts in iOS Automations for:
- Time-based triggers
- App-based triggers
- NFC tags
- Location-based triggers

## Need Help?

If you have trouble setting up shortcuts:
1. Verify the main Scriptable script works
2. Check all Dictionary keys are spelled correctly
3. Ensure the script name matches exactly
4. Try with simple test text first

## Share Your Shortcuts

Created a useful shortcut variant? Share it with the community!
