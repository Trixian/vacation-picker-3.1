// filters.js - global filters, registered in main.js

import Vue from 'vue';

// 1. Filter voor hoofdletters
Vue.filter('uppercase', function (value) {
    if (!value) return;
    return value.toUpperCase();
});
// 2. filter voor valuta
Vue.filter('currency', function (value, currency) {
    if (!value) return;
    return new Intl.NumberFormat('nl-NL',
        {
            style: 'currency',
            currency: currency
        })
        .format(value)
});
