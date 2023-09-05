export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "49b8191424msh2d8dd5250df6251p19a0b7jsn4322fbed841c",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  const result = await response.json();

  return result;
}
