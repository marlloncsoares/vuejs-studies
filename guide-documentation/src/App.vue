<template>
  <div class="nav">
    <ul>
      <li>
        <router-link to="/">
          Página inicial
        </router-link>
      </li>
      <li>
        <router-link to="/introduction/declarative-rendering/">
          Introdução / Declarative Rendering
        </router-link>
      </li>
    </ul>
  </div>
  <router-view/>
</template>

<style lang="scss">
.nav {
  display: flex;
  width: 100vw;
  height: 90px;
  background-color: blue;
  justify-content: center;
  align-items: center;
  color: white;

  ul {
    display: flex;
    li {
      list-style: none;
      margin: 0 10px;
      color: #FFFFFF;
      font-weight: 500;
      a {
        color: white;
      }
    }
  }
}
</style>
