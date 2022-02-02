$(document).ready(function () {
    $("#lookup").click(function (event) {
        $("#overlay").fadeIn(200);
        var querytext = $("#term").val();
        if (querytext) search(querytext);

    });
    $(function () {
        $("#loader").hide();
        $(document).ajaxStart(function () { $("#loader").show(); })
            .ajaxStop(function () { $("#loader").hide(); });

    });
});

function search(word) {
    $.ajax({
        "url": "http://localhost:3000/lookup",
        "type": "GET",
        "data": { 'word': word },
        "success": success,
        "error": fail
    });

    function success(data) {
        $("#overlay").fadeOut(200);
        if (data.length > 0) {
            $("#message").hide();
        } else
            $("#message").show();
        $("#list").empty();

        $(data).each(function (idx, val) {
            $("#list").append('<li><h2>' + (idx + 1) + "(" + val.wordtype + ")" + " " + val.word + ' </h2><p>' + val.definition + '</p></li>');
        })
    }

    function fail(xhr, status, exception) {
        $("#overlay").fadeOut(300);
        console.log(xhr, status, exception);
    }
}