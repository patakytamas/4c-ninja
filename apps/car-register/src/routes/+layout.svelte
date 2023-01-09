<script>
	import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar, Drawer } from '@skeletonlabs/skeleton';
	import { drawerStore } from '@skeletonlabs/skeleton';
	import { browser } from '$app/environment';
	import { Icon } from 'stwui';
	import { mdiMenu, mdiMenuOpen } from '$lib/icons';
	const icon = mdiMenuOpen;

	if (browser) drawerStore.open();

	function drawerOpen() {
		drawerStore.open();
	}
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Skeleton</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div
					on:click={() => ($drawerStore.open = !$drawerStore.open)}
					class="btn btn-sm btn-ghost-surface"
				>
					<Icon data={icon} />
				</div>
				<a
					class="btn btn-sm btn-ghost-surface"
					href="https://twitter.com/SkeletonUI"
					target="_blank"
					rel="noreferrer">Twitter</a
				>
				<a
					class="btn btn-sm btn-ghost-surface"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer">GitHub</a
				>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<!-- Hidden below Tailwind's large breakpoint -->
		<div id="sidebar-left" class="bg-surface-500/5 h-full w-56 p-4 hidden lg:block">
			Sidebar left
		</div>
	</svelte:fragment>

	<Drawer visible={$drawerStore.open}>macika</Drawer>

	<!-- Page Route Content -->
	<slot />
</AppShell>
