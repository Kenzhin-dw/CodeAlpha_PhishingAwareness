(function(){
  const KEY='phishaware-progress-v1';
  const defaults={completed:[],scores:{spot:null,urls:null,scenarios:null,quiz:null},quizAnswers:[],updated:null};
  function load(){try{return Object.assign({},defaults,JSON.parse(localStorage.getItem(KEY)||'{}'))}catch(e){return {...defaults}}}
  let state=load();
  window.ProgressStore={
    get:()=>state,
    complete(id){if(!state.completed.includes(id))state.completed.push(id);this.save()},
    setScore(name,correct,total){state.scores[name]={correct,total,percent:Math.round(correct/total*100)};this.save()},
    setQuiz(correct,total,answers){state.scores.quiz={correct,total,percent:Math.round(correct/total*100)};state.quizAnswers=answers;this.save()},
    save(){state.updated=new Date().toISOString();try{localStorage.setItem(KEY,JSON.stringify(state))}catch(e){}window.dispatchEvent(new CustomEvent('progresschange',{detail:state}))},
    reset(){state=JSON.parse(JSON.stringify(defaults));try{localStorage.removeItem(KEY)}catch(e){}window.dispatchEvent(new CustomEvent('progresschange',{detail:state}))}
  };
})();
