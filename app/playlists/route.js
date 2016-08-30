import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('playlist').then(playlists => {
      return playlists.sortBy('snapshotDate').reverse();
    });
  },
});
