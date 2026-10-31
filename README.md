# Tianyi Yang · Academic Homepage

A bilingual academic homepage for GitHub Pages, based directly on the open-source template by Jon Barron: https://github.com/jonbarron/jonbarron_website. The original 800px table layout, Lato typography, publication rows, and highlight color are retained. No analytics scripts from the original website are included.

## Edit your page

- `profile.js`: name, biography, research interests, email, GitHub, Scholar, CV, and photo.
- `index.html`: papers, authors, venues, and publication links.
- `style.css`: responsive layout and visual style.
- `main.js`: language switching and BibTeX display.

To add a portrait, upload a photo and set `portrait` in `profile.js` to its filename.

## Publish

Repository: `Silence-ai423/silence-ai423.github.io`

In **Settings → Pages**, choose **Deploy from a branch → main → / (root)** and save.

Website: https://silence-ai423.github.io/

## Sources and credits

- OmniNavBench: https://github.com/AutoLab-SAI-SJTU/OmniNavBench
- Drive3R: https://arxiv.org/abs/2610.15112
- OpenDepth: https://arxiv.org/abs/2610.17610

Paper thumbnails are sourced from their respective papers. The OmniNavBench thumbnail uses the teaser (Figure 1) extracted from https://arxiv.org/pdf/2605.09441. Layout references: https://jonbarron.info/ and https://ericaire.github.io/.


## Institution marks

- Peking University: official seal from https://www.pku.edu.cn/pku_logo_red.png
- BUPT: official identity header from https://vi.bupt.edu.cn/images/logo1.png; the seal is displayed using CSS framing, preserving the original asset.
- AutoLab: official organization avatar from https://github.com/AutoLab-SAI-SJTU (https://avatars.githubusercontent.com/u/219082940?v=4), edited to remove the black background and saved as `autolab-logo-transparent.png`.
- VCL Lab: the logo from the user-selected reference https://chang-xinhai.github.io/images/experience/webp/VCL.webp.

- DepthCore: owl logo supplied by Tianyi Yang, used unchanged as `depthcore-logo.png`.
- DiDi Voyager: orange symbol extracted from the official DiDi vector identity, https://website.didiglobal.com/dist/media/logo-en.cdc5b041.svg; original symbol geometry and colors retained in `didi-logo.svg`.

## Publication resources

- OmniNavBench project and leaderboard: https://huggingface.co/spaces/Sun-Season/omni-nav-bench (live app: https://sun-season-omni-nav-bench.static.hf.space/index.html); dataset: https://huggingface.co/datasets/AutoLab-SJTU/OmniNavBench.
- Drive3R code: https://github.com/AutoLab-SAI-SJTU/Drive3R; model weights: https://huggingface.co/Young857/Drive3R.
- OpenDepth code: https://github.com/zmkshakespar/OpenDepth. Its project-page link is intentionally omitted at the author's request.

## Profile illustration

`portrait-sketch.png` was created with the built-in image generation tool from a photograph supplied by Tianyi Yang. Final prompt: simplify the portrait into minimal black line art on white, keeping the glasses, tousled hair, red T-shirt, three-quarter pose, slight smile and thumbs-up; use black hair and flat red clothing, sparse facial and hand contours, no dormitory background, text or watermark, with a square composition suitable for circular cropping. The original photograph is not included in this repository.

The current avatar is `portrait-color-v2.png`, revised with the built-in image generation tool at Tianyi Yang's request: preserve the original face proportions and natural expression with less beautification, use the earlier colored drawing style, and keep the foreground thumbs-up deliberately blurred like the reference photograph. `portrait-sketch.png` is the previous unused variant.
