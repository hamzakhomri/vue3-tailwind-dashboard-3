


https://vueschool.io/lessons/user-inputs-vue-devtools-in-vue-3
    <template>
      <div>
        <!-- <h3 class="text-2xl font-bold text-left py-2">{{header_table.toLocaleUpperCase()}}</h3> -->
        <h3 class="text-2xl font-bold text-left py-2">{{header_table || 'somthing happen on script'}}</h3>
        
        
        
        
        
        
        
        <div class="">
          <input v-model="newProduct" type="text" placeholder="Product Name" name="" id="" class="border bg-gray-100 mb-2 p-1 w-[100%]">  
            <div class="flex justify-between">
              <div class="flex justify-start border-2 p-1 border-gray-200 bg-gray-100">
                <label class="pr-10"> <input type="radio" name="" id="" v-model="newProductPriority" value="low"> Low </label>
                <label>  <input type="radio" name="" id="" v-model="newProductPriority" value="High"> High </label>
              </div>
              <select name="" id="" class=" border-collapse w-[50%] bg-gray-100 border-2 border-gray-200">
                <option value="Silver">Silver</option>
                <option value="White">White</option>
                <option value="Black">Black</option>
              </select>
            </div>            
          <!-- <div class="text-left">
            <p>Radio :{{ newProductPriority }}</p>
          </div> -->
          

        </div>






        <!-- component -->
<div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">

      <input class="appearance-none block w-full bg-gray-100 text-grey-darker border border-red rounded py-3 px-4 mb-3 " id="grid-first-name" type="text" placeholder="Product Name">
      <p class="text-red text-xs italic">Please fill out this field.</p>
    </div>
    <div class="relative">
        <select class="block appearance-none w-full bg-gray-100 border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        
      </div>

  </div>
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-full px-3">
      <input class="appearance-none block w-full bg-gray-100 text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="******************">
      <p class="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div class="-mx-3 md:flex mb-2">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <input class="appearance-none block w-full bg-gray-100 text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Albuquerque">
    </div>
    <div class="md:w-1/2 px-3">


    </div>
    <div class="md:w-1/2 px-3">

      <input class="appearance-none block w-full bg-gray-100 text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-zip" type="text" placeholder="90210">
    </div>
  </div>
</div>












        
        <div class="overflow-x-auto relative  sm:rounded-lg">
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

          header_table: 'Data Product :',
          newProduct :'',
          newProductPriority :'low',

          Products: [
            {
              id:1 ,
              name :"Apple MacBook Pro 17",
              color :"Sliver", 
              category:'Laptop',              
              price:'2999'
            },
            {
              id:2 ,
              name :"Microsoft Surface Pro	",
              color :"White",
              category:'Laptop PC	',
              price:'1999'
            },
            {
              id:3 ,
              name :"Magic Mouse 2	",
              color :"Black",
              category:'Accessories',
              price:'99'
            },
            
          ]
          
        }
      },
      
      
      created () {
      },

    }
    </script>

    <style>

    </style>