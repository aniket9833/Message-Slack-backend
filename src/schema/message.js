import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: [true, 'message body is required']
    },
    image: {
      type: String
    },
    channelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'channel',
      required: [true, 'Channel Id is required']
    },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Sender Id is required']
    },
    workspaceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Workspace',
      required: [true, 'Workspace ID is required']
    }
  },
  { timestamps: true }
);

const Message = mongoose.model('Message', messageSchema);
export default Message;
