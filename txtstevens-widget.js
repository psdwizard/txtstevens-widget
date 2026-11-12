/* TxtStevens SMS chat widget for stevensauto.com. Self-contained: injects its own styles. */
(function(){
  if(document.getElementById('sa-txt'))return;
  var css=document.createElement('style');
  css.id='sa-txt-css';
  css.appendChild(document.createTextNode("#sa-txt,#sa-txt *{box-sizing:border-box;font-family:brandon-grotesque,\"Helvetica Neue\",Arial,sans-serif}#sa-txt{position:fixed;right:20px;bottom:20px;z-index:1000010;color:#1a1a1a}#sa-txt .sa-txt-fab{position:relative;display:flex;align-items:center;justify-content:center;width:68px;height:68px;margin-left:auto;border:0;border-radius:50%;background:#d50032;color:#fff;cursor:pointer;box-shadow:0 6px 18px rgba(0,0,0,.28);padding:0}#sa-txt .sa-txt-fab:hover{background:#b8002b}#sa-txt .sa-txt-fab:focus-visible,#sa-txt .sa-txt-x:focus-visible,#sa-txt .sa-txt-go:focus-visible{outline:3px solid #1a1a1a;outline-offset:3px}#sa-txt .sa-txt-fab svg{width:44px;height:44px;display:block}#sa-txt .sa-txt-dot{position:absolute;top:2px;right:4px;width:16px;height:16px;border-radius:50%;background:#1a1a1a;border:2px solid #fff}#sa-txt .sa-txt-panel{display:none;width:340px;max-width:calc(100vw - 24px);max-height:calc(100vh - 110px);overflow-x:hidden;overflow-y:auto;margin-bottom:14px;border-radius:26px;background:#fff;box-shadow:0 12px 36px rgba(0,0,0,.3)}#sa-txt.sa-txt-open .sa-txt-panel{display:block}#sa-txt .sa-txt-head{position:relative;display:flex;align-items:center;gap:14px;padding:18px 44px 18px 18px;background:#d50032;color:#fff}#sa-txt .sa-txt-av{flex:0 0 auto;display:flex;align-items:center;justify-content:center;width:64px;height:64px;border-radius:50%;background:#fff;color:#d50032;font-size:24px;font-weight:700;letter-spacing:-.5px}#sa-txt .sa-txt-name{font-size:23px;font-weight:700;line-height:1.15}#sa-txt .sa-txt-sub{font-size:17px;line-height:1.3;margin-top:4px}#sa-txt .sa-txt-x{position:absolute;top:10px;right:12px;width:28px;height:28px;border:0;background:transparent;color:#fff;font-size:22px;line-height:1;cursor:pointer;padding:0}#sa-txt .sa-txt-body{padding:20px 18px 18px;background:#fff}#sa-txt .sa-txt-msg{position:relative;background:#f1f1f1;border-radius:4px 16px 16px 16px;padding:16px 18px 12px}#sa-txt .sa-txt-who{font-size:18px;font-weight:700;margin:0 0 4px}#sa-txt .sa-txt-text{font-size:18px;line-height:1.4;margin:0}#sa-txt .sa-txt-time{display:block;text-align:right;font-size:15px;font-weight:700;margin-top:8px}#sa-txt .sa-txt-typing{display:none;align-items:center;gap:6px;width:64px;height:34px;padding:0 14px;border-radius:17px;background:#f1f1f1}#sa-txt .sa-txt-typing i{display:block;width:8px;height:8px;border-radius:50%;background:#1a1a1a;animation:sa-txt-blink 1s infinite ease-in-out}#sa-txt .sa-txt-typing i:nth-child(2){animation-delay:.18s}#sa-txt .sa-txt-typing i:nth-child(3){animation-delay:.36s}#sa-txt.sa-txt-wait .sa-txt-typing{display:flex}#sa-txt.sa-txt-wait .sa-txt-msg{display:none}@keyframes sa-txt-blink{0%,80%,100%{opacity:.25;transform:translateY(0)}40%{opacity:1;transform:translateY(-3px)}}@media(prefers-reduced-motion:reduce){#sa-txt .sa-txt-typing i{animation:none}}#sa-txt .sa-txt-foot{padding:12px 18px 18px;background:#d50032;text-align:center}#sa-txt .sa-txt-go{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;padding:13px 16px;border-radius:999px;background:#fff;color:#d50032;font-size:21px;font-weight:700;text-decoration:none}#sa-txt .sa-txt-go:hover{background:#f6f6f6}#sa-txt .sa-txt-go svg{width:26px;height:26px;flex:0 0 auto}#sa-txt .sa-txt-alt{margin:10px 0 0;color:#fff;font-size:15px;line-height:1.3}#sa-txt .sa-txt-alt a{color:#fff;font-weight:700}@media(max-width:480px){#sa-txt{right:12px;bottom:12px}#sa-txt .sa-txt-fab{width:60px;height:60px}#sa-txt .sa-txt-fab svg{width:38px;height:38px}#sa-txt .sa-txt-av{width:54px;height:54px;font-size:20px}#sa-txt .sa-txt-name{font-size:21px}}@media print{#sa-txt{display:none}}"));
  document.head.appendChild(css);
  var SMS='sms:12039545655', SHOWN='+1 (203) 954-5655';
  var icon='<svg viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path fill="currentColor" d="M24 6C12.95 6 4 13.6 4 23c0 4.5 2.06 8.6 5.43 11.63L7.6 42.2a1 1 0 0 0 1.45 1.1l8.2-4.35c2.1.68 4.37 1.05 6.75 1.05 11.05 0 20-7.6 20-17S35.05 6 24 6z"/><text x="24" y="28.5" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="12.5" font-weight="700" fill="FILL">SMS</text></svg>';
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
        '<a class="sa-txt-go" href="'+SMS+'">'+icon.replace('FILL','#fff')+'<span>TXT Stevens Now</span></a>'+
        '<p class="sa-txt-alt">On a computer? Text us at <a href="'+SMS+'">'+SHOWN+'</a></p>'+
      '</div>'+
    '</div>'+
    '<button type="button" class="sa-txt-fab" aria-label="Text Stevens" aria-expanded="false" aria-controls="sa-txt-panel">'+
      icon.replace('FILL','#d50032')+'<span class="sa-txt-dot" aria-hidden="true"></span>'+
    '</button>';
  document.body.appendChild(root);
  var fab=root.querySelector('.sa-txt-fab'), dot=root.querySelector('.sa-txt-dot'), time=root.querySelector('.sa-txt-time');
  var isOpen=false, timer=null;
  function stamp(){
    var d=new Date(), h=d.getHours(), m=d.getMinutes();
    time.innerHTML=((h%12)||12)+':'+(m<10?'0':'')+m+' '+(h<12?'AM':'PM');
  }
  function setOpen(open){
    isOpen=open;
    if(timer){clearTimeout(timer);timer=null;}
    if(open){
      if(dot)dot.style.display='none';
      root.className='sa-txt-open sa-txt-wait';
      timer=setTimeout(function(){timer=null;stamp();if(isOpen)root.className='sa-txt-open';},1400);
    }else{
      root.className='';
    }
    fab.setAttribute('aria-expanded',open?'true':'false');
  }
  fab.onclick=function(){setOpen(!isOpen);};
  root.querySelector('.sa-txt-x').onclick=function(){setOpen(false);fab.focus();};
  document.addEventListener('keydown',function(e){if((e.key==='Escape'||e.keyCode===27)&&isOpen){setOpen(false);fab.focus();}});
})();
