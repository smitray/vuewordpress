<template>
    <section class="container mx-auto">
        <recent-posts-widget limit="5">Recent Posts</recent-posts-widget>
        <pages-widget limit="5">Pages</pages-widget>
    </section>
</template>

<script>
import RecentPostsWidget from './widgets/RecentPosts'
import PagesWidget from './widgets/Pages'

export default {
    components: {
        RecentPostsWidget,
        PagesWidget
    }
}
</script>