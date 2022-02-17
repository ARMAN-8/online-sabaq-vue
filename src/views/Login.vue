<template>
  <div class="Login h-screen flex items-center justify-center">
    <div class="card bg-gray-100 shadow-2xl rounded-2xl text-center p-6 rounded-lg space-y-6">
      <div class="">
        <p class="block">
          <b>Войдите</b> в учетную запись
        </p>
        <input type="email" placeholder="Введите почту"
               class="block w-full border-2 rounded-lg px-4 py-2"/>
        <input type="password" placeholder="Введите пароль"
               class="block w-full border-2 rounded-lg px-4 py-2"/>
        <button class="bg-green-500 text-white w-full py-2 rounded-lg">
          Войти
        </button>
        <div class="flex justify-between">
          <span>Запомнить меня</span>
          <a href="#">Забыли пароль?</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login'
}
</script>
