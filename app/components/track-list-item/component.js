import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  classNames: ['list-group-item', 'list-group-item-action'],
  trackNumber: Ember.computed('index', function() {
    return this.get('index') + 1;
  }),
  click() {
    this.sendAction('action', this.get('track'));
  },
});
