'use strict';

/**
 *  projet controller
 */

const schema = require("../content-types/projet/schema.json");
const createPopulatedController = require("../../../helpers/populate");


module.exports = createPopulatedController('api::projet.projet', schema);
