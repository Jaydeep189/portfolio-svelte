<script>
    import WorkModal from '../mini-components/WorkModal.svelte'
    import Modals from '../mini-components/Modals.svelte'
	export let modals;
	export let works;
</script>
<main>
    <section id="portfolio">

		<div class="row section-intro">
   		<div class="col-twelve">

   			<h5>Portfolio</h5>
   			<h1>Check Out Some of My Works.</h1>

   			<p class="lead">These are some projects that I am working </p>

   		</div>   		
   	</div>
   	<div class="row portfolio-content">

   		<div class="col-twelve">
	         <div id="folio-wrapper" class="block-1-2 block-mob-full stack">
				 {#each works as work }
				<WorkModal img={work.img} modalNum={work.modalNum} title={work.title} alt={work.alt} desc={work.desc} />
				 {/each} 
				 {#each modals as modal}
				 <Modals  img={modal.img} modalNum={modal.modalNum} title={modal.title} alt={modal.alt} category={modal.category} desc={modal.desc}/>
				 {/each}
	         </div>
   		</div>
   	</div>
		
	</section>
</main>