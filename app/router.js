import EmberRouter from '@ember/routing/router';
import config from 'project-x/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('product', function () {
    this.route('index', { path: '/' });
    this.route('create');
    this.route('edit', { path: '/edit/:id' });
    this.route('detail', { path: '/detail/:id' });
  });
});
