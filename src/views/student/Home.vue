<template>
  <div class="Home-student">
    <Header/>
    <main class="container mx-auto my-6">
      <div class="card bg-white rounded-lg">
        <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab"
            role="tablist">
          <li class="nav-item" role="presentation">
            <a href="#tabs-home" class="nav-link block font-medium text-xs leading-tight uppercase
      border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent
      active" id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
               aria-selected="true">
              <i class="fas fa-newspaper"/>
              Курсы
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
               id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
               aria-controls="tabs-profile" aria-selected="false" href="#tabs-profile">
              Завершенные курсы
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a href="#tabs-messages" class="nav-link block font-medium text-xs leading-tight uppercase
      border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100
      focus:border-transparent" id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
               aria-controls="tabs-messages" aria-selected="false">
              Пользователи компании
            </a>
          </li>
        </ul>
        <div class="tab-content" id="tabs-tabContent">
          <div class="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
            <TestCourse/>
            <TestCourse/>
            <Pagination/>
          </div>
          <div class="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
            Tab 2 content
          </div>
          <div class="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
            Tab 3 content
          </div>
        </div>
      </div>
      <Classes/>
    </main>
    <Footer/>
  </div>
</template>
<script>
import Header from "@/components/layout/Hedaer";
import Footer from "@/components/layout/Footer";
import TestCourse from "@/components/student/TestCourse";
import Pagination from "@/components/instructor/Pagination";
import Classes from "@/components/instructor/classes";
export default {
  name: 'Home-student',
  components: {Classes, Pagination, TestCourse, Footer, Header},
}
</script>
