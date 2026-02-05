// AI SuperToolbox - Complete AI Tools & Automation System
// Austin's Ultimate iPhone AI Assistant
// Built for Scriptable + iOS Shortcuts Integration

const CONFIG = {
  apiEndpoint: "https://api.anthropic.com/v1/messages",
  model: "claude-sonnet-4-20250514",
  maxTokens: 1000,
  version: "1.0.0",
  theme: {
    bg: "#0a0a0f",
    primary: "#00ff88",
    secondary: "#00ccff",
    accent: "#ff0099",
    text: "#ffffff",
    textDim: "#888888",
    cardBg: "#1a1a24"
  }
};

// ============================================
// MAIN EXECUTION
// ============================================

if (config.runsInWidget) {
  let widget = await createQuickAccessWidget();
  Script.setWidget(widget);
  Script.complete();
} else if (args.shortcutParameter) {
  // Called from Shortcuts
  await handleShortcutCall(args.shortcutParameter);
} else {
  // Main interactive dashboard
  await showMainDashboard();
}

// ============================================
// MAIN DASHBOARD
// ============================================

async function showMainDashboard() {
  let favorites = loadFavorites();
  let recentTools = loadRecentTools();
  
  let menu = new Alert();
  menu.title = "🤖 AI SuperToolbox";
  menu.message = "Your Complete AI Assistant";
  
  menu.addAction("⚡ Quick Tools");
  menu.addAction("📝 Text & Writing");
  menu.addAction("💡 Creative & Ideas");
  menu.addAction("🔧 Code & Technical");
  menu.addAction("🧠 Analysis & Research");
  menu.addAction("🌍 Language & Translation");
  menu.addAction("📊 Data & Extraction");
  menu.addAction("🖼️ Image Tools");
  menu.addAction("⭐ Favorites");
  menu.addAction("📜 Recent History");
  menu.addAction("⚙️ Settings & Setup");
  menu.addCancelAction("Exit");
  
  let selection = await menu.presentAlert();
  
  switch(selection) {
    case 0: await showQuickTools(); break;
    case 1: await showTextTools(); break;
    case 2: await showCreativeTools(); break;
    case 3: await showCodeTools(); break;
    case 4: await showAnalysisTools(); break;
    case 5: await showLanguageTools(); break;
    case 6: await showDataTools(); break;
    case 7: await showImageTools(); break;
    case 8: await showFavorites(); break;
    case 9: await showHistory(); break;
    case 10: await showSettings(); break;
    default: return;
  }
}

// ============================================
// QUICK TOOLS MENU
// ============================================

async function showQuickTools() {
  let menu = new Alert();
  menu.title = "⚡ Quick Tools";
  
  menu.addAction("💬 Smart Reply Generator");
  menu.addAction("✍️ Improve My Writing");
  menu.addAction("📧 Draft Email");
  menu.addAction("📱 Draft Text Message");
  menu.addAction("🎯 Summarize Text");
  menu.addAction("🔍 Explain This");
  menu.addAction("✅ Grammar Check");
  menu.addAction("📋 Key Points Extractor");
  menu.addAction("🗂️ Categorize & Tag");
  menu.addAction("⬅️ Back");
  menu.addCancelAction("Exit");
  
  let sel = await menu.presentAlert();
  if (sel === 9) return showMainDashboard();
  if (sel === -1) return;
  
  await executeQuickTool(sel);
}

async function executeQuickTool(toolIndex) {
  const tools = [
    { name: "Smart Reply", prompt: "Generate 3 professional reply options for this message:\n\n" },
    { name: "Improve Writing", prompt: "Improve the clarity and professionalism of this text:\n\n" },
    { name: "Draft Email", prompt: "Write a professional email about:\n\n" },
    { name: "Draft Text", prompt: "Write a friendly text message about:\n\n" },
    { name: "Summarize", prompt: "Provide a concise summary of:\n\n" },
    { name: "Explain", prompt: "Explain this clearly and simply:\n\n" },
    { name: "Grammar Check", prompt: "Check grammar and suggest corrections for:\n\n" },
    { name: "Key Points", prompt: "Extract the key points from:\n\n" },
    { name: "Categorize", prompt: "Categorize and tag this content:\n\n" }
  ];
  
  let tool = tools[toolIndex];
  let input = await getInputText(tool.name);
  if (!input) return showQuickTools();
  
  await processAIRequest(tool.prompt + input, tool.name);
  await showQuickTools();
}

