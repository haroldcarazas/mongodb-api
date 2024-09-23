import { Schema, model, Types } from 'mongoose'
import User from './User.js'
import Exam from './Exam.js'

const videoSchema = new Schema({
  video: {
    type: String,
    required: true
  },
  user: {
    type: Types.ObjectId,
    ref: User,
    required: true
  },
  exam: {
    type: Types.ObjectId,
    ref: Exam,
    required: true
  }
}, { timestamps: true })

const Video = model('Video', videoSchema)

export default Video
