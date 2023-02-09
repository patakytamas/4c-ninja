<script lang="ts">
	//import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { sideMenu } from '@repo/config/menu';
	import { AppShell, Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import { browser } from '$app/environment';
	import { SideNav, AppBar } from '@repo/ui/components';

	import type { PageData } from './$types';

	export let data: PageData;

	let userLogedIn = data.user;
	if (browser) drawerStore.close();
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar {userLogedIn} />
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<!-- Hidden below Tailwind's large breakpoint -->
		<div id="sidebar-left" class="bg-surface-500/5 h-full w-56 p-4 hidden lg:block">
			<SideNav items={sideMenu} />
		</div>
	</svelte:fragment>
	<div class="lg:hidden">
		<Drawer visible={$drawerStore.open}>
			<SideNav items={sideMenu} />
		</Drawer>
	</div>

	<!-- Page Route Content -->
	<div class="m-10">
		<slot />
	</div>
</AppShell>
