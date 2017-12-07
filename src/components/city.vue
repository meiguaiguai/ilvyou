<template>
  <div class="city">
       <div class="left">
         <slot name="citya"></slot>
         <p>
           {{text}}
         </p>
       </div>
    <div class="left">
      <slot name="cityb"></slot>
      <p>
        {{texta}}
      </p>
    </div>

  </div>
</template>
<script>
   export default {
    props:['text','texta']
   }
</script>
<style>
.city{
  width: 88%;
  display: flex;
  justify-content: space-between;
  float: right;

}
.city > .left{
  width: 50%;

}
.city > .left > img{
  width: 96%;
}
.city > .left > p{
text-align: center;
  font-size: 16px;
}
</style>
