<script>
	import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar, Drawer } from '@skeletonlabs/skeleton';
	import { drawerStore } from '@skeletonlabs/skeleton';
	import { browser } from '$app/environment';
	import { Icon } from 'stwui';
	import { mdiMenu, mdiMenuOpen } from '$lib/icons';
	import SideNav from '$lib/nav/SideNav.svelte';
	import { Avatar } from 'stwui';

	export let data;

	const icon = mdiMenuOpen;

	if (browser) drawerStore.close();

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
				<a href="/">
					<strong class="text-xl uppercase">Car register</strong>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div
					on:click={() => ($drawerStore.open = !$drawerStore.open)}
					class="lg:hidden btn btn-sm btn-ghost-surface"
				>
					<Icon data={icon} />
					maci
				</div>

				{#if !data.user}
					<a class="btn btn-sm btn-ghost-surface" href="/login" target="_blank" rel="noreferrer"
						>Login</a
					>
					<a class="btn btn-sm btn-ghost-surface" href="/register" target="_blank" rel="noreferrer"
						>Register</a
					>
				{:else}
					<a
						class="btn btn-sm btn-ghost-surface"
						href="/projects/new"
						target="_blank"
						rel="noreferrer">Create project</a
					>
					<Avatar src="https://placeimg.com/80/80/people" size="lg" />

					<form action="/logout" method="POST">
						<button type="submit" class="btn btn-sm btn-ghost-surface">Logout</button>
					</form>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<!-- Hidden below Tailwind's large breakpoint -->
		<div id="sidebar-left" class="bg-surface-500/5 h-full w-56 p-4 hidden lg:block">
			<SideNav />
		</div>
	</svelte:fragment>
	<div class="lg:hidden">
		<Drawer visible={$drawerStore.open}>
			<SideNav />
		</Drawer>
	</div>

	<!-- Page Route Content -->
	<slot />
</AppShell>
