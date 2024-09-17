import { Schema, model } from 'mongoose'

const questionSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  options: [
    {
      type: String,
      required: false
    }
  ],
  answer: {
    type: String,
    required: false
  },
  score: {
    type: Number,
    required: true
  }
})

const Question = model('Question', questionSchema)

export default Question
