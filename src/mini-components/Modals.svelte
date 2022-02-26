<script>
    export let modalNum;
    export let alt;
    export let img;
    export let title;
    export let desc;
    export let category;
    export let link;

</script>
<main>
    <div id={`modal-` +   modalNum}  class="popup-modal slider mfp-hide">	

        <div  class="media">
            <img src={  img} alt={  alt} />
        </div>      	

      <div  class="description-box">
         <h4>{  title}</h4>		      
         <p>{  desc}</p>

         <div  class="categories">{  category}</div>			               
      </div>

    <div  class="link-box">
       <a href={  link}>Visit</a>
         <a href="/#"  class="popup-modal-dismiss">Close</a>
    </div>		      

  </div>
</main>