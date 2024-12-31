

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
            "image": { "url": "https://media.istockphoto.com/id/641448082/photo/beautiful-tropical-beach-front-hotel-resort-with-swimming-pool-sunshine.jpg?s=612x612&w=0&k=20&c=9PyitcP743oS7oGAoSW8iGDjf1goapy40Ol7PcCNv24=", "description": "Exterior view of Presken Residence Annex" }
        },
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
            "image": { "url": "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=1024x1024&w=is&k=20&c=uzDy4YWgDC1bx7I6V7z4X8jRuIS3GUyF5w2euvucBwA=", "description": "Heritage Hotel Exterior" }
        },
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
            "image": { "url": "https://media.istockphoto.com/id/187363337/photo/modern-hotel-building-in-summer.jpg?s=1024x1024&w=is&k=20&c=eAOaQqAgWgAKxRcqW3ahTsB6zhZ-ieNW_y4_POUUxgI=", "description": "Heritage Hotel Exterior" }
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
                "url": "https://media.istockphoto.com/id/1331465591/photo/3d-render-of-a-luxury-hotel-swimming-pool.jpg?s=1024x1024&w=is&k=20&c=cSdl-Aqh97ntSU9uyt9ypcJ6oOCeJOJmnOdBlRTk8js=",
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
                "url": "https://media.istockphoto.com/id/1083820944/photo/3d-render-pool-spa-wellness-space.jpg?s=1024x1024&w=is&k=20&c=C_bX99sg6-uiFo4-2dNoZcJDXmJc1mZyhBfr3-SwjwU=",
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
                "url": "https://media.istockphoto.com/id/157424930/photo/swimingpool.jpg?s=1024x1024&w=is&k=20&c=EVBGwmkD95OkPJ2-zKjPr2tNVY0xSrOodQfGHs24CN8=",
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
                "url": "https://media.istockphoto.com/id/1496654360/photo/3d-rendering-of-new-concrete-house-in-modern-style-in-evening-isolated-on-gray.jpg?s=1024x1024&w=is&k=20&c=tVFbZci_6qTisof5tPHJ-3XZ0xVSGO4h87efezL_TMw=",
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
                "url": "https://media.istockphoto.com/id/585146354/photo/3d-render-of-house-design.jpg?s=1024x1024&w=is&k=20&c=9LKsUPfhzpttHe4A4uFNx5xE7THzZxYxArUkBb5Y8H0=",
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
                "url": "https://media.istockphoto.com/id/1163010325/photo/indoor-swimming-pool.jpg?s=1024x1024&w=is&k=20&c=AWRyIrDd3obUEfHf6fAhO5JmkHX9w9arO4U-n_ePrXw=",
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
                "url": "https://media.istockphoto.com/id/478851724/photo/indoor-swimming-pool.jpg?s=1024x1024&w=is&k=20&c=_Cx2FsrO4nEQ3hRKJcrdx8VQJpha4NpWs8Z4Z-tJ_T4=",
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
                "url": "https://media.istockphoto.com/id/489960980/photo/large-hot-tub-in-a-health-spa.jpg?s=1024x1024&w=is&k=20&c=r80vG-71bngTcIgozjcq7jqLeBGMBczJynnbwEJgAxk=",
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
                "url": "https://media.istockphoto.com/id/832538728/photo/indoor-swimming-pool-and-wooden-deck-relax-design.jpg?s=1024x1024&w=is&k=20&c=jeRCWy6zcHKOg6JedwnzyIW8qnQ3VkQoux6LsPJVmhM=",
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
                "url": "https://media.istockphoto.com/id/1464591970/photo/modern-luxury-riad-living-room-garden-and-swimming-pool-in-courtyard-morocco-style.jpg?s=1024x1024&w=is&k=20&c=eiOYtFUv5OOQw50tLC4BjqG6bUgJejmtd8px0WGycng=",
                "description": "Heritage Hotel Exterior"
            }
        }

        // Add more hotels as needed...
    ]
};

// Function to display hotels
function displayHotels() {
    const hotelsContainer = document.getElementById('hotels-container');
    hotelsContainer.innerHTML = ''; // Clear previous results
let display = ''
    hotelsData.hotels.map(hotel=>{
display += `  <div class="hotels-container" style="display:flex;gap:20px;margin-bottom:15px; align-items:center;">


    <img src="${hotel.image.url}" style="flex:1;" alt="${hotel.image.description}">

<div style="flex:2">
    <h2>${hotel.name}</h2>
    <p>Location: ${hotel.location.city} (${hotel.location.distance_from_center_km} km from center)</p>
    <p>Rating: ${hotel.rating.score} (${hotel.rating.description}, ${hotel.rating.reviews_count} reviews)</p>
    <div>
        <strong>Room Type:</strong> ${hotel.rooms[0].type}<br>
        <strong>Bed Type:</strong> ${hotel.rooms[0].bed_type}<br>
        <strong>Price:</strong> NGN ${hotel.rooms[0].pricing.price_per_night_ngn}
        (${hotel.rooms[0].pricing.price_description})<br>
    </div>
</div>

</div>

`
        document.getElementById('hotels-container').innerHTML = display
    })

//     hotelsData.hotels.forEach(hotel => {
//         const hotelDiv = document.createElement('div');
//         hotelDiv.classList.add('hotel');
//         hotelDiv.style.display = 'flex';
//         hotelDiv.innerHTML = `
        
// x

//         `;
//         hotelsContainer.appendChild(hotelDiv);
//     });
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

