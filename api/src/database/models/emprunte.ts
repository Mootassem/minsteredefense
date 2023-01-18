import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('emprunte');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const EmprunteSchema = new Schema(
    {
      machine: [{
        type: Schema.Types.ObjectId,
        ref: 'machine',
        required: false,
      }],
      siteOrigine: {
        type: Schema.Types.ObjectId,
        ref: 'site',
        required: true,
      },
      siteDestination: {
        type: Schema.Types.ObjectId,
        ref: 'site',
        required: true,
      },
      dateDebut: {
        type: String,
        required: true,
      },
      dateFin: {
        type: String,
      },
      commentaires: {
        type: String,
      },
      statut: {
        type: String,
        enum: [
          "en_attente",
          "valide",
          "refuse",
          null
        ],
      },
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

  EmprunteSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );



  EmprunteSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  EmprunteSchema.set('toJSON', {
    getters: true,
  });

  EmprunteSchema.set('toObject', {
    getters: true,
  });

  return database.model('emprunte', EmprunteSchema);
};
