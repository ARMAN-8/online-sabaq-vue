<template>
  <div class="Stepper">

    <div class="flex items-center">
      <img src="" alt="">
      <div class="space-y-4">
        <div class="flex justify-between space-y-2">
          <div>
          <span class="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-lg">
            Завершено <span>07.12.2021</span>
          </span>
          </div>
          <div>
            <a class="text-blue-500 underline" data-bs-toggle="collapse" href="#collapse_1" role="button"
               aria-expanded="false" aria-controls="collapseExample">
              свернуть <i class="fas fa-angle-down"/>
            </a>
          </div>
        </div>
        <div class="collapse py-6" id="collapse_1">
          <h3 class="text-lg font-medium">Прочитать статью введение</h3>
          <p class="text-sm font-light">
            По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей
            недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит
            любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
          </p>
          <div class="flex items-center space-x-2 mt-6">
            <button class="px-4 py-1 bg-blue-500 text-white rounded-lg">Я прочитал(а) статью</button>
            <button class="px-4 py-1 bg-green-500 text-white rounded-lg">Следующий шаг</button>
          </div>
        </div>
        <hr/>

        <div class="space-y-4">
          <div class="flex justify-between space-y-2">
            <div class="flex items-center space-x-2">
            <span class="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-lg">
              1 Вопрос
            </span>
              <span class="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-lg">
              Неправильных ответов: <span>1</span>
            </span>
            </div>
            <div>
              <a class="text-blue-500 underline" data-bs-toggle="collapse" href="#collapse_2" role="button"
                 aria-expanded="false" aria-controls="collapseExample">
                свернуть <i class="fas fa-angle-down"/>
              </a>
            </div>
          </div>

          <div class="collapse py-6 space-y-2" id="collapse_2">
            <h3 class="text-lg font-medium">Что такое деньги?</h3>
            <p class="text-red-500 font-medium">
              *John Doe
            </p>
            <p class="text-red-500 font-light text-sm">
              По своей сути рыбатекст является альтернативой
            </p>
            <p class="text-gray-400 text-sm">
              09.12.2021 в 18:54:22
            </p>
            <textarea class="border-2 w-full rounded-lg h-20 p-4" name="" id="textarea_1"
                      placeholder="Ваш ответ на вопрос..."></textarea>
            <div class="flex items-center space-x-2 mt-6">
              <a href="#">
                <img src="../../assets/img/fileUpload.png" alt=""/>
              </a>
              <button class="px-4 py-1 bg-green-600 text-white rounded-lg text-xs">
                Отправить на проверку
              </button>
            </div>
          </div>
        </div>
        <hr/>

        <div class="space-y-4">
          <div class="flex justify-between space-y-2">
            <div class="flex items-center space-x-2">
            <span class="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-lg">
              Завершено 07.12.2021
            </span>
              <span class="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-lg">
              Цель <i class="fas fa-flag"/>
            </span>
            </div>
            <div>
              <a class="text-blue-500 underline" data-bs-toggle="collapse" href="#collapse_3" role="button"
                 aria-expanded="false" aria-controls="collapseExample">
                свернуть <i class="fas fa-angle-down"/>
              </a>
            </div>
          </div>
          <div class="collapse py-6 space-y-2" id="collapse_3">
            <h3 class="text-lg font-medium">Выполнить упражнение</h3>
            <div class="flex justify-between">
              <div>Вопрос на который нужно ответить</div>
              <div>
                <p class="text-sm opacity-70">
                  Осталось 1 вопрос из 3
                </p>
              </div>
            </div>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-6 gap-2">
              <div class="py-3">
                <div class="rounded-lg border-2 text-center py-6">
            <span class="opacity-50">
              Вариант ответа <br/> номер один
            </span>
                </div>
              </div>
              <div class="py-4">
                <div class="rounded-lg border-2 text-center py-6">
            <span class="opacity-50">
              Вариант ответа <br/> номер один
            </span>
                </div>
              </div>
              <div class="relative py-3 text-center">
                <i class="fas fa-check bg-blue-400 text-white p-1 rounded-full absolute top-0"/>
                <div class="rounded-lg border-2 border-blue-400 text-center py-6">
              <span class="">
              Вариант ответа <br/> номер один
            </span>
                </div>
              </div>
            </div>
            <div class="flex items-center space-x-2 mt-6">
              <button class="px-4 py-1 bg-blue-500 text-white rounded-lg">Перейти к непройденному шагу</button>
              <button class="px-4 py-1 bg-green-500 text-white rounded-lg">Следующий шаг</button>
            </div>
          </div>
        </div>
        <hr/>

        <div class="space-y-4">
          <div class="flex justify-between space-y-2">
            <div class="flex items-center space-x-2">
            <span class="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-lg">
              Завершено 07.12.2021
            </span>
            </div>
            <div>
              <a class="text-blue-500 underline" data-bs-toggle="collapse" href="#collapse_4" role="button"
                 aria-expanded="false" aria-controls="collapseExample">
                свернуть <i class="fas fa-angle-down"/>
              </a>
            </div>
          </div>
          <div class="collapse py-6 space-y-2" id="collapse_4">
            <h3 class="text-lg font-medium">Выполнить упражнение</h3>
            <div class="flex items-center space-x-2">
              <i class="fas fa-up-down-left-right text-blue-400"/>
              <p class="text-sm opacity-50">
                Перетянице нижний прямоугольник к <br/> ответу который имеет отношение к тексту
              </p>
            </div>
            <div class="grid lg:grid-cols-3">
              <!--I don't get it-->
            </div>
          </div>
        </div>
        <hr/>
        <div class="space-y-4">
          <div class="flex justify-between space-y-2">
            <div class="flex items-center space-x-2">
            <span class="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-lg">
              1 вопрос
            </span>
            </div>
            <div>
              <a class="text-blue-500 underline" data-bs-toggle="collapse" href="#collapse_5" role="button"
                 aria-expanded="false" aria-controls="collapseExample">
                свернуть <i class="fas fa-angle-down"/>
              </a>
            </div>
          </div>
          <div class="collapse py-6 space-y-2" id="collapse_5">
            <h3 class="text-lg font-medium">Что такое деньги?</h3>
            <p class="text-sm font-light">
              По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей
              недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит
              любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
            </p>
            <div class="text-center border-2 border-dashed h-32 flex justify-center items-center rounded-lg">
              <div class="opacity-50">
                Рисование
              </div>
            </div>
            <textarea class="border-2 w-full rounded-lg h-20 p-4" name=""
                      placeholder="Ваш ответ на вопрос...">
          </textarea>
            <div class="flex items-center space-x-2 mt-6">
              <a href="#">
                <img src="../../assets/img/fileUpload.png" alt=""/>
              </a>
              <button class="px-4 py-1 bg-green-600 text-white rounded-lg text-xs">
                Отправить на проверку
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'Stepper',
}
</script>

