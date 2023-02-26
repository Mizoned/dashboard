<template>
  <svg v-if="!isActive" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 12V8C16 6.34315 14.6569 5 13 5H11C9.34315 5 8 6.34315 8 8V10H5C3.34315 10 2 11.3431 2 13V18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18V15C22 13.3431 20.6569 12 19 12H16ZM13 7H11C10.4477 7 10 7.44772 10 8V17H14V8C14 7.44772 13.5523 7 13 7ZM16 14V17H20V15C20 14.4477 19.5523 14 19 14H16ZM5 12H8V17H4V13C4 12.4477 4.44772 12 5 12Z" fill="#6F767E"/>
  </svg>
  <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 7C9 5.89543 9.89543 5 11 5H13C14.1046 5 15 5.89543 15 7V18C15 18.5523 14.5523 19 14 19H10C9.44772 19 9 18.5523 9 18V7Z" fill="#6F767E"/>
    <path d="M17 13C17 12.4477 17.4477 12 18 12H20C21.1046 12 22 12.8954 22 14V18C22 18.5523 21.5523 19 21 19H18C17.4477 19 17 18.5523 17 18V13Z" fill="#6F767E"/>
    <path d="M2 12C2 10.8954 2.89543 10 4 10H6C6.55228 10 7 10.4477 7 11V18C7 18.5523 6.55228 19 6 19H3C2.44772 19 2 18.5523 2 18V12Z" fill="#6F767E"/>
  </svg>
</template>

<script>
export default {
  name: "VIconLeaderboard",
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>