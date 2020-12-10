<template>
<div>
  <ul v-for="itemYear in itemGroupByYear" class="no-list-style">
    <h2>{{ itemYear[0][0].year }}年</h2>
    <li v-for="itemMonth in itemYear">
    <h3 class="archives-y-m-d">{{ itemMonth[0].year }}年{{ itemMonth[0].month + 1 }}月</h3>
      <ul class="no-list-style">
        <li v-for="item in itemMonth"><span class="archives-m-d">{{ ('0' + (item.month + 1)).slice(-2) }}-{{ ('0' + item.day).slice(-2) }}</span><a :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.title }}</a></li>
      </ul>
    </li>
  </ul>
</div>
</template>

<script>
export default {
    props: {
      itemGroupByYear: {
        type: Array,
        default: function () {
          var includeAllArticles = [];
            this.$site.pages.forEach(date =>{
              if(date.frontmatter.date){
                var time = new Date(date.frontmatter.date)
                includeAllArticles.push({
                  year: time.getFullYear(),
                  month: time.getMonth(),
                  day: time.getDate(),
                  title: date.frontmatter.title,
                  url: date.frontmatter.permalink
                })
              }
            })
            var groupByYear = [[],[],[],[]]; //四年，2017-2020
            var itemGroupByYear = [];

            for(var i = 0;i < includeAllArticles.length;i++){
              groupByYear[includeAllArticles[i].year - 2017].push(includeAllArticles[i])
            }
            function compare(p){
              return function(m,n){
                var a = m[p];
                var b = n[p];
                return b - a;
              }
            }
            // 2020年有文章时修改 为 3
            for(var i = 3;i >=0;i--){
              let groupByMonth = [[],[],[],[],[],[],[],[],[],[],[],[]];
              for(var j = 0;j < groupByYear[i].length;j++){
                groupByMonth[11 - groupByYear[i][j].month].push(groupByYear[i][j])
              }
              let itemGroupedByMonths = [];
              for(var j = 0;j < groupByMonth.length;j++){
                if(groupByMonth[j].length){
                  groupByMonth[j].sort(compare("day"));
                  itemGroupedByMonths.push(groupByMonth[j])
                }
              }
              itemGroupByYear.push(itemGroupedByMonths)
            }
            return itemGroupByYear;
        }
      }
    },
    data(){
      return {
        itemGroupByYear: this.itemGroupByYear
      }
    }
}
</script>


<style type="text/css">
.no-list-style li {
    list-style: none;
}

.archives-y-m-d{
    font-size: 18px;
    font-weight: 600;
    margin: 16px 0 2px 4px;
}
.archives-m-d {
    font-size: 14px;
    padding-right: 20px;
    color: rgb(134, 131, 131);
}

</style>