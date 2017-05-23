console.log(`script.js`)

// (function() {
// function myFunction() {
//     var map = document.getElementById('map');
//     console.log(`klikno na mapu`)
//         // if (map)

//     map.classList.toggle('map-active');
// }
// })();


// function initMap() {
//     console.log(`init map`)
//     var novi_sad = {
//         lat: 45.256131,
//         lng: 19.854324
//     };
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 17,
//         center: novi_sad
//     });
//     var marker = new google.maps.Marker({
//         position: novi_sad,
//         map: map
//     });
// }

// function initMap() {
//     var novi_sad = {
//         lat: 45.256162,
//         lng: 19.854597
//     };
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 17,
//         center: novi_sad,
//         scrollwheel: false
//     });

//     var contentString = '<div id="content">' +
//         '<div id="siteNotice">' +
//         '</div>' +
//         '<h6 id="firstHeading" class="firstHeading">Stomatološka ordinacija "dr Branko Milanović"</h6>' +
//         '<div id="bodyContent">' +
//         '<p>Dunavska 34</p>' +
//         '<p>Novi Sad, 21000</p>' +
//         '<p>Serbia</p>' +
//         '</div>' +
//         '</div>';

//     var infowindow = new google.maps.InfoWindow({
//         content: contentString
//     });

//     var marker = new google.maps.Marker({
//         position: novi_sad,
//         map: map,
//         title: 'Novi Sad'
//     });
//     marker.addListener('click', function() {
//         infowindow.open(map, marker);
//     });
// }