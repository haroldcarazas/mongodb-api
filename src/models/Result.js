import { Schema, model, Types } from 'mongoose'
import Exam from './Exam.js'
import User from './User.js'
import Question from './Question.js'

const answerSchema = new Schema({
  question: {
    type: Types.ObjectId,
    required: true,
    ref: Question
  },
  answer: {
    type: String,
    required: true
  }
})

const resultSchema = new Schema({
  exam: {
    type: Types.ObjectId,
    required: true,
    ref: Exam
  },
  user: {
    type: Types.ObjectId,
    required: true,
    ref: User
  },
  answers: [answerSchema],
  score: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: false,
    default: Date.now()
  }
})

const Result = model('Result', resultSchema)

export default Result
