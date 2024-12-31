import Heritage from './Hotelsimgs/heritage.jpeg'
import Presken from './Hotelsimgs/Presken.jpeg'
import LagosInn from './Hotelsimgs/cityinn.jpeg'
import LagosComfort from './Hotelsimgs/Lagos Comfort Hotel.jpeg.jpeg'
import LuxuryBout from './Hotelsimgs/Luxury Boutique Hote.jpeg.jpeg'
import MountainLodge from './Hotelsimgs/mountainlodge.jpeg.jpeg'
import OceanView from './Hotelsimgs/oceanview.jpeg.jpeg'
import Royal from './Hotelsimgs/royal.jpeg.jpeg'
import Seaside from './Hotelsimgs/seasidevilla.jpeg.jpeg'
import Urban from './Hotelsimgs/urban.jpeg.jpeg'





const hotelsData = {
    "hotels": [
        {
            "name": "Presken Residence Annex",
            "location": { "city": "Ikeja", "distance_from_center_km": 1.7 },
            "rating": { "score": 7.0, "description": "Good", "reviews_count": 510 },
            "rooms": [
                {
                    "type": "Superior King Room",
                    "bed_type": "1 extra-large double bed",
                    "amenities": { "breakfast_included": true, "free_cancellation": true, "prepayment_needed": false },
                    "pricing": { "price_per_night_ngn": 39187, "price_description": "Includes taxes and charges" },
                    "availability": { "nights": 1, "adults": 2 }
                }
            ],
            "image": {Presken }
        },
        // Additional hotel objects go here...
        {
            "name": "Heritage Hotel",
            "location": { "city": "Lagos", "distance_from_center_km": 6.0 },
            "rating": { "score": 7.8, "description": "Good", "reviews_count": 220 },
            "rooms": [
                {
                    "type": "Standard Double Room",
                    "bed_type": "1 double bed",
                    "amenities": { "breakfast_included": false, "free_cancellation": true, "prepayment_needed": false },
                    "pricing": { "price_per_night_ngn": 29000, "price_description": "Includes taxes and charges" },
                    "availability": { "nights": 1, "adults": 2 }
                }
            ],
            "image": { "url": "https://unsplash.com/photos/coconut-palm-trees-in-hotel-lobby-_dS27XGgRyQ", "description": "Heritage Hotel Exterior" }
        },
        {
"name": "Presken Residence Annex",
"location": {
  "city": "Ikeja",
  "distance_from_center_km": 1.7
},
"rating": {
  "score": 7.0,
  "description": "Good",
  "reviews_count": 510
},
"rooms": [
  {
    "type": "Superior King Room",
    "bed_type": "1 extra-large double bed",
    "amenities": {
      "breakfast_included": true,
      "free_cancellation": true,
      "prepayment_needed": false
    },
    "pricing": {
      "price_per_night_ngn": 39187,
      "price_description": "Includes taxes and charges"
    },
    "availability": {
      "nights": 1,
      "adults": 2
    }
  }
],
"image": {
  "url": "https://images.unsplash.com/photo-1574193031872-4c65de9647d6",
  "description": "Exterior view of Presken Residence Annex"
}
},
{
"name": "Royal Suite Hotel",
"location": {
  "city": "Lagos",
  "distance_from_center_km": 5.0
},
"rating": {
  "score": 8.5,
  "description": "Very Good",
  "reviews_count": 320
},
"rooms": [
  {
    "type": "Deluxe Double Room",
    "bed_type": "1 king bed",
    "amenities": {
      "breakfast_included": true,
      "free_cancellation": true,
      "prepayment_needed": false
    },
    "pricing": {
      "price_per_night_ngn": 45000,
      "price_description": "Includes taxes and charges"
    },
    "availability": {
      "nights": 1,
      "adults": 2
    }
  }
],
"image": {
  "url": "https://images.unsplash.com/photo-1598021997755-d177a5e5e062",
  "description": "Royal Suite Hotel Room"
}
},
{
"name": "Ocean View Resort",
"location": {
  "city": "Victoria Island",
  "distance_from_center_km": 3.2
},
"rating": {
  "score": 9.2,
  "description": "Excellent",
  "reviews_count": 150
},
"rooms": [
  {
    "type": "Ocean View Suite",
    "bed_type": "1 queen bed",
    "amenities": {
      "breakfast_included": true,
      "free_cancellation": false,
      "prepayment_needed": true
    },
    "pricing": {
      "price_per_night_ngn": 70000,
      "price_description": "Includes taxes and charges"
    },
    "availability": {
      "nights": 1,
      "adults": 2
    }
  }
],
"image": {
  "url": "https://images.unsplash.com/photo-1555685813-79eFz3h6HSw",
  "description": "Ocean View Resort Pool"
}
},
{
"name": "City Center Inn",
"location": {
  "city": "Lagos",
  "distance_from_center_km": 0.5
},
"rating": {
  "score": 6.8,
  "description": "Fair",
  "reviews_count": 200
},
"rooms": [
  {
    "type": "Standard Room",
    "bed_type": "1 double bed",
    "amenities": {
      "breakfast_included": false,
      "free_cancellation": true,
      "prepayment_needed": false
    },
    "pricing": {
      "price_per_night_ngn": 25000,
      "price_description": "Includes taxes and charges"
    },
    "availability": {
      "nights": 1,
      "adults": 2
    }
  }
],
"image": {
  "url": "https://images.unsplash.com/photo-1573406762134-fd6a0473b79d",
  "description": "City Center Inn"
}
},
{
"name": "Mountain Lodge",
"location": {
  "city": "Abeokuta",
  "distance_from_center_km": 10.0
},
"rating": {
  "score": 8.0,
  "description": "Good",
  "reviews_count": 180
},
"rooms": [
  {
    "type": "Family Room",
    "bed_type": "2 double beds",
    "amenities": {
      "breakfast_included": true,
      "free_cancellation": true,
      "prepayment_needed": false
    },
    "pricing": {
      "price_per_night_ngn": 55000,
      "price_description": "Includes taxes and charges"
    },
    "availability": {
      "nights": 1,
      "adults": 4
    }
  }
],
"image": {
  "url": "https://images.unsplash.com/photo-1562182332-8f5f2d4a6d10",
  "description": "Mountain Lodge Exterior"
}
},
{
"name": "Seaside Villa",
"location": {
  "city": "Lekki",
  "distance_from_center_km": 4.5
},
"rating": {
  "score": 9.0,
  "description": "Excellent",
  "reviews_count": 300
},
"rooms": [
  {
    "type": "Luxury Suite",
    "bed_type": "1 king bed",
    "amenities": {
      "breakfast_included": true,
      "free_cancellation": false,
      "prepayment_needed": true
    },
    "pricing": {
      "price_per_night_ngn": 80000,
      "price_description": "Includes taxes and charges"
    },
    "availability": {
      "nights": 1,
      "adults": 2
    }
  }
],
"image": {
  "url": "https://images.unsplash.com/photo-1521771731503-17f482f4931a",
  "description": "Seaside Villa View"
}
},
{
"name": "Urban Stay Hotel",
"location": {
  "city": "Lagos",
  "distance_from_center_km": 2.0
},
"rating": {
  "score": 7.5,
  "description": "Good",
  "reviews_count": 250
},
"rooms": [
  {
    "type": "Executive Room",
    "bed_type": "1 queen bed",
    "amenities": {
      "breakfast_included": false,
      "free_cancellation": true,
      "prepayment_needed": false
    },
    "pricing": {
      "price_per_night_ngn": 37000,
      "price_description": "Includes taxes and charges"
    },
    "availability": {
      "nights": 1,
      "adults": 2
    }
  }
],
"image": {
  "url": "https://images.unsplash.com/photo-1542181974-5bc74678f5b0",
  "description": "Urban Stay Hotel"
}
},
{
"name": "Lagos Comfort Hotel",
"location": {
  "city": "Lagos",
  "distance_from_center_km": 1.2
},
"rating": {
  "score": 8.3,
  "description": "Very Good",
  "reviews_count": 400
},
"rooms": [
  {
    "type": "Comfort Room",
    "bed_type": "1 king bed",
    "amenities": {
      "breakfast_included": true,
      "free_cancellation": true,
      "prepayment_needed": false
    },
    "pricing": {
      "price_per_night_ngn": 42000,
      "price_description": "Includes taxes and charges"
    },
    "availability": {
      "nights": 1,
      "adults": 2
    }
  }
],
"image": {
  "url": "https://images.unsplash.com/photo-1562182331-79eFz4f6h9f1",
  "description": "Lagos Comfort Hotel Lobby"
}
},
{
"name": "Luxury Boutique Hotel",
"location": {
  "city": "Ikeja",
  "distance_from_center_km": 0.8
},
"rating": {
  "score": 9.5,
  "description": "Exceptional",
  "reviews_count": 120
},
"rooms": [
  {
    "type": "Penthouse Suite",
    "bed_type": "1 king bed",
    "amenities": {
      "breakfast_included": true,
      "free_cancellation": false,
      "prepayment_needed": true
    },
    "pricing": {
      "price_per_night_ngn": 100000,
      "price_description": "Includes taxes and charges"
    },
    "availability": {
      "nights": 1,
      "adults": 2
    }
  }
],
"image": {
  "url": "https://images.unsplash.com/photo-1568581296594-0b95e9f0bc39",
  "description": "Luxury Boutique Hotel Rooftop"
}
},
{
"name": "Heritage Hotel",
"location": {
  "city": "Lagos",
  "distance_from_center_km": 6.0
},
"rating": {
  "score": 7.8,
  "description": "Good",
  "reviews_count": 220
},
"rooms": [
  {
    "type": "Standard Double Room",
    "bed_type": "1 double bed",
    "amenities": {
      "breakfast_included": false,
      "free_cancellation": true,
      "prepayment_needed": false
    },
    "pricing": {
      "price_per_night_ngn": 29000,
      "price_description": "Includes taxes and charges"
    },
    "availability": {
      "nights": 1,
      "adults": 2
    }
  }
],
"image": {
  "url": "https://images.unsplash.com/photo-1570071641643-1c7d6435c5d7",
  "description": "Heritage Hotel Exterior"
}
}



    ]
};
 // Function to display hotels
 function displayHotels() {
    const hotelsContainer = document.getElementById('hotels-container');
    hotelsContainer.innerHTML = ''; // Clear previous results
    hotelsData.hotels.forEach(hotel => {
        const hotelDiv = document.createElement('div');
        hotelDiv.classList.add('hotel');
        hotelDiv.innerHTML = `
            <h2>${hotel.name}</h2>
            <p>Location: ${hotel.location.city} (${hotel.location.distance_from_center_km} km from center)</p>
            <p>Rating: ${hotel.rating.score} (${hotel.rating.description}, ${hotel.rating.reviews_count} reviews)</p>
            <div>
                <strong>Room Type:</strong> ${hotel.rooms[0].type}<br>
                <strong>Bed Type:</strong> ${hotel.rooms[0].bed_type}<br>
                <strong>Price:</strong> NGN ${hotel.rooms[0].pricing.price_per_night_ngn} (${hotel.rooms[0].pricing.price_description})<br>
            </div>
            <img src="${hotel.image.url}" alt="${hotel.image.description}">
        `;
        hotelsContainer.appendChild(hotelDiv);
    });
}

        // Function to display hotels
        function displayHotels() {
            const hotelsContainer = document.getElementById('hotels-container');
            hotelsContainer.innerHTML = ''; // Clear previous results
            hotelsData.hotels.forEach(hotel => {
                const hotelDiv = document.createElement('div');
                hotelDiv.classList.add('hotel');
                hotelDiv.innerHTML = `
                    <h2>${hotel.name}</h2>
                    <p>Location: ${hotel.location.city} (${hotel.location.distance_from_center_km} km from center)</p>
                    <p>Rating: ${hotel.rating.score} (${hotel.rating.description}, ${hotel.rating.reviews_count} reviews)</p>
                    <div>
                        <strong>Room Type:</strong> ${hotel.rooms[0].type}<br>
                        <strong>Bed Type:</strong> ${hotel.rooms[0].bed_type}<br>
                        <strong>Price:</strong> NGN ${hotel.rooms[0].pricing.price_per_night_ngn} (${hotel.rooms[0].pricing.price_description})<br>
                    </div>
                    <img src="${hotel.image.url}" alt="${hotel.image.description}">
                `;
                hotelsContainer.appendChild(hotelDiv);
            });
            hotelsContainer.style.display = 'block'; // Show hotels container
            document.getElementById('show-button').style.display = 'none'; // Hide show button
            document.getElementById('hide-button').style.display = 'inline'; // Show hide button
        }

        // Function to hide hotels
        function hideHotels() {
            const hotelsContainer = document.getElementById('hotels-container');
            hotelsContainer.style.display = 'none'; // Hide hotels container
            document.getElementById('show-button').style.display = 'inline'; // Show show button
            document.getElementById('hide-button').style.display = 'none'; // Hide hide button
        }

        // Show hotels functionality
        document.getElementById('show-button').addEventListener('click', displayHotels);

        // Hide hotels functionality
        document.getElementById('hide-button').addEventListener('click', hideHotels);
