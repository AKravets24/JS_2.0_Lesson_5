const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    imgCatalog: 'https://placehold.it/200x150',
    searchLine: '',
    test: 'testParam',
    filter: [],

  },

  methods: {
    getJson(url){
      return fetch(url)
          .then(result => result.json())
          .catch(error => {
            console.log(error);
          })
    },

    addProduct(product){
      console.log(product.id_product);
      console.log(product.product_name);
      console.log(product.price);
    },


    filterGoods() {
      this.filter = [];
      for (let product of this.products){
        if ( product.product_name == this.searchLine){
          this.filter.push(product)
        }
      }
    }

  },

  mounted(){
    this.getJson(`${API + this.catalogUrl}`)
        .then(data => {
          for(let el of data){
            this.products.push(el);
          }
          this.filter = this.products;
        });
  }
});

// filterGoods() {
//   this.filter = [];
//    for (let product of products){
//     if ( product.product_name ==  word){
//       filter.push(product)
//     }
//   };
// }