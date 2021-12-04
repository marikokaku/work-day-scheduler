var saveBtn = $(".saveBtn");

$("#currentDay").text(moment().format('dddd, MMMM Do'));

function hourblockColor () {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour < hour) {
            $(this).addClass("past");
        } else {
            $(this).addClass("present");
        }

    })
};

hourblockColor();
