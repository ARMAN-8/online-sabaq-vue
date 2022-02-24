<template>
  <div class="PassTheCourse">
    <Header/>
    <div class="container mx-auto borderR">
      <div class="my-6 grid lg:grid-cols-12 gap-8">
        <div class="card bg-white p-6 rounded-lg col-span-8"></div>
        <div class="card bg-white p-3 rounded-lg col-span-4 space-y-4">

          <div class="video relative w-full h-20">
            <img class="rounded-lg h-20" src="../../assets/img/bg50.png" alt="student video"/>
            <div class="absolute top-0 flex items-center w-full">
              <div class="flex items-center m-6">
                <img class="w-8 h-8 mr-2" src="../../assets/img/support.png" alt="support"/>
                <div class="">
                  <span class="block responsibleText">Вы отвечаете за</span>
                  <span class="block callerName">Мария Ивановна</span>
                  <span class="block responsibleText">Тестовый курс</span>
                </div>
              </div>
              <div class="flex items-center right-0 space-x-4">
                <img src="../../assets/img/icons/greenCallBtn.png" alt="green call btn"/>
                <img src="../../assets/img/icons/redCallBtn.png" alt="red call btn"/>
              </div>
            </div>
          </div>

          <div class="video relative w-full h-40">
            <div class="backdrop-brightness-200 bg-white/30">
              <img class="rounded-lg" src="../../assets/img/student.png" alt="student video"/>
              <span class="studentName absolute left-2 bottom-2 w-full">
                Мария Кравец
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/layout/Hedaer";

export default {
  name: 'PassTheCourse',
  components: {Header},
}
</script>
<style>
.studentName {
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
}

.responsibleText {
  color: #fff;
  font-size: 9px;
  font-weight: 400;
  line-height: 11px;
}

.callerName {
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
}
</style>
