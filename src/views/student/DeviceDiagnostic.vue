<template>
  <did class="DeviceDiagnostic">
    <Header/>
    <div class="container mx-auto borderR">
      <h2 class="text-2xl font-normal leading-7 py-6">
        Диагностика
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 md:gap-8 gap-4">
        <div class="card bg-white flex items-center p-6 rounded-lg space-x-4">
          <div class="p-4 rounded-full bg-yellow-600">
            <span class="text-white">0</span>
          </div>
          <p>Устройства и <br> подключения</p>
        </div>
        <div class="card bg-white flex items-center p-6 rounded-lg space-x-4">
          <div class="p-4 rounded-full bg-yellow-600">
            <span class="text-white">0</span>
          </div>
          <p>Камера и <br> Микрофон</p>
        </div>
        <div class="card bg-white flex items-center p-6 rounded-lg space-x-4">
          <div class="p-4 rounded-full bg-yellow-600">
            <span class="text-white">0</span>
          </div>
          <p>Видео <br> и звук</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <div></div>
      </div>

      <div class="flex items-center space-x-4 my-6">
        <button class="btnBack">Назад</button>
        <button class="btnNext">Далее</button>
      </div>

    </div>
    <Footer style="bottom: "/>
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

</style>
