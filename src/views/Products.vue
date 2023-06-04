<template>
  
  <div  v-show="EditProducts" class="border mb-4 p-4">
        <div class="flex justify-end">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 text-red-900 dark:text-red-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="doProducts(false)">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 class="tracking-widest text-2xl mb-2 text-white italic font-bold">{{ current }}</h1>
        <form @submit.prevent="submitProduct(idProductCategory)" action="" class=" p-5 bg-gray-200 dark:bg-gray-800 rounded-lg border border-gray-500 mb-5">
          <div class="flex">
              <div class="flex-auto w-[60%] ">
                

                        <template v-if="current === 'Products'">
                              <div class="flex p-4 flex-wrap justify-center w-full rounded-lg border border-gray-400 dark:border-gray-400 sm:col-span-9 ">

                                <div class="w-[100%] rounded-lg px-8 flex flex-col">
                                  <div class="-mx-3 md:flex mb-6 justify-between space-x-4">
                                    <div class="w-full">
                                      <div class="flex justify-start"><span class="px-1 text-sm text-gray-600 dark:text-gray-300 text-left">Product Name</span></div>
                                      <input type="text" placeholder="Products Name" required v-model="Productname" :class="['border-2','appearance-none','block','w-full','bg-white','dark:bg-gray-900','text-gray-800','dark:text-gray-100','rounded-lg','py-3','px-4',
                                        { 'border-red-500': Productname.length <= 0 },
                                        { 'border-green-500': Productname.length >= 1 }]">
                                      <p v-bind:hidden="Productname.length >= 1" class="text-red text-xs italic text-red-600 dark:text-red-400">Please fill out this field.</p>
                                    </div>
                                  </div>
                                </div>

                                <div class="w-[50%] rounded-lg px-8 flex flex-col">
                                  <div class="-mx-3 md:flex mb-6 justify-between space-x-4">
                                    <div class="w-full">
                                      <div class="flex justify-start"><span class="px-1 text-sm text-gray-600 dark:text-gray-300 text-left">Price</span></div>
                                      <input type="text" placeholder="Price" required v-model="Price" :class="['border-2','appearance-none','block','w-full','bg-white','dark:bg-gray-900','text-gray-800','dark:text-gray-100','rounded-lg','py-3','px-4',
                                        { 'border-red-500': Price.length <= 0 },{ 'border-green-500': Price.length >= 1 }]">
                                      <p v-bind:hidden="Price.length >= 1" class="text-red text-xs italic text-red-600 dark:text-red-400">Please fill out this field.</p>
                                    </div>
                                  </div>
                                </div>

                                <div class="w-[50%] rounded-lg px-8 flex flex-col">
                                  <div class="-mx-3 md:flex mb-6 justify-between space-x-4">
                                    <div class="w-full">
                                      <div class="flex justify-start"><span class="px-1 text-sm text-gray-600 dark:text-gray-300 text-left">Quantite</span></div>
                                      <input type="number" placeholder="Quantite" required v-model="quantite" :class="['border-2','appearance-none','block','w-full','bg-white','dark:bg-gray-900','text-gray-800','dark:text-gray-100','rounded-lg','py-3','px-4',
                                        { 'border-red-500': quantite <= 0 },{ 'border-green-500': quantite >= 1 }]">
                                      <p v-bind:hidden="quantite >= 1" class="text-red text-xs italic text-red-600 dark:text-red-400">Please fill out this field.</p>
                                    </div>
                                  </div>
                                </div>

                              </div>
                           
                        </template>

                        <template v-else-if="current === 'Categories'">
                          <div class="border border-gray-400 p-4 rounded-lg">
                          <label for="countries" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Les Categories</label>
                          <select id="countries" v-model="idProductCategory" :class="['border-2','appearance-none','block','w-full','bg-white','dark:bg-gray-900','text-gray-800','dark:text-gray-100','rounded-lg','py-3','px-4',{'border-red-500': idProductCategory.length <= 0 },{ 'border-green-500': idProductCategory.length >= 1 }]">
                            <option hidden value="">Les Categories</option>
                            <option v-for="category in ProductCategory" :key="category.idProductCategory" :value="category.idProductCategory">
                                      {{ category.nameProductCategory }}
                            </option>

                          </select>
                          
                        </div>
                        </template>

                        <template v-else-if="current === 'Pictures'">
                          <button class="text-white" @click="RemoveLastInput">Remove</button>
                            <button class="text-left text-white mb-3" @click="AddNewPicture">Plus une photo</button>
                          
                          <div class="flex justify-center">
                            <div id="file_inputs" class="space-y-3  w-[90%]">
                              <input  id="multiple_files" type="file" multiple class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
                            </div>
                          </div>
                        </template>


                        <template v-else-if="current === 'payment'">
                          <h1>DD</h1>
                        </template>
              </div>

              <div class="flex-initial w-[30%]  col-span-2 rounded-lg border border-gray-400 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-2 sm:col-span-3">
                      <div class="bg-white dark:bg-gray-900 col-start-6 col-end-5 p-1 rounded-xl my-4 mr-auto shadow-md">
                        <div class="text-gray-500 font-light mb-1 text-left ml-2 p-1">Product name:
                          <a class="font-semibold text-gray-800 dark:text-gray-100">{{Productname}}</a>
                        </div>
                        <div class="text-gray-500 font-light mb-1 text-left ml-2 p-1">Price:
                          <a class="font-semibold text-gray-800 dark:text-gray-100">{{Price}}</a>
                        </div>
                        <div class="text-gray-500 font-light mb-1 text-left ml-2 p-1">Quantite:
                          <a class="font-semibold text-gray-800 dark:text-gray-100">{{quantite}}</a>
                        </div>
                        <div class="text-gray-500 font-light mb-1 text-left ml-2 p-1">Categories:
                          <a class="font-semibold text-gray-800 dark:text-gray-100">{{idProductCategory}}</a>
                        </div>
                        <div class="text-gray-500 font-light mb-1 text-left ml-2 p-1">Pictures:
                          <a class="font-semibold text-gray-800 dark:text-gray-100">{{picturelength}}</a>
                        </div>
                      </div>
                      <div class="space-y-1">
                        <div class="flex w-full">
                          <button class="btn btn-primary group rounded-2xl h-12 w-full bg-green-500 dark:bg-green-600 font-bold text-lg text-white relative overflow-hidden" type="submit" @click="AddProducts" v-bind:disabled="Productname.length == 0">Submit
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


      <div class="flex flex-row  justify-start">
          
            <button @click="goToPrevious()" :disabled="isFirst" type="button" class=" w-[35%] bg-gray-500 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-gray-400 hover:text-white px-3">
              <div class="flex flex-row align-middle">
                <svg class="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                </svg>
                <p class="ml-2">Precedent</p>
              </div>
            </button>
            <button @click="goToNext()" :disabled="isLast" type="button" class="w-[35%] bg-gray-500 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-gray-400  hover:text-white px-3">
              <div class="flex flex-row align-middle">
                <span class="mr-2">Suivant</span>
                <svg class="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L16.586 11H5a1 1 0 010-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </button>

      </div>

  </div>














    <h1 class="text-2xl color-black font-bold dark:text-gray-300 italic text-left mb-2">{{ header_table }}</h1>

      <!-- <transition name="slide">
        <form  v-show="EditProducts"  @submit.prevent="submitProduct"  action=""  class="bg-gray-200 dark:bg-gray-800 rounded-lg border border-gray-500 mb-5" >
   <div class="flex justify-end ">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 text-red-900 dark:text-red-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="doProducts(false)">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <div class="w-full flex  mx-auto  rounded-lg grid-cols-12 gap-2 p-1 mb-5">
      <div class="flex flex-wrap justify-center w-full rounded-lg border border-gray-500 dark:border-gray-700 sm:col-span-9 mb-auto">
    
        <div class="w-[100%] rounded-lg px-8  flex flex-col">
          <div class="-mx-3 md:flex mb-6 justify-between space-x-4">
            <div class="w-full">
              <div class="flex justify-start"> <span class="px-1 text-sm text-gray-600 dark:text-gray-300 text-left">Product Name</span></div>
              <input type="text" placeholder="Products Name" required v-model="Productname" :class="['border-2','appearance-none','block','w-full','bg-white','dark:bg-gray-900','text-gray-800','dark:text-gray-100','rounded-lg','py-3','px-4',
                { 'border-red-500': Productname.length <= 0 },
                { 'border-green-500': Productname.length >= 1 }]" >
              <p v-bind:hidden="Productname.length >= 1" class="text-red text-xs italic text-red-600 dark:text-red-400">Please fill out this field.</p>
            </div>
          </div>
        </div>
  
        <div class="w-[50%]  rounded-lg px-8  flex flex-col">
          <div class="-mx-3 md:flex mb-6 justify-between space-x-4">
            <div class="w-full">
              <div class="flex justify-start"> <span class="px-1 text-sm text-gray-600 dark:text-gray-300 text-left">Price</span></div>
              <input type="text" placeholder="Price" required v-model="Price" :class="['border-2','appearance-none','block','w-full','bg-white','dark:bg-gray-900','text-gray-800','dark:text-gray-100','rounded-lg','py-3','px-4',
                { 'border-red-500': Price.length <= 0 },{ 'border-green-500': Price.length >= 1 }]" >
              <p v-bind:hidden="Price.length >= 1" class="text-red text-xs italic text-red-600 dark:text-red-400">Please fill out this field.</p>
            </div>
          </div>
        </div>
  
        <div class="w-[50%] rounded-lg px-8  flex flex-col">
          <div class="-mx-3 md:flex mb-6 justify-between space-x-4">
            <div class="w-full">
              <div class="flex justify-start"> <span class="px-1 text-sm text-gray-600 dark:text-gray-300 text-left">Quantite</span></div>
              <input type="number" placeholder="Quantite" required v-model="quantite" :class="['border-2','appearance-none','block','w-full','bg-white','dark:bg-gray-900','text-gray-800','dark:text-gray-100','rounded-lg','py-3','px-4',
                { 'border-red-500': quantite <= 0 },{ 'border-green-500': quantite >= 1 }]" >
              <p v-bind:hidden="quantite >= 1" class="text-red text-xs italic text-red-600 dark:text-red-400">Please fill out this field.</p>
            </div>
          </div>
        </div>
      </div>

      
     
      <div class="flex-initial w-[40%] h-[10%] col-span-2 rounded-lg border border-gray-400 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-2 sm:col-span-3">
        <div class="bg-white dark:bg-gray-900 col-start-6 col-end-5 p-1 rounded-xl my-4 mr-auto shadow-md">
          <div class="text-gray-500 font-light mb-1 text-left ml-2 p-1">Product name:
            <a class="font-semibold text-gray-800 dark:text-gray-100">{{Productname}}</a>
          </div>
          <div class="text-gray-500 font-light mb-1 text-left ml-2 p-1">Price:
            <a class="font-semibold text-gray-800 dark:text-gray-100">{{Price}}</a>
          </div>
          <div class="text-gray-500 font-light mb-1 text-left ml-2 p-1">Quantite:
            <a class="font-semibold text-gray-800 dark:text-gray-100">{{quantite}}</a>
          </div>
        </div>
        
        <div class="space-y-1">
            <div class="flex w-full">
              <button class="btn btn-primary group rounded-2xl h-12 w-full bg-green-500 dark:bg-green-600 font-bold text-lg text-white relative overflow-hidden" type="submit" @click="AddProducts" v-bind:disabled="Productname.length == 0">Submit
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
  </transition> -->


  <div class=" border-2 p-3 border-solid border-gray-500 rounded-xl">
    <div class="flex justify-between mb-2 mt-2">
    <h2 class="text-gray-400 p-2" v-bind:class="{'text-red-700 ': Product.length <= 5,'text-red-400 ': Product.length <= 10,}">Products : {{ Product.length }}</h2>
      <h2  v-if="!EditProducts" @click="doProducts(true)" class="text-green-600 text-lg cursor-pointer">+ Add Categories</h2>
    </div>
    <!-- ===================   SEARCH BAR    ========================== -->
    <div class="flex space-x-3 font-bold">
  
      <div class="w-full mb-4">          
        <P class="text-black text-left text-xs dark:text-gray-300 ">ID</P>
        <div class="relative w-full ">

          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
            <svg aria-hidden="true" class="w-5 h-auto text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <input type="number" id="searchCategory" v-model="searchProductId" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ID ..." required>
        </div>
      </div>
  
      <div class=" w-full mb-4">
        <P class="text-black text-left text-xs dark:text-gray-300 ">Nom</P>
        <div class="relative w-full ">
          
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
            <svg aria-hidden="true" class="w-5 h-auto text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <input type="text" id="searchCategory" v-model="searchProductname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name ..." required>
        </div>
      </div>


      <div class=" w-full mb-4">
        <P class="text-black text-left text-xs dark:text-gray-300 ">Price</P>
        <div class="relative w-full ">
          
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
            <svg aria-hidden="true" class="w-5 h-auto text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <input type="text" id="searchCategory" v-model="searchProductPrice" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price ..." required>
        </div>
      </div>


      <div class=" w-full mb-4">
        <P class="text-black text-left text-xs dark:text-gray-300 ">Quantite</P>
        <div class="relative w-full ">
          
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
            <svg aria-hidden="true" class="w-5 h-auto text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <input type="number" id="searchCategory" v-model="searchProductQte" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price ..." required>
        </div>
      </div>

      
  
      <div class="w-full mb-4">
        <P class="text-black text-left text-xs dark:text-gray-300 ">Date Modefication</P>
        <div class="relative w-full ">
          
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
            <svg aria-hidden="true" class="w-5 h-auto text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <input type="date" id="searchCategory" v-model="searchDateCreation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
        </div>
      </div>
  
      <div class=" w-full mb-4">
        <P class="text-black text-left text-xs dark:text-gray-300 ">Date Creation</P>
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
              <div class="relative w-full flex space-x-2">
          
                  <input disabled v-model="ProductIdToUpdate" required :class="['w-20 ,cursor-not-allowed','appearance-none','block','bg-white','dark:bg-gray-700','text-gray-800','dark:text-gray-100','rounded-lg','py-3','px-4']" type="number" placeholder="ID"> 
                  <input v-model="ProductnameToUpdate" placeholder="Category name"  type="text" id="search" class="block w-full p-4 pl-10  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
              
                  <input v-model="ProductPricetToUpdate" placeholder="Category name"  type="text" id="search" class="block w-full p-4 pl-10  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                  <input v-model="ProductQteToUpdate" placeholder="Category name"  type="text" id="search" class="block w-full p-4 pl-10  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
        
    
                  
                  <select id="countries" v-model="selectedCategory" :class="['border-2','appearance-none','block','w-full','bg-gray-50','dark:bg-gray-700','text-gray-800','dark:text-gray-100','rounded-lg','py-3','px-4',{'border-red-500': selectedCategory.length <= 0 },{ 'border-green-500': selectedCategory.length >= 1 }]">
                    <option selected hidden value="">{{ CategoryToUpdate }}</option>
                    <option v-for="category in ProductCategory" :key="category.idProductCategory" :value="category.idProductCategory">
                      {{ category.idProductCategory }}
                    </option>
                  </select>
               
                  
                </div>
          </div>
          <div class="w-full relative space-y-2">
            <p>Selected Category: {{ selectedCategory }}</p>
            <button @click="updateProduct(ProductIdToUpdate, ProductnameToUpdate, CategoryToUpdate, ProductPricetToUpdate, ProductQteToUpdate)" class="bg-[#1e3a8a] w-full h-10 hover:bg-blue-800 rounded text-white font-bold px-4 rounded-l"> Modifier </button>
                <button @click="cancelUpdate" class="bg-[#b91c1c] hover:bg-red-600 rounded font-bold px-4 rounded-r w-full  h-10 text-white">Annuler</button>
              </div>
        </div>
      </transition>
      <!-- ===================   END UPDATE DELETE BAR    ========================== -->
      <!-- ===================   DIALOGUE DELETE BAR    ========================== -->
      <!-- <transition name="slide">
      <div v-if="DialogueDelete" class="fixed bg-red-200 modal text-gray-500 p-2">
        <div class="flex justify-center space-x-3">
          <h3 class="text-red-500">Vous voulez vraiment Supprimer se categories {{ productIdToDelete }} :</h3>
          <div class="modal-buttons space-x-3">
            <button @click="deleteProduct(productIdToDelete)">Oui</button>
            <button @click="cancelDelete">Non</button>
          </div>
        </div>
      </div>
      </transition> -->
      <!-- ===================   END DIALOGUE DELETE BAR    ========================== -->
      <div class="overflow-auto mt-6">
      <table class=" w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
    <thead class="text-xs dark:border-none  border border-indigo-600  text-gray-500 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
          <div @click="sortByNameProdcut" class="cursor-pointer flex items-center">
            Products
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
              </svg>
            </a>
          </div>
        </th>
        <th scope="col" class="py-3 px-6">
          <div class="cursor-pointer flex items-center">
            Categories
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
              </svg>
            </a>
          </div>
        </th>
        <th scope="col" class="py-3 px-6">
          <div @click="sortByPrice" class="cursor-pointer flex items-center">
            Price
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
              </svg>
            </a>
          </div>
        </th>
        <th scope="col" class="py-3 px-6">
          <div @click="sortByqte"  class="cursor-pointer flex items-center">
            Quentite
            <a >
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
              </svg>
            </a>
          </div>
        </th>
        <th scope="col" class="py-3 px-6">
          <div class="cursor-pointer flex items-center">
            Date Creation
          </div>
        </th>
        <th scope="col" class="py-3 px-6">
          <div class="cursor-pointer flex items-center">
            Date Modificatin

          </div>
        </th>
        <th scope="col" class="py-3 px-6">Delete
        
        </th>
        <th scope="col" class="py-3 px-6">Edit
        </th>
      </tr>
    </thead>
    <tbody class="">
      <tr v-for="product in Product" :key="product.idProducts" 
      class="font-bold  relative bg-gray-100 hover:bg-blue-100 border border-indigo-600 dark:bg-gray-800 dark:hover:bg-gray-600   dark:border-gray-700 w-96">
        <td scope="row" class="py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
          {{ product.idProducts }}
        </td>
        <td class="py-4 px-6 ">
          {{ product.nameProducts }}
        </td>
        <td class="py-4 px-6">
          {{ product.productCategory.idProductCategory }} : {{ product.productCategory.nameProductCategory }}
        </td> 
        <td class="py-4 px-6">
          {{ product.priceProducts }}
        </td>
        <td class="py-4 px-6">
          {{ product.qteProducts }}
        </td>
        <td class="py-4 px-6">
          {{ product.createdatProduct }}
        </td>
        <td class="py-4 px-6">
          {{ product.modifiedatProduct }}
        </td>
  
        <td class="py-4 px-6 text-right">
          <button @click="confirmDelete(product.idProducts)">Delete</button>
        </td>
        <td class="py-4 px-6 text-right">
          <button @click="confirmUpdate(product.idProducts, product.idProducts, product.productCategory.idProductCategory, product.priceProducts, product.qteProducts)">
  Modifier
