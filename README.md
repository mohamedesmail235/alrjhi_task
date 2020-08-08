## alrjhi_task


for the demanded task 
Firstly, I created the custom app and named it “alrjhi_task” and it is Repo is

https://github.com/mohamedesmail235/alrjhi_task.git

Secondly the first point which is to modify address doctype, to modify address doctype it is already exist in frappe app and can not be repeated because of primary key in DocType Table in DB but I made the same address doctype with new name “Address RJ” 
for adding button we should add it as a custom field to ignore editing the json file of the base doctype to make update easy in the future and never make conflict in files when making update for newer versions
I added the fields in point number one ["lat", "lon"] also as custom fileds 
for opening  google map in Modal box I made the dialog as mentioned but to use Google Maps API we should have API Key which requires payment data which ids not available 


but I tried to do it with Geo-location data type field and it works in a normal field in base doctype bu in dialog can not by read because such field create dictionary with marker on map but in server side code in saving  action and store it in DB as shown 

{"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[72.889762,19.077102]}}]}

Finally as I said to modify base doctype will be in its app but we can create new one with new name as I did “Payroll Entry RJ” to add it in the custom app 
to make each branch has different cost center we should make custom field in Branch Doctype called Cost Center linked to  Cost Center Doctype and update each branch with its cost center
then we can make sure that when we choose any branch in Payroll Entry doctype  we force the cost center to be stored in Journal Entry by :
    1. in Payroll Entry Doctype  go to Customize and update  Cost Center field in Fetch we add “branch.cost_center”  by  doing this we make sure every time we choose branch that its cost center will be set in cost center field and the make it read only by custom script which could be in “Custom Script” doctype or external file and include it in the JS file of Payroll Entry Doctype by adding  “{% include "path to file" %}”  [to make update easier later and do not change in the main file ] to prevent changing it later.
    2. Make Custom Script as told in External file “{% include "path to file" %}” or in Custom Script Doctype add script to make frappe call sending branch name to get its cost center and set it in cost center field 
frappe.ui.form.on(cur_frm.doctype, {
    branch: function(frm) {
if(frm.doc.branch){
    frappe.call({
        method:"get_branch_cost_center",
        doc:frm.doc,
        callback:function (r){
            if(r.message){
                frm.set_value("cost_center",r.message);
                frm.set_df_property("cost_center", 'read_only', 1);
            }
        }
    });
}
else{
    frm.set_value("cost_center","");
    frm.set_df_property("cost_center", 'read_only', 0);
}

refresh_field("cost_center");
    }

})




