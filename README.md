# Next.js Headless WordPress Getting Started Example

lighthouse --throttling.cpuSlowdownMultiplier=4 https://faustjs-pagespeed-experiment.vercel.app/posts/post-41
lighthouse URL --chrome-flags="--headless" --output json --output-path URL.json
lighthouse https://faustjs-pagespeed-experiment.vercel.app/posts/post-41 --chrome-flags="--headless" --output json,html --output-path public/pagespeed/41 --throttling.cpuSlowdownMultiplier=10

lighthouse https://faustjs-pagespeed-experiment.vercel.app/tests/title --chrome-flags="--headless" --output json,html --output-path public/pagespeed/title --throttling.cpuSlowdownMultiplier=10

lighthouse https://faustjs-pagespeed-experiment.vercel.app/tests/titleonly --chrome-flags="--headless" --output json,html --output-path public/pagespeed/titleonly --throttling.cpuSlowdownMultiplier=10

## Setup

See the [setup steps](https://github.com/wpengine/faustjs#quick-start).

## Run it

```bash
npm install
npm run dev
```

[http://localhost:3000]()

/posts/
35 requests
729 kB transferred
1.2 MB resources
Finish: 1.06 s
DOMContentLoaded: 776 ms
Load: 932 ms

33 requests
681.64 KB / 253.55 KB transferred
Finish: 596 ms
DOMContentLoaded: 71 ms
load: 300 ms

/posts-woc
40 requests
740 kB transferred
1.2 MB resources
Finish: 682 ms
DOMContentLoaded: 477 ms
Load: 580 ms

37 requests
707.05 KB / 265.42 KB transferred
Finish: 726 ms
DOMContentLoaded: 80 ms
load: 334 ms

https://faustjs-pagespeed-experiment.vercel.app/posts/post-41// 30 requests
// 717 kB transferred
// 1.1 MB resources
// Finish: 595 ms
// DOMContentLoaded: 353 ms
// Load: 516 ms

29 requests
636.63 KB / 218.24 KB transferred
Finish: 794 ms
DOMContentLoaded: 134 ms
load: 600 ms

https://faustjs-pagespeed-experiment.vercel.app/posts-woc/post-41
// 31 requests
// 220 kB transferred
// 654 kB resources
// Finish: 621 ms
// DOMContentLoaded: 361 ms
// Load: 508 ms

31 requests
660.24 KB / 227.56 KB transferred
Finish: 682 ms
DOMContentLoaded: 190 ms
load: 429 ms
