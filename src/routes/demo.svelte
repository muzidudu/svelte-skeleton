<script>
import { page } from '$app/stores';
import { onMount } from 'svelte';
    import themeStore, { setTheme } from 'svelte-themes';
    let UserAgent = null;
    onMount(() =>{
        
        UserAgent = navigator.userAgent;
        console.log(UserAgent);
    })
</script>
<div class="flex justify-center items-center flex-col space-y-4">

    <select class="p-4 mt-10 w-60 rounded-md border-red-500 border border-2" bind:value={$themeStore.theme}>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="system">System</option>
    </select>

    <button class="border-blue-300 border p-4 rounded-md bg-light-50 dark:text-black" on:click={() => setTheme('dark')}> Dark mode </button>
    <button class="border-blue-300 border p-4 rounded-md bg-light-50 dark:text-black" on:click={() => setTheme('light')}> Light mode </button>
    <button class="border-blue-300 border p-4 rounded-md bg-light-50 dark:text-black" on:click={() => setTheme('system')}> system mode </button>
    <div>当前模式: { $themeStore.theme || '' }</div>
    { UserAgent }
</div>