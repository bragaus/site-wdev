<template>
  <div id="app">
    <MainHeader />
    <HomePage />
  </div>
</template>

<script>
import './styles/global.css'
import MainHeader from './components/MainHeader'
import HomePage from './pages/HomePage'

export default {
  name: 'App',
  components: {
    MainHeader,
    HomePage
  }
}
</script>

<style>

</style>
