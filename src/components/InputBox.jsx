import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange, // function
  onCurrencyChange, // function
  currencyOptions = [],
  selectCurrency = "usd",
  myClassName = "",
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${myClassName}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(e.target.value)
          }
          // onAmountChange && -> this ensures if onAmountChange exits only then run this function !
          // onAmountChange Callback will be defined in App.jsx
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
        >
          {currencyOptions.map((currency) => (
            // Remember the key while loopin in React !
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
