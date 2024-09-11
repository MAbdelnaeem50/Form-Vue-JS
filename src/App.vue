<template>
<div class="bg-[#FBFBF1]  min-h-screen  transition-colors py-8 duration-300">
  <div class="header container bg-[#B5232D] text-[#FBFBF1] text-center py-8 mx-auto   rounded-2xl">
    <h1 class="text-8xl font-bold">Full Form</h1>
  </div>
  <div class="second container mx-auto text-center mt-2">
  <span class="">USING HTML & CSS & JS &  TAILWIND CSS & VUE JS </span>
  <hr class="h-px my-2 bg-black border-0 ">
</div>
    <div class="second container mx-auto p-4">
        <div class="bg-[#f3f3eb]  shadow rounded-2xl p-6">
            <h1 class="text-xl font-semibold mb-4  ">Personal Information</h1>
            <form>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type="text" v-model="data.first_name" placeholder="First name" class="bg-[#FBFBF1] focus:border-[#B5232D] focus:border-2 focus:outline-none focus:ring-0 p-2 rounded-2xl w-full">
                    <input type="text" v-model="data.last_name" placeholder="Last name" class="bg-[#FBFBF1] focus:border-[#B5232D] focus:border-2 focus:outline-none focus:ring-0 p-2 rounded-2xl w-full">
                </div>
                <div class="mb-4">
                    <input type="email" v-model="data.email" placeholder="Email address" class="bg-[#FBFBF1] focus:border-[#B5232D] focus:border-2 focus:outline-none focus:ring-0 p-2 rounded-2xl w-full">
                </div>
                <div class="mb-4">
                    <select v-model="data.country" class="bg-[#FBFBF1] focus:border-[#B5232D] focus:border-2 focus:outline-none focus:ring-0 p-2 rounded-2xl w-full">
                      <option disabled value="">Country</option>
                        <option >United States</option>
                        <option >United Kingdom</option>
                        <option >Egypt</option>
                        <option >Saudi Arabia</option>
                        <option >China</option>
                        <option >Japan</option>
                    </select>
                </div>
                <div class="mb-4">
                    <input type="text" v-model="data.street" placeholder="Street address" class="bg-[#FBFBF1] focus:border-[#B5232D] focus:border-2 focus:outline-none focus:ring-0 p-2 rounded-2xl w-full">
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <input type="text" v-model="data.city" placeholder="City" class="bg-[#FBFBF1] focus:border-[#B5232D] focus:border-2 focus:outline-none focus:ring-0 p-2 rounded-2xl w-full">
                    <input type="text" v-model="data.state" placeholder="State / Province" class="bg-[#FBFBF1] focus:border-[#B5232D] focus:border-2 focus:outline-none focus:ring-0 p-2 rounded-2xl w-full">
                    <input type="text" v-model="data.zip" placeholder="ZIP / Postal code" class="bg-[#FBFBF1] focus:border-[#B5232D] focus:border-2 focus:outline-none focus:ring-0 p-2 rounded-2xl w-full">
                </div>
                <div class="grid grid-cols-1 md:grid-cols-12 gap-2 mb-4">
            <div class="flex items-center pl-6 border-2 border-[#B5232D] rounded-2xl">
              <input type="radio" id="male" name="gender" value="male" v-model="data.gender" class="w-4 h-4 text-[#B5232D] border-[#B5232D] bg-[#FBFBF1] focus:ring-[#B5232D] focus:ring-2">
              <label for="male" class="w-full py-4 ms-2 text-sm font-medium text-black">Male</label>
            </div>
            <div class="flex items-center pl-4 border-2 border-[#B5232D] rounded-2xl">
              <input type="radio" id="female" name="gender" value="female" v-model="data.gender" class="w-4 h-4 text-[#B5232D] border-[#B5232D] bg-[#FBFBF1] focus:ring-[#B5232D] focus:ring-2">
              <label for="female" class="w-full py-4 ms-2 text-sm font-medium text-black">Female</label>
            </div>
          </div>
                <button type="button" @click="printData()" id="theme-toggle" class="px-4 py-2 rounded-2xl bg-[#B5232D] text-[#FBFBF1] hover:bg-opacity-80 focus:outline-none transition-colors">
                    Submit
                </button>
            </form>
        </div>
    </div>

  </div>

</template>

<script>
export default {
  data(){
    return{
      data:{
      first_name: "",
      last_name : "",
      email:"",
      country:"",
      street:"",
      city:"",
      state:"",
      zip:"",
      gender: "",
      },
    
    }
  },

  methods: {
    printData(){
      console.log(this.data);
    }
  },
}
</script>

<style>
.second{
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
}
.header{
  font-family: "Playwrite CU", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
