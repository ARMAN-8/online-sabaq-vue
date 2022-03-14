<template>
  <div class="Pagination flex justify-between items-center space-y-6 space-x-6 border-t-2 p-6 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
    <div class="text-lg font-normal leading-6 text-gray-400">
      Показано <b>2 из 40</b>
    </div>
    <div class="flex justify-end">
      <nav aria-label="Page navigation example">
        <ul class="flex list-style-none space-x-2">
          <li class="page-item disabled">
            <a class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-500 pointer-events-none focus:shadow-none"
               href="#" tabindex="-1" aria-disabled="true">
              <i class="fas fa-chevron-left"/>
            </a>
          </li>
          <li class="page-item"><a
              class="page-link relative block py-1.5 px-3 border-2 bg-blue-500 outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-blue-600 focus:shadow-md"
              href="#">1 <span class="visually-hidden">(current)</span></a></li>
          <li class="page-item active"><a
              class="page-link relative block py-1.5 px-3 border-2 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="#">2</a></li>
          <li class="page-item"><a
              class="page-link relative block py-1.5 px-3 border-2 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="#">3</a></li>
          <li class="page-item">
            <a class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                href="#">
              <i class="fas fa-chevron-right"/>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Pagination'
}
</script>
