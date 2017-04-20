/**
 * Created by mac on 3/10/17.
 */
function loadMe() {
    $.post("https://golf-courses-api.herokuapp.com/courses", local_obj, function (data,status) {
        closeCourses = JSON.parse(data);
        for (var p in closeCourses){
            var selectdisplay = "<option value='"+ closeCourses.courses[p].id +"'>" + closeCourses
            $("selectCourse").append(selectdisplay);
            }

        };
    );

    function getCourseinfo(id) {
        $("#selectTeebox").html('');
        golfxhttp = new XMLHttpRequest;
        golfxhttp.onreadystatechange = function() {
            if (golfxhttp.readyState == 4 && golfxhttp.status)

        }


    }

}
