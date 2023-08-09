<template>
  <div ref="scrollableDiv" class="overflow-y-scroll h-full">
    <div  v-show="EditProducts" class="border mb-4 p-4">
          <div class="flex justify-end">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 text-red-900 dark:text-red-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="doProducts(false)">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 class="tracking-widest text-2xl mb-2 text-white italic font-bold">{{ current }}</h1>
          <form @submit.prevent="submitProduct(idProductCategory)" action="" class=" p-5 bg-gray-200 dark:bg-gray-800 rounded-lg border border-gray-500 mb-5">
            <div class="flex ">
                <div class="flex-auto w-[60%] p-5">
                
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
                                    <input type="number" placeholder="Price" required v-model="Price" :class="['border-2','appearance-none','block','w-full','bg-white','dark:bg-gray-900','text-gray-800','dark:text-gray-100','rounded-lg','py-3','px-4',
                                      { 'border-red-500': Price <= 0 },
                                      { 'border-green-500': Price >= 1 }]">
                                    <p v-bind:hidden="Price >= 1" class="text-red text-xs italic text-red-600 dark:text-red-400">Please fill out this field.</p>
                                  </div>
                                </div>
                              </div>

                              <div class="w-[50%] rounded-lg px-8 flex flex-col">
                                <div class="-mx-3 md:flex mb-6 justify-between space-x-4">
                                  <div class="w-full">
                                    <div class="flex justify-start"><span class="px-1 text-sm text-gray-600 dark:text-gray-300 text-left">Quantite</span></div>
                                    <input type="number" placeholder="Quantite" required v-model="quantite" :class="['border-2','appearance-none','block','w-full','bg-white','dark:bg-gray-900','text-gray-800','dark:text-gray-100','rounded-lg','py-3','px-4',
                                      { 'border-red-500': quantite <= 0 },
                                      { 'border-green-500': quantite >= 1 }]">
                                    <p v-bind:hidden="quantite >= 1" class="text-red text-xs italic text-red-600 dark:text-red-400">Please fill out this field.</p>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </template>

                          <template v-else-if="current === 'Categories'">
                            <div class="border border-gray-400 p-4 rounded-lg">
                              <label for="countries" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Les Categories</label>
                              <select required id="countries" v-model="idProductCategory" :class="['border-2','appearance-none','block','w-full','bg-white','dark:bg-gray-900','text-gray-800','dark:text-gray-100','rounded-lg','py-3','px-4']">
                                <option hidden value="">Les Categories</option>
                                <option v-for="category in ProductCategory" :key="category.idProductCategory" :value="category.idProductCategory">{{ category.nameProductCategory }}
                                </option>
                              </select>
                            </div>
                          </template>

                          <template v-else-if="current === 'Pictures'">
                            <div class="flex  w-[100%] overflow-y-scroll">
                              
                              <div class="border w-[40%] ">
                                  <p class="bg-red-500 dark:bg-red-700 text-white">Les champs : {{ inputsInsert.length }}</p>
                                  <p @click="addFileToInsert" class="cursor-pointer border text-2xl bg-gray-800 text-white">+</p>  
                                <div class="flex flex-col-reverse">
                                  <div v-for="(input, index) in inputsInsert" :key="index" class="flex justify-betweens  border-2 mt-1 mb-1  border-sky-500 rounded-lg ">
                                  
                                    <div class="flex border-solid p-2">
                                        <p class=" text-gray-500 p-2 text-left "> {{index + 1}}</p>
                                        <input required type="file" name="file" :ref="'fileInput-' + index" @change="onReadPictureToInsert(index)" accept=".jpg, .jpeg, .png, .svg, .webp" 
                                          class="mr-[2%] ml-[2%] w-[100%] block  text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                                        />
                       
                                      </div> 
                                      <svg @click="removeFileInsert(index)" xmlns="http://www.w3.org/2000/svg" class=" w-6 h-6 text-red-900 dark:text-red-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg> 
                                    </div> 

                                </div>
                              </div>

                              <div class="w-[60%]  border border-b">
                                <p class="bg-red-500 dark:bg-red-700 text-white">Les Photos : {{ pictureFilesInsert.length }}</p>
                                <div v-if="pictureFilesInsert.length" class="grid-cols-3 grid gap-2">
                                  <div v-for="(file, index) in pictureFilesInsert" :key="file.id" class="p-1">
                                    <div class="flex justify-between p-0.5 border-x border-t rounded-lg mb-[-1]">
                                      <p class="text-gray-300">{{ index + 1 }}</p>
                                      <svg @click="removeFileInsert(index)" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-900 dark:text-red-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                    </div>
                                    <img :src="file.url" alt="Uploaded File" class="border-2 border-b-red-500 " />
                                  </div>
                                </div>

                                <div v-else class="p-2 flex justify-center content-center">
                                  <div class="flex items-center justify-center w-[50%] h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                                      <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                                      </svg>
                                  </div>
                                </div>

                              </div>

                            </div>
                          </template>

                          <!-- <template v-else-if="current === 'payment'">
                            <h1>DD</h1>
                          </template> -->
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
                            <a class="font-semibold text-gray-800 dark:text-gray-100">{{pictureFilesInsert.length}}</a>
                          </div>
                        </div>
                        <div class="space-y-1">
                          <div class="flex w-full">
                            <button class="btn btn-primary group rounded-2xl h-12 w-full bg-green-500 dark:bg-green-600 font-bold text-lg text-white relative overflow-hidden" type="submit" @click="AddProducts" v-bind:disabled="Productname.length == 0">Submit
                              <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
                            </button>
                          </div>

                          <div class="flex w-full">
                            <button  @click="Canceled" type="button" class="group rounded-2xl h-12 w-full bg-red-500 dark:bg-red-700 font-bold text-lg text-white dark:text-gray-200 relative overflow-hidden">
                              Cancel
                              <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 dark:group-hover:bg-gray-800/30 rounded-2xl">
                              </div>
                            </button>
                          </div>
                        </div>
                </div>
            </div>
          </form>

          <!-- NAVIGATION BETWEEN INSERTION -->
        <div class="flex flex-row  justify-start">
            
              <button @click="goToPrevious()" :disabled="isFirst" type="button" class=" w-[35%] bg-gray-500 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-gray-400 hover:text-white px-3">
                <div class="flex flex-row align-middle">
                  <svg class="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                  </svg>
                  <p class="ml-2">Precedent</p>
                </div>
              </button>
              
              <button @click="goToNext()" :disabled="isLast" type="button" class="flex justify-end w-[35%] bg-gray-500 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-gray-400  hover:text-white px-3">
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

    <div class=" border-2 p-3 border-solid border-gray-500 rounded-xl">
  
   
        <!-- ===================   DIALOGUE UPDATE BAR    ========================== -->
        <transition name="slide">
          <div v-if="DialogueUpdate"  class=" modal text-gray-500 p-2 border-2 border-solid border-red-300 rounded">
            <label class="flex justify-start">Modifier</label>
            
            <div class="flex p-2">
              
              <div class="border rounded-2xl h-[40%] p-2 w-[40%] flex flex-col  space-x-3 mb-3 mr-2">
                <div class="space-y-8">
                  <div class="border rounded-2xl space-y-2 p-2">
                    <div class="flex space-x-2">
                      <input disabled v-model="ProductIdToUpdate" required :class="['w-20 ,cursor-not-allowed','appearance-none','block','bg-white','dark:bg-gray-700','text-gray-800','dark:text-gray-100','rounded-lg','py-3','px-4']" type="number" placeholder="ID"> 
                        <input v-model="ProductnameToUpdate" placeholder="Category name"  type="text" id="search" class="block w-full p-4 pl-10  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    </div>
                    
                      <input v-model="ProductPricetToUpdate" placeholder="Category name"  type="text" id="search" class="block w-full p-4 pl-10  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                      <input v-model="ProductQteToUpdate" placeholder="Category name"  type="text" id="search" class="block w-full p-4 pl-10  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            
        
                      
                      <select id="countries" v-model="idProductCategory" :class="['border-2','appearance-none','block','w-full','bg-gray-50','dark:bg-gray-700','text-gray-800','dark:text-gray-100','rounded-lg','py-3','px-4']">
                        <option selected hidden value="">{{ idProductCategory }}</option>
                        <option v-for="category in ProductCategory" :key="category.idProductCategory" :value="category.idProductCategory">
                          {{ category.nameProductCategory}}
                        </option>
                      </select>
                  </div>

                    <div class=" border rounded-2xl space-y-5 p-2">
                      <div class=" p-b-2 p-t-2 border rounded-2xl border-gray-500 flex items-center cursor-pointer justify-evenly hover:bg-gray-900" @click="addFileToUpdate">
                        <p>Ajouter une photo</p>
                        <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                        </svg>
                      </div>

                      <div class="flex flex-col-reverse ">
                        <div v-for="(input,index) in inputsUpdate" :key="index" class="p-2 border rounded-2xl  mb-2">
                          <div class="flex items-center">
                            <p>{{ index + 1 }}</p>
                            <input required type="file" name="file" :ref="'fileInput-' + index" @change="onReadPictureToUpdate(index)"  accept=".jpg, .jpeg, .png, .svg, .webp" class="cursor-pointer mb-1 p-2 bg-gray-800 rounded-md w-[100%] block text-sm text-gray-100 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"/>
                            <svg @click="removeFileUpdate(index)" xmlns="http://www.w3.org/2000/svg" class=" w-6 h-6 text-red-900 dark:text-red-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg> 
                          </div>
                          
                          <div class="w-full bg-neutral-200 dark:bg-neutral-600">
                            <div class="bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100" style="width: 25%">
                              25%
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
              </div> 


              <div class=" flex-initial w-full p-3 border rounded-2xl grid grid-cols-3 gap-4">
                <div v-for="picture in productPictures" :key="picture.idProductpicture" class="relative transition duration-300 ease-in-out transform hover:scale-110">
                  <div class="bg border-2 rounded-t-3xl border-sky-700 transition duration-300 ease-in-out transform hover:scale-110">
                    <img class="w-full rounded-t-3xl" :src="getPictureUrl(picture.idProductPicture)" alt="Product Picture" />
                    <div class="bg-gray-800 mt-1 p-1 flex justify-between">
                      <p class="text-gray-200">{{ picture.idProductPicture }}</p>
                        <button @click="deletePicture(picture.idProductPicture)"  class="inline-flex items-center justify-center w-8 h-8 mr-2 text-pink-100 transition-colors duration-150 bg-red-500 rounded-full focus:shadow-outline hover:bg-red-600">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                          </svg>
                        </button>
                    </div>
                  </div>
                </div>
                <div v-for="(file,index) in pictureFilesUpdate" :key="file.id" class="p-2 border rounded-xl bg-gray-800 transition duration-300 ease-in-out hover:scale-125">
                        <div class="flex justify-between">
                          <p>{{ index+1 }}</p>
                          <svg @click="removeFileUpdate(index)" xmlns="http://www.w3.org/2000/svg" class=" w-6 h-6 text-red-900 dark:text-red-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg> 
                        </div>
                        <img :src="file.url" alt="Uploaded File" class="border-2 border-b-red-500 " />
                      </div>
              </div>
            </div>
            
               

          
            <!-- <div v-if="productPictures.length" class="border rounded-2xl p-2 bg-gray-800">

          
              
              <div class="mt-2 ">
                <p class="text-white">Ajoutes Des Photos</p>
                <div class="flex m p-2">
                  
                  <div class="mr-2 rounded-2xl flex-auto w-[30%] P-2 border border-gray-500 bg-slate-800">
                    <div class=" p-b-2 p-t-2 border-b rounded-2xl border-gray-500 flex items-center cursor-pointer justify-evenly hover:bg-gray-900" @click="addFileToUpdate">
                      <p>Ajouter une photo</p>
                      <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                      </svg>
                    </div>

                  <div class="flex flex-col-reverse ">
                      <div v-for="(input,index) in inputsUpdate" :key="index" class="p-1">
                        <div class="flex items-center">
                          <p>{{ index + 1 }}</p>
                          <input required type="file" name="file" :ref="'fileInput-' + index" @change="onReadPictureToUpdate(index)"  accept=".jpg, .jpeg, .png, .svg, .webp" class="cursor-pointer mb-1 p-2 bg-gray-800 rounded-md w-[100%] block text-sm text-gray-100 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"/>
                          <svg @click="removeFileUpdate(index)" xmlns="http://www.w3.org/2000/svg" class=" w-6 h-6 text-red-900 dark:text-red-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg> 
                        </div>
                        
                        <div class="w-full bg-neutral-200 dark:bg-neutral-600">
                          <div class="bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100" style="width: 25%">
                            25%
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div class="flex-initial w-[80%] border rounded-2xl"> 
                    <div v-if="pictureFilesUpdate.length" class=" grid grid-cols-3 ">
                      <div v-for="(file,index) in pictureFilesUpdate" :key="file.id" class="p-2 border rounded-xl bg-gray-800 transition duration-300 ease-in-out hover:scale-125">
                        <div class="flex justify-between">
                          <p>{{ index+1 }}</p>
                          <svg @click="removeFileUpdate(index)" xmlns="http://www.w3.org/2000/svg" class=" w-6 h-6 text-red-900 dark:text-red-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg> 
                        </div>
                        <img :src="file.url" alt="Uploaded File" class="border-2 border-b-red-500 " />
                      </div>
                    </div>

                    <div v-else class="p-2 flex content-center justify-center">
                      <div class="flex items-center content-center justify-center w-[90%] h-48 bg-gray-300 rounded-2xl  dark:bg-gray-700">
                          
                        <svg class=" w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                          </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div v-else>
              <p class="text-center text-gray-500 mt-4">No pictures available.</p>
            </div> -->

            <div class="w-full relative space-y-2">
              <button class="mt-2 bg-[#1e3a8a] w-full h-10 hover:bg-blue-800 rounded text-white font-bold px-4 rounded-l" @click="updateProduct(ProductIdToUpdate, ProductnameToUpdate, ProductPricetToUpdate, ProductQteToUpdate,idProductCategory)" > Modifier </button>
              <button @click="cancelUpdate" class="bg-[#b91c1c] hover:bg-red-600 rounded font-bold px-4 rounded-r w-full  h-10 text-white">Annuler</button>
            </div>
          </div>
        </transition>
  
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
        <!-- ===================   END DIALOGUE UPDATE BAR    ========================== -->
   <!-- ===================   SEARCH BAR    ========================== -->
      <div class="flex justify-between mb-2 mt-2">
        <h2 class="text-gray-400 p-2" v-bind:class="{'text-red-700 ': Product.length <= 5,'text-red-400 ': Product.length <= 10,}">Products : {{ Product.length }}</h2>
        <h2  v-if="!EditProducts" @click="doProducts(true)" class="text-green-600 text-lg cursor-pointer">+ Add Products</h2>
      </div>
      <div class="mt-5 flex space-x-3 font-bold">
    
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
        <div class="overflow-auto mt-6">
        <table  class=" w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
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
              Quantite
              <a >
                <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                  <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                </svg>
              </a>
            </div>
          </th>

          <th scope="col" class="py-3 px-6">
            <div class="cursor-pointer flex items-center">
              Pictures
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
            {{ product.productCategory.nameProductCategory }}
          </td> 
          <td class="py-4 px-6">
            {{ product.priceProducts }}
          </td>
          <td class="py-4 px-6">
            {{ product.qteProducts }}
          </td>

          <td  class="py-4 px-6 text-yellow-500 cursor-pointer">
           Pictures : {{ product.countPicturesIdProducts }}
          </td>

          <td class="py-4 px-6">
            {{ product.createdatProduct }}
          </td>
          <td class="py-4 px-6">
            {{ product.modifiedatProduct }}
          </td>
    
          <td class="py-4 px-6 text-right">
            <button @click="confirmDelete(product.idProducts)" class="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Supprimer
              </button>
          </td>
          <td class="py-4 px-6 text-right">
              <button @click="confirmUpdate(product.idProducts, product.nameProducts, product.productCategory.idProductCategory, product.priceProducts, product.qteProducts)" class="inline-flex items-center px-4 py-2 bg-green-400 hover:bg-green-500 text-gray-800 text-sm font-medium rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                Modifie
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
    <button class="mt-5 text-gray-500" @click="ScrollToUp">Scroll UP</button>

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
      // 'payment',
    ]);
    const goToFirstStep = () => {
      while (!isFirst.value) {
        goToPrevious();
      }
    };

    return {
      current,
      goToNext,
      goToPrevious,
      isFirst,
      isLast,
      goToFirstStep,
    };
  },
  // 
  data() {
        return {
          idProductCategory: '',
          
          files: [], // Array to store uploaded files
          inputsInsert: [], // Array to store input elements
          pictureFilesInsert: [],  

          inputsUpdate:[],
          pictureFilesUpdate:[],

          pictures:[],    
          Product: [],
          ProductCategory: [],
          productPictures: [],
          
          countPicturesIdProducts : 0,
          IdProductToSHowPicture : 0,

          Price:'',
          quantite:'',
          Productname: '',
          EditProducts: false,
          header_table: 'Products',

    
          DialogueDelete: false,
          productIdToDelete: null,
    
          DialogueUpdate:true,
          picturesizeUpdate:null,
          idProductCategory:null,
          ProductQteToUpdate:null,
          ProductIdToUpdate: null,
          ProductnameToUpdate:null,
          ProductPricetToUpdate:null,
          
          CategoryId:'',
          selectedCategory:'',
          
          sortById: 'asc',
          sortbyqtes:'asc',
          sortbynames:'asc',
          sortbyPrices:'asc',

          searchProductId:'',
          searchProductQte:'',
          searchProductPrice:'',
          searchProductname: '',
          searchDateCreation: '',

          searchDateModification:'',

        };
      },

  computed: {
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
      }
    },

  mounted() {
            this.getAllProducts();
            this.GetAllGategory();
   
      },
  methods: { 
      ScrollToUpdate() {
          const scrollableDiv = this.$refs.scrollableDiv;
            scrollableDiv.scrollTo({
          top: 180,
          behavior: 'smooth' // Scrolls to the top smoothly
        });
          this.EditProducts=false;
      },
      ScrollToUp() {
          const scrollableDiv = this.$refs.scrollableDiv;
          scrollableDiv.scrollTo({
          top: 0,
          behavior: 'smooth' // Scrolls to the top smoothly
        });
          
      },
      addFileToUpdate(){
         this.inputsUpdate.push({});
      },
      removeFileUpdate(index){
        this.inputsUpdate.splice(index,1);
        this.pictureFilesUpdate.splice(index,1);
      },
      addFileToInsert() {
        if(this.pictureFilesInsert.length == this.inputsInsert.length)
           { 
            this.inputsInsert.push({}); 
            }

        else{
           alert("le champ " + this.inputsInsert.length +" et vide")
          }

      },
      removeFileInsert(index) {
          this.pictureFilesInsert.splice(index, 1);
          this.inputsInsert.splice(index, 1);
          console.log("Input/File: " + index + " removed");
      },
      confirmUpdate(idProducts, Productname, idProductCategory, priceProducts, qteProducts) {
        // this.GetPicturesByIdProducts(idProducts);
        this.ProductIdToUpdate = idProducts;
        this.ProductnameToUpdate = Productname;
        this.idProductCategory = idProductCategory;
        this.ProductPricetToUpdate = priceProducts;
        this.ProductQteToUpdate = qteProducts;
        this.selectedCategory="";
        this.fetchProductPictures(idProducts);
        this.ScrollToUpdate();

        this.DialogueUpdate = true;
        console.log("Finish confirmUpdate");
              
      },
      cancelUpdate(){
            this.DialogueUpdate=false;
      },
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
        this.Product=[];
        this.pictures=[];
        this.productPictures=[];
        this.inputsInsert=[];
        this.pictureFilesInsert=[];
        this.files=[];
        this.Productname="";
        this.Price="";
        this.quantite="";
        this.idProductCategory="";
        this.goToFirstStep();
      },
      doProducts(EditProducts) {
            this.EditProducts = EditProducts;
            this.ProductName = "";
      },
      uploadFile(event, index) {
        
        this.pictureFilesInsert = splice.files();
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.onload = () => {
          const url = reader.result;

          this.files.splice(index, 1, { url });

          // Check if all files are uploaded before calling submitPictures
          const allFilesUploaded = this.files.every(file => file.url);
          if (allFilesUploaded) {
            this.submitPictures(idProducts); // Call submitPictures once all files are uploaded
          }

          console.log(this.files);
          console.log(Date.now(), url);
          console.log("Upload " + index + " files");
        };

        reader.readAsDataURL(file);
      },
      onReadPictureToInsert(index) {
          const fileInput = this.$refs[`fileInput-${index}`][0];
          const file = fileInput.files[0];

          if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
              const imageUrl = event.target.result;
              const fileExtension = file.name.split('.').pop().toLowerCase();
              const fileSize = file.size;

              // Check if the image URL (data URL) already exists in the pictureFilesInsert array
              const pictureExists = this.pictureFilesInsert.some((picture) => picture.file.name === file.name);
              console.log("pictureExists: "+pictureExists);

              if (pictureExists) {
                // Handle the case where the picture already exists
                alert("This picture already exists");
                this.inputsInsert.splice(index, 1);
                this.pictureFilesInsert.splice(index, 1);
              } else {
                const image = new Image();
                image.src = imageUrl;
                image.onload = () => {
                  const resolution = {
                    width: image.width,
                    height: image.height
                  };

                  
                  console.log("File Extension:", fileExtension + " // File Size (bytes):", fileSize + " // Resolution:", resolution);

                  if (fileSize < 990087) {
                    // Create a canvas to add the watermark
                    const canvas = document.createElement("canvas");
                    canvas.width = image.width;
                    canvas.height = image.height;

                    const ctx = canvas.getContext("2d");
                    ctx.drawImage(image, 0, 0);

                    // Position the watermark in the middle of the image
                    const watermarkText = "Www.hamza.com";
                    ctx.font = "70px Arial";
                    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";

                    const textWidth = ctx.measureText(watermarkText).width;
                    const x = (canvas.width - textWidth) / 2;
                    const y = canvas.height / 2;

                    ctx.fillText(watermarkText, x, y);

                    // Get the watermarked image as a data URL
                    const watermarkedImageUrl = canvas.toDataURL("image/png");
      
                    // Add the watermarked image to the pictureFilesInsert array
                    this.pictureFilesInsert.push({
                      id: Date.now(),
                      url: watermarkedImageUrl, // Use the watermarked image URL
                      originalUrl: imageUrl, // Keep the original image URL (without watermark)
                      file: file,
                      extension: fileExtension,
                      size: fileSize,
                      resolution: resolution
                    });
        

                  } else {
                    this.inputsInsert.splice(index, 1);
                    alert("This picture " + file.name + " exceeds the maximum size.");
                  }
                };
              }
            };
            reader.readAsDataURL(file); // Read the data URL asynchronously
          }
      },
      onReadPictureToUpdate(index) {
        const fileInput = this.$refs[`fileInput-${index}`][0];
        const file = fileInput.files[0];

        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const imageUrl = event.target.result;
            const fileExtension = file.name.split('.').pop().toLowerCase();
            const fileSize = file.size / 1024; // Convert from bytes to kilobytes

            const pictureExists = this.pictureFilesUpdate.some((picture) => picture.file.name === file.name);

        
            if (pictureExists) {
              alert("This picture already exists");
              this.inputsUpdate.splice(index, 1);
              this.pictureFilesUpdate.splice(index, 1);
            } else {
              const image = new Image();
              image.src = imageUrl;
              image.onload = () => {
                const resolution = {
                  width: image.width,
                  height: image.height
                };

                if (fileSize < 990087) {
                  const canvas = document.createElement("canvas");
                  canvas.width = image.width;
                  canvas.height = image.height;

                  const ctx = canvas.getContext("2d");
                  ctx.drawImage(image, 0, 0);

                  const watermarkText = "Www.hamza.com";
                  ctx.font = "70px Arial";
                  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";

                  const textWidth = ctx.measureText(watermarkText).width;
                  const x = (canvas.width - textWidth) / 2;
                  const y = canvas.height / 2;

                  ctx.fillText(watermarkText, x, y);

                  const watermarkedImageUrl = canvas.toDataURL("image/png");

                  this.pictureFilesUpdate.push({
                    id: Date.now(),
                    url: watermarkedImageUrl,
                    originalUrl: imageUrl,
                    file: file,
                    extension: fileExtension,
                    size: fileSize,
                    resolution: resolution
                  });
                  console.log("name !"+file.name);
                } else {
                  this.inputsUpdate.splice(index, 1);
                  alert("This picture " + file.name + " exceeds the maximum size.");
                }
              };
            }
          };
          reader.readAsDataURL(file);
        }
      },
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
      },
  // ============= END TRIER============================================
     
      //====================REQUEST======================
      uploadPicturesInsert(idProducts) {
        const uploadPromises = this.pictureFilesInsert.map((picture) => {
          const formData = new FormData();
          formData.append('file', picture.file); // Use the File object for the formData
          console.log(idProducts + " Uplod Succefully");
          return axios.post(`http://localhost:8080/productpicture/product/${idProducts}`, formData);
        });

        Promise.all(uploadPromises)
          .then((responses) => {
            console.log('All files uploaded successfully!');
            responses.forEach((response) => {
              console.log(response.data);
            });
            this.getAllProducts();
          })
          .catch((error) => {
            console.log('Error:', error);
          });
      },
      uploadPicturesUpdate(idProducts) {
        const uploadPromises = this.pictureFilesUpdate.map((picture) => {
          const formData = new FormData();
          formData.append('file', picture.file); // Use the File object for the formData
          console.log(idProducts + " Uplod Succefully");
          return axios.post(`http://localhost:8080/productpicture/product/${idProducts}`, formData);
        });

        Promise.all(uploadPromises)
          .then((responses) => {
            console.log('All files uploaded successfully!');
            responses.forEach((response) => {
              console.log(response.data);
            });
            this.getAllProducts();
          })
          .catch((error) => {
            console.log('Error:', error);
          });
      },
      updateProduct(idProducts, ProductnameToUpdate,  ProductPricetToUpdate, ProductQteToUpdate,idProductCategory) {
        axios.put(`http://localhost:8080/product/${idProducts}/category/${idProductCategory}`, {
            nameProducts: ProductnameToUpdate,
            productCategory: {
              idProductCategory: idProductCategory
            },
            priceProducts: ProductPricetToUpdate,   
            qteProducts: ProductQteToUpdate
          })
          .then(response => {

            this.DialogueUpdate = false;
            this.ProductIdToUpdate = null;
            this.ProductnameToUpdate = '';
            this.idProductCategory = '';
            this.ProductPricetToUpdate = null;
            this.ProductQteToUpdate = null;
            this.getAllProducts();
            this.uploadPicturesUpdate(idProducts);
            this.inputsUpdate=[];
            this.pictureFilesUpdate=[];
            
            console.log("product : "+idProducts+" was modify succefuly");
          })
          .catch(error => {
            console.error(error);
          });
      

      },
      deleteProduct(idProducts){
        axios.delete(`http://localhost:8080/product/${idProducts}`)
            .then(response=>{
              this.DialogueDelete=false;
              this.getAllProducts();
            }).catch(error=>{
              console.error(error);
            })
      }, 
      deletePicture(idProductpicture){
        const confirmaToDelete = window.confirm('Vous voulez vraiment Supprimer cette photo ?');
        if(confirmaToDelete)
        {
          axios.delete(`http://localhost:8080/productpicture/${idProductpicture}`).then(response => {
            console.log(idProductpicture+" Deleted");
            this.fetchProductPictures(this.IdProductToSHowPicture);
          })
          .catch(error => {
            console.error(error);
          });
        }
      },
      fetchProductPictures(idProducts) {
        axios.get(`http://localhost:8080/productpicture/${idProducts}`)
          .then(response => {
            this.productPictures = response.data;
            this.IdProductToSHowPicture=idProducts;
            console.log(response.data)
          })
          .catch(error => {
            console.error(error);
          });
      },
      getPictureUrl(idProductpicture) {
        return `http://localhost:8080/productpicture/byid/${idProductpicture}`;
      },
      GetAllGategory(){
        axios.get('http://localhost:8080/productcategory').then(response => 
        {
          this.ProductCategory = response.data;
        }).catch(error => { console.error(error); });
      },
      getAllProducts() {
      axios
        .get('http://localhost:8080/product')
        .then(response => {
          this.Product = response.data;
          console.log("GetAllProducts");
          console.log(response.data);

          // Fetch the count of pictures for each product
          this.Product.forEach(product => {
            this.countPicturesByProduct_IdProducts(product.idProducts);
          });
        })
        .catch(error => {
          console.error(error);
        });
      },
      submitProduct(idProductCategory) {
        if(this.pictureFilesInsert.length>0){

          const data = {
            nameProducts: this.Productname,
            priceProducts: this.Price,
            qteProducts: this.quantite
          };
              axios.post(`http://localhost:8080/product/category/${idProductCategory}`, data).then(response => {
                  console.log(response.data);
                  console.log(response.data.idProducts);
                  this.uploadPicturesInsert(response.data.idProducts);
                  this.Canceled();
                  this.getAllProducts();
                  console.log("assign product into category sccefully");
                  this.goToFirstStep();
                })
                .catch(error => {
                  console.error(error);
                }); 
            }
            else{
                console.log(this.pictureFilesInsert.length)
                alert("nop")
              }
       
      },
      countPicturesByProduct_IdProducts(idProducts) {
      axios
        .get(`http://localhost:8080/productpicture/CountPictures/${idProducts}`)
        .then(response => {
          const product = this.Product.find(p => p.idProducts === idProducts);
          if (product) {
            product.countPicturesIdProducts = response.data;
          }
        })
        .catch(error => {
          console.error(error);
        });
      },

}
};
  </script>
  <style scoped>
  .relative:hover {
    z-index: 1;
  }
</style>
