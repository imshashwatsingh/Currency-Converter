import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(parseFloat(amount) * currencyInfo[to]);
  };

  return (
    <div className="w-full h-screen flex">
       {/* Left Section - Cool Image */}
       <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      ></div>
      {/* Right Section - Shaded Background */}
      <div className="w-1/2 h-full flex items-center justify-center bg-gradient-to-b from-gray-700 to-blue-400">
        <div className="w-4/5 max-w-md bg-white/20 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-6">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5 mb-6">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full bg-blue-600 text-white px-4 py-1 shadow-md"
              >
                Swap
              </button>
            </div>
            <div className="w-full mb-6">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Convert {from.toUpperCase()} To {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>

     
    </div>
  );
}

export default App;
