// Copyright (c) 2020, MiM and contributors
// For license information, please see license.txt

frappe.ui.form.on('Address RJ', {
	// refresh: function(frm) {

	// }
    location:function(frm){
        get_location(frm);
    }
});


let get_location = function(frm){
    		var d = new frappe.ui.Dialog({
			title: __('Select Account'),
			fields: [
				{
					"label" : "Location",
					"fieldname": "map_location",
					"fieldtype": "Geolocation"
				}
			],
			primary_action: function() {
				var data = d.get_values();


                 d.hide();
			},
			primary_action_label: __("Get lat & lon")
		});
		d.show();
}