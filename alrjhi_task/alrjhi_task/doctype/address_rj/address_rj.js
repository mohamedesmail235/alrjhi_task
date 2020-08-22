// Copyright (c) 2020, MiM and contributors
// For license information, please see license.txt


frappe.ui.form.on('Address RJ', {
    onload: function (frm) {
        if (!$('#google-map-lib').length) {
            $('head').append('<script defer id="google-map-lib" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBy3hqV3Wc6wx1qWH-kAqdB7F5X9iKW97c"></script>');
        }
    },
    location: function (frm) {

        setTimeout(() => {
            initMap();
        }, 2500);

        get_location(frm);
    },
    validate: function (frm) {
        frappe.ui.toolbar.clear_cache();
    }

});


let get_location = function (frm) {
    var d = new frappe.ui.Dialog({
        title: __('Select Account'),
        fields: [
            {
                "label": "Location",
                "fieldname": "map_location",
                "fieldtype": "HTML",
                "options": "<div style=\"width:100%; height: 400px;\"><div style=\"height:300px;\" id=\"map\"></div></div>"

            }
        ],
    });
    d.show();
}

$(document).on('click', '.run-map', function () {
    initMap();
});


function initMap() {
    let lat = cur_frm.doc.lat || 23.79858110348652;
    let lng = cur_frm.doc.lon || 45.43356387602057;
    var myLatlng = {lat: parseFloat(lat), lng: parseFloat(lng)};

    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: myLatlng});

    // Create the initial InfoWindow.
    var infoWindow = new google.maps.InfoWindow(
        {content: 'Click the map to get Lat/Lng!', position: myLatlng});
    infoWindow.open(map);

    // Configure the click listener.
    map.addListener('click', function (mapsMouseEvent) {
        // Close the current InfoWindow.
        infoWindow.close();

        // Create a new InfoWindow.
        infoWindow = new google.maps.InfoWindow({position: mapsMouseEvent.latLng});
        infoWindow.setContent(mapsMouseEvent.latLng.toString());
        infoWindow.open(map);
        let position = mapsMouseEvent.latLng.toString();
        position = position.replace('(', '').replace(')', '').split(',');

        cur_frm.set_value('lat', position[0]);
        cur_frm.set_value('lon', position[1]);

        refresh_many(["lat", "lon"]);
    });
}