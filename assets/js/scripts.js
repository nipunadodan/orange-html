var validate = [];
var before_function = [];
var dyn_function = [];

dyn_function['page-load'] = function (filename) {
    $.ajax({
        url:'pages/'+filename+'.html',
        type:'GET',
        error: function(xhr, textStatus, error){
            console.log(xhr.status+" "+textStatus+" "+error);
            $.get( "pages/404.html", function( data ) {
                $( "#content" ).html( data );
                //alert( "Load was performed." );
            });
        },
        success: function(data, textStatus, xhr){
            if(xhr.status == 200){
                $('#content').html(data);
            }
        }
    });
};

/*===================================================*/
const splits = window.location.pathname.split('/');
const page = splits[splits.length-1]

$(document).ready(function (e) {
    if(typeof page !== 'undefined')
        dyn_function['page-load'](page);
    else
        dyn_function['page-load']('home');
});

