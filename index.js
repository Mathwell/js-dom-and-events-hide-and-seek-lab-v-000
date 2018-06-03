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
   return children.forEach(child =>{
     retrun child.innerHTML=parseInt(child.innerHTML)+n
   })
 })
}

function deepestChild(){

}
