<script lang="ts">
import "virtual:windi.css"
import '../style/app.css'
import { browser } from "$app/env";
  if (browser) import("virtual:windi-devtools")
import { navigating, page } from "$app/stores";
import PageTransitions from "$lib/components/PageTransitions.svelte";
import PreloadingIndicator from "$lib/components/PreloadingIndicator.svelte";
import ThemeToggler from "$lib/components/ThemeToggler.svelte";
import Main from "$lib/components/Main.svelte";
import TheHeader from "$lib/components/TheHeader.svelte";
import TheFooter from "$lib/components/TheFooter.svelte";


</script>
{#if $navigating && $navigating.to}
     <PreloadingIndicator />
{/if}

<TheHeader />
<Main>
  <slot />
</Main>
<TheFooter />
<ThemeToggler />