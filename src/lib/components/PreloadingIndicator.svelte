<script>
	import { afterNavigate, beforeNavigate } from "$app/navigation";
	import NProgress from 'nprogress'
	import 'nprogress/nprogress.css'
	afterNavigate(async ({ from, to }) => {
		// console.log(`afterNavigate to navigate from ${from} to ${to.href}`);
		NProgress.done()
		// cancel or allow the navigation in the return statement
		return false;
	})
	
	beforeNavigate(async ({ from, to }) => {
		// console.log(`beforeNavigate to navigate from ${from.href} to ${to.href}`);
		NProgress.start()
	
		// cancel or allow the navigation in the return statement
		return false;
	})
	</script>