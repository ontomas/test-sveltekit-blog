<script context="module">
	export const load = async ({ fetch, page: { params } }) => {
		const { slug } = params;
		const res = await fetch(`/pages/${slug}.json`);
		if (res.ok) {
			const page = await res.json();
			return { props: { page } };
		}
	};
</script>

<script>
	export let page;
	const { title, content } = page;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1 class="text-4xl font-semibold mb-5">{title}</h1>

<article>
	{@html content.html}
</article>
