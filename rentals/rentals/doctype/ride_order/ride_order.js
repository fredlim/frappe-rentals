// Copyright (c) 2025, Erous and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
    onload(frm) {
        console.log("onload...");
    },
    setup(frm) {
        console.log("setup...");
    },
	refresh(frm) {
        if (frm.doc.status === "New") {
            frm.add_custom_button("Accept", () => {
                //frappe.show_alert("It works!");
                frm.set_value("status", "Accepted");
                frm.save();
            }, "Actions");

            frm.add_custom_button("Reject", () => {
                //frappe.show_alert("It works!");
                frm.set_value("status", "Rejected");
                frm.save();
            }, "Actions");
        }
    },
    status(frm) {
        console.log("Status changed");
    },
});
