<script lang="ts">
	import { blogInfo, sortedBlogPosts } from "./posts"
</script>

<svelte:head>
	<title>{blogInfo.name}</title>
	<meta name="description" content="Our blog posts." />
</svelte:head>

<div class="mx-auto max-w-lg px-6 py-8 lg:py-12">
	<div
		class="flex place-content-center items-baseline gap-3 text-center text-3xl font-medium text-primary lg:text-5xl"
	>
		<div
			class="bg-gradient-to-r from-primary to-accent bg-clip-text text-center font-bold leading-relaxed text-transparent"
		>
			{blogInfo.name}
		</div>
		<a href="/blog/rss.xml" target="_blank" rel="noreferrer">
			<img
				class="h-5 w-5 flex-none object-contain"
				src="/images/rss.svg"
				alt="rss feed"
			/>
		</a>
	</div>
	<div class="text-center text-lg">A demo blog with sample content.</div>

	{#each sortedBlogPosts as post}
		<a href={post.link}>
			<div class="card my-6 flex-row overflow-hidden bg-white shadow-xl">
				<div class="w-6 flex-none bg-secondary md:w-32"></div>
				<div class="px-6 py-6">
					<div class="text-xl">{post.title}</div>
					<div class="text-sm text-accent">
						{post.parsedDate?.toLocaleDateString("en-US", {
							month: "short",
							day: "numeric",
							year: "numeric",
						})}
					</div>
					<div class="text-slate-500">{post.description}</div>
				</div>
			</div>
		</a>
	{/each}
</div>
