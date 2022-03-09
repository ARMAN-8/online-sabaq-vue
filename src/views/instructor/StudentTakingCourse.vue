<template>
  <div class="StudentTakingCourse">
    <Header/>
    <main class="relative w-full flex flex-wrap items-center justify-between">
      <div class="container">
        <div class="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-1 gap-4">
          <div class="col-span-2">
            <div class="card px-4 py-4">
              <!--search-block-->
              <form method="GET" class="my-2">
                <div class="relative text-gray-600 focus-within:text-gray-400">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                  </span>
                  <input type="search" name="q" class="py-2 text-sm text-white border-2 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autocomplete="off">
                </div>
              </form>
              <!--Select-->
              <div class="">

                <div class="flex justify-center">
                  <div class="mb-3 xl:w-96">
                    <span>Студенты</span>
                    <select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700
      bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                      <option selected>Нераспределенные</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>

                <div class="flex justify-center">
                  <div class="mb-3 xl:w-96">
                    <span>Все</span>
                    <select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700
      bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                      <option selected>Все</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>

              </div>
              <!--Checkbox-->
              <div>
                <div class="form-check">
                  <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="checkbox_1" checked>
                  <label class="form-check-label inline-block text-gray-800 text-xs" for="checkbox_1">
                    Поднятая рука
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="checkbox_2">
                  <label class="form-check-label inline-block text-gray-800 text-xs" for="checkbox_2">
                    Избранные
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="checkbox_3">
                  <label class="form-check-label inline-block text-gray-800 text-xs" for="checkbox_3">
                    Нет Цели
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="checkbox_4">
                  <label class="form-check-label inline-block text-gray-800 text-xs" for="checkbox_4">
                    Активные
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="checkbox_5">
                  <label class="form-check-label inline-block text-gray-800 text-xs" for="checkbox_5">
                    ЧВД
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="checkbox_6">
                  <label class="form-check-label inline-block text-gray-800 text-xs" for="checkbox_6">
                    Не ознакомлены с правилами
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="checkbox_7">
                  <label class="form-check-label inline-block text-gray-800 text-xs" for="checkbox_7">
                    Демо доступ
                  </label>
                </div>
              </div>
              <!--filter-btn-->
              <button class="text-white bg-blue-400 w-full px-6 py-2 rounded-lg my-6">
                Сбросить фильтры
              </button>
              <!--call-with-instructor-->
              <p class="filter-text-sm-medium my-6">
                1. Звонок 19:07:13
              </p>
              <!--instructor-1-->
              <a href="#" class="flex items-center justify-between hover:bg-gray-100 rounded-lg my-4">
                <span class="flex items-center space-x-2">
                  <img class="w-12 h-12" src="../../assets/instructorImg.png" alt=""/>
                  <div>
                    <p class="filter-text-xs-normal opacity-50">Тестовый курс</p>
                    <p class="filter-text-sm-medium">Екатерина Иванова</p>
                  </div>
                </span>
                <span class="bg-gray-100 w-10 text-center text-black p-2 rounded-lg">
                  <i class="fas fa-link"/>
                </span>
              </a>
              <!--instructor-2-->
              <a href="#" class="flex items-center justify-between hover:bg-gray-100 rounded-lg my-4">
                <span class="flex items-center space-x-2">
                  <img class="w-12 h-12" src="../../assets/instructorImg.png" alt=""/>
                  <div>
                    <p class="filter-text-xs-normal opacity-50">Тестовый курс</p>
                    <p class="filter-text-sm-medium">Екатерина Иванова</p>
                  </div>
                </span>
                <span class="bg-gray-100 w-10 text-center text-black p-2 rounded-lg">
                  <i class="fas fa-user-secret"/>
                </span>
              </a>
            </div>
          </div>
          <div class="col-span-7">
            <div class="col-span-3 h-full card p-4">
              <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">

                <div class="card w-full h-full">
                  <div class="relative">
                    <div class="backdrop-brightness-200">
                      <img class="rounded-t-lg w-full" src="../../assets/img/callRoom.png" alt="student video"/>
                      <div class="px-3 pt-2 absolute left-0 top-0 w-full">
                        <div class="flex justify-between mt-2 mb-4">
                          <div class="text-center space-y-2">
                            <div class="bg-gray-100 p-1 rounded-lg">
                              <a href="#" class="fas fa-info"></a>
                            </div>
                            <div class="bg-white p-1 rounded-lg">
                              <a href="#" class="fas fa-comments text-blue-600"></a>
                            </div>
                            <div class="bg-white p-1 rounded-lg">
                              <a href="#" class="fas fa-phone text-green-600"></a>
                            </div>
                          </div>
                          <div class="p-1 rounded-lg">
                            <a href="#" class="fas fa-star text-gray-400"></a>
                          </div>
                        </div>
                      </div>
                      <a href="#" class="absolute bottom-3 left-3 font-medium text-sm text-white">
                        Мария Кравец
                      </a>
                    </div>
                  </div>
                  <div class="bg-gray-100 p-2 text-xs font-normal rounded-b-lg flex justify-between">
                    <div>
                      Просмотр видео
                      <div>
                        <a href="#" class="fas fa-clock"></a> 3:26:54
                      </div>
                    </div>
                    <div>
                      33%
                    </div>
                  </div>
                </div>

                <!--card-info-->
                <div class="card w-full h-full">
                  <div class="relative">
                    <div class="backdrop-brightness-200">
                      <img class="rounded-t-lg w-full" src="../../assets/img/darkGrayBg.png" alt="student video"/>
                      <div class="px-3 pt-2 absolute left-0 top-0 w-full">
                        <div class="flex justify-between mt-2 mb-4">
                          <div class="text-left space-y-2">
                            <div>
                              <span class="bg-gray-100 p-1 rounded-lg">
                                <a href="#" class="fas fa-check text-green-600"></a>
                              </span>
                              <span class="text-xs text-white">
                                Ознакомлен с <br>
                                функционалом
                              </span>
                            </div>
                            <div>
                              <span class="bg-white p-1 rounded-lg">
                                <a href="#" class="fas fa-phone"></a>
                              </span>
                              <span class="text-xs text-white">
                                +7 707 141 6005
                              </span>
                            </div>
                            <div>
                              <span class="bg-white p-1 rounded-lg">
                                <a href="#" class="fas fa-envelope"></a>
                              </span>
                              <span class="text-xs text-white">
                                avira767622@gmail.com
                              </span>
                            </div>
                          </div>
                          <div class="p-1 rounded-lg">
                            <a href="#" class="fas fa-times text-white"></a>
                          </div>
                        </div>
                      </div>
                      <div class="space-y-4 absolute bottom-3 left-3">
                        <a href="#" class="font-medium text-xs text-white">
                          Лицензия до: 12.12.2022
                        </a>
                        <div class="space-x-4">
                          <span class="bg-gray-100 p-1 rounded-full">
                            <a href="#" class="fas fa-user"></a>
                          </span>
                          <span class="bg-gray-100 p-1 rounded-full">
                            <a href="#" class="fas fa-camera"></a>
                          </span>
                          <span class="bg-gray-100 p-1 rounded-full">
                            <a href="#" class="fas fa-right-from-bracket"></a>
                          </span>
                          <span class="bg-gray-100 p-1 rounded-full">
                            <a href="#" class="fas fa-link"></a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-100 p-2 text-xs font-normal rounded-b-lg flex justify-between">
                    <div>
                      Просмотр видео
                      <div>
                        <a href="#" class="fas fa-clock"></a> 3:26:54
                      </div>
                    </div>
                    <div>
                      33%
                    </div>
                  </div>
                </div>

                <div class="card w-full h-full">
                  <div class="relative">
                    <div class="backdrop-brightness-200">
                      <img class="rounded-t-lg w-full" src="../../assets/img/callRoom.png" alt="student video"/>
                      <div class="px-3 pt-2 absolute left-0 top-0 w-full">
                        <div class="flex justify-between mt-2 mb-4">
                          <div class="text-center space-y-2">
                            <div class="bg-gray-100 p-1 rounded-lg">
                              <a href="#" class="fas fa-info"></a>
                            </div>
                            <div class="bg-white p-1 rounded-lg">
                              <a href="#" class="fas fa-comments text-blue-600"></a>
                            </div>
                            <div class="bg-white p-1 rounded-lg">
                              <a href="#" class="fas fa-phone text-green-600"></a>
                            </div>
                          </div>
                          <div class="text-center space-y-2">
                            <div class="p-1 rounded-lg">
                              <a href="#" class="fas fa-star text-gray-400"></a>
                            </div>
                            <div class="bg-white p-1 rounded-lg">
                              <a href="#" class="fas fa-hand text-red-600"></a>
                            </div>
                            <div class="bg-white p-1 rounded-lg">
                              <a href="#" class="fas fa-file text-red-600"></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a href="#" class="absolute bottom-3 left-3 font-medium text-sm text-white">
                        Мария Кравец
                      </a>
                    </div>
                  </div>
                  <div class="bg-gray-100 p-2 text-xs font-normal rounded-b-lg flex justify-between">
                    <div>
                      Просмотр видео
                      <div>
                        <a href="#" class="fas fa-clock"></a> 3:26:54
                      </div>
                    </div>
                    <div>
                      33%
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="col-span-3">
            <div class="card p-4">
              <div class="video relative w-full">
                <div class="backdrop-brightness-200 bg-white/30">
                  <img class="rounded-lg w-full" src="../../assets/img/student.png" alt="student video"/>
                  <span class="text-sm text-white font-medium absolute left-2 bottom-2 w-full">
                Мария Кравец
              </span>
                </div>
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
  name: 'StudentTakingCourse',
  components: {Header},
}
</script>
<style>
.card {
  @apply bg-white rounded-lg
}

.filter-text-xs-normal {
  @apply text-xs font-normal
}

.filter-text-sm-medium {
  @apply text-sm font-medium
}
</style>
