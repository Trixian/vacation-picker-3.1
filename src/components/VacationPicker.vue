<template>
    <div>
        <h1>{{ header }}</h1>
        <div class="row">
            <div class="col-6">
                <ul class="list-group">
                    <li class="list-group-item"
                        @click="selectCountry(index)"
                        v-for="(country, index) in countryData.countries"
                        v-bind:key="country.id">
                        <span v-bind:id="country.id"
                              v-bind:title="country.details">
                              {{ country.id }} -
                              {{country.name | uppercase }}
                        </span>
                    </li>
                </ul>
                <hr>
            </div>
            <div class="col-6">
            <CountryDetail v-if="selectedCountry"
                               :name="selectedCountry.name"
                               :country="selectedCountry.name"/>            
            </div>
        </div>
    </div>

</template>

<script>
    import countryData from '../data/CountryData';
    import mixins from '../mixins/mixins';
    import CountryDetail from "./CountryDetail";

    export default {
        name: "VacationPicker",
        components: {CountryDetail},
        mixins: [mixins],
        data() {
            return {
                countryData,
                header: 'Vue Vacation Picker',
                selectedCountryIndex: 0,
                selectedCost: 1000,
                costs: [1000, 2000, 3000, 4000, 5000, 6000],
                filteredCountries: [],
                filterText: ''
            }
        },
        methods: {
            selectCountry(index) {
                this.selectedCountryIndex = index;
            },
        },
        computed: {
            selectedCountry() {
                return {
                    ...this.countryData.countries[this.selectedCountryIndex]
                }
            },
        }
    }
</script>

