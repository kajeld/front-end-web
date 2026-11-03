
const objects = [
    {
        name: "a house (01)",
        location: "Norway",
        year: "2025",
        image: "photos/norway_house.png",
        story: "a little ceramic house from norway."
    },
    {
        name: "a sailboat",
        location: "Maine",
        year: "2026",
        image: "photos/boat.png",
        story: "a sailboat my friend got me in maine."
    },
    {
        name: "a mouse with cheese",
        location: "California",
        year: "2025",
        image: "photos/mouse.png",
        story: "a ceramic mouse my friend got for me at a holiday market."
    }, 
     {
        name: "a calico critter",
        location: "Georgia",
        year: "2022",
        image: "photos/calico_critter.png",
        story: "a calico critter from my highschool spanish iv class"
    },  {
        name: "cds",
        location: "New York & Atlanta",
        year: "2023",
        image: "photos/cds.png",
        story: "a collection of cds from the past couple of years"
    },  {
        name: "a film camera",
        location: "Georgia",
        year: "2025",
        image: "photos/film_camera.png",
        story: "a point and shoot film camera i got off of ebay from japan"
    },  {
        name: "a framed photo",
        location: "Georgia",
        year: "2021",
        image: "photos/framed_car_wash.png",
        story: "a framed photo of the car wash at my dad's store"
    },  {
        name: "snl golden ticket",
        location: "New York",
        year: "2026",
        image: "photos/golden_ticket.png",
        story: "an snl golden ticket my friend got me since i love geese and teyana taylor"
    },  {
        name: "a cd player",
        location: "Georgia",
        year: "2023",
        image: "photos/record_player.png",
        story: "a cd player my friends got for me for my birthday"
    },  {
        name: "a house (02)",
        location: "Scotland",
        year: "2025",
        image: "photos/scotland_house.png",
        story: "a little ceramic house from scotland"
    },  {
        name: "sentimental value post card",
        location: "New York",
        year: "2025",
        image: "photos/sentimental_value.png",
        story: "a postcard from the sentimental value film i got after a screening of it"
    }, 

];

let currentIndex = 0;
let showingStory = false;


// DISPLAY THE CURRENT OBJECT

function displayObject() {

    let item = objects[currentIndex];

    document.querySelector("#location").textContent = item.location;
    document.querySelector("#year").textContent = item.year;

    document.querySelector("#object-name").textContent = item.name;

    document.querySelector("#object-image").src = item.image;
    document.querySelector("#object-image").alt = item.name;

    document.querySelector("#story-title").textContent = item.name;
    document.querySelector("#story-text").textContent = item.story;

    document.querySelector("#counter").textContent =
        (currentIndex + 1) + " / " + objects.length;

    // Show the image when moving to a new object

    showingStory = false;

    document.querySelector("#object-image").style.display = "block";
    document.querySelector("#story").style.display = "none";

}


// SHOW OR HIDE STORY

function flipObject() {

    if (showingStory === false) {

        document.querySelector("#object-image").style.display = "none";
        document.querySelector("#story").style.display = "block";

        showingStory = true;

    } else {

        document.querySelector("#object-image").style.display = "block";
        document.querySelector("#story").style.display = "none";

        showingStory = false;
    }

}


// NEXT OBJECT

function nextObject() {

    currentIndex++;

    if (currentIndex >= objects.length) {
        currentIndex = 0;
    }

    displayObject();
}


// PREVIOUS OBJECT

function previousObject() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = objects.length - 1;
    }

    displayObject();
}


// BUTTONS

document.querySelector("#next").addEventListener("click", nextObject);

document.querySelector("#previous").addEventListener("click", previousObject);

document.querySelector("#display").addEventListener("click", flipObject);


// DISPLAY FIRST OBJECT

displayObject();
