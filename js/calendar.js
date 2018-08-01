(function(){
    window.calendar.init = init;

    var months;
    var date;

    function init() {
        date = new Date(0);
        months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
        update();
    }

    function update(days = null) {
        var now = new Date();
        if (now.toDateString() == date.toDateString()) {
            return;
        };

        if (days === null) {
            $.get(
                "https://api.dryg.net/dagar/v2.1/" + now.getFullYear() + "/" + (now.getMonth() + 1),
                function(data) {
                    update(data.dagar);
                }
            );

            return;
        }

        var html = "<table>";
        html += "<tr><td class='week'></td>";
        html += "<td colspan='7' class='month'>" + months[now.getMonth()] + " " + now.getFullYear() + "</td>";
        html += "</tr>";
        html += "<tr><td class='week'></td>";
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
        if (weekday <= 0) { weekday += 7; }
        day.setDate(-weekday);

        for (var i = 0; i < 6; i++) {
            html += "<tr>";
			html += "<td class='week'>" + (day.getWeek() + 1) + "</td>";
            for (var j = 0; j < 7; j++) {
                day.setDate(day.getDate() + 1);
                var classes = [];

                if (day.getMonth() == now.getMonth()) {
                    if (day.getDate() == now.getDate()) {
                        classes.push('today');
                    }

                    if (days[day.getDate() - 1]['röd dag'] == 'Ja') {
                        classes.push('red');
                    }
                }
                else {
                    classes.push('gray');
                }

                if (classes) {
                    classes = " class='" + classes.join(' ') + "'";
                } else {
                    classes = "";
                }

                html += "<td" + classes + ">";
                html += day.getDate().toString() + "</td>";
            }
            html += "</tr>"
        }
        html += "</table>";

        for (var i = 0; i < days.length; i++) {
            if (days[i]['helgdag']) {
                html += '<p>';
                html += (i + 1) + ': ' + days[i]['helgdag'];
                html += '</p>';
            }
        }

        $("#calendar").html(html);

        var next = (23 - now.getHours()) * 60 * 60 * 1000 +
                (59 - now.getMinutes()) * 60 * 1000 +
                (59 - now.getSeconds()) * 1000;
        setTimeout(update, next);
    }

    Date.prototype.getWeek = function() {
        var date = new Date(this.getTime());
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        var week1 = new Date(date.getFullYear(), 0, 4);
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                - 3 + (week1.getDay() + 6) % 7) / 7);
}
})();
