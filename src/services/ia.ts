const COHERE_API_KEY = '31zHZrmhWpPASKiPWKCUiezwjfbW4uUBfP0OrYRm'
const COHERE_API_GENERATE_URL = 'https://api.cohere.ai/generate'

export async function generateFunctionName(function_goal: string) {
  const data = {
    model: 'xlarge',
    prompt: `This is a name function generator.
--
Function goal: "Generate a random number for lottery"
Function name: "generateRandomNumber"
--
Function goal: "Genera un número aleatorio para lotería"
Function name: "generateRandomNumber"
--
Function goal: "Create an array of fruits"
Function name: "createFruitArray"
--
Function goal: "Crea un array de frutas"
Function name: "createFruitArray"
--
Function goal: "Get the weather for today"
Function name: "getTodaysWeather"
--
Function goal: "Obtener el clima de hoy"
Function name: "getTodaysWeather"
--
Function goal: "Get the traffic for a specific route"
Function name: "getRouteTraffic"
--
Function goal: "Obtener el tráfico para una ruta específica"
Function name: "getRouteTraffic"
--
Function goal: "Register and login an user"
Function name: "registerAndLoginUser"
--
Function goal: "Registrar y iniciar sesión de un usuario"
Function name: "registerAndLoginUser"
--
Function goal: "Calculate the average of a set of numbers"
Function name: "calculateAverage"
--
Function goal: "Calcular el promedio de un conjunto de números"
Function name: "calculateAverage"
--
Function goal: "Find the shortest path between two points in a graph"
Function name: "findShortestPath"
--
Function goal: "Encontrar la ruta más corta entre dos puntos en un grafo"
Function name: "findShortestPath"
--
Function goal: "Predict the price of a stock based on historical prices and financial news"
Function name: "predictStockPrice"
--
Function goal: "Predecir el precio de una acción basado en precios históricos y noticias financieras"
Function name: "predictStockPrice"
--
Function goal: "Classify images into different categories (e.g. cats, dogs, horses, etc.)"
Function name: "classifyImage"
--
Function goal: "Clasificar imágenes en diferentes categorías (por ejemplo, gatos, perros, caballos, etc.)"
Function name: "classifyImage"
--
Function goal: "Detect and correct grammatical errors in a given text"
Function name: "correctGrammaticalErrors"
--
Function goal: "Detectar y corregir errores gramaticales en un texto dado"
Function name: "correctGrammaticalErrors"
--
Function goal: "${function_goal}"
Function name:`,
    max_tokens: 40,
    temperature: 0.3,
    k: 0,
    p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: ['--'],
    return_likelihoods: 'NONE'
  }

  const response = await fetch(COHERE_API_GENERATE_URL, {
    method: 'POST',
    headers: {
      Authorization: `BEARER ${COHERE_API_KEY}`,
      "Content-Type": 'application/json',
      "Cohere-Version": '2022-12-06'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())

  const { text } = response.generations[0]
  
  return text
    .replace('--', '')
    .replaceAll('"', '')
    .trim()
}