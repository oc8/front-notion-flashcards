<template>
  <div class="grid items-center min-h-screen px-4 pt-16 text-center text-white md:px-20 bg-[#191919] md:text-left md:grid-cols-2">
    <div class="grid gap-4">
      <h2 class="font-light">A notion extension</h2>
      <h1 class="text-5xl font-bold">Notion Flashcards</h1>
      <p class="text-lg">Memorizing for the long term</p>
      <Button
        class="m-2 mx-auto md:mx-2 text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-blue-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-blue-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
        variant="secondary"
        @click="oauthNotion()">
        <span class="i-mdi-flash-outline"></span> Add to Notion
      </Button>
    </div>
    <div>
      <img src="/example.png" alt="example of extension"></img>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'


function oauthNotion() {
  window.location.href = 'https://api.notion.com/v1/oauth/authorize?client_id=e6f4178e-52d6-42f3-b424-83827271324d&response_type=code&owner=user&redirect_uri=https%3A%2F%2Fnotion-flashcards.com%2Fdashboard'
}
</script>
