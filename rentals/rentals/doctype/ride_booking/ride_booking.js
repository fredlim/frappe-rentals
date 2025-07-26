// Copyright (c) 2025, Erous and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
	refresh(frm) {

	},

    rate(frm) {
        // Calculate total amount based on rate and distance
        frm.trigger('update_total_amount');
    },

    update_total_amount(frm) {
        // Calculate total amount based on rate and total_distant
        let total_d = 0;
        for (let item of frm.doc.items) {
            total_d += item.distance;
        }

        amount = total_d * frm.doc.rate;
        frm.set_value("total_amount", amount);
    },
});

frappe.ui.form.on("Ride Booking Item", {
	refresh(frm) {

	},
    distance(frm, cdt, cdn) {
        // console.log(cdt, cdn);
        // my_child = frappe.get_doc(cdt, cdn);
        // frappe.model.set_value(cdt, cdn, 'source', 'Updated Source');
        frm.trigger('update_total_amount');
    },
    items_remove(frm) {
        frm.trigger('update_total_amount');
    }    
});