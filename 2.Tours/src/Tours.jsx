import Tour from "./Tour";

export default function Tours({ tours, removeTour }) {
  return (
    <div>
      <h2 className="mt-4 font-bold text-xl underline decoration-green-700 decoration-2">
        Places are
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {tours.map((tour) => {
          return (
            <Tour
              key={tour.id}
              {...tour}
              removeTour={removeTour} // Pass removeTour to handle removal
            />
          );
        })}
      </div>
    </div>
  );
}
