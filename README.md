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
