const contohPromise = () => {
  return new Promise((resolve, reject) => {
    // resolve(() => {
    //   "Berhasil";
    // });
    //   resolve(() => {});

    reject(() => {
      "gagal";
    });
  });
};
