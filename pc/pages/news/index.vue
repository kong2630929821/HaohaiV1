<template>
<div>
    <NewsList v-bind:sortedNews="sortedNews"></NewsList>
</div>
</template>
<script>
import NewsList from '../../components/newsList'
import { sortByDate } from '../../utils' 
import { getNewsConfig } from '../../api'
export default {
    components:{
        NewsList
    },
    async asyncData(){
        let res = await getNewsConfig();
        let newsConfig = res.data;
        return {
            sortedNews: sortByDate(newsConfig)
        }
    }
}
</script>
        