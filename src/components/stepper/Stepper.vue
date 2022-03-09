<template>
  <div class="Stepper">

    <div class="space-y-4">
      <div class="flex justify-between space-y-2">
        <div>
          <span class="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-lg">
            Завершено <span>07.12.2021</span>
          </span>
        </div>
        <div>
          <a class="text-blue-500 underline" href="#">свернуть <i class="fas fa-angle-down"/></a>
        </div>
      </div>
      <h3 class="text-lg font-medium">Прочитать статью введение</h3>
      <p class="text-sm font-light">
        По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей
        недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит
        любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
      </p>
      <div class="flex items-center space-x-2">
        <button class="px-4 py-1 bg-blue-500 text-white rounded-lg">Я прочитал(а) статью</button>
        <button class="px-4 py-1 bg-green-500 text-white rounded-lg">Следующий шаг</button>
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
            <a class="text-blue-500 underline" href="#">свернуть <i class="fas fa-angle-down"/></a>
          </div>
        </div>

        <h3 class="text-lg font-medium">Что такое деньги?</h3>
        <p class="text-red-700 font-medium">
          *John Doe
        </p>
        <p class="text-red-700 font-light text-sm">
          По своей сути рыбатекст является альтернативой
        </p>
        <p class="text-gray-400 text-sm">
          09.12.2021 в 18:54:22
        </p>
        <textarea class="border-2 w-full rounded-lg h-20 p-4" name="" id="" placeholder="Ваш ответ на вопрос..."></textarea>
      </div>

    </div>

  </div>
</template>
<script>
export default {
  name: 'Stepper',
}
</script>

