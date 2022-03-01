<template>
  <div id="app">
    <MainHeader />
    <HomePage />
    <MainFooter />
  </div>
</template>

<script>
import './styles/global.css'
import MainHeader from './components/MainHeader'
import HomePage from './pages/HomePage'
import MainFooter from './components/MainFooter'

export default {
  name: 'App',
  components: {
    MainHeader,
    HomePage,
    MainFooter
  }
}
</script>

<style>

</style>
