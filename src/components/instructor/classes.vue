<template>
  <div class="Instructor w-full">
    <div class="card bg-white rounded-lg my-6">
      <h3 class="text-2xl font-bold leading-7 p-6">Классы</h3>
      <div class="flex flex-col border-t-2">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
              <table class="min-w-full">
                <thead class="border-b">
                <tr>
                  <th scope="col" class="table-th px-6 py-4 text-left">
                    Название
                  </th>
                  <th scope="col" class="table-th px-6 py-4 text-left">
                    Описание
                  </th>
                  <th scope="col" class="table-th px-6 py-4 text-left">
                    Класс открыт
                  </th>
                  <th scope="col" class="table-th px-6 py-4 text-left">
                    Активный
                  </th>
                  <th scope="col" class="table-th px-6 py-4 text-left">
                    Дейтсвия
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr class="border-b">
                  <td class="table-th-sm px-6 py-4">Класс 1</td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Класс открыт
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Онлайн 1
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <button class="signInBtn">
                      Зайти в класс
                    </button>
                  </td>
                </tr>
                <tr class="bg-white border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Класс 2</td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Класс открыт
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Онлайн 1
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <button class="signInBtn">
                      Зайти в класс
                    </button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination/>
    </div>
  </div>
</template>
<script>
import Pagination from "@/components/instructor/Pagination";
export default {
  name: 'classes',
  components: {Pagination},
  data() {
    return {}
  }
}
</script>
<style>

.table-th {
  color: #313131;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
}

.table-th-sm {
  color: #313131;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
}

.signInBtn {
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
