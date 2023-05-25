<template>
<div class="flex justify-start ml-7 mb-5 ">

</div>
    <transition name="slide">
      <form  v-show="EditProducts"  @submit.prevent="submitCategories"  action=""  class="bg-gray-200 dark:bg-gray-800 rounded-lg border border-gray-500 mb-5" >
 <div class="flex justify-end ">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 text-red-900 dark:text-red-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="doProducts(false)">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </div>
  <div class="w-full mx-auto grid rounded-lg grid-cols-12 gap-4 p-1 mb-5">
    <div class="col-span-12 rounded-lg border border-gray-500 dark:border-gray-700 sm:col-span-9 mb-auto">
      <!-- component -->
      <div class="rounded-lg px-8 pt-6 pb-8 flex flex-col">
        <div class="-mx-3 md:flex mb-6 justify-between space-x-4">
          <div class="w-full">
            <div class="flex justify-start"> <span class="px-1 text-sm text-gray-600 dark:text-gray-300 text-left">Category Name</span></div>
            <input type="text" placeholder="Category Name" required v-model="CategoryName" :class="['border-2','appearance-none','block','w-full','bg-white','dark:bg-gray-900','text-gray-800','dark:text-gray-100','rounded-lg','py-3','px-4',
              { 'border-red-500': CategoryName.length <= 0 },{ 'border-green-500': CategoryName.length <= 1 }]" >
            <p v-bind:hidden="CategoryName.length >= 1" class="text-red text-xs italic text-red-600 dark:text-red-400">Please fill out this field.</p>
          </div>
        </div>
      </div>
    </div>
   
    <div class="col-span-2 rounded-lg border border-gray-400 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-2 sm:col-span-3">
      <div class="bg-white dark:bg-gray-900 col-start-6 col-end-5 p-1 rounded-xl my-4 mr-auto shadow-md">
        <div class="text-gray-500 font-light mb-1 text-left ml-2 p-1">Product name:
          <a class="font-semibold text-gray-800 dark:text-gray-100">{{CategoryName}}</a>
        </div>
      </div>
      
      <div class="space-y-1">
          <div class="flex w-full">
            <button class="btn btn-primary group rounded-2xl h-12 w-full bg-green-500 dark:bg-green-600 font-bold text-lg text-white relative overflow-hidden" type="submit" @click="AddProducts" v-bind:disabled="CategoryName.length == 0">Submit
            <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
            </button>
          </div>
        
          <div class="flex w-full">
          <button class="group rounded-2xl h-12 w-full bg-red-500 dark:bg-red-700 font-bold text-lg text-white dark:text-gray-200 relative overflow-hidden" @click="Canceled">
            Cancel
            <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 dark:group-hover:bg-gray-800/30 rounded-2xl">
            </div>
          </button>
          </div>
        </div>
    </div>
  </div>
</form>
</transition>
<div class="border-2 p-3 border-solid border-gray-500 rounded-xl">
<div class="flex justify-between">

  <h2 class="text-gray-400 p-2" 
  v-bind:class="{
    'text-red-700 ': ProductCategory.length <= 5,
    'text-red-400 ': ProductCategory.length <= 10,
  }">
  Categories: {{ ProductCategory.length }}</h2>
  <h2  v-if="!EditProducts" @click="doProducts(true)" class="text-green-600 text-lg cursor-pointer">+ Add Categories</h2>

