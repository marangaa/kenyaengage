import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema({
    content: String,
    channels: String,
    schedule: Date,
}, { timestamps: true });

export default mongoose.models.Notification || mongoose.model('Notification', NotificationSchema);