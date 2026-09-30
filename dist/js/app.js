(function(){
  'use strict';
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const modules=TrainingData.modules;
  const routeOrder=['home',...modules.map(m=>m.id),'dashboard'];
  let spotIndex=0,spotScore=0,urlIndex=0,urlScore=0,scenarioIndex=0,scenarioScore=0,quizIndex=0,quizAnswers=[];

  function showToast(message){const t=$('#toast');t.textContent=message;t.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>t.classList.remove('show'),2500)}
  function go(id){if(!routeOrder.includes(id))id='home';$$('.view').forEach(v=>v.classList.toggle('active',v.id===id));$$('#module-nav button').forEach(b=>b.classList.toggle('active',b.dataset.route===id));history.replaceState(null,'','#'+id);window.scrollTo(0,0);$('#sidebar').classList.remove('open');$('#menu-toggle').setAttribute('aria-expanded','false');const view=$('#'+id);document.title=`${view.dataset.title} — PhishAware`;$('#main-content').focus({preventScroll:true});if(id==='dashboard')renderDashboard()}
  function next(id){const i=routeOrder.indexOf(id);go(routeOrder[Math.min(i+1,routeOrder.length-1)])}

  function renderNav(){
    const nav=$('#module-nav');nav.innerHTML='<button data-route="home"><span class="nav-number">⌂</span><span>Welcome</span></button>'+modules.map((m,i)=>`<button data-route="${m.id}"><span class="nav-number">${String(i+1).padStart(2,'0')}</span><span>${m.title}</span></button>`).join('')+'<button data-route="dashboard"><span class="nav-number">▦</span><span>Progress dashboard</span></button>';
    nav.addEventListener('click',e=>{const b=e.target.closest('[data-route]');if(b)go(b.dataset.route)});
  }
  function renderCards(){
    $('#type-grid').innerHTML=TrainingData.types.map((x,i)=>`<button class="type-card" aria-expanded="false"><span>${String(i+1).padStart(2,'0')}</span><h3>${x.name}</h3><p>${x.definition}</p><div class="detail"><b>Typical scenario</b><p>${x.scenario}</p><b>Warning signs</b><p>${x.signs}</p><b>Recommended response</b><p>${x.response}</p></div></button>`).join('');
    $('#principle-grid').innerHTML=TrainingData.principles.map(x=>`<button class="principle-card" aria-expanded="false"><span>Pressure tactic</span><h3>${x.name}</h3><p>${x.example}</p><div class="detail"><b>Why it works</b><p>${x.why}</p><b>How to respond</b><p>${x.response}</p></div></button>`).join('');
    $$('.type-card,.principle-card').forEach(c=>c.addEventListener('click',()=>{c.classList.toggle('open');c.setAttribute('aria-expanded',String(c.classList.contains('open')))}));
    $('#pattern-list').innerHTML=TrainingData.patterns.map(x=>`<article class="pattern-item"><div><small>Real-world pattern</small><strong>${x.name}</strong></div><p>${x.pattern}</p><p><small>Fictional training example</small><br>${x.example}</p></article>`).join('');
  }
  function updateProgress(){
    const s=ProgressStore.get(),count=s.completed.length,pct=Math.round(count/modules.length*100);
    $('#header-progress-text').textContent=pct+'%';$('#header-progress-bar').style.width=pct+'%';$('#completed-count').textContent=count;$('#module-count').textContent=modules.length;
    $$('#module-nav button').forEach(b=>b.classList.toggle('done',s.completed.includes(b.dataset.route)));
    $$('.complete-btn').forEach(b=>{const done=s.completed.includes(b.dataset.complete);b.classList.toggle('done',done);if(done)b.textContent='✓ Completed — continue'});
  }
  function complete(id){ProgressStore.complete(id);showToast('Module completed');updateProgress();setTimeout(()=>next(id),350)}

  function revealFlags(){
    const labels={sender:'Sender uses a separate support domain',urgency:'Short deadline creates pressure',greeting:'Generic greeting does not establish identity',link:'Unexpected account-verification action',domain:'Actual registrable domain is security-check.example',request:'A legitimate service should not ask for a password or recovery code by email'};
    $$('[data-flag]').forEach(n=>n.classList.add('flagged'));$('#flag-list').innerHTML=Object.values(labels).map(x=>`<li>${x}</li>`).join('');$('#reveal-flags').textContent='Red flags revealed';$('#reveal-flags').disabled=true;
  }
  function finishChallenge(name,score,total,moduleId){ProgressStore.setScore(name,score,total);ProgressStore.complete(moduleId);updateProgress();showToast(`Challenge complete: ${score}/${total}`)}
  function renderSpot(){
    const items=ChallengeData.spot,item=items[spotIndex];$('#spot-number').textContent=Math.min(spotIndex+1,items.length);$('#spot-total').textContent=items.length;$('#spot-score').textContent=spotScore;
    if(!item){$('#spot-card').innerHTML=`<div class="feedback correct"><h4>Lab complete</h4><p>You scored ${spotScore} / ${items.length}. Strong decisions consider multiple signals rather than one visual clue.</p></div><div class="challenge-actions" style="margin-top:1rem"><button class="button primary" data-route="website">Continue to fake websites</button><button class="button secondary" id="retry-spot">Try again</button></div>`;finishChallenge('spot',spotScore,items.length,'spot');$('#retry-spot').onclick=()=>{spotIndex=0;spotScore=0;renderSpot()};return}
    $('#spot-card').innerHTML=`<div class="message-meta"><span><strong>From:</strong> ${item.from}</span><span><strong>Subject:</strong> ${item.subject}</span></div><div class="message-body"><h3>${item.subject}</h3><p>${item.body}</p>${item.link?`<code>${item.link}</code>`:''}</div><div class="challenge-actions"><button class="answer-btn" data-answer="phishing">⚠ Phishing</button><button class="answer-btn" data-answer="legitimate">✓ Legitimate</button></div><div class="feedback-slot" aria-live="polite"></div>`;
    $$('#spot-card .answer-btn').forEach(b=>b.onclick=()=>answerBasic(b.dataset.answer,item.answer,item.why,'spot'));
  }
  function renderUrl(){
    const items=ChallengeData.urls,item=items[urlIndex];$('#url-number').textContent=Math.min(urlIndex+1,items.length);$('#url-total').textContent=items.length;$('#url-score').textContent=urlScore;
    if(!item){$('#url-card').innerHTML=`<div class="feedback correct"><h4>URL lab complete</h4><p>You scored ${urlScore} / ${items.length}. Keep reading hosts carefully and verify context.</p></div><div class="challenge-actions" style="margin-top:1rem"><button class="button primary" data-route="social">Continue</button><button class="button secondary" id="retry-url">Try again</button></div>`;finishChallenge('urls',urlScore,items.length,'urls');$('#retry-url').onclick=()=>{urlIndex=0;urlScore=0;renderUrl()};return}
    $('#url-card').innerHTML=`<span class="eyebrow">Inspect this address</span><div class="url-display">${item.url}</div><div class="challenge-actions"><button class="answer-btn" data-answer="safe">✓ Expected</button><button class="answer-btn" data-answer="suspicious">⚠ Suspicious</button></div><div class="feedback-slot" aria-live="polite"></div>`;
    $$('#url-card .answer-btn').forEach(b=>b.onclick=()=>answerBasic(b.dataset.answer,item.answer,item.why,'url'));
  }
  function renderScenario(){
    const items=ChallengeData.scenarios,item=items[scenarioIndex];$('#scenario-number').textContent=Math.min(scenarioIndex+1,items.length);$('#scenario-total').textContent=items.length;$('#scenario-score').textContent=scenarioScore;
    if(!item){$('#scenario-card').innerHTML=`<div class="feedback correct"><h4>Scenario lab complete</h4><p>You scored ${scenarioScore} / ${items.length}. Independent verification is the strongest recurring move.</p></div><div class="challenge-actions" style="margin-top:1rem"><button class="button primary" data-route="practices">Continue</button><button class="button secondary" id="retry-scenario">Try again</button></div>`;finishChallenge('scenarios',scenarioScore,items.length,'scenarios');$('#retry-scenario').onclick=()=>{scenarioIndex=0;scenarioScore=0;renderScenario()};return}
    $('#scenario-card').innerHTML=`<span class="eyebrow">${item.title}</span><div class="message-body"><h3>${item.prompt}</h3></div><div class="answers">${item.options.map((o,i)=>`<button class="answer-btn" data-answer="${i}">${String.fromCharCode(65+i)}. ${o}</button>`).join('')}</div><div class="feedback-slot" aria-live="polite"></div>`;
    $$('#scenario-card .answer-btn').forEach(b=>b.onclick=()=>answerBasic(Number(b.dataset.answer),item.correct,item.why,'scenario'));
  }
  function answerBasic(value,correct,why,type){
    const root=type==='spot'?$('#spot-card'):type==='url'?$('#url-card'):$('#scenario-card');const ok=value===correct;$$('.answer-btn',root).forEach(b=>b.disabled=true);if(ok){if(type==='spot')spotScore++;if(type==='url')urlScore++;if(type==='scenario')scenarioScore++}
    $('.feedback-slot',root).innerHTML=`<div class="feedback ${ok?'correct':'incorrect'}"><h4>${ok?'✓ Correct':'✗ Not quite'}</h4><p>${why}</p><button class="button ${ok?'primary':'secondary'}" style="margin-top:.8rem" id="next-challenge">Next</button></div>`;
    $('#next-challenge').onclick=()=>{if(type==='spot'){spotIndex++;renderSpot()}else if(type==='url'){urlIndex++;renderUrl()}else{scenarioIndex++;renderScenario()}};
  }

  function startQuiz(){quizIndex=0;quizAnswers=[];$('#quiz-start').hidden=true;$('#quiz-results').hidden=true;$('#quiz-container').hidden=false;renderQuizQuestion()}
  function renderQuizQuestion(){
    const q=QuizData[quizIndex];if(!q){finishQuiz();return}
    $('#quiz-container').innerHTML=`<article class="quiz-question"><span class="question-number">Question ${quizIndex+1} of ${QuizData.length}</span><h3>${q.q}</h3><div class="answers">${q.options.map((o,i)=>`<button class="answer-btn" data-answer="${i}">${String.fromCharCode(65+i)}. ${o}</button>`).join('')}</div></article><div class="quiz-nav"><span>${Math.round(quizIndex/QuizData.length*100)}% complete</span></div>`;
    $$('#quiz-container .answer-btn').forEach(b=>b.onclick=()=>{quizAnswers.push(Number(b.dataset.answer));quizIndex++;renderQuizQuestion()});
  }
  function finishQuiz(){
    const correct=QuizData.reduce((n,q,i)=>n+(quizAnswers[i]===q.correct?1:0),0),pct=Math.round(correct/QuizData.length*100);const label=pct<50?'Needs Review':pct<70?'Developing':pct<85?'Good Understanding':'Strong Understanding';ProgressStore.setQuiz(correct,QuizData.length,quizAnswers);ProgressStore.complete('quiz');updateProgress();
    const wrong=QuizData.map((q,i)=>({q,i})).filter(x=>quizAnswers[x.i]!==x.q.correct);
    $('#quiz-container').hidden=true;const r=$('#quiz-results');r.hidden=false;r.innerHTML=`<div class="quiz-result-card"><span class="eyebrow">Final score</span><div class="score">${correct} / ${QuizData.length}</div><h3>${pct}% · ${label}</h3><p>This result is an educational checkpoint, not a certification.</p><button class="button primary" id="retake-quiz">Retake quiz</button><button class="button secondary" data-route="dashboard">View dashboard</button></div><div class="review-list"><h3>Answer review</h3>${QuizData.map((q,i)=>`<article class="review-item"><strong>${quizAnswers[i]===q.correct?'✓ Correct':'✗ Incorrect'} — ${q.q}</strong><span>Your answer: ${q.options[quizAnswers[i]]||'No answer'} · Correct: ${q.options[q.correct]}<br>${q.explain}</span></article>`).join('')}<div class="callout"><span>Recommended review</span><p>${wrong.length?recommendedModules(wrong.map(x=>x.i)):'No specific module required. Revisit the labs periodically to reinforce the habits.'}</p></div></div>`;$('#retake-quiz').onclick=startQuiz;
  }
  function recommendedModules(ids){const map={0:'Phishing fundamentals',1:'Fake websites',2:'URL detective',3:'Social engineering',4:'Email red flags',5:'Best practices',6:'Best practices',7:'Decision scenarios',8:'If you already clicked',9:'URL detective',10:'URL detective',11:'Best practices'};return [...new Set(ids.map(i=>map[i]))].join(', ')}
  function renderDashboard(){
    const s=ProgressStore.get(),count=s.completed.length,pct=Math.round(count/modules.length*100),challengeScores=['spot','urls','scenarios'].map(k=>s.scores[k]).filter(Boolean);const got=challengeScores.reduce((a,x)=>a+x.correct,0),total=challengeScores.reduce((a,x)=>a+x.total,0);
    $('#dash-modules').textContent=`${count} / ${modules.length}`;$('#dash-progress').textContent=pct+'%';$('#dash-challenges').textContent=total?`${got} / ${total} correct`:'Not started';$('#dash-quiz').textContent=s.scores.quiz?`${s.scores.quiz.percent}% (${s.scores.quiz.correct}/${s.scores.quiz.total})`:'Not completed';
    const badges=[{name:'Phishing Basics Complete',desc:'Finish fundamentals',earned:s.completed.includes('fundamentals'),icon:'✓'},{name:'URL Detective',desc:'Complete URL lab',earned:!!s.scores.urls,icon:'↗'},{name:'Social Engineering Aware',desc:'Finish scenario lab',earned:!!s.scores.scenarios,icon:'◎'},{name:'Training Complete',desc:'Finish all modules',earned:count===modules.length,icon:'★'}];
    $('#badge-grid').innerHTML=badges.map(b=>`<div class="badge ${b.earned?'earned':''}"><div class="badge-icon">${b.icon}</div><span><strong>${b.name}</strong><small>${b.earned?'Earned':b.desc}</small></span></div>`).join('');
    $('#dashboard-modules').innerHTML=modules.map((m,i)=>`<div class="module-status ${s.completed.includes(m.id)?'done':''}"><span>${String(i+1).padStart(2,'0')} · ${m.title}</span><span>${s.completed.includes(m.id)?'✓ Complete':'Not complete'}</span></div>`).join('');
  }
  function bind(){
    document.addEventListener('click',e=>{const r=e.target.closest('[data-route]');if(r&&!r.closest('#module-nav'))go(r.dataset.route);const c=e.target.closest('[data-complete]');if(c)complete(c.dataset.complete)});
    $('#menu-toggle').onclick=()=>{const s=$('#sidebar'),open=s.classList.toggle('open');$('#menu-toggle').setAttribute('aria-expanded',String(open))};
    $('#reset-progress').onclick=()=>{if(confirm('Reset all saved module, challenge, and quiz progress on this device?')){ProgressStore.reset();updateProgress();renderDashboard();showToast('Progress reset')}};
    $('#reveal-flags').onclick=revealFlags;$('#start-quiz').onclick=startQuiz;window.addEventListener('progresschange',updateProgress);window.addEventListener('hashchange',()=>go(location.hash.slice(1)));
  }
  renderNav();renderCards();bind();updateProgress();renderSpot();renderUrl();renderScenario();renderDashboard();go(location.hash.slice(1)||'home');
})();
