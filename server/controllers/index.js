const { Customer, Ticket } = require("../models");
const { hashPassword, comparePassword } = require("../helpers/bcrypt");
const { signToken, decodeToken } = require("../helpers/jwt");
const axios = require("axios");
const Amadeus = require("amadeus");

const seatgeekAPI = process.env.SEATGEEK_API_KEY;
const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_API_KEY,
  clientSecret: process.env.AMADEUS_SECRET_KEY,
});

class Controller {
  static async register(req, res, next) {
    try {
      const { email, password, phoneNumber, address } = req.body;
      const createCustomer = await Customer.create({
        email,
        password,
        phoneNumber,
        address,
      });
      res
        .status(201)
        .json({ id: createCustomer.id, email: createCustomer.email });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw { name: "EmailPasswordIsRequired" };
      const customer = await Customer.findOne({
        where: { email },
      });
      if (!customer || !comparePassword(password, customer.password)) {
        throw { name: "EmailPasswordInvalid" };
      }
      res.status(200).json({
        access_token: signToken({ id: customer.id }),
        email: customer.email,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getTaxonomies(req, res, next) {
    try {
      const { data } = await axios({
        method: "GET",
        url: `https://api.seatgeek.com/2/taxonomies?client_id=${seatgeekAPI}`,
      });
      let taxonomies = [];
      let sports = data.taxonomies
        .filter((el) => {
          return el.parent_id === 1000000;
        })
        .slice(0, 5);
      let concerts = data.taxonomies.filter((el) => {
        return el.parent_id === 2000000;
      });
      sports.forEach((el) => {
        taxonomies.push(el);
      });
      concerts.forEach((el) => {
        taxonomies.push(el);
      });

      res.status(200).json(taxonomies);
    } catch (error) {
      next(error);
    }
  }

  static async getEventDetail(req, res, next) {
    try {
      const event = req.params.name;
      const { data } = await axios({
        method: "GET",
        url: `https://api.seatgeek.com/2/events?q=${event}&client_id=${seatgeekAPI}`,
      });
      let events = data.events.map((el) => {
        const obj = {
          id: el.id,
          type: el.type,
          venue: {
            state: el.venue.state,
            venue: el.venue.name,
            location: {
              lat: el.venue.location.lat,
              lon: el.venue.location.lon,
            },
            address: el.venue.address,
            country: el.venue.country,
          },
          title: el.title,
          price: el.stats.average_price,
          date: new Date(el.datetime_local).toISOString().split("T")[0],
          performer: el.performers[0].name,
          image: el.performers[0].image,
        };
        return obj;
      });

      res.status(200).json(events);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static getHotels(request, response) {
    const { latitude, longitude } = request.headers;
    amadeus.referenceData.locations.hotels.byGeocode
      .get({
        latitude: latitude,
        longitude: longitude,
        radius: 5,
        radiusUnit: "KM",
      })
      .then((res) => {
        const hotels = res.result.data.map((el) => {
          const obj = {
            name: el.name,
            hotelId: el.hotelId,
            geoCode: {
              latitude: el.geoCode.latitude,
              longitude: el.geoCode.longitude,
            },
          };
          return obj;
        });
        response.status(200).json(hotels.slice(0, 5));
      })
      .catch((err) => {
        response.status(500).json({
          message: "Internal server error",
        });
      });
  }

  static async getEventById(request, response) {
    try {
      const id = +request.params.id;
      const { data } = await axios({
        method: "GET",
        url: `https://api.seatgeek.com/2/events/${id}?client_id=${seatgeekAPI}`,
      });
      let event = {
        type: data.type,
        id: data.id,
        title: data.title,
        date: new Date(data.datetime_utc).toISOString().split("T")[0],
        venue: {
          state: data.venue.state,
          country: data.venue.country,
          address: data.venue.address,
        },
        performer: {
          name: data.performers[0].name,
          image: data.performers[0].image,
        },
        price: data.stats.lowest_price,
      };
      response.status(200).json(event);
    } catch (err) {
      response.status(500).json({
        message: "Internal server error",
      });
    }
  }
}

module.exports = Controller;
