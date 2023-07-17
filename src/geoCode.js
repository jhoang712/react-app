// const NodeGeocoder = require('node-geocoder');
import NodeGeocoder from 'node-geocoder'

// const options = {
//   provider: 'openstreetmap'
// };

// const geocoder = NodeGeocoder(options);

// // Using callback
// const res = await geocoder.geocode('los angeles, california');

// console.log(res[0].latitude)

export async function getGeoCode(location) {
    const options = {
        provider: 'openstreetmap'
      };
      
      const geocoder = NodeGeocoder(options);
      
      // Using callback
      const res = await geocoder.geocode(location);
      return res[0];
}