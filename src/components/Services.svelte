<script>
    import IndiServices from "../mini-components/IndiServices.svelte"
	import ServiceData from "../store/services";
</script>
<main>
    <section id="services">

		<div  class="overlay"></div>

		<div  class="row section-intro">
   		<div  class="col-twelve">

   			<h5>Services</h5>
   			<h1>What Can I Do For You?</h1>

   			<p  class="lead">I am up for any developmental or creative ideas you have, So if you are interested in doing one, get in touch with me via mail or any social media platform </p>

   		</div>   		
   	</div>

   	<div  class="row services-content">
   		<div id="owl-slider"  class="owl-carousel services-list">
			{#each ServiceData as service }
			<IndiServices icon={service.icon} title={service.title} desc={service.desc}/>
			{/each}
	      </div>
   	</div>
		
	</section> 
</main>