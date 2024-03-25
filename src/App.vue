<template>
  <div>
    <nav class="fixed flex items-center w-full h-16 text-white md:px-20 bg-[#191919]">
      <div class="flex items-center justify-center w-full md:justify-start">
        <span class="mr-2 text-xl i-mdi-cards"></span>
        <span>Notion Flashcards</span>
      </div>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">

</script>
