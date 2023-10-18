<script>
	export let data;
	import {PortableText} from '@portabletext/svelte'
</script>

<h1>{data.page.title}</h1>
<div>
<img src="{data.page.imageUrl}" alt="{data.page.title}">
</div>

<PortableText
  value={data.page.body}
  components={{}}
/>