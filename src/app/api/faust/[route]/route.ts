import { faustRouteHandler } from '@faustwp/experimental-app-router';
import '../../../../../faust.config';

const { GET, POST } = faustRouteHandler;

export { GET, POST };

// executes is the handling of the endpoints for the auth token and login/logout functionality