<template>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css"/>
  <div class="w-screen h-screen flex ">
          <!-- ===================   SIDE BAR    ========================== -->
  <div class="w-[400px] h-full bg-gray-200 text-white" v-show="showSide">
    
      <div class="h-[50px] bg-gray-900 flex justify-start items-center">
          <div class="px-[20px]">
              <h3 class="font-bold text-xl">Admin dashboard</h3>
          </div>
      </div>
      
      <div class="h-[calc(100vh-50px)] bg-gray-800 dark:bg-gray-900 py-[25px]">
        <div class="flex flex-col justify-between h-full px-[20px] space-y-[10px]">
          <div class="flex flex-col justify-between space-y-[10px]">

            <router-link to="/Categories">
              <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white dark:hover:bg-blue-700">
                <i class="bi bi-house-door-fill"></i>
                <span class="text-[15px] ml-4 text-gray-200 font-bold">Categories</span>
              </div>
            </router-link>

            <router-link to="/Products">
              <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white dark:hover:bg-blue-700">
                <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                </svg>
                <span class="text-[15px] ml-4 text-gray-200 font-bold">Products</span>
              </div>
            </router-link>

            <router-link to="/Categories">
              <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white dark:hover:bg-blue-700">
                <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                </svg>
                <span class="text-[15px] ml-4 text-gray-200 font-bold">Messages</span>
              </div>
            </router-link>

            <router-link to="/Categories">
              <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white dark:hover:bg">
                <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>
                <span class="text-[15px] ml-4 text-gray-200 font-bold">Download</span>
              </div>
            </router-link>

            <router-link to="/Tester">
              <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white dark:hover:bg">
                <span class="text-[15px] ml-4 text-gray-200 font-bold">Tester</span>
              </div>
            </router-link>
                                
          </div>
          
          <div class="h-[50px] ">
              <div>
                  <router-link to="/Categories">
                      <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                          <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                          <span class="text-[15px] ml-4 text-gray-200 font-bold">Setting</span>
                      </div>
                  </router-link>                        
              </div>
          </div>
                            
        </div>      
      </div>      
    </div>
  <!-- ===================  END SIDE BAR    ========================== -->
          
  <div class="w-full h-full bg-gray-400">
    <!-- ===================   HEADER SIDEBAR    ========================== -->
    <div class="h-[50px] bg-gray-100 dark:bg-gray-800 flex items-center shadow-sm px-[20px] z-10 border-b">
      <!-- Hamburger menu -->
      <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-[25px] h-[25px]">
          <!-- Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>

      <!-- Search bar -->
      <div class="w-[calc(100%-30px)] flex">
        <div class="w-[calc(100%-200px)] flex justify-center">

          <form class="flex items-center w-[500px]">
            <label for="voice-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-auto text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <input type="text" id="voice-search" class="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required>
              <router-link to="/" class="flex absolute inset-y-0 right-0 items-center pr-3">
                <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path>
                </svg>
              </router-link>
            </div>
          </form>
        </div>
          <!-- User login -->
          <div class="w-[200px] ">
            <div class="flex items-center justify-start space-x-4" @click="toggleDrop">
              <img class="w-10 h-10 rounded-full border-2 border-gray-50" src="../../pictures/me.jpg" alt="">
              <div class="font-semibold dark:text-white text-left">
                <div class="text-black">Madona ,Dev OP</div>
                <div class="text-xs text-gray-500 dark:text-gray-400">Admin</div>
              </div>
            </div>
            <!-- Drop down -->
            <div v-show="showDropDown" class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1 text-left" role="none">
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                <form method="POST" action="#" role="none">
                <router-link to="/">
                  <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                </router-link>  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <!-- ===================   END SEARCH BAR    ========================== -->
      <div class="h-[calc(100vh-50px)] bg-gray-50 dark:bg-gray-800 p-[20px]">
        <div class="border border-gray-300 dark:border-gray-700 rounded-md p-[20px] h-full ">
          <router-view to="/"></router-view>
        </div>
      </div>
    </div>  
    
  </div>    
</template>

<script>

export default{
  data () {
    return {
        showDropDown:false,
        showSide:true
    }
  },

  methods: {
      //hide show sidebar
      toggleSideBar(){
        this.showSide =! this.showSide
      },
      //toggle user
      toggleDrop(){
          this.showDropDown=!this.showDropDown

      }
    }
}

</script>
  
  <style>
  
  </style>
  