const http = require("http");
const { read_file, write_file } = require("./manage/index");

const app = http.createServer((req, res) => {
  //animal
  if (req.url === "/get_all_animals" && req.method === "GET") {
    const fileData = read_file("animal.json");

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(fileData));
  }
  if (req.url === "/add_animal" && req.method === "POST") {
    req.on("data", (chunk) => {
      const data = JSON.parse(chunk);
      const fileData = read_file("animal.json");

      fileData.push(data);
      write_file("animal.json", fileData);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "added new animal",
        })
      );
    });
  }

  //car
  if (req.url === "/get_all_cars" && req.method === "GET") {
    const fileData = read_file("car.json");

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(fileData));
  }
  if (req.url === "/add_car" && req.method === "POST") {
    req.on("data", (chunk) => {
      const data = JSON.parse(chunk);
      const fileData = read_file("car.json");

      fileData.push(data);
      write_file("car.json", fileData);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "added new car",
        })
      );
    });
  }

  //fruit

  if (req.url === "/get_all_fruits" && req.method === "GET") {
    const fileData = read_file("fruit.json");

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(fileData));
  }
  if (req.url === "/add_fruit" && req.method === "POST") {
    req.on("data", (chunk) => {
      const data = JSON.parse(chunk);
      const fileData = read_file("fruit.json");

      fileData.push(data);
      write_file("fruit.json", fileData);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "added new fruit",
        })
      );
    });
  }
  //laptop
  if (req.url === "/get_all_laptops" && req.method === "GET") {
    const fileData = read_file("laptop.json");

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(fileData));
  }
  if (req.url === "/add_laptop" && req.method === "POST") {
    req.on("data", (chunk) => {
      const data = JSON.parse(chunk);
      const fileData = read_file("laptop.json");

      fileData.push(data);
      write_file("laptop.json", fileData);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "added new laptop",
        })
      );
    });
  }
  //phone
  if (req.url === "/get_all_phones" && req.method === "GET") {
    const fileData = read_file("phone.json");

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(fileData));
  }
  if (req.url === "/add_phone" && req.method === "POST") {
    req.on("data", (chunk) => {
      const data = JSON.parse(chunk);
      const fileData = read_file("phone.json");

      fileData.push(data);
      write_file("phone.json", fileData);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "added new phone",
        })
      );
    });
  }
  if (req.url === "/get_all_militaries" && req.method === "GET") {
    const fileData = read_file("military.json");

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(fileData));
  }
  //military
  if (req.url === "/add_military" && req.method === "POST") {
    req.on("data", (chunk) => {
      const data = JSON.parse(chunk);
      const fileData = read_file("military.json");

      fileData.push(data);
      write_file("military.json", fileData);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "added new military",
        })
      );
    });
  }
});

app.listen(3000, () => {
  console.log("server is running at: 3000");
});
