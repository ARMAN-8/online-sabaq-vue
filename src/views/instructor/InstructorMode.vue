<template>
  <div class="InstructorMode">
  <Header/>


  <main class="relative w-full flex flex-wrap items-center justify-between">
    <div class="container mx-auto borderR flex flex-wrap items-center justify-between px-6 py-6">
      <div class="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-1 gap-4">

        <div class="card bg-white p-6 rounded-lg col-span-8 space-y-4">
          <h3>Тестовые курсы</h3>

          <!--stepper-->
          <Stepper/>

        </div>

        <div class="card bg-white p-6 rounded-lg col-span-4 space-y-4">
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
  </main>


  </div>
</template>
<script>
import Header from "@/components/layout/Hedaer";
import Stepper from "@/components/instructor/Stepper";

export default {
  name: 'InstructorMode',
  components: {Stepper, Header}
}
</script>
