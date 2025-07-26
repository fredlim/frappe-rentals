import frappe

def execute():
    vechicles = frappe.db.get_all("Vehicle")
    for v in vechicles:
        vechicle = frappe.get_doc("Vehicle", v)
        vechicle.set_title()
        vechicle.save()

    frappe.db.commit()