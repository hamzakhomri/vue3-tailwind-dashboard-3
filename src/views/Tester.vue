<template>
  <form @submit.prevent="uploadPicture" class="mb-8">
    <div class="flex items-center">
      <input type="file" ref="pictureInput" key="file" @change="onPictureChange($event)" class="mr-2" />
      <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Upload</button>
    </div>
  </form>

  <div class="bg-gray-500 p-4">
    <ul>
      <li v-for="productpicture in myData" :key="productpicture.idProductPicture" class="flex items-center mb-2">
        <span class="mr-2">{{ productpicture.namePicture }}</span>
        <img :src="getPictureSrc(productpicture.picture)" alt="Product Picture" class="h-40 w-40 rounded" />
      </li>
    </ul>
  </div>
</template>


  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        myData: [],
        pictureFile: '',
      };
    },
    mounted() {
      this.GetAll();
    },


    methods: {
GetAll(){
  axios.get('http://localhost:8080/productpicture').then((response) => {
          this.myData = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
},

   
      onPictureChange(event) {
      this.pictureFile = event.target.files[0];
    },
    uploadPicture() {
        if (!this.pictureFile) {
          console.log('No file selected');
          return;
        }

        const formData = new FormData();
        formData.append('file', this.pictureFile);
      // Use 'file' instead of 'picture'

        axios
          .post('http://localhost:8080/productpicture', formData).then((response) => {
            console.log(response.data);
            this.GetAll();
          })
          .catch((error) => {
            if (error.response) {
              console.log("eroor is :" + error);
              console.log("this :"+this.pictureFile);
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          });
    },

            

          getPictureSrc(picture) {
            if (picture) {
              return `data:image/jpeg;base64,${picture}`;
            }
            return '';
          },
    },
  };
  </script>
  