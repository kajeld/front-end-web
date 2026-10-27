
/* DREAMS VIDEO CAROUSEL */


/* STEP 1: LIST OF VIDEOS */

const videos = [

    {
        title: "Love Takes Miles (Official Video)",
        embed: "https://www.youtube.com/embed/U4UFAejSQFA?si=jux9-E1seYevLEjH"
    },

    {
        title: "Love Takes Miles",
        embed: "https://www.youtube.com/embed/Xee_2r-5L2U?si=0PHHa9gLfwlsAigp"
    },

    {
        title: "Drinking Age",
        embed: "https://www.youtube.com/embed/3mfI0jL3J14?si=J14Rk-o6Y10g2M6n"
    },

    {
        title: "The Rolling Stones",
        embed: "https://www.youtube.com/embed/kbP1724y7Ws?si=s3-duSAMfuGhKiVL"
    },

    {
        title: "$0",
        embed: "https://www.youtube.com/embed/ETZKZzz7MWo?si=YLCARhKXfwRAYrmU" 
    }

];


/* STEP 2: START WITH THE FIRST VIDEO */

let currentVideo = 0;


/* STEP 3: FIND THE HTML ELEMENTS */

const videoPlayer = document.querySelector("#dreams-video");

const videoTitle = document.querySelector("#video-title");

const previousButton = document.querySelector(".previous");

const nextButton = document.querySelector(".next");


/* STEP 4: DISPLAY THE SELECTED VIDEO */

function showVideo() {

    const video = videos[currentVideo];

    videoPlayer.src = video.embed;

    videoPlayer.title = video.title;

    videoTitle.textContent = video.title;

}


/* STEP 5: RIGHT ARROW */

nextButton.addEventListener("click", function() {

    currentVideo = currentVideo + 1;

    if (currentVideo >= videos.length) {
        currentVideo = 0;
    }

    showVideo();

});


/* STEP 6: LEFT ARROW */

previousButton.addEventListener("click", function() {

    currentVideo = currentVideo - 1;

    if (currentVideo < 0) {
        currentVideo = videos.length - 1;
    }

    showVideo();

});


/* STEP 7: SHOW THE FIRST VIDEO WHEN PAGE LOADS */

showVideo();
