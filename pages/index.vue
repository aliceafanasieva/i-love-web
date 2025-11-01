<template>
  <main class="p-8 max-w-3xl mx-auto">
    <h1 class="text-4xl font-bold mb-8 text-purple-700">I Love Web 💜</h1>

    <ContentList v-slot="{ list }">
      <div v-for="article in list" :key="article._path" class="mb-8 border-b pb-4">
        <NuxtLink :to="article._path" class="text-2xl font-semibold text-blue-600 hover:underline">
          {{ article.title }}
        </NuxtLink>
        <p class="text-gray-600 mt-2">{{ article.description }}</p>
        <p class="text-sm text-gray-400">{{ article.date }}</p>
      </div>
    </ContentList>
  </main>
</template>