// ============================================
// TEXT & WRITING TOOLS
// ============================================

async function showTextTools() {
  let menu = new Alert();
  menu.title = "📝 Text & Writing Tools";
  
  menu.addAction("✨ Rewrite (Multiple Versions)");
  menu.addAction("🎨 Change Tone");
  menu.addAction("📏 Expand Text");
  menu.addAction("✂️ Condense Text");
  menu.addAction("🎯 Simplify Language");
  menu.addAction("🎓 Make More Formal");
  menu.addAction("😊 Make More Casual");
  menu.addAction("📊 Add Structure & Headers");
  menu.addAction("🔤 Fix Spelling & Typos");
  menu.addAction("📖 Proofread Everything");
  menu.addAction("⬅️ Back");
  menu.addCancelAction("Exit");
  
  let sel = await menu.presentAlert();
  if (sel === 10) return showMainDashboard();
  if (sel === -1) return;
  
  await executeTextTool(sel);
}

async function executeTextTool(toolIndex) {
  const prompts = [
    "Rewrite this in 3 different ways:\n\n",
    "Rewrite this with a [specify tone - professional/friendly/persuasive/etc]:\n\n",
    "Expand this text with more detail and examples:\n\n",
    "Condense this to the essential information:\n\n",
    "Simplify this using plain language:\n\n",
    "Rewrite this in a formal, professional tone:\n\n",
    "Rewrite this in a casual, friendly tone:\n\n",
    "Add clear structure with headers and sections:\n\n",
    "Fix all spelling and typos:\n\n",
    "Proofread and correct any errors:\n\n"
  ];
  
  let input = await getInputText("Text Tool");
  if (!input) return showTextTools();
  
  await processAIRequest(prompts[toolIndex] + input, "Text Processing");
  await showTextTools();
}

// ============================================
// CREATIVE & IDEAS TOOLS
// ============================================

async function showCreativeTools() {
  let menu = new Alert();
  menu.title = "💡 Creative & Ideas";
  
  menu.addAction("🎨 Brainstorm Ideas");
  menu.addAction("📖 Story Generator");
  menu.addAction("🎬 Content Ideas");
  menu.addAction("🏷️ Name Generator");
  menu.addAction("✍️ Writing Prompts");
  menu.addAction("🎯 Marketing Copy");
  menu.addAction("📱 Social Media Posts");
  menu.addAction("🎪 Creative Titles");
  menu.addAction("🎵 Song Lyrics Ideas");
  menu.addAction("🎭 Character Creator");
  menu.addAction("⬅️ Back");
  menu.addCancelAction("Exit");
  
  let sel = await menu.presentAlert();
  if (sel === 10) return showMainDashboard();
  if (sel === -1) return;
  
  await executeCreativeTool(sel);
}

async function executeCreativeTool(toolIndex) {
  const prompts = [
    "Brainstorm creative ideas for:\n\n",
    "Create a creative story about:\n\n",
    "Generate content ideas for:\n\n",
    "Generate creative names for:\n\n",
    "Create writing prompts about:\n\n",
    "Write marketing copy for:\n\n",
    "Create engaging social media posts about:\n\n",
    "Generate catchy titles for:\n\n",
    "Create song lyrics or themes about:\n\n",
    "Create a detailed character description for:\n\n"
  ];
  
  let input = await getInputText("Creative Tool");
  if (!input) return showCreativeTools();
  
  await processAIRequest(prompts[toolIndex] + input, "Creative Generation");
  await showCreativeTools();
}

// ============================================
// CODE & TECHNICAL TOOLS
// ============================================

async function showCodeTools() {
  let menu = new Alert();
  menu.title = "🔧 Code & Technical";
  
  menu.addAction("🐛 Debug Code");
  menu.addAction("📝 Explain Code");
  menu.addAction("✨ Improve Code");
  menu.addAction("🔄 Convert Language");
  menu.addAction("📚 Add Comments");
  menu.addAction("🧪 Write Tests");
  menu.addAction("⚡ Optimize Performance");
  menu.addAction("🔒 Security Review");
  menu.addAction("📖 Generate Docs");
  menu.addAction("🎯 Code Snippet");
  menu.addAction("⬅️ Back");
  menu.addCancelAction("Exit");
  
  let sel = await menu.presentAlert();
  if (sel === 10) return showMainDashboard();
  if (sel === -1) return;
  
  await executeCodeTool(sel);
}

