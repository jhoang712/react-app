// weather.d.ts
declare module '../geoCode.js' {
    // Define the types for the getGeoCode function in geoCode.js
    export function getGeoCode(location: string): Promise<{ latitude: number; longitude: number }>;
  }
  
  declare module '../weather.js' {
    // Define the types for the forecastData function in weather.js
    export function forecastData(location: string): Promise<any>; // You can provide a more specific type for the return value if possible
  }
  