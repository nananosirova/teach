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

/*
IIFE for the FAQ section, super small
- Added by Philip 
*/
(function() {
    var faqList = document.getElementsByClassName('faq-expand');
    for (var i = 0; i < faqList.length; i++) {
        //Attach the listener
        faqList[i].onclick = function(event) {
            console.log(event.target.getAttribute('faqSection'))
            var sectionID = event.target.getAttribute('faqSection');
            //Show it, (can probably add in some animation from this)
            document.getElementById(sectionID).style.display = "block";
        }
    }

})();