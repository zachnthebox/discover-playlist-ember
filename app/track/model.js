import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  uri: DS.attr('string'),
  album: DS.attr(),
});
