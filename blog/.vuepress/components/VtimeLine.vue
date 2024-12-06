<template>
    <div class="about-site-timeline-content">
      <span class="archives-m-d">{{ date }}</span>{{ title }}
    </div>
</template>

<script>
  export default {
    props:['date', 'title'],
  };
</script>

<style type="text/css">
.about-site-timeline-content {
    padding: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.archives-m-d {
    font-size: 14px;
    padding-right: 20px;
    color: rgb(134, 131, 131);
}
</style>