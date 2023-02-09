import { menu, menuOpen } from './icons';
import type { MenuItem } from './types';
import { getPages, getPageGroup } from './pages';

export const sideMenu: MenuItem[] = [
	...getPages([
		'goal',
		'prepare',
		'lesson1',
		'lesson2',
		'lesson3',
		'lesson4',
		'lesson5',
		'lesson6',
		'lesson7',
		'task1'
	])

	/*
	{
		key: 'tests',
		label: 'Tests',
		href: '#',
		children: getPageGroup('/tests/')
	},
	{
		key: 'settings',
		label: 'Settings',
		href: '#',
		children: getPageGroup('/my/settings/')
	},
	...getPages(['login', 'register', 'reset-password'])
	*/
];
