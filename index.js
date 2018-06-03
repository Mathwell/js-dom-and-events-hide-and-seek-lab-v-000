function getFirstSelector(selector){
 return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')

}

function increaseRankBy(n){
 let ranks=document.querySelectorAll('.ranked-list')
 ranks.forEach(rank=>{
   let children=rank.children
   for(i=0; i<children.length; i++){
     children[i].innerHTML=parseInt(children[i].innerHTML)+n
   }
 })
}

function deepestChild(){

}
