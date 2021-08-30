'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const {
  sanitizeEntity
} = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const {
      link
    } = ctx.params;

    const entity = await strapi.services.product.findOne({
      link
    });
    return sanitizeEntity(entity, {
      model: strapi.models.product
    });
  },
};
