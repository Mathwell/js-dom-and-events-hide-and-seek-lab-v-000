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
   for(let i=0; i<children.length; i++){
     children[i].innerHTML=parseInt(children[i].innerHTML)+n
   }
 })
}

function deepestChild(){
 let node=document.querySelectorAll('#grand-node')
 let theDeepest=node[0];
 while (theDeepest){
   node=theDeepest
   theDeepest=theDeepest.children[0]
 }
 return node
}
