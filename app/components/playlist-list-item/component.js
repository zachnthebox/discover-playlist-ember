import Ember from 'ember';

export default Ember.Component.extend({
  playlistImage: Ember.computed.alias('playlist.images.0.url'),
});
