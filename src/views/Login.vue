<template>
  <div class="Login h-screen flex items-center justify-center">
    <div class="card text-center p-6 space-y-6">
      <div class="space-y-6">
        <p class="signInTxt block">
          <span>Войдите</span> в учетную запись
        </p>
        <input type="email" placeholder="Введите почту"
               class="input block w-full px-4 py-2"/>
        <input type="password" placeholder="Введите пароль"
               class="input block w-full px-4 py-2"/>
        <button class="signInBtn text-white w-full py-2 rounded-lg">
          <span>Войти</span>
        </button>
        <div class="flex justify-between">
          <span class="chBoxRemember">Запомнить меня</span>
          <a class="forgetPsw" href="#">Забыли пароль?</a>
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
<style scoped>

.card {
  width: 304px;
  border-radius: 10px;
  background: #FFFFFF;
  box-shadow: 0px 12px 19px 1px rgba(189, 189, 189, 0.13);
}

.signInTxt {
  font-weight: 300;
  font-size: 16px;
  line-height: 18.96px;
  color: #000000;
}

.signInTxt span {
  font-weight: 400;
  font-size: 16px;
  line-height: 18.96px;
  color: #000000;
}

.input {
  border: 1px solid #ececec;
  border-radius: 3px;
}

.chBoxRemember {
  font-weight: 300;
  color: #2c3340;
  font-size: 12px;
  line-height: 14px;
}

.forgetPsw {
  color: #2568ef;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
}

.signInBtn {
  background-color: #0BA360;
  border-radius: 3px;
}
.signInBtn:hover {
  background-color: #068a4f;
  border-radius: 3px;
}

.signInBtn span {
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
}
</style>
