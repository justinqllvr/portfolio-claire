function createPopulatedController(uid, schema) {
    return createCoreController(uid, () => {
      console.log(schema.collectionName, getPopulateFromSchema(schema));
      return {
        async find(ctx) {
          ctx.query = {
            ...ctx.query,
            populate: getPopulateFromSchema(schema),
          };
          return await super.find(ctx);
        },
        async findOne(ctx) {
          ctx.query = {
            ...ctx.query,
            populate: getPopulateFromSchema(schema),
          };
          return await super.findOne(ctx);
        },
      };
    });
  }
  
  module.exports = createPopulatedController;