import { menu, menuOpen } from './icons';
import type { MenuItem } from './types';
import { getPages, getPageGroup } from './pages';

export const sideMenu: MenuItem[] = [
	...getPages(['home']),
	{
		key: 'cars',
		label: 'Átirások',
		href: '#',
		children: getPageGroup('/cars')
	},
	{
		key: 'partners',
		label: 'Partnerek',
		href: '#',
		children: getPageGroup('/partners')
	}
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