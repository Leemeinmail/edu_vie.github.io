<template>
    <article v-if='content' v-html="content" class='article'></article>
    <article v-else='' class='article'>
        <slot></slot>
    </article>
</template>

<script>
export default {
    props: ['content']
}
</script>

<style lang="scss">
.article {
    color: #000;

    & p {
        line-height: 1.5;
        margin: 0 0 30px 0;
        &:last-child{
            margin-bottom: 0;
        }
    }

    & ul,
    & ol {
        margin-bottom: 30px;
        padding-left: 20px;
        &:last-child{
            margin-bottom: 0;
        }
    }

    & ul li,
    & ol li {
        line-height: 1.5;
        margin-bottom: 10px;
        &:last-child{
            margin-bottom: 0;
        }
    }

    & blockquote {
        background: #0f2742;
        color: #fff;
        padding: 20px;
        margin: 30px 0;
        line-height: 1.5;
        &:last-child{
            margin-bottom: 0;
        }
    }

    & mark {
        background: #0f2742;
        color: #fff;
        padding: 0 10px;
    }

    & a {
        text-decoration: none;
        color: #7272ff;
        transition: .3s;
    }

    & a:hover {
        color: #2c2cff;
    }

    & img {
        display: block;
        width: 100%;
        max-width: 800px;
        height: auto;
        margin: 30px auto;
    }
}
</style>