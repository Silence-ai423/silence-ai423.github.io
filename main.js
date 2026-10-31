const profile=window.PROFILE;
let language='en';
try{language=localStorage.getItem('homepage-language')||'en'}catch{}
if(!['en','zh'].includes(language))language='en';
document.title=profile.name;
document.getElementById('name').textContent=profile.name+(profile.chineseName?' / '+profile.chineseName:'');

const links=document.getElementById('profile-links');links.replaceChildren();
for(const [label,url] of [['Email',profile.email?'mailto:'+profile.email:''],['GitHub',profile.github],['Scholar',profile.scholar],['CV',profile.cv]]){if(!url)continue;const a=document.createElement('a');a.textContent=label;a.href=url;if(!url.startsWith('mailto:')){a.target='_blank';a.rel='noopener noreferrer'}if(links.childNodes.length)links.append(document.createTextNode(' \u00a0/\u00a0 '));links.append(a)}
if(profile.portrait){const p=document.getElementById('portrait');p.replaceChildren();const i=document.createElement('img');i.src=profile.portrait;i.alt=profile.name;p.append(i)}
function setLanguage(lang){language=lang;document.documentElement.lang=lang==='zh'?'zh-CN':'en';document.querySelectorAll('[data-en]').forEach(el=>el.textContent=el.dataset[lang]);for(const key of ['role','bio','interests']){const el=document.getElementById(key);if(el)el.textContent=profile[key][lang]};document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));try{localStorage.setItem('homepage-language',lang)}catch{}}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));setLanguage(language);
const citations={
omninavbench:`@inproceedings{sun2026omninavbench,
  title = {Beyond Isolation: A Unified Benchmark for General-Purpose Navigation},
  author = {Sun, Samson and Yang, Tianyi and Wang, Tengyue and Xue, Yikai and Xu, Zhengjie and Zhang, Lingming and Zhang, Qichen and Liang, Chao and Zhang, Zhipeng},
  booktitle = {Robotics: Science and Systems},
  year = {2026},
  url = {https://www.roboticsproceedings.org/rss22/p132.html}
}`,

opendepth:`@article{zhang2026opendepth,
  title = {OpenDepth: Repurposing Image Editing Priors for Robust Open-World Monocular Depth Estimation},
  author = {Zhang, Mengke and Yang, Tianyi and Li, Xinzhuo and Ming, Anlong},
  journal = {arXiv preprint arXiv:2610.17610},
  year = {2026},
  url = {https://arxiv.org/abs/2610.17610}
}`,
drive3r:`@article{yang2026drive3r,
  title = {Drive3R: Block-wise Streaming Geometric Foundation Models for Autonomous Driving},
  author = {Yang, Tianyi and Yang, Haojun and Xiao, Jipeng and Chen, Xuesong and Shi, Shaoshuai and Jiang, Li and Zhang, Zhipeng},
  journal = {arXiv preprint arXiv:2610.15112},
  year = {2026},
  url = {https://arxiv.org/abs/2610.15112}
}`};
const dialog=document.getElementById('citation-dialog');
const citationText=document.getElementById('citation-text');
const status=document.getElementById('copy-status');
document.querySelectorAll('[data-bib]').forEach(b=>b.addEventListener('click',()=>{citationText.textContent=citations[b.dataset.bib];status.textContent='';dialog.showModal()}));
document.getElementById('close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
document.getElementById('copy-citation').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(citationText.textContent);status.textContent=language==='zh'?'已复制':'Copied'}catch{const s=window.getSelection();s.removeAllRanges();const r=document.createRange();r.selectNodeContents(citationText);s.addRange(r);status.textContent=language==='zh'?'请复制已选中的文本':'Please copy the selected text'}});
