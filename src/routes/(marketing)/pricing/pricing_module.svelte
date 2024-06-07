<script lang="ts">
	import { pricingPlans } from "./pricing_plans"

	// Module context
	export let highlightedPlanId: string = ""
	export let callToAction: string
	export let currentPlanId: string = ""
	export let center = true
</script>

<div
	class="flex flex-col gap-10 lg:flex-row {center
		? 'place-content-center'
		: ''} flex-wrap"
>
	{#each pricingPlans as plan}
		<div
			class="card card-bordered flex-none {plan.id === highlightedPlanId
				? 'border-primary'
				: 'border-gray-200'} min-w-[260px] max-w-[310px] flex-1 flex-grow p-6 shadow-xl"
		>
			<div class="flex h-full flex-col">
				<div class="text-xl font-bold">{plan.name}</div>
				<p class="mt-2 text-sm leading-relaxed text-gray-500">
					{plan.description}
				</p>
				<div class="mt-auto pt-4 text-sm text-gray-600">
					Plan Includes:
					<ul class="mt-2 list-inside list-disc space-y-1">
						{#each plan.features as feature}
							<li class="">{feature}</li>
						{/each}
						<ul></ul>
					</ul>
				</div>
				<div class="pt-8">
					<span class="text-4xl font-bold">{plan.price}</span>
					<span class="text-gray-400">{plan.priceIntervalName}</span>
					<div class="mt-6 flex flex-1 flex-row items-center pt-4">
						{#if plan.id === currentPlanId}
							<div
								class="btn btn-outline btn-success no-animation mx-auto w-[80%] cursor-default"
							>
								Current Plan
							</div>
						{:else}
							<a
								href={"/account/subscribe/" +
									(plan?.stripe_price_id ?? "free_plan")}
								class="btn btn-primary mx-auto w-[80%]"
							>
								{callToAction}
							</a>
						{/if}
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
