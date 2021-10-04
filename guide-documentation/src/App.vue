<template>
  <div class="page">

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

        <li>
          <router-link to="/introduction/lifecycle/">
            Ciclo de vida
          </router-link>
        </li>
      </ul>
    </div>

    <section class="page__content">
      <router-view></router-view>
    </section>
  </div>
</template>

<style lang="scss">

.page {
  display: flex;

  &__content {
    padding: 20px;
  }
}

.nav {
  display: flex;
  width: 200px;
  height: 100vh;
  background-color: #004873;
  justify-content: center;
  color: white;

  ul {
    li {
      list-style: none;
      margin: 10px 10px;
      color: #5c5353;
      font-weight: 500;
      a {
        color: white;
      }
    }
  }
}
</style>
