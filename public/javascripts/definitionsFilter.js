$(".tag-button").click(function() {
  var value = this.value
  sessionStorage.setItem("filter-placeholder", value);
})
