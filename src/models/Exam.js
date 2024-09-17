import { Schema, model, Types } from 'mongoose'
import Course from './Course.js'
import Question from './Question.js'

const examSchema = new Schema({
  course: {
    type: Types.ObjectId,
    required: true,
    ref: Course
  },
  questions: [
    {
      type: Types.ObjectId,
      required: true,
      ref: Question
    }
  ],
  maxScore: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  }
})

const Exam = model('Exam', examSchema)

export default Exam
