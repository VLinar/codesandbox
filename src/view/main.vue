<template>
  <div>
    <h1>This is main page</h1>
    <router-link to="child1" tag="a" class="linkclass">Первый</router-link>
    <router-link to="child2" tag="a" class="linkclass">Второй</router-link>
    <router-view></router-view>
  </div>
</template>
<style scoped>
.linkclass {
  margin: 10px;
  text-decoration: none;
  padding: 10px;
  font-size: 20px;
  color: white;
  background: rgb(39, 170, 39);
  border-radius: 10%;
}
</style>
