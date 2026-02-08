import mockData from "../mockHotels.json";

export async function fetchHotels(city = "miami") {
  try {
    const url = "https://raw.githubusercontent.com/salvodavie/truTravelAPI/166a12791d4d9d2a6a84ecad89c09790d9adfd41/truTravelAPI.json";
    const res = await fetch(url);

    if (!res.ok) throw new Error("Live API unavailable");

    const data = await res.json();
    console.log("Fetched data:", data);
    console.log("Is array?", Array.isArray(data));

    return data.hotels.filter(
      hotel => hotel.city.toLowerCase() === city.toLowerCase()
    );

  } catch (err) {
    console.warn("⚠️ Using mock data:", err.message);
    return mockData.filter(h => h.city.toLowerCase() === city.toLowerCase());
  }
}
