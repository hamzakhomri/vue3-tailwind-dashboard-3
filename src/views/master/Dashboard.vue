<template>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css"/>
    <div class="w-screen h-screen flex">
      <!-- ===================   SIDE BAR    ========================== -->
        <div class="w-[400px] h-full bg-gray-200 text-white">
          
            <div class="h-[50px] bg-gray-900 flex justify-start items-center">
                <div class="px-[20px]">
                    <h3 class="font-bold text-xl">Admin dashboard</h3>
                </div>
            </div>

            <div class="h-[calc(100vh-50px)] bg-gray-800 py-[25px]">
                <div class="flex flex-col justify-between h-full px-[20px] space-y-[10px]">
                    <div class="flex flex-col justify-between space-y-[10px]">
                      
                                <router-link to="/home">
                                    <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                                        <i class="bi bi-house-door-fill"></i>
                                        <span class="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
                                    </div>
                                </router-link>
                    
                                <router-link to="/profil">
                                    <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                                        
                                        <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                                        <span class="text-[15px] ml-4 text-gray-200 font-bold">Profile</span>
                                    </div>
                                </router-link>
                
                                <router-link to="/home">
                                    <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                                        <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                                        <span class="text-[15px] ml-4 text-gray-200 font-bold">Messages</span>
                                    </div>
                                </router-link>

                                <router-link to="/home">
                                    <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                                        <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>
                                        <span class="text-[15px] ml-4 text-gray-200 font-bold">Download</span>
                                    </div>
                                </router-link>
                        
                    </div>
                    <div class="h-[50px] ">
                        <div>
                            <router-link to="/home">
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
            <div class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] z-10 border-b" >
                Header Sidebar
            </div>

            <!-- ===================  END HEADER SIDEBAR    ========================== -->
            
            
            <div class="h-[calc(100vh-50px)] bg-white">
                MAIN
            </div>

        </div>

    </div>    
</template>
  
  <style>
  
  </style>
  