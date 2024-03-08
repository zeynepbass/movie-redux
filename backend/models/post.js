import mongoose from 'mongoose'
const post=new mongoose.Schema({

  renk:{type:String},
    baslik:{type:String},
    ufakbaslik:{type:String},
  acikla:{type:String},
  aciklaiki:{type:String},
  carousel:{type:String},
   selectedFile:{type:String},
   video:{type:String},
   film:{type:String},
   top10:{type:String},
   yeni:{type:String},
   comments:{
    type:[String],
    default:[]
   },
   likeCount:{
    type:Number,
    default:0
},
goruntuCount:{
  type:Number,
  default:7
},

})
export default mongoose.model('Post',post)
