let rating = 4;

// rating of 2 or below is bad
// rating of 4 or above is good
// else, the rating is average

if (rating <= 2) {
    console.log("bad rating");
} else if (rating >= 4) {
    console.log("good rating");
} else {
    console.log("average rating");
}


// outer if...else statement
// student passed if marks 40 or above
// otherwise, student failed

let marks = 8;

if (marks >= 40) {
    if (marks > 80) {
        console.log("Distinction");
    } else {
        console.log("passed");
    }
} else {
    console.log("Failed...!");
}