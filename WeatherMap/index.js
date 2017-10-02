$(function () {
    $('#search').click(function () {
        var place = $('#place').val();
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + place + "&appid=a061ddbd757f75ef59788ed794973264";
        $.get(url, function (data) {
            var row = "<div id='showweather'><p><strong><h2>" + data['name'] + "</h2></strong></p>"
                + "<h3>" + (data['main']['temp'] * 0.1).toFixed(2) + " °C </h3>"
                + "<h4>" + data['weather'][0]['main'] + data['weather'][0]['description'] + "</h4>"
                + "<img src='http://openweathermap.org/img/w/" + data['weather'][0]['icon'] + ".png'></div>";

            $("#showweather").replaceWith(row);

            $('#place').val("");
        });
    });
})
