<template>
	<div id="aaa">
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
			<div v-bind:title="msg">{{ msg }}</div>
			<p v-if="seen1">이제 나를 볼 수 있어요</p>
      <p v-else>1이제는 안보입니다</p>
			<p v-if="seen2">이제 나를 볼 수 없어요</p>
      <p v-else>2이제는 안보입니다</p>
			<button @click="seen2View">Seen2 보기</button>
      <div v-bind:class="{ active1: isActive, 'text-danger': hasError }">isActive가 true면 class="active"</div>
      <div v-bind:class="classObject">classObject</div>
		</div>
</template>

<script>
export default {
	name: 'home',
	data() {
		return {
			msg: 'aabbbaa',
			seen1: true,
			seen2: false,
			name: 'aaa',
      isActive: true,
      hasError: true,
      
      classObject: {
        active: true,
        'text-danger': false
      }
		}
	},
	methods: {
		seen2View() {
			this.seen2 = true
			console.log(this.name)
		}
	}
}
</script>