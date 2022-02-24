<template>
  <did class="DeviceDiagnostic">
    <Header/>
    <div class="container mx-auto">
      <h2 class="text-2xl font-normal leading-7 py-6">
        Диагностика
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 md:gap-8 gap-4">
        <div class="card bg-white flex items-center p-6 rounded-lg space-x-4">
          <div class="p-4 rounded-full bg-yellow-600">
            <span class="text-white font-bold text-2xl">01</span>
          </div>
          <p class="diagnosticP diagnosticPActive">Устройства и <br> подключения</p>
        </div>
        <div class="card bg-white flex items-center p-6 rounded-lg space-x-4">
          <div class="p-4 rounded-full bg-gray-100">
            <span class="text-gray-400 font-bold text-2xl">02</span>
          </div>
          <p class="diagnosticP">Камера и <br> Микрофон</p>
        </div>
        <div class="card bg-white flex items-center p-6 rounded-lg space-x-4">
          <div class="p-4 rounded-full bg-gray-100">
            <span class="text-gray-400 font-bold text-2xl">03</span>
          </div>
          <p class="diagnosticP">Видео <br> и звук</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 my-6 gap-8">
        <div class="cardWithBorderActive">
          <div class="flex items-center">
            chb
            <a class="ml-4 space-y-1" data-bs-toggle="collapse" href="#step_1" role="button" aria-expanded="false"
               aria-controls="step_1">
              <h3 class="steps-title">Шаг 1</h3>
              <p class="steps-subTitle">Проверка устройства</p>
            </a>
          </div>
          <div class="collapse" id="step_1">
            <hr/>
            <div class="block p-6">
              Шаг 1 проверка устройства
            </div>
          </div>
        </div>
        <div class="cardWithBorder">
          <div class="flex items-center px-6 py-2">
            chb
            <a class="ml-4 space-y-1" data-bs-toggle="collapse" href="#step_2" role="button" aria-expanded="false"
               aria-controls="step_2">
              <h3 class="steps-title">Шаг 2</h3>
              <p class="steps-subTitle">Проверка соединения</p>
            </a>
          </div>
          <div class="collapse" id="step_2">
            <hr/>
            <div class="block p-6">
              <a class="hromakey flex items-center justify-center" href="#">
                <span>Видео</span>
              </a>
              <div class="hromakeyCheck flex justify-between my-2">
                <a href="#" class="underline text-red-600 text-sm font-normal">Не работает</a>
                <a href="#" class="underline text-green-600 text-sm font-normal">Работает</a>
              </div>
            </div>
          </div>
        </div>
        <div class="cardWithBorder">
          <div class="flex items-center px-6 py-2">
            chb
            <a class="ml-4 space-y-1" data-bs-toggle="collapse" href="#step_3" role="button" aria-expanded="false"
               aria-controls="step_3">
              <h3 class="steps-title">Шаг 3</h3>
              <p class="steps-subTitle">Проверка AdBlock</p>
            </a>
          </div>
          <div class="collapse" id="step_3">
            <hr/>
            <div class="block p-6">
              <div class="progressBar flex items-center">
                <span class="font-normal text-sm">Проверка микрофона</span>
                <div class="w-full bg-gray-200 h-5 mb-6">
                  <div class="bg-green-600 h-5" style="width: 25%"></div>
                </div>
              </div>
              <div class="hromakeyCheck flex justify-between my-2">
                <a href="#" class="underline text-red-600 text-sm font-normal">Не работает</a>
                <a href="#" class="underline text-green-600 text-sm font-normal">Работает</a>
              </div>
            </div>
          </div>
        </div>
        <div class="cardWithBorder">
          <div class="flex items-center px-6 py-2">
            chb
            <a class="ml-4 space-y-1" data-bs-toggle="collapse" href="#step_4" role="button" aria-expanded="false"
               aria-controls="step_4">
              <h3 class="steps-title">Шаг 4</h3>
              <p class="steps-subTitle">Проверка интернет соединения</p>
            </a>
          </div>
          <div class="collapse" id="step_4">
            <hr/>
            <div class="block p-6">
              Some placeholder content for the collapse component. This panel is hidden by default but revealed when the
              user activates the relevant trigger.
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center space-x-4 my-6">
        <button class="btnBack">Назад</button>
        <button class="btnNext">Далее</button>
      </div>

    </div>
    <Footer style=""/>
  </did>
</template>
<script>
import Header from "@/components/layout/Hedaer";
import Footer from "@/components/layout/Footer";

export default {
  name: 'device-diagnostic',
  components: {Footer, Header}
}
</script>
<style scoped>

.btnBack, .btnNext {
  width: 202px;
  height: 44px;
  border-radius: 14px;
  background: #fff;

  font-size: 16px;
  font-weight: normal;
  line-height: 19px;
  color: #8f9bb3;
}

.diagnosticP {
  color: #8F9BB3;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
}

.diagnosticP.diagnosticPActive {
  color: #2c3340;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
}

.steps-title {
  color: #2c3340;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
}

.steps-subTitle {
  color: #a5a5a5;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
}

.cardWithBorderActive {
  @apply bg-white px-6 py-2 border-l-8 border-green-600 rounded-lg
}

.cardWithBorder {
  @apply bg-white border-l-8 border-gray-400 rounded-lg
}

.hromakey {
  width: 343px;
  height: 267px;
  left: 202px;
  top: 493px;

  background: #0BA360;
  border-radius: 10px;
}

.hromakey span {
  color: #fff;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  font-weight: 400;
}

.hromakeyCheck, .progressBar {
  width: 343px;
}
</style>
