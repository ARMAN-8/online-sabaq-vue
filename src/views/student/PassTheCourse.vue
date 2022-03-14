<template>
  <div class="PassTheCourse">
    <Header/>
    <main class="relative w-full flex flex-wrap items-center justify-between">
      <div class="container">
        <div class="my-6 grid lg:grid-cols-12 gap-4">
          <div class="card bg-white p-6 rounded-lg col-span-9 space-y-4">
            <h3 class="testCourseTitle">Тестовые курсы</h3>
            <div class="flex justify-between w-80">
              <span class="testCourseSubtitle text-blue-500">Правила</span>
              <span class="testCourseSubtitle text-blue-400">Инструкция ответственного</span>
            </div>
            <p>
              Для выполнения данного упражнения необходимо дождаться проверяющего и ответить на заданные им вопросы
            </p>
            <span class="bg-gray-100 text-black text-sm font-normal rounded-lg py-1 px-4">
            Вопросы: 1 из 5
          </span>
            <!--Вопрос-->
            <div class="mb-3">
              <label for="question_1" class="form-label inline-block text-xs font-semibold mb-2 text-black">
                Вопрос <span class="text-green-500">01:</span>
              </label>
              <div class="border border-gray-300 px-6 py-4 w-full rounded-md"
                   id="question_1">
                <span class="questionAnswer">Как нужно смотреть на финансы, чтобы понять их как товар?</span>
              </div>
            </div>
            <!--Ответ На вопрос-->
            <div class="mb-3">
              <label for="answerToQuestion_1" class="form-label inline-block text-xs font-semibold mb-2 text-black">
                Ответ на вопрос <span class="text-green-500">01:</span>
              </label>
              <div class="border border-green-600 px-6 py-4 w-full rounded-md"
                   id="answerToQuestion_1">
                <span class="questionAnswer">Как нужно смотреть на финансы, чтобы понять их как товар?</span>
              </div>
            </div>
            <div class="space-x-4">
              <button class="true_btn py-2">
                Верно
              </button>
              <button class="false_btn py-2">
                Неверно
              </button>
            </div>
          </div>
          <div class="card bg-white p-3 rounded-lg col-span-3 space-y-4">
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
                  <a href="#">
                    <img src="../../assets/img/icons/greenCallBtn.png" alt="green call btn"/>
                  </a>
                  <a href="#">
                    <img src="../../assets/img/icons/redCallBtn.png" alt="red call btn"/>
                  </a>
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
    </main>
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
  font-size: 12px;
  font-weight: 400;
  line-height: 11px;
}

.callerName {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
}

.testCourseTitle {
  color: #313131;
  font-size: 19px;
  font-weight: 700;
  line-height: 36px;
}

.testCourseSubtitle {
  font-size: 12px;
  font-weight: 400;
  line-height: 13px;
}

.questionAnswer {
  color: #000;
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
}

.true_btn {
  background: #80C575;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
  line-height: 13px;
  width: 88px;
  color: #fff;
}

.false_btn {
  background: #EF5353;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
  line-height: 13px;
  width: 88px;
  color: #fff;
}
</style>
