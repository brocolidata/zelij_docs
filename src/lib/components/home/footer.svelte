<script>
	import { navItems, siteConfig, companyInfo } from '$lib/config';
	import SocialMedia from '../social-media.svelte';
	import { base } from '$app/paths';
</script>

<footer class="mx-auto mt-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8">
	<div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
		<div>
			<a href="/">
				<img src={base}{siteConfig.logo} alt={siteConfig.title} class="h-6 dark:hidden" />
				<img src={base}{siteConfig.logoDark} alt={siteConfig.title} class="hidden h-6 dark:block" />
			</a>
		</div>

		<!-- <ul class="text-center">
			{#each navItems as item}
				<li
					class="relative inline-block pe-8 before:absolute before:end-3 before:top-1/2 before:-translate-y-1/2 before:text-gray-300 before:content-['/'] last:pe-0 last-of-type:before:hidden dark:before:text-neutral-600"
				>
					<a
						class="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:text-gray-800 focus:outline-none dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
						href={item.href}
					>
						{item.title}
					</a>
				</li>
			{/each}
		</ul> -->

		<div class="flex flex-col items-center gap-2">
			<div class="flex items-center gap-2"> 
				<img src={base}{companyInfo.logo} alt={companyInfo.name} class="h-6" />
				<span class="text-sm text-muted-foreground">by {companyInfo.name}</span>
			</div>
            <div class="w-full flex justify-center sm:justify-end">
                <SocialMedia socialsArray={companyInfo.socials}/>
            </div>
        </div>
	</div>
</footer>
