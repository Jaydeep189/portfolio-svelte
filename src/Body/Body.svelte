<script>
    import About from "../components/About.svelte";
    import Contact from "../components/Contact.svelte";
    import Intro from "../components/Intro.svelte";
    import Portfolio from "../components/Portfolio.svelte";
    import Services from "../components/Services.svelte";
    import Stats from "../components/Stats.svelte"
    import {ServiceData, SkillsData, WorkData, ModalsData} from '../store/data.js'
</script>

<main>
    <Intro />
    <About skills={SkillsData}/>
    <Portfolio modals={ModalsData} works={WorkData}/>
    <Services services={ServiceData}/>
    <Stats/>
    <Contact />
</main>