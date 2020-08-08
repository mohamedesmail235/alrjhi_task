# -*- coding: utf-8 -*-
# Copyright (c) 2020, MiM and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe import throw, _
from frappe.utils import cstr
from frappe.model.document import Document

class AddressRJ(Document):

	def autoname(self):
		if not self.address_title:
			if self.links:
				self.address_title = self.links[0].link_name

		if self.address_title:
			self.name = (cstr(self.address_title).strip() + "-" + cstr(_(self.address_type)).strip())
			if frappe.db.exists("Address", self.name):
				self.name = make_autoname(cstr(self.address_title).strip() + "-" +
					cstr(self.address_type).strip() + "-.#")
		else:
			throw(_("Address Title is mandatory."))
