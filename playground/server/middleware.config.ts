import { Integration } from '@vue-storefront/middleware';
import { Queries } from './queries'
import { Mutations } from './mutations'

const odooIntegration: Integration = {
  location: '@erpgap/odoo-sdk-api-client/server',
  configuration: {
    odooGraphqlUrl: 'https://dev.theaterpaedagogik.bayern/graphql/vsf',
    queries: { ...Queries, ...Mutations }
  }
};

export default {
  integrations: {
    odoo: odooIntegration
  }
};
