<script setup lang="ts">
</script>

<template>
  <main>
    <div class="home-navigation">
      <h2>Доступные формы</h2>
      <div class="form-links">
        <router-link to="/registration" class="form-link">
          <div class="form-card">
            <h3>Форма регистрации</h3>
            <p>Пример формы с различными типами полей</p>
          </div>
        </router-link>
        <router-link to="/feedback" class="form-link">
          <div class="form-card">
            <h3>Форма обратной связи</h3>
            <p>Пример формы с кастомными элементами</p>
          </div>
        </router-link>
      </div>
    </div>
 </main>
</template>
