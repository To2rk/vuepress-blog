<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" class="categories">{{ item.title }}({{ item.children.length }})</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:['items']
  };
</script>

<style>
  .categories{
    font-size: 16px;
    font-weight: 600;
    display: inline-block;
    padding: 10px 12px;
  }


</style>