</div>
  <!-- ===================   SEARCH BAR    ========================== -->

  <div class="flex space-x-3">

    <div class="w-full mb-4">
      <P class="text-left text-xs text-gray-300">ID</P>
      <div class="relative w-full ">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
          <svg aria-hidden="true" class="w-5 h-auto text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <input type="number" id="searchCategory" v-model="searchCategoryID" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ID ..." required>
      </div>
    </div>

    <div class="w-full mb-4">
      <P class="text-left text-xs text-gray-300">Nom</P>
      <div class="relative w-full ">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
          <svg aria-hidden="true" class="w-5 h-auto text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <input type="text" id="searchCategory" v-model="searchCategoryName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name ..." required>
      </div>
    </div>

    <div class="w-full mb-4">
      <P class="text-left text-xs text-gray-300">Date Creation</P>
      <div class="relative w-full ">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
          <svg aria-hidden="true" class="w-5 h-auto text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <input type="date" id="searchCategory" v-model="searchDateCreation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
      </div>
    </div>

    <div class="w-full mb-4">
      <P class="text-left text-xs text-gray-300">Date Modification</P>
      <div class="relative w-full ">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
          <svg aria-hidden="true" class="w-5 h-auto text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
          </svg>
          
        </div>
        <input type="date" id="searchCategory" v-model="searchDateModification" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
      </div>
    </div>

  </div>
    <!-- ===================   END SEARCH BAR    ========================== -->
    <!-- ===================   DIALOGUE UPDATE BAR    ========================== -->
    <transition name="slide">
      <div v-if="DialogueUpdate" class=" modal text-gray-500 p-2 border-2 border-solid border-red-300 rounded bg-red-400">
        <label class="flex justify-start">Modifier</label>
        <div class="flex justify-center space-x-3 mb-3 mr-2">
            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative w-full flex justify-center space-x-2">
            <input disabled v-model="categoryIdToUpdate" required :class="['cursor-not-allowed','appearance-none','block','bg-white','dark:bg-gray-700','text-gray-800','dark:text-gray-100','rounded-lg','py-3','px-4']" type="number" placeholder="ID"> 
            <input v-model="categoryNameToUpdate" placeholder="Category name"  type="text" id="search" class="block w-full p-4 pl-10  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            <button @click="updateProductCategory(categoryIdToUpdate,categoryNameToUpdate)" class="bg-[#1e3a8a] hover:bg-blue-800 rounded text-white font-bold px-4 rounded-l"> Modifier </button>
            <button @click="cancelUpdate" class="bg-[#b91c1c] hover:bg-red-600 rounded font-bold px-4 rounded-r text-white">Annuler</button>
          </div>
        </div>
      </div>
    </transition>
    <!-- ===================   END UPDATE DELETE BAR    ========================== -->
    <!-- ===================   DIALOGUE DELETE BAR    ========================== -->
    <!-- <transition name="slide">
    <div v-if="DialogueDelete" class="bg-red-200 modal text-gray-500 p-2">
      <div class="flex justify-center space-x-3">
        <h3 class="text-red-500">Vous voulez vraiment Supprimer se categories {{ categoryIdToDelete }} :</h3>
        <div class="modal-buttons space-x-3">
          <button @click="deleteProductCategory(categoryIdToDelete)">Oui</button>
          <button @click="cancelDelete">Non</button>
        </div>
      </div>
    </div>
    </transition> -->
    <!-- ===================   END DIALOGUE DELETE BAR    ========================== -->
<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
  <thead class="text-xs dark:border-none  border border-indigo-600  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th scope="col" class=" py-3 px-6">
        <div @click="sortByIdCategory"  class="cursor-pointer flex items-center">
          ID
          <a >
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
              <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
            </svg>
          </a>
        </div>
      </th>
      <th scope="col" class="py-3 px-6">
        <div @click="sortByNameCategory" class="cursor-pointer flex items-center">
          Category
          <a >
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
              <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
            </svg>
          </a>
        </div>
      </th>
      <th scope="col" class="py-3 px-6">
        <div @click="sortByDateCreation" class="cursor-pointer flex items-center">

          Date Creation
          <a ><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
              <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
            </svg></a>
        </div>
      </th>
      <th scope="col" class="py-3 px-6">
        <div @click="sortbymodifiedProductCategory" class="cursor-pointer flex items-center">
          Date Modificatin
          <a ><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
              <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
            </svg></a>
        </div>
      </th>
      <th scope="col" class="py-3 px-6">Delete
      
      </th>
      <th scope="col" class="py-3 px-6">Edit
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="category in ProductCategory" :key="category.idProductCategory" 
    class="relative bg-gray-100 hover:bg-blue-100 border border-indigo-600 dark:bg-gray-800 dark:hover:bg-gray-600   dark:border-gray-700 w-96">
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
        {{ category.modifiedProductCategory }}
      </td>

      <td class="py-4 px-6 text-right">
        <button @click="confirmDelete(category.idProductCategory)">Delete</button>
      </td>
      <td class="py-4 px-6 text-right">
        <button @click="confirmUpdate(category.idProductCategory,category.nameProductCategory)">Modifier</button>
      </td>
      <transition name="slide">
    <div v-if="DialogueDelete && categoryIdToDelete===category.idProductCategory" class="absolute top-0 left-0 w-full h-full  bg-red-200 modal text-gray-500 py-4">
      <div class="flex justify-center space-x-3">
        <h3 class="text-red-500">Vous voulez vraiment Supprimer se categories {{ categoryIdToDelete }} :</h3>
        <div class="modal-buttons space-x-3">
          <button @click="deleteProductCategory(categoryIdToDelete)">Oui</button>
          <button @click="cancelDelete">Non</button>
        </div>
      </div>
    </div>
    </transition>
    </tr>

  </tbody>
</table>
</div>

</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      header_table: 'Products',
      EditProducts: false,
      CategoryName: '',

      DialogueDelete: false,
      categoryIdToDelete: null,

      DialogueUpdate:false,
      categoryIdToUpdate: null,
      categoryNameToUpdate:null,
      

      ProductCategory: [],

      sortById: 'asc',
      sortByName: 'asc',
      sortBycreatedProductCategory:'asc',
      sortbymodifiedProductCategory:'asc',

      searchCategoryName: '',
      searchCategoryID:'',
      searchDateModification:'',
      searchDateCreation: '',

    };
  },
  
  computed: {

        //========= Search
        ProductCategory() {
            if (this.searchCategoryID !== '') {
              return this.ProductCategory.filter(category =>
                category.idProductCategory === this.searchCategoryID
              );
            }
            
            if (this.searchCategoryName !== '') {
              return this.ProductCategory.filter(category =>
                category.nameProductCategory.includes(this.searchCategoryName)
              );
            }
            
            if (this.searchDateCreation!=='') {
            const dateParts = this.searchDateCreation.split('-');
            const searchDates = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

            return this.ProductCategory.filter(category => 
              category.createdProductCategory === searchDates
            );
          }
          if (this.searchDateModification!=='') {
            const dateParts = this.searchDateModification.split('-');
            const searchDates = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

            return this.ProductCategory.filter(category => 
              category.modifiedProductCategory === searchDates
            );
          }
            
            else{
                return this.ProductCategory;}},
        //========= End Search
  },

  mounted() {
    this.GetAll()
  },
  methods: {
    confirmUpdate(categoryId,categoryname){
      this.categoryNameToUpdate=categoryname;
      this.categoryIdToUpdate=categoryId;
      this.DialogueUpdate=true;
    },
    // updateCategory(){
    //   this.DialogueUpdate=false;
    // },
    cancelUpdate(){
      this.DialogueUpdate=false;
    },


    
    confirmDelete(categoryId) {
      this.categoryIdToDelete = categoryId;
      this.DialogueDelete = true;
    },
    deleteProductCategory() {
      console.log("Deleting category with ID:", this.categoryIdToDelete);
      this.DialogueDelete = false;
    },
    cancelDelete() {
      this.DialogueDelete = false;
    },




    sortbymodifiedProductCategory(){
      this.sortByDate = this.sortByDate === 'asc' ? 'desc' : 'asc';
      this.ProductCategory.sort((a, b) => 
        {
          const dateA = new Date(a.modifiedProductCategory);
          const dateB = new Date(b.modifiedProductCategory);
          if (this.sortByDate === 'asc') {
            return dateA - dateB;
          }
          else {
            return dateB - dateA;
          }
        });
    },
    sortByDateCreation() {
        this.sortByDate = this.sortByDate === 'asc' ? 'desc' : 'asc';
        this.ProductCategory.sort((a, b) => {
          const dateA = new Date(a.createdProductCategory);
          const dateB = new Date(b.createdProductCategory);

          if (this.sortByDate === 'asc') {
            return dateA - dateB;
          } else {
            return dateB - dateA;
          }
        });
    },
    sortByNameCategory() {
        this.sortByName = this.sortByName === 'asc' ? 'desc' : 'asc';
        this.ProductCategory.sort((a, b) => {
          const nameA = a.nameProductCategory.toUpperCase();
          const nameB = b.nameProductCategory.toUpperCase();

          if (this.sortByName === 'asc') {
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
          } else {
            if (nameA > nameB) return -1;
            if (nameA < nameB) return 1;
          }

          return 0;
        });
    },
    sortByIdCategory() {
        this.sortBy = this.sortBy === 'asc' ? 'desc' : 'asc';
        this.ProductCategory.sort((a, b) => {
          if (this.sortBy === 'asc') {
            return a.idProductCategory - b.idProductCategory;
          } else {
            return b.idProductCategory - a.idProductCategory;
          }
        });
    },
    GetAll(){
      axios.get('http://localhost:8080/productcategory').then(response => 
      {
        this.ProductCategory = response.data;
      }).catch(error => { console.error(error); });
    },
    updateProductCategory(idProductCategory,categoryNameToUpdate){
      axios.put(`http://localhost:8080/productcategory/${idProductCategory}`,{nameProductCategory:categoryNameToUpdate})
      .then(response => {
        this.GetAll()
        this.DialogueUpdate=false;
        })
        .catch(error => {
          console.error(error);
        });
    },
    deleteProductCategory(idProductCategory) {
      axios.delete(`http://localhost:8080/productcategory/${idProductCategory}`)
        .then(response => {
          this.GetAll()
          this.DialogueDelete= false;
        })
        .catch(error => {
          console.error(error);
        });
    },
    submitCategories() {
      const data = {
        nameProductCategory: this.CategoryName
      };
      axios.post('http://localhost:8080/productcategory', data)
        .then(response => {
          console.log(response.data);
          // Handle the response as needed
          this.CategoryName = "";
          this.GetAll()
        })
        .catch(error => {
          console.error(error);
        });
    },

    AddProducts() {
      this.Products.push({ id: this.Products.length + 1, name: this.CategoryName });
      this.ProductName = "";
    },
    Canceled(){
      this.GetAll()
    },
    doProducts(EditProducts) {
      console.log('EditP');
      this.EditProducts = EditProducts;
      this.ProductName = "";
    }
  }
};
</script>

<style>
.slide-enter-active {
  transition: all 1s;
  opacity: 0;
}
.slide-enter-to {
  opacity: 1;
}

.slide-leave-active {
  transition: all 1s;
  opacity: 1;
}
.slide-leave-to {
  opacity: 0;
}
</style>
