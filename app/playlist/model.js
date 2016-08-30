import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  snapshotDate: DS.attr('date'),
  tracks: DS.hasMany('track'),
  images: DS.attr(),
});
