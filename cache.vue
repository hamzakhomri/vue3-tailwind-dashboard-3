<template>
  <form @submit.prevent="uploadPicture" class="mb-8">
    <div class="flex items-center bg-blue-300">
      <input type="file" ref="pictureInput" key="file" @change="onPictureChange($event)" class="mr-2" />
      <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Upload</button>
    </div>
  </form>

  <div class="bg-gray-500 p-4">
    <ul>
      <li v-for="productpicture in myData" :key="productpicture.idProductPicture" class="flex items-center mb-2">
        <span class="mr-2">{{ productpicture.namePicture }}</span>
        
        <img :src="getPicturePath(productpicture.idProductPicture)" alt="Product Picture" class="h-40 w-40 rounded" />

        <button @click="confirmDelete(productpicture.idProductPicture)" class="text-white">Delete</button>
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



 confirmDelete(pictureId) {
      if (confirm('Are you sure you want to delete this picture?')) {
        this.deletePicture(pictureId);
      }
    },
    deletePicture(pictureId) {
      axios.delete(`http://localhost:8080/productpicture/${pictureId}`)
        .then(response => {
          console.log('Picture deleted successfully!');
          this.myData = this.myData.filter(productpicture => productpicture.idProductPicture !== pictureId);
        })
        .catch(error => {
          console.error('Failed to delete picture:', error);
        });
    },
 

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

        const fileSizeInBytes = this.pictureFile.size;
          if (!this.pictureFile) {
            console.log('No file selected');
            return ;
          }

          if(fileSizeInBytes>=1000000){
            console.log("Size insuportable");
            alert("Size insuportable");
            this.pictureFile='';
          }

          const formData = new FormData();
          formData.append('file', this.pictureFile);

          axios
            .post('http://localhost:8080/productpicture', formData).then((response) => {
              console.log(response.data);           
              this.GetAll();
            })
            .catch((error) => {
              if (error.response) {
                console.log("eroor is :" + error);
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                
    
              }
            });
    },


      getPictureSrc(picture) {
        if (picture) {
          console.log("getPicturesSrc");
          return `data:image/jpeg;base64,${picture}`;
        }
        return '';
      },
      getPicturePath(id) {
        if (id) {
          console.log("getPicturesSrc");
          return `http://localhost:8080/productpicture/${id}/preview`;
        }
        return '';
      },


    },
  };
  </script>


















<!-- compressImage(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    const img = new Image();
    img.src = reader.result;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      const maxWidth = 800; // Maximum width of the compressed image
      const maxHeight = 800; // Maximum height of the compressed image

      let width = img.width;
      let height = img.height;

      // Calculate the new dimensions to maintain the aspect ratio
      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
      }

      // Set the canvas dimensions
      canvas.width = width;
      canvas.height = height;

      // Draw the image on the canvas
      ctx.drawImage(img, 0, 0, width, height);

      // Get the compressed image as a data URL
      const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7); // Specify the desired image quality (0.0 - 1.0)

      this.compressedImage = compressedDataUrl;
    };
  };

  reader.readAsDataURL(file);
}
} -->
