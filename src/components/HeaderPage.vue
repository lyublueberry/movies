<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <b-nav-item tag="router-link" :to="{ path: '/' }">Список популярных фильмов</b-nav-item>
                <b-nav-item tag="router-link" :to="{ path: '/cinema' }">Жанры фильмов</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
export default {
  name: 'HeaderPage',
}
</script>

<style lang="scss" scoped></style>