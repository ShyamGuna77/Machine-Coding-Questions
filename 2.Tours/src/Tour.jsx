export default function Tour({ id, image, price, info, name, removeTour }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={image}
        alt={name}
        className="rounded-t-lg w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <h4 className="text-green-500 font-semibold">${price}</h4>
        <p className="text-gray-600 text-sm mt-2">{info}</p>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
          onClick={() => removeTour(id)} // Call removeTour function
        >
          Not Interested
        </button>
      </div>
    </div>
  );
}
