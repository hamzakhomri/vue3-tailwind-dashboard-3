<template>
  <form @submit.prevent="uploadPicture">
    <div>
      <input type="file" ref="pictureInput" key="file" @change="onPictureChange($event)" />
      <button type="submit">Upload</button>
    </div>
  </form>

  <div class="bg-gray-500">
    <ul>
      <li v-for="productpicture in myData" :key="productpicture.idProductPicture">
        {{ productpicture.namePicture }}
        <img :src="getPictureSrc(productpicture.picture)" alt="Product Picture" />
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
      axios.get('http://localhost:8080/productpicture')
        .then((response) => {
          this.myData = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    methods: {


   


      
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
    .post('http://localhost:8080/productpicture', formData)
    .then((response) => {
      console.log(response.data);
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
  