<template>
  <div id="app">
    <MainHeader />
    <router-view path="$router.key" />
    <MainFooter />
  </div>
</template>

<script>
import './styles/global.css'
import MainHeader from './components/MainHeader'
import MainFooter from './components/MainFooter'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<style>

</style>
