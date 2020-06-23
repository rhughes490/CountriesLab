import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
     filterCountry: "",
     allCountries: [{"population": 0}]
    },
    mounted(){      
      this.fetchCountries();
    },
    computed: {
      totalPopulation: function(){
        return this.allCountries.reduce((runningTotal, allCountries) => runningTotal + allCountries.population, 0)
      },
      filteredCountries: function(){
        const filtered = this.allCountries.filter((country) => {return country.name.toUpperCase().startsWith(this.filterCountry.toUpperCase())})
        this.filterCountry = filtered
        return filtered
        
      }
    },
    methods: {
      fetchCountries: function() {
        fetch("http://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.allCountries = data)
      }
    }
  });
})

