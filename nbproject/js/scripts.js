
$(document).ready(function () {

    $('.delete-projectdel').click(function (e) {
        var r = confirm("Are you really want delete this Project?....");
        if (r) {
            window.location.replace("delete/projectdel.php?id=" + this.id);
        }
    });


});
 