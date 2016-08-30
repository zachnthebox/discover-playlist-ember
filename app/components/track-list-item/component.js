import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  attributeBindings: ['track.uri:href'],
  classNames: ['list-group-item', 'list-group-item-action'],
  trackNumber: Ember.computed('index', function() {
    return this.get('index') + 1;
  }),
});
