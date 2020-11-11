var currentPosition = 0;

function prev() {
    if (currentPosition > -1000) {
        console.log("I work");
        currentPosition -= 500;
        console.log(currentPosition);
        // ~ shift '
        document.getElementById("jsCarousel").style.transform =
            `translateX(${currentPosition}px)`;
        // templateString
        // set up an if statement
        // check the current position
        // make sure not out of bounds from positive and negative
    }
}

function next() {
    if (currentPosition > 1000) {
        console.log("I also work");
        currentPosition -= -500;
        console.log(currentPosition);
        // ~ shift '
        document.getElementById("jsCarousel").style.transform =
            `translateX(${currentPosition}px)`;
        // templateString
        // set up an if statement
        // check the current position
        // make sure not out of bounds from positive and negative
    }
}