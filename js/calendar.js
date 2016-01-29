(function(){
    window.calendar.init = init;

    var months;
    var date;

    function init() {
        date = new Date(0);
        months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
        update();
    }

    function update() {
        var now = new Date();
        if(now.toDateString() == date.toDateString()) return;

        var html = "<table>";
        html += "<tr>";
        html += "<td colspan='7' class='month'>" + months[now.getMonth()] + " " + now.getFullYear() + "</td>";
        html += "</tr>";
        html += "<tr>";
        html += "<th>Må</th>"
        html += "<th>Ti</th>"
        html += "<th>On</th>"
        html += "<th>To</th>";
        html += "<th>Fr</th>";
        html += "<th>Lö</th>";
        html += "<th>Sö</th>";
        html += "</tr>";

        var day = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
        var weekday = day.getDay() - 1;
        if(weekday <= 0) { weekday += 7; }
        day.setDate(-weekday);

        for(var i = 0; i < 6; i++) {
            html += "<tr>";
            for(var j = 0; j < 7; j++) {
                day.setDate(day.getDate() + 1);
                if(day.getMonth() == now.getMonth()) {
                    if(day.getDate() == now.getDate()) {
                        html += "<td class='today'>";
                    }
                    else {
                        html += "<td>";
                    }
                }
                else {
                    html += "<td class='gray'>";
                }
                html += day.getDate().toString() + "</td>";
            }
            html += "</tr>"
        }
        html += "</table>";
        $("#calendar").html(html);

        var next = (23 - now.getHours()) * 60 * 60 * 1000 +
                (59 - now.getMinutes()) * 60 * 1000 +
                (59 - now.getSeconds()) * 1000;
        setTimeout(update, next);
    }
})();