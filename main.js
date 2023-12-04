import { createCoordinates } from "./firebase.js";
import { readFlights } from "./firebase.js";

let flightsText = document.getElementById("flights");
let flights = [];

window.addEventListener("DOMContentLoaded", async () => {
  flights = await readFlights();
  // console.log(flights);

  flights.forEach((flight, index) => {
    flight.salida = new Date(flight.salida.seconds * 1000).toLocaleString();
    flightsText.innerHTML += `
      <div>
        <p>Salida: ${flight.salida}</p>
        <p>Origen: ${flight.origen}</p>
        <p>Destino: ${flight.destino}</p>
        <p>Espacio: ${flight.espacio}</p>
        <button id="track-btn-${index + 1}">Iniciar Vuelo</button>
        <hr>
      </div>
    `;
  });

  let trackButton1 = document.getElementById("track-btn-1");
  let trackButton2 = document.getElementById("track-btn-2");
  let trackButton3 = document.getElementById("track-btn-3");
  let trackButton4 = document.getElementById("track-btn-4");
  let trackButton5 = document.getElementById("track-btn-5");

  trackButton1.addEventListener("click", () => {
    setInterval(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        var date = new Date();
        var actualTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

        createCoordinates(
          position.coords.latitude,
          position.coords.longitude,
          actualTime,
          1
        );
      });
    }, 5000);
  });
  trackButton2.addEventListener("click", () => {
    setInterval(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        var date = new Date();
        var actualTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

        createCoordinates(
          position.coords.latitude,
          position.coords.longitude,
          actualTime,
          2
        );
      });
    }, 5000);
  });
  trackButton3.addEventListener("click", () => {
    setInterval(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        var date = new Date();
        var actualTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

        createCoordinates(
          position.coords.latitude,
          position.coords.longitude,
          actualTime,
          3
        );
      });
    }, 5000);
  });
  trackButton4.addEventListener("click", () => {
    setInterval(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        var date = new Date();
        var actualTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

        createCoordinates(
          position.coords.latitude,
          position.coords.longitude,
          actualTime,
          4
        );
      });
    }, 5000);
  });
  trackButton5.addEventListener("click", () => {
    setInterval(() => {
      // var date = new Date();
      // var actualTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      // let latitude, longitude;
      // navigator.geolocation.getCurrentPosition((position) => {
      //   latitude = position.coords.latitude;
      //   longitude = position.coords.longitude;
      // });
      // createCoordinates(latitude, longitude, actualTime, 5);
      navigator.geolocation.getCurrentPosition((position) => {
        var date = new Date();
        var actualTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

        createCoordinates(
          position.coords.latitude,
          position.coords.longitude,
          actualTime,
          5
        );
      });
    }, 5000);
  });
});

// let startButton = document.getElementById("start-button");

// startButton.addEventListener("click", () => {
//   setInterval(() => {
//     var date = new Date();
//     var actualTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
//     let latitude, longitude;
//     navigator.geolocation.getCurrentPosition((position) => {
//       latitude = position.coords.latitude;
//       longitude = position.coords.longitude;
//     });
//     createCoordinates("37.7749° N", "-122.4194° O", actualTime, "192.168.0.2");
//   }, 10000);
// });

// navigator.geolocation.watchPosition((position) => {
//   var date = new Date();
//   var ip = "192.168.0.2";
//   var actualTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
//   var latitude = position.coords.latitude;
//   var longitude = position.coords.longitude;

//   createCoordinates(latitude, longitude, actualTime, ip);
// })

// navigator.geolocation.getCurrentPosition((position) => {
//   var date = new Date();
//   var id = uuidv4();
//   var actualTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

//   createCoordinates(
//     position.coords.latitude,
//     position.coords.longitude,
//     actualTime,
//     ip
//   );
// });

