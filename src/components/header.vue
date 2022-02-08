<template>
	<header id="header">
		<h1>Title</h1>
		<b-button v-b-toggle.sidebar-1 variant="primary">
			<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
				<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
			</svg>
			<span class="a11y">전체메뉴</span>
		</b-button>
	</header>
</template>

<script>
export default {
  name: 'header-components'
}
</script>

<style scoped>
#header {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height:50px;
	padding: 0 1.0rem;
	background-color:#fff;
	border-bottom:1px solid var(--bs-gray-400)
}
#header h1 {
	margin:0;
	font-size:1.2rem;
}
#header .btn {
	position:absolute;
	top:0;
	right:0;
	width: 50px;
	height:100%;
	padding: 0.4rem 0.5rem;
	border-radius: 0;
}
</style>