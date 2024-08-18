import mongoose from 'mongoose'

const jobschema = new mongoose.Schema({
    company:{
        type: String,
        require: [true, 'company name is require'],
    },
    position:{
        type: String,
        require: [true, 'position is require'],
        maxlenghth: 100
    },
    status:{
        type: String,
        enum: ['pending', 'rejected', 'interview'],
        default: 'pending'
    },
    worktype:{
        type: String,
        enum: ['full time', 'part time', 'internship', 'contract'],
        default: 'full time'
    },
    workLocation:{
        type: String,
        default: 'Mumbai',
        require: [true, 'work location is require']
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        
    }
},{timestamps: true})

export default mongoose.model("Job", jobschema)