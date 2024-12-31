const clientId = 'JkgRAxLdnl0TjqVUqxH1s14AoaE1fxMB'; // Replace with your actual client ID
const clientSecret = 'I6KxGzvwxVyfeXfZ'; // Replace with your actual client secret

const url = 'https://test.api.amadeus.com/v1/security/oauth2/token';
const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
};

const body = new URLSearchParams({
  grant_type: 'client_credentials',
  client_id: clientId,
  client_secret: clientSecret,
}).toString();

fetch(url, {
  method: 'POST',
  headers: headers,
  body: body,
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Parse the JSON from the response
  })
  .then(data => {
    console.log('Access Token:', data); // Extract and log the access token
    data.access_token = localStorage.setItem('token',data.access_token)})

  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  const new_url = "4r-\rrrrrrrr52qw"
  const new_header = {
    'Content-Type': 'application/json', 
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  };
  fetch(new_url, {
    'method': 'GET',
    'headers': new_header
  
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Parse the JSON from the response
  })
  .then(data => {
    console.log('Access Token:', data); // Extract and log the access token
    data.access_token = localStorage.setItem('token',data.access_token)})

  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

 
