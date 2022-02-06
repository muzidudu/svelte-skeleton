<script lang="ts">
import "virtual:windi.css"
import '../style/app.css'
import { browser } from "$app/env";
  if (browser) import("virtual:windi-devtools")
import { navigating, page } from "$app/stores";
import PageTransitions from "$lib/components/PageTransitions.svelte";
import PreloadingIndicator from "$lib/components/PreloadingIndicator.svelte";
import ThemeToggler from "$lib/components/ThemeToggler.svelte";


</script>
{#if $navigating && $navigating.to}
     <PreloadingIndicator />
{/if}

<PageTransitions refresh="{$page}">
    <a href="/aaaa">aaaa</a>
<a href="/">home</a>
<slot />
</PageTransitions>
<ThemeToggler />