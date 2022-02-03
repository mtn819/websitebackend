'use strict';

/**
 * live-dataset service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::live-dataset.live-dataset');
