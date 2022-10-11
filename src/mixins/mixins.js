// mixins.js - exporteer de standaard mixins in deze applicatie.
// Ze kunnen worden geladen in elke component die ze nodig heeft.
export default {
    methods: {
        getImgUrl(img) {
            return require('../assets/countries/' + img);
        }
    },
    created(){
        console.log('Component lifecycle hook created() called');
    }
}
