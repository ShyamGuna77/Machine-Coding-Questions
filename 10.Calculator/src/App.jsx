function App() {
  const buttons = [
    "AC",
    "%",
    "/",
    "*",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    ".",
    "0",
    "=",
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100">
        <div className="bg-black p-6 rounded-3xl shadow-lg w-80">
          {/* Expression Display */}
          <div className="text-right text-slate-300 text-lg p-2 bg-black rounded-md mb-2">
            Expression
          </div>

          {/* Value Display */}
          <div className="text-right text-3xl p-4 bg-black rounded-md mb-4 text-white">
            Value
          </div>

          {/* Grid for buttons */}
          <div className="grid grid-cols-4 gap-2 ">
            {buttons.map((btn) => (
              <button
                key={btn}
                className={`p-4 rounded-full text-2xl font-semibold ${
                  btn === "AC" || btn === "="
                    ? "bg-gradient-to-r from-[#F74467] to-[#D8345F] text-gray-800"
                    : btn === "%"
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "bg-gray-800 hover:bg-gray-500 text-white"
                } ${btn === "="  ? "col-span-2" : " "} ${btn === "AC"  ? "col-span-2" : " "}`}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
