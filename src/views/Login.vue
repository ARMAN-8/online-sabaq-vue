<template>
  <div class="Login h-screen flex items-center justify-center">
    <div class="cardLogin text-center p-6 space-y-6">
      <div class="space-y-6">
        <p class="signInTxt block">
          <span>Войдите</span> в учетную запись
        </p>
        <input type="email" placeholder="Введите почту"
               class="inputLogin block w-full px-4 py-2"/>
        <input type="password" placeholder="Введите пароль"
               class="inputLogin block w-full px-4 py-2"/>
        <button class="signInBtn text-white w-full py-2 rounded-lg">
          <span>Войти</span>
        </button>
        <div class="flex items-center justify-between">
          <div class="form-check flex items-center">
            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                   type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label inline-block chBoxRemember" for="flexCheckChecked">
              Запомнить меня
            </label>
          </div>
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


.cardLogin {
  width: 304px;
  border-radius: 10px;
  background: #FFFFFF;
  box-shadow: 0px 12px 19px 1px rgba(189, 189, 189, 0.13);
}

.signInTxt {
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
}

.signInTxt span {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
}

.inputLogin {
  border: 1px solid #ececec;
  border-radius: 3px;
}

.chBoxRemember {
  font-weight: 300;
  color: #2c3340;
  font-size: 14px;
  line-height: 14px;
}

.forgetPsw {
  color: #2568ef;
  font-weight: normal;
  font-size: 14px;
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
  font-size: 14px;
  line-height: 14px;
  color: #ffffff;
}
</style>
