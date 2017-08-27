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

new Vue({
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
});
