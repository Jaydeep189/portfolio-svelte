<script>
	import Header from "./Header/Header.svelte";
	import Footer from "./Footer/Footer.svelte";
	import Body from './Body/Body.svelte';
	const initializeRemarkable = () => {
		md = new window.remarkable.Remarkable();
	}
	import {env} from '../env'
	const secret = env.TEST
</script>

<svelte:head>
	<script src="js/jquery-2.1.3.min.js" on:load={initializeRemarkable}></script>
   <script src="js/plugins.js" on:load={initializeRemarkable}></script>
   <script src="js/main.js" on:load={initializeRemarkable}></script>
</svelte:head>

<main>
	<Header />
	<h1>{secret}</h1>
	<Body />
	<Footer />
</main>

<style>

</style>