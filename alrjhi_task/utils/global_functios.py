
from __future__ import unicode_literals
import frappe
from frappe.utils import flt, cstr, cint
from frappe import _


def get_employee_cost_center(employee):
	cost_center = frappe.db.sql("""
		select (select cost_center from tabBranch where `name`=E.branch) cost_center
			from tabEmployee E
			where name = %s

	""", employee, as_dict=True)

	if cost_center:
		return cost_center[0]["cost_center"]
