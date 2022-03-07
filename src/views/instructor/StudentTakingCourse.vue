<template>
  <div class="StudentTakingCourse">
    <Header/>
    <main class="relative w-full flex flex-wrap items-center justify-between">
      <div class="container mx-auto borderR flex flex-wrap items-center justify-between px-6 py-6">
        <div class="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-1 gap-4">
          <div class="col-span-2">
            <div class="card px-4 py-4">
              <!--search-block-->
              <div class="flex justify-center">
                <div class="mb-3 xl:w-96">
                  <div class="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
                    <input type="search" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"
                           class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                    <span
                        class="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
                        id="basic-addon2">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search"
                           class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor"
                              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <!--Dropdown-->
              <div class="">
                <div class="dropdown relative">
                  Студенты
                  <button
                      class="dropdown-toggle border-2 inline-block px-2 py-2.5 bg-white font-medium text-xs leading-tight uppercase rounded focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                      type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Нераспределенные
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down"
                         class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                      <path fill="currentColor"
                            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                    </svg>
                  </button>
                  <ul class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none bg-gray-800"
                      aria-labelledby="dropdownMenuButton2">
                    <h6 class="text-gray-400 font-semibold text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent">
                      Dropdown header
                    </h6>
                    <span
                        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300">
                      Dropdown item text
                    </span>
                    <li>
                      <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700 active:bg-blue-600"
                         href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
                         href="#">
                        Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
                         href="#">
                        Something else here</a>
                    </li>
                    <li>
                      <hr class="h-0 my-2 border border-solid border-t-0 border-gray-300 opacity-25"/>
                    </li>
                    <li>
                      <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
                         href="#">
                        Separated link
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="dropdown relative">
                  Курс
                  <button
                      class="dropdown-toggle w-full border-2 inline-block px-6 py-2.5 bg-white font-medium text-xs leading-tight uppercase rounded focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                      type="button" id="filterCourse" data-bs-toggle="dropdown" aria-expanded="false">
                    Все
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down"
                         class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                      <path fill="currentColor"
                            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                    </svg>
                  </button>
                  <ul class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none bg-gray-800"
                      aria-labelledby="filterCourse">
                    <h6 class="text-gray-400 font-semibold text-sm py-2 px-4 block w-full whitespace-nowrap bg-transparent">
                      Dropdown header
                    </h6>
                    <span
                        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300">
                      Dropdown item text
                    </span>
                    <li>
                      <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700 active:bg-blue-600"
                         href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
                         href="#">
                        Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
                         href="#">
                        Something else here</a>
                    </li>
                    <li>
                      <hr class="h-0 my-2 border border-solid border-t-0 border-gray-300 opacity-25"/>
                    </li>
                    <li>
                      <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
                         href="#">
                        Separated link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <!--Checkbox-->
              <div></div>
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
