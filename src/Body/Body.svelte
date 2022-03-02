<script>
    import About from "../components/About.svelte";
    import Contact from "../components/Contact.svelte";
    import Intro from "../components/Intro.svelte";
    import Portfolio from "../components/Portfolio.svelte";
    import Services from "../components/Services.svelte";
    import Stats from "../components/Stats.svelte"
    import {ServiceData, SkillsData, WorkData, ModalsData} from '../store/data.js'
    import { onMount } from 'svelte';
    let data;
    onMount(async () => {
		const res = await fetch(`https://myportfolio-svelte.netlify.app/.netlify/functions/data`);
		data = await res.json();
        console.log(data);
	});
</script>

<main>
    <Intro />
    <About skills={SkillsData}/>
    <Portfolio modals={ModalsData} works={WorkData}/>
    <Services services={ServiceData}/>
    <Stats/>
    <Contact />
</main>