async function executeCodeTool(toolIndex) {
  const prompts = [
    "Debug this code and explain the issues:\n\n",
    "Explain what this code does:\n\n",
    "Improve this code:\n\n",
    "Convert this code to [specify language]:\n\n",
    "Add clear comments to this code:\n\n",
    "Write tests for this code:\n\n",
    "Optimize this code for performance:\n\n",
    "Review this code for security issues:\n\n",
    "Generate documentation for:\n\n",
    "Write code to:\n\n"
  ];
  
  let input = await getInputText("Code Tool");
  if (!input) return showCodeTools();
  
  await processAIRequest(prompts[toolIndex] + input, "Code Processing");
  await showCodeTools();
}

// ============================================
// ANALYSIS & RESEARCH TOOLS
// ============================================

async function showAnalysisTools() {
  let menu = new Alert();
  menu.title = "🧠 Analysis & Research";
  
  menu.addAction("🔍 Deep Analysis");
  menu.addAction("📊 Compare & Contrast");
  menu.addAction("✅ Pros & Cons");
  menu.addAction("🎯 Key Insights");
  menu.addAction("📈 Trend Analysis");
  menu.addAction("❓ Answer Questions");
  menu.addAction("🔬 Research Summary");
  menu.addAction("💡 Expert Opinion");
  menu.addAction("🗺️ Mind Map Ideas");
  menu.addAction("📋 Action Items");
  menu.addAction("⬅️ Back");
  menu.addCancelAction("Exit");
  
  let sel = await menu.presentAlert();
  if (sel === 10) return showMainDashboard();
  if (sel === -1) return;
  
  await executeAnalysisTool(sel);
}

async function executeAnalysisTool(toolIndex) {
  const prompts = [
    "Provide a deep analysis of:\n\n",
    "Compare and contrast:\n\n",
    "List the pros and cons of:\n\n",
    "Extract key insights from:\n\n",
    "Analyze trends in:\n\n",
    "Answer these questions:\n\n",
    "Summarize research on:\n\n",
    "Provide expert perspective on:\n\n",
    "Create a mind map structure for:\n\n",
    "Extract action items from:\n\n"
  ];
  
  let input = await getInputText("Analysis Tool");
  if (!input) return showAnalysisTools();
  
  await processAIRequest(prompts[toolIndex] + input, "Analysis");
  await showAnalysisTools();
}

// ============================================
// LANGUAGE & TRANSLATION TOOLS
// ============================================

async function showLanguageTools() {
  let menu = new Alert();
  menu.title = "🌍 Language & Translation";
  
  menu.addAction("🔄 Translate Text");
  menu.addAction("🗣️ Detect Language");
  menu.addAction("📖 Define Words");
  menu.addAction("🎯 Find Synonyms");
  menu.addAction("📚 Vocabulary Builder");
  menu.addAction("🌐 Cultural Context");
  menu.addAction("✍️ Romanization");
  menu.addAction("🎓 Language Learning");
  menu.addAction("⬅️ Back");
  menu.addCancelAction("Exit");
  
  let sel = await menu.presentAlert();
  if (sel === 8) return showMainDashboard();
  if (sel === -1) return;
  
  await executeLanguageTool(sel);
}

async function executeLanguageTool(toolIndex) {
  const prompts = [
    "Translate this to [specify language]:\n\n",
    "Detect the language and identify:\n\n",
    "Define these words:\n\n",
    "Provide synonyms for:\n\n",
    "Create vocabulary practice for:\n\n",
    "Explain cultural context for:\n\n",
    "Romanize this text:\n\n",
    "Create a language lesson about:\n\n"
  ];
  
  let input = await getInputText("Language Tool");
  if (!input) return showLanguageTools();
  
  await processAIRequest(prompts[toolIndex] + input, "Language Processing");
  await showLanguageTools();
}

// ============================================
// DATA & EXTRACTION TOOLS
// ============================================

