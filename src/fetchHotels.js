import mockData from "../mockHotels.json";

export async function fetchHotels(city = "miami") {
  try {
    const url = "https://raw.githubusercontent.com/salvodavie/truTravelAPI/refs/heads/main/truTravelAPI.json";
    const res = await fetch(url);

    if (!res.ok) throw new Error("Live API unavailable");
    const data = await res.json();


    return data.hotels.filter(
      hotel => hotel.city.toLowerCase() === city.toLowerCase()
    );

  } catch (err) {
    console.warn("⚠️ Using mock data:", err.message);
    return mockData.filter(h => h.city.toLowerCase() === city.toLowerCase());
  }
}
