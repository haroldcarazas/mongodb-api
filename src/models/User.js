import { Schema, model, Types } from 'mongoose'
import Course from './Course.js'

const userSchema = new Schema({
  fName: {
    type: String,
    required: true
  },
  mName: {
    type: String,
    required: false
  },
  lName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  courses: [
    {
      type: Types.ObjectId,
      required: true,
      ref: Course
    }
  ],
  image: {
    type: String,
    required: false
  }
})

const User = model('User', userSchema)

export default User