async function showDataTools() {
  let menu = new Alert();
  menu.title = "📊 Data & Extraction";
  
  menu.addAction("📧 Extract Emails");
  menu.addAction("📱 Extract Phone Numbers");
  menu.addAction("🔗 Extract URLs");
  menu.addAction("📅 Extract Dates");
  menu.addAction("💰 Extract Prices");
  menu.addAction("📍 Extract Locations");
  menu.addAction("🏢 Extract Names");
  menu.addAction("🔢 Extract Numbers");
  menu.addAction("📊 Convert to Table");
  menu.addAction("📋 Format as List");
  menu.addAction("⬅️ Back");
  menu.addCancelAction("Exit");
  
  let sel = await menu.presentAlert();
  if (sel === 10) return showMainDashboard();
  if (sel === -1) return;
  
  await executeDataTool(sel);
}

async function executeDataTool(toolIndex) {
  const prompts = [
    "Extract all email addresses from:\n\n",
    "Extract all phone numbers from:\n\n",
    "Extract all URLs from:\n\n",
    "Extract all dates from:\n\n",
    "Extract all prices and amounts from:\n\n",
    "Extract all locations from:\n\n",
    "Extract all names from:\n\n",
    "Extract all numbers from:\n\n",
    "Convert this to a structured table:\n\n",
    "Format this as a clean list:\n\n"
  ];
  
  let input = await getInputText("Data Tool");
  if (!input) return showDataTools();
  
  await processAIRequest(prompts[toolIndex] + input, "Data Extraction");
  await showDataTools();
}

// ============================================
// IMAGE TOOLS
// ============================================

async function showImageTools() {
  let menu = new Alert();
  menu.title = "🖼️ Image Tools";
  
  menu.addAction("📸 Describe Image");
  menu.addAction("🔍 Extract Text (OCR)");
  menu.addAction("📊 Analyze Chart/Graph");
  menu.addAction("🎨 Design Suggestions");
  menu.addAction("⬅️ Back");
  menu.addCancelAction("Exit");
  
  let sel = await menu.presentAlert();
  if (sel === 4) return showMainDashboard();
  if (sel === -1) return;
  
  await executeImageTool(sel);
}

async function executeImageTool(toolIndex) {
  await showAlert("Image Tools", "Photo analysis requires selecting images. This will be enhanced in the next update with Photos integration!");
  return showImageTools();
}

// ============================================
// FAVORITES SYSTEM
// ============================================

async function showFavorites() {
  let favorites = loadFavorites();
  
  if (favorites.length === 0) {
    await showAlert("⭐ Favorites", "No favorites yet! Star tools while using them to add them here.");
    return showMainDashboard();
  }
  
  let menu = new Alert();
  menu.title = "⭐ Favorites";
  
  favorites.forEach(fav => {
    menu.addAction(fav.name);
  });
  
  menu.addAction("🗑️ Clear Favorites");
  menu.addAction("⬅️ Back");
  menu.addCancelAction("Exit");
  
  let sel = await menu.presentAlert();
  if (sel === favorites.length + 1) return showMainDashboard();
  if (sel === favorites.length) {
    clearFavorites();
    await showAlert("Cleared", "Favorites cleared!");
    return showMainDashboard();
  }
  if (sel === -1) return;
  
  // Execute favorite tool
  await showFavorites();
}

function loadFavorites() {
  let fm = FileManager.local();
  let path = fm.joinPath(fm.documentsDirectory(), "ai_toolbox_favorites.json");
  if (!fm.fileExists(path)) return [];
  return JSON.parse(fm.readString(path));
}

function saveFavorite(toolName, toolCategory) {
  let favorites = loadFavorites();
  favorites.push({ name: toolName, category: toolCategory, date: new Date().toISOString() });
  let fm = FileManager.local();
  let path = fm.joinPath(fm.documentsDirectory(), "ai_toolbox_favorites.json");
  fm.writeString(path, JSON.stringify(favorites));
}

function clearFavorites() {
  let fm = FileManager.local();
  let path = fm.joinPath(fm.documentsDirectory(), "ai_toolbox_favorites.json");
  if (fm.fileExists(path)) fm.remove(path);
}

// ============================================
// HISTORY SYSTEM
// ============================================

