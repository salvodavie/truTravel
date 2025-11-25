import mockData from "../mockHotels.json";

export async function fetchHotels(city = "miami") {
  try {
    const url = `http://localhost:4000/hotels?city=${city.toLowerCase()}`;
    const res = await fetch(url);

    if (!res.ok) throw new Error("Live API unavailable");

    const data = await res.json();
    return data;
  
  } catch (err) {
    console.warn("⚠️ Using mock data:", err.message);
    return mockData.filter(h => h.city.toLowerCase() === city.toLowerCase());
  }
}
