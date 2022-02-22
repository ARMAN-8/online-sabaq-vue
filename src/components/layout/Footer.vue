<template>
  <div class="Footer bg-white mt-6">
    <footer
        class="relative w-full flex justify-between flex-wrap  items-center py-3 shadow-lg gap-6 p-6">
      <div class="container mx-auto flex flex-wrap items-center justify-between px-6 gap-6">
        <div class="">
          <a href="#">
            <img src="../../assets/img/BenefitLearningPlatform.png" alt="footer img"/>
          </a>
        </div>
        <div class="grid grid-cols-2 flex items-center justify-between">
          <div>
            <a href="#" class="contractOffer">
              Договор оферты
            </a>
          </div>
          <div>
            <a href="#" class="termsOfUse">
              Пользовательское соглашение
            </a>
          </div>
        </div>
        <div>
          <a href="#" class="allRightsReserved">
            Все права защищены
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style scoped>

.Footer {
  height: 48px;
  bottom: 0;
  left: 0;
}

.contractOffer, .termsOfUse {
  color: #2568EF;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
}

.allRightsReserved {
  color: #a5a5a5;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
}

</style>
