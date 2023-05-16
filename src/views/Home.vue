<template>
<div class="flex justify-start ml-7 mb-5 ">
  <p class="text-green-600 text-lg cursor-pointer" v-if="!EditProducts" @click="doProducts(true)" >+Add Categegories</p>
</div>

<form v-if="EditProducts" @submit.prevent="submitCategories" action="" class="bg-blue-100 rounded-lg border border-gray-500 mb-5">
  <div class="flex justify-end">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 text-red-900 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" 
      @click="doProducts(false)">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
  </div>
  <div  class="w- full mx-auto grid rounded-lg grid-cols-12 gap-4 p-1 mb-5 ">
    <div class="col-span-12 rounded-lg border border-gray-500  sm:col-span-9 mb-auto">
      <!-- component -->
      <div class="  rounded-lg px-8 pt-6 pb-8 flex flex-col ">
          <div class="-mx-3 md:flex mb-6  justify-between space-x-4 ">
            
            <div class="w-full">
              <div class="flex justify-start"> <span class="px-1 text-sm text-gray-600 text-left">Category Name</span></div>
                <input required  v-model="CategoryName"   class="border-2 border-gray-300 appearance-none block w-full bg-white text-grey-darker  border-grey-lighter rounded-lg py-3 px-4 " id="grid-first-name" type="text" placeholder="Category Name">
                <p v-bind:hidden="CategoryName.length>0" class="text-red text-xs italic text-red-600">Please fill out this field.</p>
            </div>
          </div>
      </div>
    </div>
    <div class="col-span-2 rounded-lg border border-gray-400 bg-gray-100 p-2 sm:col-span-3">

      <div class="bg-white col-start-6 col-end-5 p-1 rounded-xl my-4 mr-auto shadow-md " >
        <div class=" font-light mb-1 text-left ml-2 p-1"> Product name: 
          <a class="font-semibold" > {{ CategoryName }}</a>  
        </div>
      </div>
    <div class=" space-y-1">
    <div class="flex w-full ">
      
                  <button class="btn btn-primary group rounded-2xl  h-12  w-full bg-green-500 font-bold text-lg text-white relative overflow-hidden" type="submit" 
                  @click="AddProducts"
                  v-bind:disable="CategoryName.length===0 || ProductColor.length===0 || CategoryProduct.length===0  || PriceProduct.length===0 || AvailableProduct.length===0"
                  >Submit
                  
                  <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
                  </div>
                  </button>
            
                </div>
                <div class="flex w-full ">
                  <button class="group rounded-2xl  h-12  w-full bg-red-500 font-bold text-lg text-white relative overflow-hidden" type="" >Cancel
                  
                  <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
                  </div>
                  </button>
            
                </div>
    </div>
    </div>

  </div>
</form>
  <!-- ===================   SEARCH BAR    ========================== -->
          <div class="flex items-center w-full mb-4">
            <label for="voice-search" class="sr-only">Search</label>
            <div class="relative w-full ">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
                <svg aria-hidden="true" class="w-5 h-auto text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <input type="text" id="searchCategory" v-model="searchCategory" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required>
            </div>
          </div>
<!-- ===================   END SEARCH BAR    ========================== -->
<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
  
  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th scope="col" class="py-3 px-6">
        <div class="flex items-center">
         ID
          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
              <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
            </svg></a>
        </div>
      </th>
      <th scope="col" class="py-3 px-6">
        <div class="flex items-center">
         Category
          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
              <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
            </svg></a>
        </div>
      </th>
      <th scope="col" class="py-3 px-6">
        <div class="flex items-center">
          Date Creation
          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
              <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
            </svg></a>
        </div>
      </th>
      <th scope="col" class="py-3 px-6">
        <div class="flex items-center">
          Date Modificatin
          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
              <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
            </svg></a>
        </div>
      </th>

      <th scope="col" class="py-3 px-6">
        <span class="sr-only">Edit</span>
      </th>
      <th scope="col" class="py-3 px-6">
        <span class="sr-only">Edit</span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="category in ProductCategory" :key="category.idProductCategory" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 w-96">
      <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {{ category.idProductCategory }}
      </th>
      <td class="py-4 px-6">
        {{ category.nameProductCategory }}
      </td>
      <td class="py-4 px-6">
        {{ category.createdProductCategory }}
      </td>
      <td class="py-4 px-6">
        {{ category.createdProductCategory }}
      </td>

      <td class="py-4 px-6 text-right">
        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
      </td>
      <td class="py-4 px-6 text-right">
        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
      </td>
    </tr>

  </tbody>
</table>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      header_table: 'Products',
      EditItems: true,
      EditProducts: true,
      newItem: '',
      CategoryName: '',
      searchCategory: '',
      ProductCategory: []
    };
  },
  computed: {
    ProductCategory() {
      return this.ProductCategory.filter(category =>
        category.nameProductCategory.includes(this.searchCategory)
      );
    }
  },
  mounted() {
    // GET ALL CATEGORIES FROM SPRINGBOOT
    axios.get('http://localhost:8080/productcategory')
      .then(response => {
        this.ProductCategory = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
  methods: {
    // POST CATEGORY TO SPRINGBOOT
    submitCategories() {
      const data = {
        nameProductCategory: this.CategoryName
      };
      axios.post('http://localhost:8080/productcategory', data)
        .then(response => {
          console.log(response.data);
          // Handle the response as needed
          this.CategoryName = "";
          window.location.reload();
        })
        .catch(error => {
          console.error(error);
        });
    },
    AddProducts() {
      this.Products.push({ id: this.Products.length + 1, name: this.CategoryName });
      this.ProductName = "";
    },
    AddItems() {
      this.Items.push({ id: this.Items.length + 1, label: this.newItem });
      this.newItem = "";
    },
    doEditItems(EditItems) {
      this.EditItems = EditItems;
      this.newItem = "";
    },
    doProducts(EditProducts) {
      console.log('EditP');
      this.EditProducts = EditProducts;
      this.ProductName = "";
    }
  }
};
</script>
