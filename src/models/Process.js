import mongoose from 'mongoose';

const ProcessSchema = new mongoose.Schema({
    title: String,
    description: String,
    objectives: String,
    timeline: Date,
    stakeholders: String,
}, { timestamps: true });

export default mongoose.models.Process || mongoose.model('Process', ProcessSchema);