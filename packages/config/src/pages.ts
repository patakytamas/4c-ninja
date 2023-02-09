import type { MenuItem, Page } from './types';
import * as i from './icons';

export const pages = [
	{ key: 'home', label: 'Home', href: '/' },
	{ key: 'goal', label: 'Project goal', href: '/goal' },
	{ key: 'prepare', label: 'Prepare', href: '/prepare' },
	{
		key: 'lesson1',
		label: 'Lesson 1. - Project setup',
		href: '/lesson1',
		icon: i.book
	},
	{
		key: 'lesson2',
		label: 'Lesson 2. - Creating and Placing Parts',
		href: '/lesson2',
		icon: i.book
	},
	{
		key: 'lesson3',
		label: 'Lesson 3. - Scaling and Rotating Parts',
		href: '/lesson3',
		icon: i.book
	},
	{
		key: 'lesson4',
		label: 'Lesson 4. - Polishing and Sharing',
		href: '/lesson4',
		icon: i.book
	},
	{
		key: 'lesson5',
		label: 'Lesson 5. - Creating a script',
		href: '/lesson5',
		icon: i.book
	},
	{
		key: 'task1',
		label: 'Task 1. - Counting',
		href: '/task1',
		icon: i.book
	},
	{
		key: 'lesson6',
		label: 'Lesson 6. - Object properties',
		href: '/lesson6',
		icon: i.book
	},
	{
		key: 'lesson7',
		label: 'Lesson 7. - Parents and children',
		href: '/lesson7',
		icon: i.book
	},
	{ key: 'cars', label: 'Lista', href: '/cars', icon: i.menu },
	{ key: 'cars_new', label: 'Új', href: '/cars/new', icon: i.menu },
	{
		key: 'partners',
		label: 'Lista',
		href: '/partners',
		icon: i.menu
	},
	{
		key: 'partners_new',
		label: 'új',
		href: '/partners/new',
		icon: i.menu
	},
	{ key: 'logout', label: 'Logout', href: '/logout', icon: i.login },
	{ key: 'login', label: 'Login', href: '/login', icon: i.login },
	{
		key: 'register',
		label: 'Register',
		href: '/register',
		icon: i.login
	},
	{
		key: 'reset-password',
		label: 'Reset password',
		href: '/reset-password',
		icon: i.login
	},
	{ key: 'test1', label: 'Test 1.', href: '/tests/test1' },
	{ key: 'test2', label: 'Test 2.', href: '/tests/test2' },
	{
		key: 'profile',
		label: 'Profile',
		href: '/my/settings/profile'
	},
	{
		key: 'account',
		label: 'Account',
		href: '/my/settings/account'
	},
	{
		key: 'security',
		label: 'Security',
		href: '/my/settings/security'
	},
	{
		key: 'projects',
		label: 'My projects',
		href: '/my/projects'
	}
];
export const getPage = (key: string): Page => {
	return pages.find((page: Page) => page.key === key);
};
export const getPages = (selectedPages: string[]): Page[] => {
	return selectedPages.map((selectedPage) => getPage(selectedPage));
};

export const getPageGroup = (group: string): Page[] => {
	return pages.filter((page: Page) => page.href.includes(group));
};

export const sideMenu: MenuItem[] = [
	{
		key: 'dashboard',
		icon: 'mdiMenu',
		label: 'Home2',
		badge: '5',
		badgeType: 'info',
		href: '/'
	},
	{
		key: 'tests',
		icon: 'mdiMenuOpen',
		label: 'Tests',
		href: '#item2',
		children: [
			{
				key: 'sub1',
				label: 'Sub 1',
				href: '#item2-sub1'
			},
			{
				key: 'sub2',
				label: 'Sub 2',
				href: '#item2-sub2'
			}
		]
	},
	{
		key: 'projects',
		icon: 'mdiAccount',
		label: 'Projects',
		badge: '19',
		badgeType: 'warn',
		href: '#item3'
	},
	{
		key: 'calendar',
		icon: 'mdiMenuOpen',
		label: 'Calendar',
		badge: '20+',
		badgeType: 'error',
		href: '#item4'
	},
	{
		key: 'documents',
		icon: 'mdiLoginVariant',
		label: 'Documents',
		href: '#item5'
	},
	{
		key: 'reports',
		icon: 'mdiCloseOctagonOutline',
		label: 'Reports',
		href: '#item6'
	}
];
