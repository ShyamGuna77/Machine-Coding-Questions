import data from "./data";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useState } from "react";

const Question = () => {
  const [showInfo, setShowInfo] = useState(null);

  return (
    <div className="w-74 h-auto max-w-6xl m-8 bg-gray-100 rounded-lg shadow-md p-6 space-y-6">
      <h2 className="font-semibold text-green-800 text-2xl mb-4 text-center">Questions</h2>
      {data.map((question) => (
        <div
          key={question.id}
          className="bg-white rounded-md p-4 shadow-lg border border-gray-200 transition-all duration-300 ease-in-out"
        >
          {/* Header */}
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-green-800 text-lg">
              {question.title}
            </h3>
            <button
              onClick={() =>
                setShowInfo(showInfo === question.id ? null : question.id)
              }
              className="text-green-800"
            >
              {showInfo === question.id ? <FaMinusCircle /> : <FaPlusCircle />}
            </button>
          </div>

          {/* Info Section */}
          <div
            className={`mt-2 overflow-hidden transition-all duration-300 ${
              showInfo === question.id
                ? "max-h-[200px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-gray-600">{question.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Question;
