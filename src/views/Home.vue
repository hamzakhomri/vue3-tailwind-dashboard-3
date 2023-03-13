https://vueschool.io/lessons/dynamic-css-classes-with-vue-3

https://vueschool.io/lessons/html-attribute-binding-in-vue-3
H7E77 57CCZ 86218 EL17P
https://vueschool.io/lessons/conditional-rendering-in-vue-3
https://vueschool.io/lessons/user-inputs-vue-devtools-in-vue-3
<template>
  <div class="">
  <!-- <h3 class="text-2xl font-bold text-left py-2">{{header_table.toLocaleUpperCase()}}</h3> -->
  <h3 class="text-2xl font-bold text-left py-2">{{header_table || 'somthing happen on script'}}</h3>

<div>
  <buton v-if="EditItems" @click="doEditItems(false)" class="bg-green-500">AddItem</buton>
  <buton v-else @click="doEditItems(true)"  class="bg-red-500">cancel</buton>
</div>

      <div v-if="EditItems" class="add--item-form">
        <div class="bg-orange-500 p-10">
          <input v-model="newItem" type="text" name="" id="" placeholder="Add Item">
          
          <button type="submit" class="btn btn-primary border bg-blue-500 cursor-pointer"
          v-bind:disabled="ProductName.length===0"
            @click="AddItems"> Save Item with methos 
          </button> 

          <a>  item : {{newItem}}  </a>
        </div>
          <ul>
            <li v-for="item in Items" >{{item.id}} {{ item.label }}</li>
          </ul>

          <p v-if="Items.length===1"> Nice Jobe</p>
          <p v-else>You have :{{ Items.length }} Items</p>

      </div> 
   
  



<div class="flex justify-start ml-7 mb-5 ">
  <p class="text-green-600 text-lg cursor-pointer" v-if="!EditProducts" @click="doProducts(true)" >+Add Prducts</p>
</div>

<form v-if="EditProducts" action="" class="bg-blue-100 rounded-lg border border-gray-500 mb-5">
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
              <div class="flex justify-start"> <span class="px-1 text-sm text-gray-600 text-left">Product Name</span></div>
                <input required  v-model="ProductName"   class="border-2 border-gray-300 appearance-none block w-full bg-white text-grey-darker  border-grey-lighter rounded-lg py-3 px-4 " id="grid-first-name" type="text" placeholder="Product Name">
                <p v-bind:hidden="ProductName.length>0" class="text-red text-xs italic text-red-600">Please fill out this field.</p>
            </div>

            <div class="w-full">
              <div class="flex justify-start"> <span class="px-1 text-sm text-gray-600 text-left">Color Product</span></div>
              <select required v-model="ProductColor" class="w-full bg-white border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded-lg " id="grid-state" >
                <option value="Sliver">Sliver</option>
                <option value="White">White</option>
                <option value="Black">Black</option>
              </select>
              <p v-bind:hidden="ProductColor.length>0" class="text-red text-xs italic text-red-600">Please fill out this field.</p>
              
            </div>
          </div>


          <div class="-mx-3 md:flex mb-6 space-x-4">
            <div class="w-full">
              <div class="flex justify-start"> <span class="px-1 text-sm text-gray-600 text-left">Category</span></div>
              <select required v-model="CategoryProduct" class="w-full bg-white border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded-lg " id="grid-state">
                <option value="Laptop">Laptop</option>
                <option value="Desktop">Desktop</option>
                <option value="Accessories">Accessories	</option>
              </select>
              <p v-bind:hidden="CategoryProduct.length>0" class="text-red text-xs italic text-red-600">Please fill out this field.</p>
            </div>

            <div class="w-full">
              <div class="flex justify-start"> <span class="px-1 text-sm text-gray-600 text-left">Price</span></div>
                <input required v-model="PriceProduct" class="appearance-none block w-full bg-white text-grey-darker border border-grey-lighter rounded-lg  py-3 px-4" id="grid-zip" type="number" >
                <p v-bind:hidden="PriceProduct.length!=0 " class="text-red text-xs italic text-red-600">Please fill out this field.</p>
            </div>
          </div>



          <div class="-mx-3 md:flex mb-6  justify-between space-x-4" >
            <div class="border p-2">
                <div class="flex justify-start">
                  <label class="mb-3 block text-base font-medium text-[#07074D] "> available  </label>
                </div>
                <div class="flex items-center space-x-6">
                  <div class="flex items-center">
                    <input required v-model="AvailableProduct" value="Yes" type="radio" name="radio" id="radioButton1" class="h-5 w-5" />
                    <label for="radioButton1" class="pl-3 text-base font-medium text-[#07074D]" > Yes </label>
                  </div>
                  <div class="flex items-center">
                    <input required v-model="AvailableProduct"  value="No" type="radio" name="radio" id="radioButton2" class="h-5 w-5" />
                    <label for="radioButton2" value="No" class="pl-3 text-base font-medium text-[#07074D]" > No </label>
                  </div>
                  <p v-bind:hidden="AvailableProduct.length>0" class="text-red text-xs italic text-red-600">Please fill out this field.</p>
                </div>
            </div>
          </div>
        </div>
  
            


  </div>

  <div class="col-span-2 rounded-lg border border-gray-400 bg-gray-100 p-2 sm:col-span-3">
  
    <div class="bg-white col-start-6 col-end-5 p-1 rounded-xl my-4 mr-auto shadow-md " >
      <div class=" font-light mb-1 text-left ml-2 p-1"> Product name: 
        <a class="font-semibold" > {{ ProductName }}</a>  
      </div>
    </div>

    <div class="bg-white col-start-6 col-end-5 p-1 rounded-xl my-4 mr-auto shadow-md " >
          <div class=" font-light mb-1 text-left ml-2 p-1"> Product Color : 
        <a class="font-semibold">{{ProductColor}}</a>  
      </div>
    </div>

    <div class="bg-white col-start-6 col-end-5 p-1 rounded-xl my-4 mr-auto shadow-md " >
          <div class=" font-light mb-1 text-left ml-2 p-1">   Category product  :
        <a class="font-semibold">{{ CategoryProduct }}</a>  
      </div>
    </div>

    <div class="bg-white col-start-6 col-end-5 p-1 rounded-xl my-4 mr-auto shadow-md " >
          <div class=" font-light mb-1 text-left ml-2 p-1">   Price product  :
        <a class="font-semibold">{{ PriceProduct }}</a>  
      </div>
    </div>
    <div class="bg-white col-start-6 col-end-5 p-1 rounded-xl my-4 mr-auto shadow-md " >
          <div class=" font-light mb-1 text-left ml-2 p-1">   Available :
        <a class="font-semibold">{{ AvailableProduct }}</a>  
      </div>
    </div>
