# Copyright (c) 2025, Erous and contributors
# For license information, please see license.txt

import frappe


def execute(filters=None):
	columns = [{
		"fieldname": "make",
		"label": "Make",
		"fieldtype": "Data"
	}, {
		"fieldname": "total_revenue",
		"label": "Total Revenue",
		"fieldtype": "Currency",
		"options": "HKD"
	}]

	data = frappe.get_all(
		"Ride Booking",
		fields=["SUM(total_amount) AS total_revenue", "vehicle.make", "COUNT(*)"],
		filters={"docstatus": ("<", 2)},
		group_by="make")
	
	chart = {
		"data": {
			"labels": [x.make for x in data],
			"datasets": [{"values": [x.total_revenue for x in data]}],
		},
		"type": "pie",
		"title": "Total Revenue by Vehicle Make"
	}

	return columns, data, "Here is the report", chart
