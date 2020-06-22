import mongoose from "mongoose";
let Schema = mongoose.Schema();
let ChatGroupShema = new Schema({
  name: String,
  userAmount: { type: Number, min: 3, max: 177 },
  messageAmount: { type: Number, default: 0 },
  userId: String,
  members: [
    {userId: String}
  ],
  createAt: { type: Number, default: Date.now },
  updateAt: { type: Number, default: null },
  deleteAt: { type: Number, default: null },
});

module.export = mongoose.model('chat-group', ChatGroupShema);