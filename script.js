
function get_random_dog_image(){

    url = "https://dog.ceo/api/breeds/image/random";
  
    fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      display_image(data.message);
    })
    .catch(function(error){
      console.log("Error: " + error);
    });
  
  
  }
  
  function display_image(image_url){
    document.getElementById("image").src = image_url;
  }
  
  
  
  
  
  
  
  
  
  
  