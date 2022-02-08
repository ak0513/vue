<template>
	<div class="mt-3">
		<ul class="item-list row p-0 g-2">
			<li class="data-a col-12 col-md-6">
				<b-card 
					title="금액"
					header-bg-variant="secondary"
					header-text-variant="white"
					footer="footer1"
					footer-text-variant="primary"
				>
					<b-card-text>
					간략설명
					<span class="mt-3 d-block"><b-button v-b-modal.modal-1>Launch demo modal</b-button></span>
					</b-card-text>
					<template #header>
						<small class="">보장명</small>
					</template>
					<template #footer>
						<small class="">회사명</small>
					</template>
				</b-card>
			</li>
			<li class="data-b col-4"><div>2B</div></li>
			<li class="data-a col-4"><div>3A</div></li>
			<li class="data-b col-4"><div>4B</div></li>
			<li class="data-b col-4"><div>5B</div></li>
			<li class="data-a col-4"><div>6A</div></li>
			<li class="data-c col-4"><div>7C</div></li>
			<li class="data-c col-4"><div>8C</div></li>
			<li class="data-a col-4"><div>9A</div></li>
			<li class="data-a col-4"><div>10A</div></li>
			<li class="data-c col-4"><div>11C</div></li>
			<li class="data-d col-4"><div>12D</div></li>
		</ul>
		<modal1></modal1>
	</div>
</template>

<script>
import modal1 from './modal1.vue'

export default {
	name: 'item-list-compontents',
	components: {
		modal1
	},

}
</script>

<style>
ul.item-list li {
	list-style: none;
}

ul.item-list.sort li {
	display:none;
}
ul.item-list.sort li.active {
	display:block;
}
</style>