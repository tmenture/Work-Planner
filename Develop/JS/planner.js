// This is the Moment.js code to display the current date and time as soon as the DOM is ready to be manipulated
$(document).ready(function () {
    let rightNow = moment().format("MMMM Do YYYY");

    let displayDate = document.getElementById("currentDay");

    displayDate.innerHTML = rightNow;

    let currentHour = moment().format("HH");
});

// This will compare the hour from each time slot to the actual time 
$(".time-div").each(function () {
    var hoursDiv = $(this).attr("id").split("-")[1];

    if (currentHour == hoursDiv) {
        $(this).addClass("present");
        $(this).children(".description").addClass("white-text");

    } else if (currentHour < hoursDiv) {
        $(this).removeClass("present");
        $(this).addClass("future");

    } else if (currentHour > hoursDiv) {
        $(this).removeClass("future");
        $(this).addClass("past");

    }
});

