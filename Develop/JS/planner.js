// This is the Moment.js code to display the current date and time as soon as the DOM is ready to be manipulated
$(document).ready(function () {
    let rightNow = moment().format("MMMM Do YYYY");

    let displayDate = document.getElementById("currentDay");

    displayDate.innerHTML = rightNow;

    let currentHour = moment().format("HH");


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

    // This grabs the times and values from the divs and saves them to the browsers local storage
    $(".saveBtn").click(function (event) {
        event.preventDefault();

        var value = $(this).siblings(".time-block").val();

        var time = $(this).parent().attr("id").split("-")[1];

        localStorage.setItem(time, value);
    });

    // These calls will retrieve items from the local storage and display them in their proper locations
    $("#hour-09 .time-block").val(localStorage.getItem("09"));
    $("#hour-10 .time-block").val(localStorage.getItem("10"));
    $("#hour-11 .time-block").val(localStorage.getItem("11"));
    $("#hour-12 .time-block").val(localStorage.getItem("12"));
    $("#hour-13 .time-block").val(localStorage.getItem("13"));
    $("#hour-14 .time-block").val(localStorage.getItem("14"));
    $("#hour-15 .time-block").val(localStorage.getItem("15"));
    $("#hour-16 .time-block").val(localStorage.getItem("16"));
    $("#hour-17 .time-block").val(localStorage.getItem("17"));
});