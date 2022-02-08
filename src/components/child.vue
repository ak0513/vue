<template>
   <div id="child">
		<div>부모로부터 전달받음: <strong>{{ message }}</strong></div>
        <div>
            <input v-model="val">
            <button @click="sendToParent">부모로 데이터 전달</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'child-components',
    props: {
        message: String
    },
    data:() => ({
        val: ''
    }),
    methods: {
        sendToParent() {
            this.$emit("callParent", this.val)
        },
	}  
    
}
</script>