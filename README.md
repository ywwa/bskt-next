# bstk-next

Simple Web App written in React(Next.js) for fetching mock data from [dummyjson.com](https://dummyjson.com/) \
With responsive mobile friendly design, support of search, pagination and [parallel routing](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes).

### Preview

Live preview is available [here](https://bskt-next.vercel.app)

### Local environment

```bash
git clone https://github.com/ywwa/bskt-next.git
cd bskt-next

bun i # or any prefered package manager
bun run dev
```

#### TODO:

- [x] Create product list page
  - [x] Fetch data from api of choice
  - [x] Search functionality that updates without refreshing page
    - [x] Update as soon as user input stops
  - [x] Implement pagination
- [x] Create product detail page
  - [x] Implement product page
    - [x] Parallel route as modal
    - [x] Full page view
- [ ] Unit tests using @testing-library/react
