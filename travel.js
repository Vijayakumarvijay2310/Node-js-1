const express=require('express')
const route =express.Router();

// route.get('/:vj',(req,res)=>{
//     const text =req.params.vj;
//     res.json({
//       startpoint :text,
//     })
// })

route.get('/:from-/:to',function(req,res){
  const location1 = req.params.from;
  const location2 = req.params.to;
  res.json({
    startpoint: location1,
    endpoint :location2,
  })
})









module.exports= route;