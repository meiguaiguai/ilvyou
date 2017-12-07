<template>
    <div class="js">
      <div class="left" style="float: left">
        <!--<img src="../assets/images/img/guonei0407_03.jpg" alt="">-->
        <slot name="leftimg">

        </slot>
         <p class="p">
           台湾环岛8月7晚跟团游。甩尾狂甩3人行免单甩尾狂甩3人行免单
         </p>
        <p>席位充足 <span>￥1999起</span></p>
      </div>
      <div class="left right">
        <!--<img src="../assets/images/img/guonei0407_03.jpg" alt="">-->
        <slot name="rightimg">

        </slot>
        <p class="p">
          台湾环岛8月7晚跟团游。甩尾狂甩3人行免单甩尾狂甩3人行免单
        </p>
        <p>席位充足 <span>￥1999起</span></p>
      </div>
    </div>
</template>
<script>

</script>
<style>
.js{
  width: 100%;

}
.js .left{
  width: 48%;
  margin-bottom: 1rem;


}
.js .left img{
  width: 100%;
}
.js p{
  font-size: 16px;
}
  .js .p{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .js span{
    color: orange !important;
    float: right;
  }
  .right{
    float: right;

  }
</style>
