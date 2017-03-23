if (sessionStorage.getItem("filter-placeholder")) {
  var value = sessionStorage.getItem("filter-placeholder");
    $(".filter-placeholder").text(value);
  sessionStorage.removeItem("filter-placeholder")
}
