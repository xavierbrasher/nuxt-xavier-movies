export {}

declare global {
  /*
	wow comments @casdas/dasdsd
	*/
  interface Ratings {
    likes: number
    dislikes: number
    stars: number
  }

  interface Movie {
    movieName: string
    movieImgUrl: string
    movieDescription: string
    movieStatistics: Ratings
  }
}