</button>



        </td>
        <transition name="slide">
      <div v-if="DialogueDelete && productIdToDelete===product.idProducts"  class="absolute top-0 left-0 w-full h-full bg-red-200 modal text-gray-500 py-4">
        <div class="flex justify-center space-x-3">
          <h3 class="text-red-500">Vous voulez vraiment Supprimer se categories {{ productIdToDelete }} :</h3>
          <div class="modal-buttons space-x-3">
            <button @click="deleteProduct(productIdToDelete)">Oui</button>
            <button @click="cancelDelete">Non</button>
          </div>
        </div>
      </div>
      </transition>
      </tr>
  
    </tbody>
  </table>
</div>
  </div>
  
  </template>
  <script>
  import axios from 'axios';
import { parse } from 'postcss';
import { useStepper } from '@vueuse/core';

  
export default {
setup() {
          const {
              current,
              goToNext,
              goToPrevious,
              isFirst,
              isLast,
          } = useStepper([
              'Products',
              'Categories',
              'Pictures',
              'payment',
          ]);

          return {
              current,
              goToNext,
              goToPrevious,
              isFirst,
              isLast,
          };
},
  // 
  data() {
        return {
          ProductCategory: [],
          idProductCategory: '',

          picturelength : 0,

          Product: [],

          header_table: 'Products',
          EditProducts: false,
          Productname: '',
          Price:'',
          quantite:'',
    
          DialogueDelete: false,
          productIdToDelete: null,
    
          DialogueUpdate:true,
          ProductIdToUpdate: null,
          ProductnameToUpdate:null,
          ProductPricetToUpdate:null,
          ProductQteToUpdate:null,

          CategoryToUpdate:null,
          CategoryId:'',
          selectedCategory: '',
          
          sortbyPrices:'asc',
          sortById: 'asc',
          sortbyqtes:'asc',
          sortbynames:'asc',
      
          searchProductId:'',
          searchProductname: '',
          searchProductPrice:'',
          searchProductQte:'',
          searchDateModification:'',
          searchDateCreation: '',
        };
      },

  computed: {
            //========= Search
            Product() {
                if (this.searchProductId !== '') {
                  return this.Product.filter(product =>
                  product.idProducts === this.searchProductId
                  );
                }
                
                if(this.searchProductQte !==''){
                  return this.Product.filter(product =>
                  product.qteProducts === parseInt(this.searchProductQte)
                  );
                }
                
                if (this.searchProductPrice !== '') {
                      return this.Product.filter(product =>
                      product.priceProducts === parseFloat(this.searchProductPrice)
                    );
                }

                if (this.searchProductname !== '') {
                  return this.Product.filter(product =>
                  product.nameProducts.includes(this.searchProductname)
                  );
                }
                if (this.searchDateCreation!=='') {
                const dateParts = this.searchDateCreation.split('-');
                const searchDates = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    
                return this.Product.filter(product => 
                product.createdatProduct === searchDates
                );
              }

              if (this.searchDateModification!=='') {
                const dateParts = this.searchDateModification.split('-');
                const searchDates = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    
                return this.Product.filter(category => 
                  category.modifiedatProduct === searchDates
                );
              }

              else{
                    return this.Product;
                  }
            },
            //========= End Search
      },

  mounted() {
            this.GetAll()
            this.GetAllGategory()
      },
  methods: {
      AddNewPicture() {
            const fileInputs = document.querySelectorAll('#file_inputs input[type="file"]');
            const lastFileInput = fileInputs[fileInputs.length - 1];

            if (lastFileInput && lastFileInput.files.length > 0) {
              // Last input is not empty, add new picture
              const input = document.createElement('input');
              input.className = 'block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400';
              input.type = 'file';
              input.multiple = true;
              document.getElementById('file_inputs').appendChild(input);
            } else if (fileInputs.length > 1) {
              // Remove the last input
              const lastInput = fileInputs[fileInputs.length - 1];
              lastInput.parentNode.removeChild(lastInput);
            } else {
              alert("Input picture empty");
            }
          this.picturelength = fileInputs.length;
      },

      RemoveLastInput() {
          const fileInputs = document.querySelectorAll('#file_inputs input[type="file"]');
          const lastInput = fileInputs[fileInputs.length - 1];

          if (fileInputs.length < 2 ) {
            alert("You can't remove the input");
            
          } else {
            lastInput.parentNode.removeChild(lastInput);
          }
      },
  // ============= UPDATE==============================================
      confirmUpdate(idProducts, Productname, idProductCategory, priceProducts, qteProducts) {
              this.ProductIdToUpdate = idProducts;
              this.ProductnameToUpdate = Productname;
              this.CategoryToUpdate = idProductCategory;
              this.ProductPricetToUpdate = priceProducts;
              this.ProductQteToUpdate = qteProducts;

              this.DialogueUpdate = true;
          },

      cancelUpdate(){
            this.DialogueUpdate=false;
          },
// ============= DELETE ==============================================
      confirmDelete(idProducts) {
            this.productIdToDelete = idProducts;
            this.DialogueDelete = true;
          },
      deleteProduct() {
            console.log("Deleting category with ID:", this.productIdToDelete);
            this.DialogueDelete = false;
          },
      cancelDelete() {
            this.DialogueDelete = false;
          },
      Canceled(){
            this.Productname="";
            this.Price="";
            this.quantite="";
            this.idProductCategory="";
            this.GetAll()
          },
      doProducts(EditProducts) {
            console.log('EditP');
            this.EditProducts = EditProducts;
            this.ProductName = "";
          },

  // ============= REQUETE ==============================================
        GetAllGategory(){
            axios.get('http://localhost:8080/productcategory').then(response => 
            {
              this.ProductCategory = response.data;
            }).catch(error => { console.error(error); });
          },
              
        GetAll(){
                axios.get('http://localhost:8080/product').then(response => 
                {
                  this.Product = response.data;
                }).catch(error => { console.error(error); });
              },
              
        submitProduct(idProductCategory){
          const data={
            nameProducts:this.Productname,
            priceProducts:this.Price,
            qteProducts:this.quantite
          }
          axios.post(`http://localhost:8080/product/category/${idProductCategory}`,data) .then(response => {
            console.log(response.data);
            this.Canceled();
          })
          .catch(error => {
            console.error(error);
          });
        },

        updateProduct(idProducts, ProductnameToUpdate, CategoryToUpdate, ProductPricetToUpdate, ProductQteToUpdate) {
            axios.put(`http://localhost:8080/product/${idProducts}/category/${idProductCategory}`, {
              nameProducts: ProductnameToUpdate,
              productCategory: {
                idProductCategory: CategoryToUpdate
              },
              priceProducts: ProductPricetToUpdate,
              qteProducts: ProductQteToUpdate
            })
            .then(response => {
              this.GetAll();
              this.DialogueUpdate = false;
              this.ProductIdToUpdate = null;
              this.ProductnameToUpdate = '';
              this.CategoryToUpdate = '';
              this.ProductPricetToUpdate = null;
              this.ProductQteToUpdate = null;
            })
            .catch(error => {
              console.error(error);
            });
          },


        deleteProduct(idProducts){
          axios.delete(`http://localhost:8080/product/${idProducts}`)
              .then(response=>{
                this.GetAll()
                this.DialogueDelete=false;
              }).catch(error=>{
                console.error(error);
              })
        }, 
  // ============= END REQUETE ==============================================
  // ============= TRIER=====================================================
        sortByNameProdcut() {
          this.sortbynames = this.sortbynames === 'asc' ? 'desc' : 'asc';
          this.Product.sort((a, b) => {
            const nameA = a.nameProducts.toUpperCase();
            const nameB = b.nameProducts.toUpperCase();

            if (this.sortbynames === 'asc') {
              if (nameA < nameB) return -1;
              if (nameA > nameB) return 1;
            } else {
              if (nameA > nameB) return -1;
              if (nameA < nameB) return 1;
            }

            return 0;
          });
        },

        sortByqte() {
          this.sortbyqtes = this.sortbyqtes === 'asc' ? 'desc' : 'asc';
                this.Product.sort((a, b) => {
                  if (this.sortbyqtes === 'asc') {
                    return a.qteProducts - b.qteProducts;
                  } else {
                    return b.qteProducts - a.qteProducts;
                  }
                });
        },

        sortByPrice() {
          this.sortbyPrices = this.sortbyPrices === 'asc' ? 'desc' : 'asc';
                this.Product.sort((a, b) => {
                  if (this.sortbyPrices === 'asc') {
                    return a.priceProducts - b.priceProducts;
                  } else {
                    return b.priceProducts - a.priceProducts;
                  }
                });
        },

        sortByIdCategory() {
                this.sortById = this.sortById === 'asc' ? 'desc' : 'asc';
                this.Product.sort((a, b) => {
                  if (this.sortById === 'asc') {
                    return a.idProducts - b.idProducts;
                  } else {
                    return b.idProducts - a.idProducts;
                  }
                });
        }
  // ============= END TRIER============================================
      }
};
  </script>
  
  <style>

  
  .slide-enter-active {
    transition: all 500ms;
    opacity: 0;
  }
  .slide-enter-to {
    opacity: 1;
  }
  
  .slide-leave-active {
    transition: all 500ms;
    opacity: 1;
  }
  .slide-leave-to {
    opacity: 0;
  }
  </style>
  