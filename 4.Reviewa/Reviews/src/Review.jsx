import { useState } from "react";
import people from "./data";


const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    while (randomNumber === index) {
      randomNumber = Math.floor(Math.random() * people.length);
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <div className=" h-[490px] max-w-2xl flex flex-col items-center justify-center bg-white rounded-md shadow-lg">
      <img
        src={image}
        alt={name}
        className="h-[140px] items-center rounded-full object-cover w-[140px] mb-4 "
      />

      <h4 className="font-semibold text-xl m-1">{name}</h4>
      <p className="text-violet-700 text-xl font-medium">{job}</p>
      <p className="text-base leading-relaxed  p-4 m-4">{text}</p>
      <div className="flex w-full justify-evenly">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={prevPerson}
        >
          Prev
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={nextPerson}
        >
          Next
        </button>
      </div>
      <button
        className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-600"
        onClick={randomPerson}
      >
        Random Review
      </button>
    </div>
  );
};

export default Review;
