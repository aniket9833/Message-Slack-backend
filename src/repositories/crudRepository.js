export default function crudRepository(model) {
  return {
    create: async function (data) {
      const newDoc = model.create(data);
      return newDoc;
    },
    getAll: async function () {
      const allDocs = model.find();
      return allDocs;
    },
    getById: async function (id) {
      const doc = model.findById(id);
      return doc;
    },
    delete: async function (id) {
      const response = model.findByIdAndDelete(id);
      return response;
    },
    update: async function (id, data) {
      const updatedDoc = model.findByIdAndUpdate(id, data, { new: true });
      return updatedDoc;
    }
  };
}
