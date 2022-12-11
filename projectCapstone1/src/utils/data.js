const getData = () => {
  return [
    {
      id: 1,
      name: "Aplikasinya sangat bagus !!",
      tag: "dimasmds",
      imageUrl: "/images/dimasmds.jpeg",
      createdAt: "2022-04-14T04:27:34.572Z",
    },
    {
      id: 2,
      name: "Sangat mudah digunakan! aplikasinya sangat bagus",
      tag: "arifaizin",
      imageUrl: "/images/arifaizin.jpeg",
      createdAt: "2022-04-14T04:27:34.572Z",
    },
    {
      id: 3,
      name: "berkat aplikasi ini saya jadi dapat ruko yang bagus dan harga yang terjangkau tanpa harus mendatangi tokonya!",
      tag: "rfajri27",
      imageUrl: "/images/rfajri27.jpeg",
      createdAt: "2022-04-14T04:27:34.572Z",
    },
  ];
};

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getData, showFormattedDate };
