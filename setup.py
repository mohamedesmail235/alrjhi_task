# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in alrjhi_task/__init__.py
from alrjhi_task import __version__ as version

setup(
	name='alrjhi_task',
	version=version,
	description='alrjhi_task',
	author='MiM',
	author_email='m-i-m@live.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
