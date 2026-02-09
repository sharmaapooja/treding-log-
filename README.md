
# ProTrade Journal - Advanced Trading Journal Web App

A professional-grade trading journal designed for personal use.

## 🚀 How to Run

1.  **Extract** the provided files into a folder.
2.  **Open** the folder in VS Code.
3.  **Ensure** you have Node.js installed.
4.  **Install dependencies**:
    ```bash
    npm install
    # and specifically for excel handling
    npm install xlsx
    # for charts
    npm install recharts
    # for AI
    npm install @google/genai
    ```
5.  **Run the project**:
    ```bash
    npm start
    ```
6.  **API Key**: For AI Analysis, ensure you have an environment variable `API_KEY` set with your Gemini API Key.

## 📁 Project Structure

- `App.tsx`: The main orchestration layer and UI logic.
- `utils/calculations.ts`: Automated math for Gross/Net P&L, Win Rates, etc.
- `utils/excelHandler.ts`: Handles generation of `.xlsx` files using SheetJS.
- `services/geminiService.ts`: Integration with Gemini 3 Pro for deep trade analysis.
- `types.ts`: Core data structures.

## 💾 Excel Logic

The app implements a **Persistent Excel Strategy**:
1.  **State Management**: All entries are stored in the browser's `localStorage` for instant persistence.
2.  **Excel Export**: The `exportTradesToExcel` utility uses the `xlsx` library to map JSON trade data to a structured spreadsheet with correct headers.
3.  **Auto-Update Logic**: In a production Node.js environment, the app would post to a `/api/save` endpoint that uses `fs` to append to `/data/trading_journal.xlsx`. In this web version, we provide a clear manual "Export to Excel" button to sync your local data to a physical file.

## 🧠 AI Mentor

Using **Gemini 3 Pro** with a `thinkingBudget` of 32768, the Mentor tab doesn't just give generic advice. It processes your specific trade symbols, P&L, and remarks to identify psychological biases and strategy flaws.
