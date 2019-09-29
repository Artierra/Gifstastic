$(document).ready(function() {
            $("#test").on("click", function() { alert("hi"); }); // Before you can make any part of your site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called
            topics. // We chose animals for our theme, but you can make a list to your own liking. // Your app should take the topics in this array and create buttons in your HTML. // Try using a loop that appends a button for each string in the array. var topics
                = ['cows', 'pigs', 'chickens', 'ducks', 'goats', 'alpacas', 'geese', 'sheep'];
            for (var i = 0; i < topics.length; i++) { var button = $('<button>');
                button.text(topics[i]);
                button.addClass("animal");
                $('#buttonsDiv').append(button);
                /*div that holds
                   my btns*/
            }
            $("#farmAnimal").on("click", function() {
                        console.log("clicked"); // Storing our giphy API URL for a random farm animal image var queryURL="https://api.giphy.com/v1/gifs/search?api_key=3vqVnlyvaVhJvGZpcbTDlBCUxsKnQdC7&q=farm + animal&limit=10&offset=0&rating=G&lang=en"
                        ; //var queryURL="https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=cats" ; console.log(queryURL); // Perfoming an AJAX GE//T request to our queryURL $.ajax({ url: queryURL, method: "GET" }) .then(function(response) { var
                        results = r esponse.data;
                        console.log(results);
                        for (var i = 0; i < 11; i++) {
                            console.log(results[i].title);
                            var imageUrl = r esults[i].images.fixed_height.url;
                            console.log(imageUrl);
                            var animalImage = $("<img>"); // Setting the catImage src attribute to
                            imageUrl animalImage.attr("src", imageUrl);
                            animalImage.attr("alt", "farm animal"); // Prepending the catImage to the images div $( "#imagesHere").prepend(animalImage); } }); // After the data from the AJAX request comes back //the image_original_url
                            property // Creating and storing an image tag }); }); $(document).on( "click", ".animal", function() { console.log( "clicked"); var text=$ (this).text(); // Storing our giphy API URL for a random farm animal image var queryURL="https://api.giphy.com/v1/gifs/search?api_key=3vqVnlyvaVhJvGZpcbTDlBCUxsKnQdC7&q="
                                +
                                text + "&limit=10&offset=0&rating=G&lang=en"; //var queryURL="https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=cats" ; console.log(queryURL); // Perfoming an AJAX GE//T request to our queryURL $.ajax({ url: queryURL,
                            method: "GET"
                        }).then(function(response) {
                            var results = r esponse.data;
                            console.log(results);
                            for (var i = 0; i < 11; i++) {
                                console.log(results[i].title);
                                var imageUrl = r esults[i].images.fixed_height.url;
                                var rating = r esults[i].rating;
                                console.log(imageUrl);
                                console.log(rating);
                                var animalImage = $("<img>");
                                var ratingTag = $("<p>") ratingTag.text("rating " + rating); // Setting the catImage src attribute to imageUrl animalImage.attr( "src", imageUrl); animalImage.attr( "alt", "farm animal"); // Prepending
                                the catImage to the images div $("#imagesHere").prepend(animalImage, ratingTag); // $( "#rating").prepend(ratingTag); } }) }); // Under every gif, display its rating (PG, G, so on). // * This data is provided by the GIPHY API. // * Only once you get
                                images displaying with button presses should you move on to the next step. // 6. a form to your page that takes a value from a user input box and adds it to your `topics` array. Then make a function call that takes each topic in the array and remakes
                                the buttons on the page. // 7. Deploy your assignment to Github Pages. // 8. **Rejoice**! You just made something really cool.