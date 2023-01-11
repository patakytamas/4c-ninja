<script lang="ts">
	import { Menu, Badge } from 'stwui';
	import { mdiMenu, mdiMenuOpen } from '$lib/icons';

	const home = mdiMenu;
	const account_multiple = '$lib/icons/menu-open.svg';
	const folder = '$lib/icons/menu-open.svg';
	const calendar = '$lib/icons/menu-open.svg';
	const file_document = '$lib/icons/menu-open.svg';
	const poll = '$lib/icons/menu-open.svg';

	interface GroupMenuItem {
		key: string;
		label: string;
		href: string;
	}
	interface MenuItem {
		key: string;
		data?: string;
		label: string;
		badge?: string;
		badgeType?: 'info' | 'warn' | 'error' | 'success';
		href: string;
		children?: GroupMenuItem[];
	}

	const items: MenuItem[] = [
		{
			key: 'dashboard',
			data: home,
			label: 'Home',
			badge: '5',
			badgeType: 'info',
			href: '/'
		},
		{
			key: 'profile',
			data: account_multiple,
			label: 'Profile',
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
			data: folder,
			label: 'Projects',
			badge: '19',
			badgeType: 'warn',
			href: '#item3'
		},
		{
			key: 'calendar',
			data: calendar,
			label: 'Calendar',
			badge: '20+',
			badgeType: 'error',
			href: '#item4'
		},
		{
			key: 'documents',
			data: file_document,
			label: 'Documents',
			href: '#item5'
		},
		{
			key: 'reports',
			data: poll,
			label: 'Reports',
			href: '#item6'
		}
	];

	let collapsed = false;
	let active = '';

	function toggleCollapse() {
		collapsed = !collapsed;
	}
</script>

<Menu {collapsed} {active}>
	{#each items as item}
		{#if item.children && item.children.length > 0}
			{#if item.data}
				<Menu.Group key={item.key} label={item.label} href={item.href}>
					<Menu.Item.Icon slot="icon" data={item.data} />
					{#each item.children as child}
						<Menu.Group.Item
							key={child.key}
							label={child.label}
							href={child.href}
							on:click={() => (active = `{item.key}-{child.key}`)}
						/>
					{/each}
				</Menu.Group>
			{:else}
				<Menu.Group key={item.key} label={item.label} href={item.href}>
					{#each item.children as child}
						<Menu.Group.Item
							key={child.key}
							label={child.label}
							href={child.href}
							on:click={() => (active = `{item.key}-{child.key}`)}
						/>
					{/each}
				</Menu.Group>
			{/if}
		{:else if item.data && item.badge}
			<Menu.Item
				key={item.key}
				label={item.label}
				href={item.href}
				on:click={() => (active = item.key)}
			>
				<Menu.Item.Icon slot="icon" data={item.data} />
				<Badge slot="extra" type={item.badgeType}>{item.badge}</Badge>
			</Menu.Item>
		{:else if item.data}
			<Menu.Item
				key={item.key}
				label={item.label}
				href={item.href}
				on:click={() => (active = item.key)}
			>
				<Menu.Item.Icon slot="icon" data={item.data} />
			</Menu.Item>
		{:else if item.badge}
			<Menu.Item
				key={item.key}
				label={item.label}
				href={item.href}
				on:click={() => (active = item.key)}
			>
				<Badge slot="extra" type={item.badgeType}>{item.badge}</Badge>
			</Menu.Item>
		{:else}
			<Menu.Item
				key={item.key}
				label={item.label}
				href={item.href}
				on:click={() => (active = item.key)}
			/>
		{/if}
	{/each}
</Menu>
