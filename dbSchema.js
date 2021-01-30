import mongoose from 'mongoose';

const ruleSchema = mongoose.Schema({
  rule: {
    field: String,
    condition: String,
    condition_value: Number,
  },
  data: {
    name: String,
    crew: String,
    age: Number,
    position: String,
    missions: {
      count: Number,
      successful: Number,
      failed: Number
    }
  }
})

export default mongoose.model('Rules', ruleSchema);