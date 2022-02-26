<script>
    export let icon;
    export let count;
    export let title;
</script>

<main>
    <div class="bgrid stat">

        <div class="icon-part">
            <i class={icon}></i>
        </div>

        <h3 class="stat-count">
            { count}
        </h3>

        <h5 class="stat-title">
            { title}
        </h5>

    </div>
</main>