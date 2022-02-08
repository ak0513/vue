<template>
    <b-sidebar id="sidebar-1" title="Sidebar" bg-variant="dark" text-variant="light" shadow>
        <template #default="{ hide }">
            <nav class="mb-3">
                <p class="sub-tit">그룹명</p>
                <b-nav vertical>
                    <b-nav-item @click="hide"><span data-type="data-all" @click="sort">data-All</span></b-nav-item>
                    <b-nav-item @click="hide"><span data-type="data-a" @click="sort">data-A</span></b-nav-item>
                    <b-nav-item @click="hide"><span data-type="data-b" @click="sort">data-B</span></b-nav-item>
                    <b-nav-item @click="hide"><span data-type="data-c" @click="sort">data-C</span></b-nav-item>
                    <b-nav-item @click="hide"><span data-type="data-d" @click="sort">data-D</span></b-nav-item>
                </b-nav>
                <p class="sub-tit mt-3">그룹명</p>
                <b-nav vertical>
                    <b-nav-item @click="hide"><span data-type="data-all" @click="sort">data-All</span></b-nav-item>
                    <b-nav-item @click="hide"><span data-type="data-a" @click="sort">data-A</span></b-nav-item>
                    <b-nav-item @click="hide"><span data-type="data-b" @click="sort">data-B</span></b-nav-item>
                    <b-nav-item @click="hide"><span data-type="data-c" @click="sort">data-C</span></b-nav-item>
                    <b-nav-item @click="hide"><span data-type="data-d" @click="sort">data-D</span></b-nav-item>
                </b-nav>
            </nav>
          
            <ul>
                <li><router-link to="/insurance/">index</router-link></li>
                <li><router-link to="/insurance/home">home</router-link></li>
                <li><router-link to="/insurance/about">about</router-link></li>
            </ul>
        </template>
    </b-sidebar>
</template>

<script>
export default {
    name: 'navi',
    data:() => ({
         // val: ''

    }),
    methods: {
		sort(e) {
			let ele = e.target;
			let eleDataType = ele.getAttribute('data-type');
			let dataType = document.querySelectorAll('.' + ele.getAttribute('data-type'));

			let itemList = document.querySelector('.item-list');
			let dataAll = document.querySelectorAll('.item-list > li');

			if(!itemList.classList.contains('sort')) {
				itemList.classList.add('sort');
			}

			if(eleDataType === 'data-all') {
				itemList.classList.remove('sort');
			} else {
				dataAll.forEach(function(e) {
					e.classList.remove('active')
				})
				dataType.forEach(function(e) {
					e.classList.add('active')
				})
			}
            this.setItemTitle(ele);
		},
        setItemTitle(ele) {
            // let itemTitle = ele.innerText;
            this.$emit("getItemTitle", ele.innerText)
        },
	}  
    
}
</script>

<style scoed>
#sidebar-1.b-sidebar > .b-sidebar-header {
    padding:1.0rem;
    font-size: 1.2rem;
}
#sidebar-1 .sub-tit {
    margin:0;
    padding:0.7rem 1.0rem;
    background-color: rgba(0,0,0,0.3);
    text-align: left;
}
#sidebar-1 .nav-link {
    padding:0;
    /* border-bottom:1px solid rgba(255,255,255,0.1); */
    text-align: left;
    color:#fff;
}
#sidebar-1 .nav-link span {
    display:block;
    padding: 0.5rem 1rem;
}
</style>