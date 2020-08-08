// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt


frappe.ui.form.on(cur_frm.doctype, {
    branch: function(frm) {
        if(frm.doc.branch){
            frm.set_df_property("cost_center", 'read_only', 1);
        }
        else{
            frm.set_value("cost_center","");
            frm.set_df_property("cost_center", 'read_only', 0);
            refresh_field("cost_center");
        }
    }

})