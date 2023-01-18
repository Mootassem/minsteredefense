import mongoose from 'mongoose';
import FileSchema from './schemas/fileSchema';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('machine');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const MachineSchema = new Schema(
    {
      titre: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      etat: {
        type: String,
        enum: [
          "en_panne",
          "en_reparation",
          "fixe",
          null
        ],
      },
      date: {
        type: String,
      },
      type: {
        type: Schema.Types.ObjectId,
        ref: 'typeMachine',
      },
      reference: {
        type: String,
      },
      operations: [{
        type: Schema.Types.ObjectId,
        ref: 'operation',
      }],
      site: {
        type: Schema.Types.ObjectId,
        ref: 'site',
      },
      empruntes: [{
        type: Schema.Types.ObjectId,
        ref: 'emprunte',
      }],
      attachements: [FileSchema],
      image: [FileSchema],
      tenant: {
        type: Schema.Types.ObjectId,
        ref: 'tenant',
        required: true
      },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      importHash: { type: String },
    },
    { timestamps: true },
  );

  MachineSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );



  MachineSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  MachineSchema.set('toJSON', {
    getters: true,
  });

  MachineSchema.set('toObject', {
    getters: true,
  });

  return database.model('machine', MachineSchema);
};
