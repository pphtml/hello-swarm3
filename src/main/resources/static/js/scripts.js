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
})


// var app7 = new Vue({
//     el: '#app-7',
//     data: {
//         groceryList: [
//             { id: 0, text: 'Vegetables' },
//             { id: 1, text: 'Cheese' },
//             { id: 2, text: 'Whatever else humans are supposed to eat' }
//         ]
//     }
// });

/*new Vue({
    el: '#repeat-object',
    data: {
        exercises: [
            {
                title: 'Sčítání'
            },
            {
                title: 'Odčítání'
            },
            {
                title: 'Násobení'
            },
            {
                title: 'Dělení'
            }
        ],
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
});*/

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
    { path: '/foo', component: Foo },
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
