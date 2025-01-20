
import Loading from "./Loading";
import { useState, useEffect } from "react";
import Tours from "./Tours";

export default function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://course-api.com/react-tours-project";

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <div className="flex flex-col justify-center min-h-screen items-center bg-slate-100">
      <h2 className="font-bold text-2xl underline decoration-green-500 decoration-2">
        Our Tours
      </h2>
      {loading ? (
        <Loading />
      ) : tours.length > 0 ? (
        <Tours tours={tours} removeTour={removeTour} />
      ) : (
        <div className="text-center mt-8">
          <h3 className="text-lg font-semibold">No Tours Left</h3>
          <button
            onClick={fetchData}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Refresh
          </button>
        </div>
      )}
    </div>
  );
}
