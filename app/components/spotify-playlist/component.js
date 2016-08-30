import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['spotify-play--playlist'],

  loading: true,

  tracks: Ember.computed.alias('playlist.tracks'),

  trackIds: Ember.computed('tracks.@each.id', function() {
    let tracks = this.get('tracks');
    let value = '';
    tracks.forEach(function(track, i) {
      value += track.id;
      if (i !== tracks.length - 1) {
        value += ',';
      }
    });
    return value;
  }),

  actions: {
    loaded() {
      this.set('loading', false);
    },
  },
});
