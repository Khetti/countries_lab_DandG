import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      allCountries: [],
      findCountry: {
        name: ""
      }
    },
    mounted() {
      this.fetchCountries();
    },
    computed: {
      totalPopulation: function() {
        return this.allCountries.reduce((totalPopulation, country) => {
          return totalPopulation + country.population
        }, 0)
      },
      filterCountries: function() {
        return this.allCountries.filter((country) => {
          return country.name === this.findCountry.name;
        });
      }
    },
    methods: {
      fetchCountries: function() {
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then((data) => {
          this.allCountries = data;
        });
      }
    }
  });
});
