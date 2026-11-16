/* TxtStevens SMS chat widget for stevensauto.com, v1.2.0. Self-contained: injects its own styles. */
(function(){
  if(document.getElementById('sa-txt'))return;
  var css=document.createElement('style');
  css.id='sa-txt-css';
  css.appendChild(document.createTextNode("#sa-txt,#sa-txt *{box-sizing:border-box;font-family:brandon-grotesque,\"Helvetica Neue\",Arial,sans-serif}#sa-txt{position:fixed;right:20px;bottom:20px;z-index:1000010;display:flex;flex-direction:column;align-items:flex-end;color:#1a1a1a}#sa-txt .sa-txt-pill{position:relative;display:inline-flex;align-items:center;gap:14px;height:58px;padding:0 28px 0 22px;border:2px solid #d50032;border-radius:999px;background:#d50032;color:#fff;font-size:20px;font-weight:700;line-height:1;white-space:nowrap;text-decoration:none;cursor:pointer;box-shadow:0 8px 22px rgba(0,0,0,.28);transition:background-color .2s ease,box-shadow .2s ease}#sa-txt .sa-txt-pill:hover,#sa-txt .sa-txt-pill:focus-visible,#sa-txt.sa-txt-open .sa-txt-pill{background:#1c2634;color:#fff;box-shadow:0 10px 26px rgba(0,0,0,.34)}#sa-txt .sa-txt-pill:focus-visible,#sa-txt .sa-txt-x:focus-visible,#sa-txt .sa-txt-go:focus-visible{outline:3px solid #1a1a1a;outline-offset:3px}#sa-txt .sa-txt-ico{display:block;width:30px;height:30px;flex:0 0 auto}#sa-txt .sa-txt-div{display:block;width:1px;height:30px;background:rgba(255,255,255,.6);transition:opacity .2s ease}#sa-txt .sa-txt-pill:hover .sa-txt-div,#sa-txt .sa-txt-pill:focus-visible .sa-txt-div,#sa-txt.sa-txt-open .sa-txt-div{opacity:0}#sa-txt .sa-txt-short{display:none}#sa-txt .sa-txt-burst{position:absolute;top:-20px;right:6px;width:30px;height:24px;opacity:0;pointer-events:none}#sa-txt .sa-txt-burst i{position:absolute;display:block;width:3px;height:10px;border-radius:2px;background:#d50032}#sa-txt .sa-txt-burst i:nth-child(1){left:2px;top:12px;transform:rotate(-40deg)}#sa-txt .sa-txt-burst i:nth-child(2){left:13px;top:4px;transform:rotate(0deg)}#sa-txt .sa-txt-burst i:nth-child(3){left:24px;top:12px;transform:rotate(40deg)}#sa-txt.sa-txt-nudge .sa-txt-pill{animation:sa-txt-wiggle .9s ease-in-out}#sa-txt.sa-txt-nudge .sa-txt-burst{animation:sa-txt-burst 1.6s ease-out}@keyframes sa-txt-wiggle{0%,100%{transform:rotate(0)}15%{transform:rotate(-3deg)}30%{transform:rotate(3deg)}45%{transform:rotate(-2deg)}60%{transform:rotate(2deg)}75%{transform:rotate(0)}}@keyframes sa-txt-burst{0%{opacity:0;transform:translateY(4px)}20%{opacity:1;transform:translateY(0)}70%{opacity:1}100%{opacity:0}}#sa-txt .sa-txt-panel{display:none;width:340px;max-width:calc(100vw - 24px);max-height:calc(100vh - 110px);overflow-x:hidden;overflow-y:auto;margin-bottom:14px;border-radius:26px;background:#fff;box-shadow:0 12px 36px rgba(0,0,0,.3)}#sa-txt.sa-txt-open .sa-txt-panel{display:block}#sa-txt .sa-txt-head{position:relative;display:flex;align-items:center;gap:14px;padding:18px 44px 18px 18px;background:#d50032;color:#fff}#sa-txt .sa-txt-av{flex:0 0 auto;display:flex;align-items:center;justify-content:center;width:64px;height:64px;border-radius:50%;background:#fff;color:#d50032;font-size:24px;font-weight:700;letter-spacing:-.5px}#sa-txt .sa-txt-name{font-size:23px;font-weight:700;line-height:1.15}#sa-txt .sa-txt-sub{font-size:17px;line-height:1.3;margin-top:4px}#sa-txt .sa-txt-x{position:absolute;top:10px;right:12px;width:28px;height:28px;border:0;background:transparent;color:#fff;font-size:22px;line-height:1;cursor:pointer;padding:0}#sa-txt .sa-txt-body{padding:20px 18px 18px;background:#fff}#sa-txt .sa-txt-msg{position:relative;background:#f1f1f1;border-radius:4px 16px 16px 16px;padding:16px 18px 12px}#sa-txt .sa-txt-who{font-size:18px;font-weight:700;margin:0 0 4px}#sa-txt .sa-txt-text{font-size:18px;line-height:1.4;margin:0}#sa-txt .sa-txt-time{display:block;text-align:right;font-size:15px;font-weight:700;margin-top:8px}#sa-txt .sa-txt-typing{display:none;align-items:center;gap:6px;width:64px;height:34px;padding:0 14px;border-radius:17px;background:#f1f1f1}#sa-txt .sa-txt-typing i{display:block;width:8px;height:8px;border-radius:50%;background:#1a1a1a;animation:sa-txt-blink 1s infinite ease-in-out}#sa-txt .sa-txt-typing i:nth-child(2){animation-delay:.18s}#sa-txt .sa-txt-typing i:nth-child(3){animation-delay:.36s}#sa-txt.sa-txt-wait .sa-txt-typing{display:flex}#sa-txt.sa-txt-wait .sa-txt-msg{display:none}@keyframes sa-txt-blink{0%,80%,100%{opacity:.25;transform:translateY(0)}40%{opacity:1;transform:translateY(-3px)}}#sa-txt .sa-txt-foot{padding:12px 18px 18px;background:#d50032;text-align:center}#sa-txt .sa-txt-go{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;padding:13px 16px;border-radius:999px;background:#fff;color:#d50032;font-size:21px;font-weight:700;text-decoration:none}#sa-txt .sa-txt-go:hover{background:#f6f6f6}#sa-txt .sa-txt-go svg{width:26px;height:26px;flex:0 0 auto}#sa-txt .sa-txt-alt{margin:10px 0 0;color:#fff;font-size:15px;line-height:1.3}#sa-txt .sa-txt-alt a{color:#fff;font-weight:700}@media(max-width:480px){#sa-txt{right:12px;bottom:12px}#sa-txt .sa-txt-pill{height:52px;gap:12px;padding:0 22px 0 18px;font-size:18px}#sa-txt .sa-txt-ico{width:26px;height:26px}#sa-txt .sa-txt-div{height:26px}#sa-txt .sa-txt-av{width:54px;height:54px;font-size:20px}#sa-txt .sa-txt-name{font-size:21px}}@media(max-width:400px){#sa-txt .sa-txt-full{display:none}#sa-txt .sa-txt-short{display:inline}}@media(prefers-reduced-motion:reduce){#sa-txt .sa-txt-typing i,#sa-txt.sa-txt-nudge .sa-txt-pill,#sa-txt.sa-txt-nudge .sa-txt-burst{animation:none}#sa-txt .sa-txt-pill,#sa-txt .sa-txt-div{transition:none}}@media print{#sa-txt{display:none}}"));
  document.head.appendChild(css);
  var SMS='sms:12039545655', SHOWN='+1 (203) 954-5655';
  var smsIcon='<svg viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path fill="currentColor" d="M24 6C12.95 6 4 13.6 4 23c0 4.5 2.06 8.6 5.43 11.63L7.6 42.2a1 1 0 0 0 1.45 1.1l8.2-4.35c2.1.68 4.37 1.05 6.75 1.05 11.05 0 20-7.6 20-17S35.05 6 24 6z"/><text x="24" y="28.5" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="12.5" font-weight="700" fill="#fff">SMS</text></svg>';
  var chatIcon='<svg class="sa-txt-ico" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round" d="M16 4.5C8.8 4.5 3 9.3 3 15.3c0 3 1.5 5.7 3.9 7.6l-1.3 5.2 5.4-2.9c1.5.5 3.2.7 5 .7 7.2 0 13-4.8 13-10.6S23.2 4.5 16 4.5z"/></svg>';
  var root=document.createElement('div');
  root.id='sa-txt';
  root.innerHTML=
    '<div class="sa-txt-panel" id="sa-txt-panel" role="dialog" aria-label="TxtStevens customer care chat">'+
      '<div class="sa-txt-head">'+
        '<div class="sa-txt-av" aria-hidden="true">TxT</div>'+
        '<div><div class="sa-txt-name">TxtStevens</div><div class="sa-txt-sub">Customer Care Chat</div></div>'+
        '<button type="button" class="sa-txt-x" aria-label="Close chat">&times;</button>'+
      '</div>'+
      '<div class="sa-txt-body"><div class="sa-txt-typing" aria-hidden="true"><i></i><i></i><i></i></div><div class="sa-txt-msg" aria-live="polite">'+
        '<p class="sa-txt-who">Stevens</p>'+
        '<p class="sa-txt-text">Hi there! Let&rsquo;s talk cars, trucks and vans. How can I help you today?</p>'+
        '<span class="sa-txt-time"></span>'+
      '</div></div>'+
      '<div class="sa-txt-foot">'+
        '<a class="sa-txt-go" href="'+SMS+'">'+smsIcon+'<span>TXT Stevens Now</span></a>'+
        '<p class="sa-txt-alt">On a computer? Text us at <a class="sa-txt-num" href="'+SMS+'">'+SHOWN+'</a></p>'+
      '</div>'+
    '</div>'+
    '<a class="sa-txt-pill" href="'+SMS+'" aria-controls="sa-txt-panel">'+
      '<span class="sa-txt-burst" aria-hidden="true"><i></i><i></i><i></i></span>'+
      chatIcon+'<span class="sa-txt-div" aria-hidden="true"></span>'+
      '<span class="sa-txt-full">Text Us &ndash; Get Answers Fast</span><span class="sa-txt-short">Text Us</span>'+
    '</a>';
  document.body.appendChild(root);
  var pill=root.querySelector('.sa-txt-pill'), time=root.querySelector('.sa-txt-time');
  var isOpen=false, timer=null;
  function track(action){
    try{(window.dataLayer=window.dataLayer||[]).push({event:'txtstevens_click',txtstevens_action:action});}catch(e){}
  }
  function isPhone(){
    try{return window.matchMedia('(pointer: coarse)').matches&&window.matchMedia('(max-width: 1024px)').matches;}catch(e){return false;}
  }
  function stamp(){
    var d=new Date(), h=d.getHours(), m=d.getMinutes();
    time.innerHTML=((h%12)||12)+':'+(m<10?'0':'')+m+' '+(h<12?'AM':'PM');
  }
  function setClass(){
    root.className=(isOpen?'sa-txt-open':'')+(isOpen&&timer?' sa-txt-wait':'');
    pill.setAttribute('aria-expanded',isOpen?'true':'false');
  }
  function setOpen(open){
    isOpen=open;
    if(timer){clearTimeout(timer);timer=null;}
    if(open){
      timer=setTimeout(function(){timer=null;stamp();setClass();},1400);
    }
    setClass();
  }
  pill.onclick=function(e){
    if(isPhone()){track('pill_sms');return;}
    if(e&&e.preventDefault)e.preventDefault();
    if(!isOpen)track('pill_open');
    setOpen(!isOpen);
  };
  root.querySelector('.sa-txt-go').onclick=function(){track('panel_sms');};
  root.querySelector('.sa-txt-num').onclick=function(){track('panel_number');};
  root.querySelector('.sa-txt-x').onclick=function(){setOpen(false);pill.focus();};
  document.addEventListener('keydown',function(e){if((e.key==='Escape'||e.keyCode===27)&&isOpen){setOpen(false);pill.focus();}});
  /* Ride Motive's red phone bar on vehicle pages: turn it into a text button. */
  var CTA_SEL='a[class*="PhoneCTA-module"][class*="phoneCard"]', CTA_SUB='Text with a team member';
  var ctaIcon='<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" style="display:block;width:26px;height:26px;margin:8px"><path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round" d="M16 4.5C8.8 4.5 3 9.3 3 15.3c0 3 1.5 5.7 3.9 7.6l-1.3 5.2 5.4-2.9c1.5.5 3.2.7 5 .7 7.2 0 13-4.8 13-10.6S23.2 4.5 16 4.5z"/></svg>';
  function patchCta(){
    var cards=document.querySelectorAll(CTA_SEL);
    for(var i=0;i<cards.length;i++){
      var a=cards[i];
      if(a.getAttribute('href')!==SMS)a.setAttribute('href',SMS);
      if(a.getAttribute('aria-label')!=='Text Stevens at '+SHOWN)a.setAttribute('aria-label','Text Stevens at '+SHOWN);
      var num=a.querySelector('[class*="phoneNumber"]');
      if(num&&num.textContent!==SHOWN)num.textContent=SHOWN;
      var sub=a.querySelector('[class*="subtitle"]');
      if(sub&&sub.textContent!==CTA_SUB)sub.textContent=CTA_SUB;
      var old=a.querySelector('i[data-icon]');
      if(old&&old.style.display!=='none')old.style.display='none';
      if(old&&!a.querySelector('.sa-txt-cta-ico')){
        var ico=document.createElement('span');
        ico.className=old.className.replace(/\bccc-ico\b/,'')+' sa-txt-cta-ico';
        ico.setAttribute('aria-hidden','true');
        ico.innerHTML=ctaIcon;
        old.parentNode.insertBefore(ico,old.nextSibling);
      }
      if(!a.getAttribute('data-sa-txt')){
        a.setAttribute('data-sa-txt','1');
        a.addEventListener('click',function(){track('vdp_cta_sms');});
      }
    }
  }
  var ctaQueued=false;
  function queueCta(){if(ctaQueued)return;ctaQueued=true;setTimeout(function(){ctaQueued=false;patchCta();},60);}
  patchCta();
  try{new MutationObserver(queueCta).observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['href']});}catch(e){}
  setTimeout(function(){
    if(isOpen)return;
    root.className+=' sa-txt-nudge';
    setTimeout(function(){root.className=root.className.replace(' sa-txt-nudge','');},1700);
  },4000);
})();
