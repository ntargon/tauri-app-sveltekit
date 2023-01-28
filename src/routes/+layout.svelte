<script lang="ts">
  import "../app.css";
  import { page } from '$app/stores';
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
  import { settings_store } from "$lib/Settings";
  import { onMount } from "svelte";
  $: activeUrl = $page.url.pathname

  onMount(async () => {
    await settings_store.init();
  });

</script>

<div class="relative px-4">
  <Navbar
    navClass="px-2 sm:px-4 py-2.5 absolute w-full z-20 top-0 left-0 border-b"
    let:hidden
    let:toggle
  >
    <NavBrand href="/">
      <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/">Home</NavLi>
    </NavUl>
  </Navbar>
  <div class="overflow-scroll pb-16 pt-20 max-h-screen">
    <div>
      <aside class="fixed h-full">
        <Sidebar class="w-60">
          <SidebarWrapper>
            <SidebarGroup>
              <SidebarItem label="Home" href='/' active={activeUrl === '/'} />
              <SidebarItem label="Utils" href='/utils' active={activeUrl === '/utils'} />
              <SidebarItem label={$settings_store.count.toString()} href='/' active={activeUrl === '/utils'} />
            </SidebarGroup>
          </SidebarWrapper>
        </Sidebar>
      </aside>
      <main class="container ml-72 w-auto">
        <slot />
      </main>
    </div>
  </div>
</div>