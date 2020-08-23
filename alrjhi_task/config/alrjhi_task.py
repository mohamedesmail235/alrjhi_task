from __future__ import unicode_literals
from frappe import _
import frappe


def get_data():
	return [
		{
			"label": _("Old Task"),
			"icon": "fa fa-table",
			"items": [
				{
					"type": "doctype",
					"label": _("Address RJ"),
					"name": "Address RJ"
				},
				{
					"type": "doctype",
					"label": "Payroll Entry RJ",
					"name": "Payroll Entry RJ"
				},
				{
					"type": "doctype",
					"label": "Branch RJ",
					"name": "Branch RJ"
				},
			]
		},
		{
			"label": _("New Task"),
			"icon": "fa fa-table",
			"items": [
				{
					"type": "doctype",
					"label": _("Address"),
					"name": "Address"
				},
				{
					"type": "doctype",
					"label": "Payroll Entry",
					"name": "Payroll Entry"
				},
				{
					"type": "doctype",
					"label": "Branch",
					"name": "Branch"
				},
			]
		}
	]