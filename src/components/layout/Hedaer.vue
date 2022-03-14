<template>
  <div class="Header bg-white">
    <nav class="relative w-full flex flex-wrap items-center justify-between navbar navbar-expand-lg navbar-dark">
      <div class="container mx-auto flex flex-wrap items-center justify-between px-6">
        <button
            class="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
            type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="w-6"
               role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
            </path>
          </svg>
        </button>
        <NavMenu class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
          <a class="text-xl text-white pr-2 font-semibold" href="#">
            <img src="../../assets/img/navbarLogo.png" alt=""/>
          </a>
          <div class="mx-6 hidden lg:block">
            <img src="../../assets/img/vLine.png" alt="vertical line"/>
          </div>
          <a href="#" class="flex items-center space-x-2">
            <span class="numbers">
              68 <br> 12
            </span>
            <i class="fas fa-flag text-red-500"/>
            <span class="noGoals">Нет цели</span>
          </a>
          <!--          {/*Left links*/}-->
          <ul class="navbar-nav flex flex-col pl-0 list-style-none ml-auto">
            <li class="nav-item flex items-center p-2">
              <a class="nav-link" href="#">
                <i class="fas fa-pause-circle"/>
                Взять перерыв
              </a>
            </li>
            <li class="nav-item flex items-center p-2">
              <a class="nav-link opacity-60 hover:opacity-80 focus:opacity-80 p-0" href="#">
                <i class="fa fa-book-open"/>
                Словарь
              </a>
            </li>
            <li class="nav-item flex items-center p-2">
              <a class="nav-link opacity-60 hover:opacity-80 focus:opacity-80 p-0" href="#">
                <i class="fa fa-chart-column"/>
                Статистика
              </a>
            </li>
            <li class="nav-item flex items-center p-2">
              <a class="nav-link opacity-60 hover:opacity-80 focus:opacity-80 p-0" href="#">
                <i class="fa fa-hand"/>
                Поднять руку
              </a>
            </li>
            <li class="nav-item flex items-center p-2">
              <a class="nav-link opacity-60 hover:opacity-80 focus:opacity-80 p-0" href="#">
                <i class="fas fa-portal-exit"/>
                Выйти из класса
              </a>
            </li>
            <li>
              <Settings class="block md:hidden lg:hidden"/>
            </li>
          </ul>
          <!--          {/*Left links*/}-->
        </NavMenu>
        <div class="mx-6 hidden lg:block">
          <img src="../../assets/img/vLine.png" alt="vertical line"/>
        </div>
        <!--        {/*Collapsible wrapper*/}-->

        <!--        {/*Right elements*/}-->
        <div class="flex items-center relative">
          <!--          {/*Icon*/}-->
          <a class="text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4" href="#">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart"
                 class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor"
                    d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
            </svg>
          </a>
          <div class="dropdown relative">
            <a class="text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4 dropdown-toggle hidden-arrow flex items-center"
               href="#"
               id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell"
                   class="w-4" role="img" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 448 512">
                <path
                    fill="currentColor"
                    d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z">
                </path>
              </svg>
            </a>
            <ul class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
                aria-labelledby="dropdownMenuButton1">
              <li>
                <a href="#"
                   class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                  Action
                </a>
              </li>
              <li>
                <a
                    class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="#">Another action</a>
              </li>
              <li>
                <a
                    class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="#">Something else here</a>
              </li>
            </ul>
          </div>
          <div class="dropdown relative">
            <a class="dropdown-toggle flex items-center hidden-arrow" href="#"
               id="dropdownMenuButton2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <div class="text-right space-y-1">
                <span class="userRole px-4 pb-1"><span>Студент</span></span>
                <span class="userName block">Naruto UzuMaki</span>
                <span class="userSubscribeDays block text-xs text-gray-400">365 дней</span>
              </div>
              <img src="../../assets/img/narutoUser.png" class="rounded-full w-11 h-11 ml-4"
                   alt="user image"/>
            </a>
            <ul
                class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
                aria-labelledby="dropdownMenuButton2">
              <li>
                <a
                    class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="#"
                >Action</a>
              </li>
              <li>
                <a
                    class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="#"
                >Another action</a>
              </li>
              <li>
                <a
                    class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div class="mx-6 hidden lg:block">
            <img src="../../assets/img/vLine.png" alt="vertical line"/>
          </div>
          <Settings class="hidden lg:block"/>
        </div>
        <!--        {/*Right elements*/}-->
      </div>
    </nav>
  </div>
</template>
<script>
import Settings from "@/components/Settings";
export default {
  name: 'Header',
  components: {Settings}
}
</script>
<style>

.navbar ul li a {
  color: #2C3340;
  font-weight: 400;
  font-size: 14px;
  line-height: 11.85px;
}

.userRole {
  background: #e0eeff;
  border-radius: 4px;
}

.userRole span {
  color: #127dff;
  font-weight: 300;
  font-size: 7px;
  line-height: 8px;
}

.userName {
  color: #2c3340;
  font-weight: 500;
  font-size: 12px;
  line-height: 14.22px;
}

.userSubscribeDays {
  font-size: 8px;
  line-height: 9.48px;
  font-weight: 400;
}

.bellNotification {
  background: #ff5a5a;
  color: #fff;
}

.numbers {
  color: #2c3340;
  font-size: 8px;
  line-height: 9px;
  font-weight: normal;
}

.noGoals {
  color: #2c3340;
  font-size: 10px;
  line-height: 12px;
  font-weight: normal;
}

</style>
