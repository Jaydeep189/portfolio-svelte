<script>
    import Stat from "../mini-components/Stat.svelte"
</script>
<main>
    <section id="stats" class="count-up">
		<div class="row">
			<div class="col-twelve text">
				<div class="block-1-1 block-s-1-3 block-tab-1-2 block-mob-full stats-list">				
					<Stat icon="icon-pencil-ruler" count="3" title="Projects Completed"/>
					<Stat icon="icon-user" count="10" title="Team Members"/>
					<Stat icon="icon-light-bulb" count="100000" title="Crazy Ideas"/>
					<Stat icon="icon-cup" count="1500" title="Coffee Cups"/>
					<Stat icon="icon-clock" count="5000" title="Hours"/>
					<Stat icon="icon-badge" count="2" title="Start-Ups"/>
				</div>
			</div>
		</div> 
	</section>
</main>

<style>
	.text{
		align-items: center;
	}
</style>