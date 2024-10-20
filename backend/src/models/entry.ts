import mongoose, { Document } from 'mongoose'

interface Teacher {
  name: string
  subject: string
  iconUrl: string
}

const teacherSchema = new mongoose.Schema<Teacher>(
  {
    name: { type: String, required: true },
    subject: { type: String, required: true },
    iconUrl: { type: String, required: true },
  },
  {
    collation: { locale: 'en', strength: 1 },
  }
)

teacherSchema.set('toJSON', { getters: true })
;(teacherSchema as any).options.toJSON.transform = (_: any, teacher: any) => {
  const obj = { ...teacher }
  delete obj._id
  delete obj.__v
  return obj
}

teacherSchema.index({ name: 1, subject: 1 })

export default mongoose.model<Teacher & Document>('Teacher', teacherSchema)
