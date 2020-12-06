
<template>

  <ul>
    <li v-for="item in items">{{ item }}</li>
    <ul>
      <li v-for="it in item">{{ it }}</li>
      </ul>
      {{ items }}
  </ul>
</template>

<script>
  export default {

    props: {
      items: {
        type: Object,
        default: function () {
          let array = [['90','00'],['902','39'],['12','32']];
          return array
      }
    }
    }
 
    // props: {
    //   item: (()=>{
    //         let array = 
    //         return array;
    //         })()
    // }
// (()=>{})()
// 牛逼：https://blog.csdn.net/qq_37968920/article/details/81603289
    // data(){
    //     return {
    //       item:(()=>{
    //         let array = [['9','0'],['92','39']]
    //         return array;
    //         })()
    //     }
    // }
  }
</script>

<style type="text/css">

.archives-m-d {
    font-size: 14px;
    padding-right: 20px;
    color: rgb(134, 131, 131);
}

</style>