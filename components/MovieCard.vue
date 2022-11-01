<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img
        src="https://placeimg.com/400/225/arch"
        alt="Shoes"
        class="rounded-xl"
      />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">{{ movieName }}</h2>
      <p>{{ movieBriefDescription }}</p>
      <div class="card-actions">
        <button class="btn btn-primary">More Details</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    movieId: {
      type: Number,
      required: true,
    },
    movieName: {
      type: String,
      required: true,
    },
    movieImgUrl: {
      type: String,
      required: true,
    },
    movieBriefDescription: {
      type: String,
      required: true,
    },
    movieDescription: {
      type: String,
      required: true,
    },
    movieStatistics: {
      type: Object,
      required: true,
    },
  },
}
</script>
