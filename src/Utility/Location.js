const GOOGLE_API_KEY = 'AIzaSyC63G3HNHF6Im66pM25EFoPqdMc-iM4ltc';

export async function getAddressFromCoords(coords){
   const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${GOOGLE_API_KEY}`)
   if (!response.ok){
    throw new Error('Failed to fetc address.Please try again!');
   }
   const data = await response.json();
   if(data.error_message){
       throw new Error (data.error_message);
   }
   const address = data.results[0].formaterd_address;
   return address;
}



export async function getCoordsFromAddress(address){
 const urlAddress = encodeURI(address);
 const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${GOOGLE_API_KEY}`)
 if (!response.ok){
     throw new Error('Failed to fetc coordnates.Please try again!');
    }
    const data = await response.json();
    if(data.error_message){
        throw new Error (data.error_message);
    }
    const coordinates = data.results[0].geometry.location;
    return coordinates;
}