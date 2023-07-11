<template>
  <div>
    <!-- <h1 class="bg-red-300">Length: {{ myData.length }}</h1>
    
    <form @submit.prevent="uploadPictures" class="bg-blue-500">
      <div v-for="index in 2" :key="index">
        <input type="file" name="file" :ref="'fileInput-' + index" @change="onFileChange(index)" />
      </div>
      <button type="submit">Upload</button>
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

    <div>
    <input type="file" @change="handleFileChange">
    <img :src="imageUrl" alt="Selected Image" v-if="imageUrl">
    </div>

    <div class="demo bg-green-500">
      Type a number: <input v-model.number="number" />
      <p class="big-number">{{ tweened.number.toFixed(0) }}</p>
    </div> -->
  <button @click="addFile" class="bg-blue-500">Add File</button>
    <div class="bg-blue-600 ">
    
      <div v-for="(input, index) in inputs" :key="index">
        <input type="file" @change="uploadFile($event, index)" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
    </div>
  
    <div v-for="(file, index) in files" :key="index">
      <img :src="file.url" alt="Uploaded File" />
    </div>
</div>




  </div>
  
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import gsap from 'gsap'

const number = ref(0)
const tweened = reactive({
  number: 0
})

watch(
  number,
  (n) => {
    gsap.to(tweened, { duration: 0.75, number: Number(n) || 0 })
  }
)
</script>

<script>
import axios from 'axios';

export default {
  props: {},
  data() {
    return {
      files: [], // Array to store uploaded files
      inputs: [], // Array to store input elements
      myData: [],
      imageUrl: [],
      pictureFiles: [],
      picturePreviews: []


    };
  },
  mounted() {
    this.getAll();
  },
  methods: {


    addFile() {
      this.inputs.push({}); // Add an empty object to the inputs array
    },

    

    uploadFile(event, index) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        const url = reader.result;

        // Update the corresponding file object in the files array
        this.files.splice(index, 1, { id: Date.now(), url });
      };

      reader.readAsDataURL(file);
    },









    
    onFileChange(index) {
      const file = this.$refs['fileInput-' + index][0].files[0];
      if (file) {
        this.pictureFiles[index - 1] = file;
        
      }
    },
    uploadPictures() {
      if (this.pictureFiles.length === 0) {
        console.log('No files selected');
        return;
      }

      const uploadPromises = this.pictureFiles.map((file) => {
        const formData = new FormData();
        formData.append('file', file);

        return axios.post('http://localhost:8080/productpicture', formData);
      });

      Promise.all(uploadPromises)
        .then((responses) => {
          console.log('All files uploaded successfully!');
          responses.forEach((response) => {
            console.log(response.data);
          });
          this.getAll();
        })
        .catch((error) => {
          console.log('Error:', error);
        });
    },
    confirmDelete(pictureId) {
      if (confirm('Are you sure you want to delete this picture?')) {
        this.deletePicture(pictureId);
      }
    },
    deletePicture(pictureId) {
      axios.delete(`http://localhost:8080/productpicture/${pictureId}`)
        .then((response) => {
          console.log('Picture deleted successfully!');
          this.myData = this.myData.filter((productpicture) => productpicture.idProductPicture !== pictureId);
        })
        .catch((error) => {
          console.error('Failed to delete picture:', error);
        });
    },
    getAll() {
axios.get('http://localhost:8080/productpicture')
        .then((response) => {
          this.myData = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getPicturePath(id) {
      if (id) {
        return `http://localhost:8080/productpicture/${id}/preview`;
      }
      return '';
    },
  }
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
