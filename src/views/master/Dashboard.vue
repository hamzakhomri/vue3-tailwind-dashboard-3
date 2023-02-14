<template>
        <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css"
    />
    <div class="w-screen h-screen flex">
      <!-- SIDE BAR -->
        <div class="w-[400px] h-full bg-gray-200 text-white">
          
            <div class="h-[50px] bg-gray-900 flex justify-start items-center">
                <div class="px-[20px]">
                    <h3 class="font-bold text-xl">Admin dashboard</h3>
                </div>
            </div>

            <div class="h-[calc(100vh-50px)] bg-gray-800">
                <div class="px-[20px] flex flex-col">
                    <router-link to="/home">
                        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                            <i class="bi bi-house-door-fill"></i>
                            <span class="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
                        </div>
                        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"></div>
                    </router-link>
                
                </div>
            </div>

        </div>
                <!-- END SIDE BAR -->
        <div class="w-full h-full bg-gray-400">
            
            <div class="h-[50px] bg-gray-900" >
                Header Sidebar
            </div>
            
            <div class="h-[calc(100vh-50px)] bg-white">
                MAIN
            </div>

        </div>

    </div>    
</template>
  
  <style>
  
  </style>
  