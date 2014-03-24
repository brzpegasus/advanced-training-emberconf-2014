export default function() {
  return function(key) {
    return this.$data[key];
  }.property()
}