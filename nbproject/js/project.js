$(document).ready(function () {

    $('.delete-project').click(function () {
        var r = confirm("Are you really want delete this Project?....");
        var projectId = this.id;
 
        if (r) {
            window.location.replace("delete/project.php?id=" + projectId.replace('delete-', ''));
        }
    });

});