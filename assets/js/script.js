function main() {

    /* -----------------------------------------------------------------------------------
     * The Google Map on the home page
     * -----------------------------------------------------------------------------------*/
    var uluru = {lat: 43.659627, lng: -79.397753};
    var map = new google.maps.Map(document.getElementById('home-map'), {
        zoom: 16,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

    /* -----------------------------------------------------------------------------------
     * Dynamic navbar tabs
     * -----------------------------------------------------------------------------------*/

    $(document).ready(function(){
        $("#tabs a").click(function(e){
            e.preventDefault();
            $(this).tab('show');
        });
    });

}

$(document).ready(main);