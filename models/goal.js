import mongoose from "mongoose"

const Schema = mongoose.Schema

const noteSchema = new Schema({
  content: String,
}, {
  timestamps: true
})

const goalSchema = new Schema({
  category:{type: String, enum:['work', 'study', 'travel', 'fitness']},
  name: String,
  startDateTime: Date,
  endDateTime: Date,
  description: String,
  priority: {type: String, enum: ['low', 'medium', 'high', 'urgent']},
  completed: Boolean,
  owner:{type:Schema.Types.ObjectId, ref:'User'},
  note: [noteSchema]
}, {
  timestamps: true
})

const Goal = mongoose.model('Goal', goalSchema)

export {
    Goal
}