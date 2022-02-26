<script>
    export let img;
    export let alt;
    export let modalNum;
    export let title;
    export let desc;
</script>

<main>
    <div class="bgrid folio-item">
		<div class="item-wrap">
			<img src={  img} alt={  alt} />
		   <a href={`#modal-` +   modalNum} class="overlay">	                  	           
			  <div class="folio-item-table">
				  <div class="folio-item-cell">
							 <h3 class="folio-title">{  title}</h3>	     					    
							   <span class="folio-types">
								  {  desc}
							 </span>
						 </div>	                      	
			  </div>                 
		   </a>
		</div>	               
		 </div>
</main>