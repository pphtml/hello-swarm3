Vue.component('choice', {
    template: '<div>Výběr příkladů!</div>'
})

Vue.component('card', {
    props: ['title'],
    template: '' +
    '<div class="col-sm-4">' +
    '            <div class="panel panel-primary">\n' +
    '                <div class="panel-heading">{{ title }}</div>\n' +
    '                <div class="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image"></div>\n' +
    '                <div class="panel-footer">Buy 50 mobiles and get a gift card</div>\n' +
    '            </div>' +
    '</div>' +
    ''
});

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Choice = {
    template:
    '      <div class="row">' +
    '          <template v-for="(value, key) in categories">\n' +
    '              <card :title="value.name"></card>\n' +
    '          </template>\n' +
    '      </div>',
    data () {
        return {
            categories: undefined,
        }
    },
    beforeRouteEnter (to, from, next) {
        axios.get('/api/category/all').then(response => {
            next(vm => {
                // vm.name = 'abc'; //response.data.name
                // vm.phone = 'def'; //response.data.phone
                vm.categories = response.data;
                console.info(response.data);
            })
        })
    }
}

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
    { path: '/choice', component: Choice },
    { path: '/bar', component: Bar }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes: routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
    router: router
}).$mount('#app')
