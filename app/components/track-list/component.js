import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-group'],
  actions: {
    openDetails(track) {
      if (track === this.get('selectedTrack')) {
        track = null;
      }
      this.set('selectedTrack', track);
    },
  },
});
