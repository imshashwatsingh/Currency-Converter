
# Currency Converter

A simple Currency Converter app built with React that allows users to convert between different currencies in real-time. The app uses a free API for currency conversion and displays the result with an intuitive user interface.

---

## Features:
- **Currency Conversion:** Convert from one currency to another based on real-time exchange rates.
- **Swap Currencies:** Swap the "From" and "To" currencies with a click of a button.
- **Customizable Currency List:** Dynamically populated currency options based on the available data.

---

## Tech Stack:
- **Frontend:** React, Tailwind CSS
- **API:** Currency data fetched using the `@fawazahmed0/currency-api` for real-time conversion rates.

---

## Key Files & Explanation:

### 1. `App.jsx`
The main component of the app that holds the logic for currency conversion, user inputs, and rendering of the UI.

- **State Variables:**
  - `amount`: Tracks the amount to convert.
  - `from`: The base currency from which conversion is happening.
  - `to`: The target currency to which the amount will be converted.
  - `convertedAmount`: Stores the result of the conversion.

- **Functions:**
  - `swap()`: Swaps the "From" and "To" currencies, making the app more interactive.
  - `convert()`: Converts the amount from the `from` currency to the `to` currency using the latest exchange rates fetched by the `useCurrencyInfo` hook.

- **Rendering Input Fields:**
  The `InputBox` component is used for rendering the input fields for both the "From" and "To" sections, including the amount and currency selection dropdown.

### 2. `InputBox.js`
This component is responsible for rendering the input fields for both "From" and "To" currency sections.

- **Props:**
  - `label`: A string used to identify the input box (e.g., "From" or "To").
  - `amount`: The current amount in the input field.
  - `onAmountChange`: A callback function that updates the `amount` state when the user changes the value.
  - `onCurrencyChange`: A callback function that updates the `from` or `to` currency when the user selects a different currency from the dropdown.
  - `currencyOptions`: The list of available currencies to choose from.
  - `selectCurrency`: The current selected currency.
  - `myClassName`: Custom CSS class for additional styling.
  - `amountDisable` and `currencyDisable`: Booleans to enable/disable the respective input fields.

### 3. `useCurrencyInfo.js`
A custom hook that fetches the real-time currency exchange rates based on the selected currency (`from` currency) and returns the conversion rates.

- **Effect Hook:** Uses `useEffect` to fetch data from the currency API when the selected `from` currency changes.
- **API Call:** Fetches data from `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json`, where `{currency}` is the base currency for conversion.
- **Data Handling:** On successful data retrieval, the hook updates the state with the exchange rates for the selected currency.

---

## Working:
1. **User Inputs:** 
   - The user enters an amount in the "From" currency input box.
   - The user selects the "From" and "To" currencies using the dropdown menus.
   
2. **Conversion Logic:**
   - When the user clicks the "Convert" button, the app fetches the real-time conversion rate using the `useCurrencyInfo` hook and multiplies the entered amount by the conversion rate for the "To" currency.
   
3. **Result Display:**
   - The converted amount is displayed in the "To" currency input box.

4. **Currency Swap:** 
   - The user can swap the "From" and "To" currencies using the "Swap" button.

---

## Setup Instructions:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/imshashwatsingh/Currency-Converter.git
   ```

2. **Install dependencies:**
   Navigate into the project folder and install the required dependencies using npm or yarn:
   ```bash
   cd currency-converter
   npm install
   ```

3. **Run the app:**
   After installing the dependencies, start the development server:
   ```bash
   npm run dev
   ```

4. **Open the app in your browser:**
   The app will be accessible at `http://localhost:5173`.

---

## Screenshots:

![Currency Converter App](Screenshot.png)

---

## Contributing:
Feel free to fork the repository and make improvements. If you find any issues, please open an issue or create a pull request with your changes.

---

## License:
This project is open-source and available under the MIT License.

---

## Credits:
- The currency data is provided by the [Currency API](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json).
- Built with React and Tailwind CSS.