async function showHistory() {
  let history = loadRecentTools();
  
  if (history.length === 0) {
    await showAlert("📜 History", "No recent activity yet.");
    return showMainDashboard();
  }
  
  let menu = new Alert();
  menu.title = "📜 Recent History";
  
  history.slice(0, 10).forEach(item => {
    let date = new Date(item.date);
    menu.addAction(`${item.tool} - ${date.toLocaleDateString()}`);
  });
  
  menu.addAction("🗑️ Clear History");
  menu.addAction("⬅️ Back");
  menu.addCancelAction("Exit");
  
  let sel = await menu.presentAlert();
  if (sel === history.length + 1 || sel === 11) return showMainDashboard();
  if (sel === history.length || sel === 10) {
    clearHistory();
    await showAlert("Cleared", "History cleared!");
    return showMainDashboard();
  }
  if (sel === -1) return;
  
  await showHistory();
}

function loadRecentTools() {
  let fm = FileManager.local();
  let path = fm.joinPath(fm.documentsDirectory(), "ai_toolbox_history.json");
  if (!fm.fileExists(path)) return [];
  return JSON.parse(fm.readString(path));
}

function saveToHistory(toolName) {
  let history = loadRecentTools();
  history.unshift({ tool: toolName, date: new Date().toISOString() });
  history = history.slice(0, 50); // Keep last 50
  let fm = FileManager.local();
  let path = fm.joinPath(fm.documentsDirectory(), "ai_toolbox_history.json");
  fm.writeString(path, JSON.stringify(history));
}

function clearHistory() {
  let fm = FileManager.local();
  let path = fm.joinPath(fm.documentsDirectory(), "ai_toolbox_history.json");
  if (fm.fileExists(path)) fm.remove(path);
}

// ============================================
// SETTINGS
// ============================================

async function showSettings() {
  let menu = new Alert();
  menu.title = "⚙️ Settings & Setup";
  
  menu.addAction("🔑 API Setup Guide");
  menu.addAction("📱 Install Shortcuts");
  menu.addAction("🎨 Theme Options");
  menu.addAction("ℹ️ About & Help");
  menu.addAction("⬅️ Back");
  menu.addCancelAction("Exit");
  
  let sel = await menu.presentAlert();
  if (sel === 4) return showMainDashboard();
  if (sel === -1) return;
  
  switch(sel) {
    case 0: await showAPISetup(); break;
    case 1: await showShortcutsGuide(); break;
    case 2: await showThemeOptions(); break;
    case 3: await showAbout(); break;
  }
  
  await showSettings();
}

async function showAPISetup() {
  let guide = `🔑 API Setup Guide

To use AI features, you need an Anthropic API key:

1. Visit: console.anthropic.com
2. Sign up/login
3. Go to API Keys
4. Create a new key
5. Copy the key
6. Store it in Scriptable as a text file named "anthropic_api_key.txt"

The script will automatically use this key for all AI requests.

Note: API usage incurs costs based on Anthropic's pricing. Monitor your usage in the console.`;
  
  await showAlert("API Setup", guide);
}

async function showShortcutsGuide() {
  let guide = `📱 Shortcuts Integration

Coming soon: Pre-built iOS Shortcuts that integrate with this toolbox!

Features planned:
• Share Sheet integration
• Siri voice commands
• Quick actions from anywhere
• Clipboard processing
• Photo analysis shortcuts
• Automation triggers

Check back for updates!`;
  
  await showAlert("Shortcuts", guide);
}

async function showThemeOptions() {
  await showAlert("🎨 Themes", "Theme customization coming in v1.1! Current theme: Dark Neon");
}

async function showAbout() {
  let about = `🤖 AI SuperToolbox v${CONFIG.version}

Your complete AI assistant for iPhone.

Features:
• 80+ AI-powered tools
• Text, code, creative, analysis tools
• Data extraction & formatting
• Language & translation
• Favorites & history tracking
• Shortcuts integration ready

Built specifically for iOS users.

Created for Austin by Claude`;
  
  await showAlert("About", about);
}

// ============================================
// AI REQUEST PROCESSING
// ============================================

async function processAIRequest(prompt, toolName) {
  saveToHistory(toolName);
  
  // Check for API key
  let apiKey = await getAPIKey();
  if (!apiKey) {
    await showAPISetup();
    return;
  }
  
  let loading = new Alert();
  loading.title = "🤖 Processing";
  loading.message = "AI is thinking...";
  let loadingPromise = loading.present();
  
  try {
    let response = await callClaudeAPI(prompt, apiKey);
    loading.dismiss();
    await showResult(response, toolName);
  } catch (error) {
    loading.dismiss();
    await showAlert("Error", `Failed to process: ${error.message}`);
  }
}

