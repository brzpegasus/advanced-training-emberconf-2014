export default function() {
  return function(key, value) {
    if (arguments.length === 1) {
      return this.$changes[key] || this.$data[key];
    } else {
      var changes = this.$changes;
      changes[key] = value;
      this.set('$changes', changes);
      return value;
    }
  }.property('$data', '$changes')
}