<div class=" space-y-1">
  <div class="flex w-full ">
                <button class="btn btn-primary group rounded-2xl  h-12  w-full bg-green-500 font-bold text-lg text-white relative overflow-hidden" type="submit" 
                @click="AddProducts"
                v-bind:disable="ProductName.length===0 || ProductColor.length===0 || CategoryProduct.length===0  || PriceProduct.length===0 || AvailableProduct.length===0"
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

        
        <div class="overflow-x-auto relative  sm:rounded-lg">
          
          <p v-if="Products.length ===0" class="text-2xl font-bold text-green-600 mb-5">Nothink to Add</p>
          <p v-else class="text-left text-xl font-bold text-black n-600 mb-5">You Have {{ Products.length }} Products</p>

          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Id
                </th> 
                <th scope="col" class="py-3 px-6">
                  Product name
                </th>
                <th scope="col" class="py-3 px-6">
                  <div class="flex items-center">
                    Color
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
                    Price
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                        <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                      </svg></a>
                  </div>
                </th>
                <th scope="col" class="py-3 px-6">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product) in Products" :key="product.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ product.id || '' }} 
                </th>
                <td class="py-4 px-6">
                  {{ product.name }}
                </td>
                <td class="py-4 px-6">
                  {{ product.color }}
                </td>
                <td class="py-4 px-6">
                  {{product.category}}
                </td>
                <td class="py-4 px-6">
                  {{ product.price }} DH
                </td>
                <td class="py-4 px-6 text-right">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>

            </tbody>
          </table>
          

        </div>

      </div>
    </template>

    <script>
    export default {

      data () {
        return {
          header_table:'Products',
          EditItems:false,
          EditProducts:true,
          newItem:"",
          ProductName :'',
          ProductColor:'',
          CategoryProduct:'',
          PriceProduct:'',
          AvailableProduct:'',
          

          Items:[
            { id:1, label:"Hellow World !!" },

          ],


          Products: [
            {
              id:1 ,
              name :"Apple MacBook Pro 17",
              color :"Sliver", 
              category:'Laptop',              
              price:'2999'
            }, 
         
          ]
          
        }
      },
      
      
      methods: {
    AddProducts(){
          this.Products.push({id:this.Products.length+1, name:this.ProductName , color: this.ProductColor,category:this.CategoryProduct, price:this.PriceProduct })
                    this.ProductName ="";
                    this.ProductColor="";
                    this.CategoryProduct="";
                    this.PriceProduct="";

    },
    AddItems(){
      this.Items.push({id:this.Items.length+1 , label: this.newItem})
      this.newItem=""      
    }  ,
    doEditItems(EditItems){
      this.EditItems=EditItems
      this.newItem=""
    },
    doProducts(EditProducts){
      console.log('EditP')
      this.EditProducts=EditProducts
      this.ProductName =""; this.ProductColor=""; this.CategoryProduct=""; this.PriceProduct="";

    }
  },

    }
    </script>

    <style>

    </style>