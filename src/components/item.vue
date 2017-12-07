<template>
   <div class="item">
     <div class="img">
       <span>
      <slot name="img1"></slot>
         </span>
       <span>
      <slot name="img2"></slot>
         </span>
     </div>
      <p :class="{a:flag}">{{text}}</p>
   </div>
</template>
<script>
  export default {
    props:['text','flag'],

  }
</script>
<style>
  .item{
    float: left;
    width: 25%;
  }
  .item > .img{
    width: 100%;
    margin-bottom: 0.5rem;
  }
   .item img{
     display:block;
     width: 30%;
     margin: 0 auto;
   }
  .item p{
    text-align: center;
  }
  .a{
    color: blue;
  }
</style>
