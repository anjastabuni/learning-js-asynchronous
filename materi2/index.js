setTimeout(function () {
  document.body.style.backgroundColor = "red";
  setTimeout(function () {
    document.body.style.backgroundColor = "yellow";
    setTimeout(function () {
      document.body.style.backgroundColor = "green";
    }, 1000);
  }, 1000);
}, 1000);

searchMoviesApi(
  "naruto",
  function (movies) {
    saveToMyOb(
      movies,
      function () {
        // kalau berhasil kita simpan
      },
      () => {
        // kalau gagal
      }
    );
  },
  () => {
    // server error
  }
);
