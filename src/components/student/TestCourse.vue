<template>
  <div class="TestCourse flex justify-between items-center space-x-6 border-t-2 py-8">
    <img class="block w-14 h-10" src="../../assets/img/micro.png" alt="micro img"/>
    <div class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6">
      <div class="lg:col-span-4 md:col-span-2 space-y-4">
        <div class="space-y-4">
          <div class="course-title">Тестовый курс</div>
          <div class="course-subtitle">
            Раздел 1, Шаг 1, Введение
          </div>
        </div>
        <div>
          <p class="course-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ...
          </p>
        </div>
      </div>
      <div class="space-y-8 text-right">
        <div class="flex items-center justify-between space-x-4">
          <a href="#" class="course-materials flex items-center">
            <img class="mr-2" src="../../assets/img/icons/download.png" alt="download icon"/>
            Материалы курса
          </a>
          <p class="course-per-cent">30%</p>
        </div>
        <div>
          <button class="course-btn">
            Начать
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TestCourse'
}
</script>
<style scoped>

.course-title {
  color: #313131;
  font-size: 18px;
  line-height: 21px;
  font-weight: 700;
}

.course-subtitle {
  color: #a5a5a5;
  font-size: 14px;
  line-height: 26px;
  font-weight: 400;
}

.course-text {
  color: #313131;
  font-size: 14px;
  line-height: 24px;
  font-weight: 300;
}

.course-materials {
  color: #2568ef;
  font-size: 14px;
  line-height: 26px;
  font-weight: 400;
}

.course-per-cent {
  color: #0ba360;
  font-size: 28px;
  line-height: 34px;
  font-weight: 700;
}

.course-btn {
  background: #0ba360;
  border-radius: 7px;
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
  color: #fff;
  width: 162px;
  height: 51px;
}

</style>