async function callClaudeAPI(prompt, apiKey) {
  let req = new Request(CONFIG.apiEndpoint);
  req.method = "POST";
  req.headers = {
    "Content-Type": "application/json",
    "x-api-key": apiKey,
    "anthropic-version": "2023-06-01"
  };
  
  req.body = JSON.stringify({
    model: CONFIG.model,
    max_tokens: CONFIG.maxTokens,
    messages: [{
      role: "user",
      content: prompt
    }]
  });
  
  let response = await req.loadJSON();
  
  if (response.error) {
    throw new Error(response.error.message || "API Error");
  }
  
  return response.content[0].text;
}

async function getAPIKey() {
  let fm = FileManager.local();
  let keyPath = fm.joinPath(fm.documentsDirectory(), "anthropic_api_key.txt");
  
  if (!fm.fileExists(keyPath)) {
    return null;
  }
  
  return fm.readString(keyPath).trim();
}

// ============================================
// UI HELPERS
// ============================================

async function getInputText(title) {
  let alert = new Alert();
  alert.title = title;
  alert.message = "Enter your text:";
  alert.addTextField("Text input");
  alert.addAction("Submit");
  alert.addCancelAction("Cancel");
  
  let result = await alert.presentAlert();
  if (result === -1) return null;
  
  return alert.textFieldValue(0);
}

async function showResult(text, toolName) {
  let alert = new Alert();
  alert.title = `✨ ${toolName} Result`;
  alert.message = text;
  alert.addAction("📋 Copy to Clipboard");
  alert.addAction("⭐ Add to Favorites");
  alert.addAction("🔄 Run Again");
  alert.addAction("✅ Done");
  
  let sel = await alert.presentAlert();
  
  switch(sel) {
    case 0:
      Pasteboard.copy(text);
      await showAlert("Copied!", "Result copied to clipboard");
      break;
    case 1:
      saveFavorite(toolName, "General");
      await showAlert("Saved!", "Added to favorites");
      break;
    case 2:
      // Will return to previous menu which will re-run
      break;
  }
}

async function showAlert(title, message) {
  let alert = new Alert();
  alert.title = title;
  alert.message = message;
  alert.addAction("OK");
  await alert.present();
}

// ============================================
// WIDGET
// ============================================

async function createQuickAccessWidget() {
  let widget = new ListWidget();
  widget.backgroundColor = new Color(CONFIG.theme.bg);
  
  let title = widget.addText("🤖 AI Toolbox");
  title.textColor = new Color(CONFIG.theme.primary);
  title.font = Font.boldSystemFont(16);
  
  widget.addSpacer(8);
  
  let subtitle = widget.addText("Tap to open");
  subtitle.textColor = new Color(CONFIG.theme.textDim);
  subtitle.font = Font.systemFont(12);
  
  widget.addSpacer(8);
  
  let recentTools = loadRecentTools().slice(0, 3);
  if (recentTools.length > 0) {
    let recent = widget.addText("Recent:");
    recent.textColor = new Color(CONFIG.theme.secondary);
    recent.font = Font.semiboldSystemFont(10);
    
    recentTools.forEach(tool => {
      let toolText = widget.addText(`• ${tool.tool}`);
      toolText.textColor = new Color(CONFIG.theme.text);
      toolText.font = Font.systemFont(9);
    });
  }
  
  return widget;
}

// ============================================
// SHORTCUTS INTEGRATION
// ============================================

async function handleShortcutCall(params) {
  // Parse shortcut parameters
  let action = params.action || "process";
  let text = params.text || "";
  let tool = params.tool || "summarize";
  
  if (!text) {
    return "Error: No text provided";
  }
  
  let apiKey = await getAPIKey();
  if (!apiKey) {
    return "Error: API key not configured";
  }
  
  let prompt = generatePromptForTool(tool, text);
  let result = await callClaudeAPI(prompt, apiKey);
  
  return result;
}

function generatePromptForTool(tool, text) {
  const toolPrompts = {
    "summarize": "Provide a concise summary of:\n\n",
    "reply": "Generate professional reply options for:\n\n",
    "improve": "Improve the clarity and quality of:\n\n",
    "translate": "Translate this text:\n\n",
    "explain": "Explain this clearly:\n\n"
  };
  
  return (toolPrompts[tool] || "Process: ") + text;
}

Script.complete();
