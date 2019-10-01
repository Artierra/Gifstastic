$(document).ready(function() {
    $("#test").on("click", function() {
        alert("hi");

    });

    // This is an array of strings, each one related to farm animals. Save it to a variable called topics.

    // THisloop that appends a button for each string in the array with class of selectedAnimal.


    var topics = ['cows', 'pigs', 'chickens', 'ducks', 'goats', 'alpacas', 'geese', 'sheep'];
    for (var i = 0; i < topics.length; i++) {
        var button = $('<button>');
        button.text(topics[i]);
        button.addClass("selectedAnimal");
        $('#buttonsDiv').append(button); /*div that holds my btns*/
    }


    // var textFieldUserInput = $('<input>');
    // textFieldUserInput.text;
    // textFieldUserInput.addClass("userInput");
    // $('#buttonsDiv').append(textFieldUserInput); /*text button that holds placeholder*/




    //this is a test button, hard-coded with ID farmAnimal on HTMl to test the Giphy API calls
    $("#farmAnimal").on("click", function() {
        console.log("clicked");
        // Storing our giphy API URL for a random farm animal image, filter for G reating, maximum of 10 images
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=3vqVnlyvaVhJvGZpcbTDlBCUxsKnQdC7&q=farm + animal&limit=10&offset=0&rating=G&lang=en";

        console.log(queryURL);
        // Perfoming an AJAX GET request to our queryURL
        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .then(function(response) {
            var results = response.data;
            console.log(results);

            for (var i = 0; i < 11; i++) {
                console.log(results[i]);
                var imageUrl = results[i].images.fixed_height.url;
                console.log(imageUrl);
                //creating a div for the animal Image 
                var animalImage = $("<img>");

                // Setting the Image src attribute to imageUrl, our variableanimalImage now has an image
                animalImage.attr("src", imageUrl);
                animalImage.attr("alt", "farm animal");

                // Prepending the farm AnimalImage to the images div
                $("#imagesHere").prepend(animalImage);

            }

        });
    });
});

$(document).on("click", ".selectedAnimal", function() {
    console.log("clicked");
    var text = $(this).text();


    // Storing our giphy API URL for a selected farm animal image-query with variabe text-which is a selected animal from our array topics
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=3vqVnlyvaVhJvGZpcbTDlBCUxsKnQdC7&q=" + text + "&limit=10&offset=0&rating=G&lang=en";

    console.log(queryURL);
    // Perfoming an AJAX GE//T request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var results = response.data;
        console.log(results);
        for (var i = 0; i < 11; i++) {
            console.log(results[i]);
            var imageUrl = results[i].images.fixed_height.url;
            var rating = results[i].rating;
            console.log(imageUrl);
            console.log(rating);
            var animalImage = $("<img>");
            var ratingTag = $("<p>")
            ratingTag.text("rating " + rating);

            // Setting the catImage src attribute to imageUrl
            animalImage.attr("src", imageUrl);
            animalImage.attr("alt", "farm animal");

            // Prepending the catImage to the images div

            $("#imagesHere").prepend(animalImage, ratingTag);
            // $("#rating").prepend(ratingTag);
        }

    })
});
//this is a input from user
$("#choice").on("click", function(event) {
    event.preventDefault();
    console.log("clicked submit box");
    var input = $("#userInput").val();
    console.log(input);
    // Storing our giphy API URL input from user, filter for G reating, maximum of 10 images
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=3vqVnlyvaVhJvGZpcbTDlBCUxsKnQdC7&q=farm" + input + "l&limit=10&offset=0&rating=G&lang=en";

    console.log(queryURL);
    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
        var results = response.data;
        console.log(results);

        for (var i = 0; i < 11; i++) {
            console.log(results[i].title);
            var imageUrl = results[i].images.fixed_height.url;
            console.log(imageUrl);
            //creating a div for the animal Image 
            var animalImage = $("<img>");

            // Setting the Image src attribute to imageUrl, our variableanimalImage now has an image
            animalImage.attr("src", imageUrl).attr("data-still", results[i].images.fixed_height_still.url);
            animalImage.attr("alt", "farm animal");

            // Prepending the farm AnimalImage to the images div
            $("#imagesHere").prepend(animalImage);

        }

    });
});

// Under every gif, display its rating (PG, G, so on).
// * This data is provided by the GIPHY API.
// * Only once you get images displaying with button presses should you move on to the next step.

// 6.  a form to your page that takes a value from a user input box and adds it to your `topics` array. Then make a function call that takes each topic in the array and remakes the buttons on the page.

// 7. Deploy your assignment to Github Pages.

// 8. **Rejoice**! You just made something really cool.g