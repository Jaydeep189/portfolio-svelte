<script>
    export let name;
    export let percent;
</script>

<main>
    <li>
        <div class={`progress percent` + percent}><span>{percent}%</span></div>
        <strong>{name}</strong>
    </li>
</main>