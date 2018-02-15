var min = 0;
var max = 9;
var finalPerson = 0;

$(document).ready(function () {
    $("#getNameBtn").on("click", function () {
       goGetNames();

$.getJSON("people", function (data) {
    $.each(data.person, function () {
        $("ul").append()
    })
})

    });
});

function goGetNames() {
    $.ajax({
        type : "GET",
        url : "/popcorn",
        success : function (data) {
            appendPeople(data);
        }
    });
}

function appendPeople(object) {



    for (var i = 0; i < object.people.length; i++){
        $("#container").append("<div></div>");
        var el = $("#container").children().last();
        el.append("<p>" + object.people[i].name + " lives in " + object.people[i].city + "</p>");

    }
}
