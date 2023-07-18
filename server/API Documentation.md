# McDanold's API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `GET /taxonomies`
- `GET /events/:name`
- `GET /hotels`
- `GET /eventDetail/:id`

&nbsp;

## 1. POST /register

Description:

- Create new customer

Request:

- body:

```json
{
  "email": "customer1@gmail.com",
  "password": "customer1",
  "phoneNumber": "085308530853",
  "address": "Jl. ganesha"
}
```

_Response (201 - Created)_

```json
{
  "id": "1",
  "email": "customer1@gmail.com"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "email / password is required"
}
OR
{
  "message": "email or password is invalid"
}
OR
{
  "message": "this email is already registered"
}
OR
{
  "message": "email must be email format"
}
OR
{
  "message": "this email is already registered"
}
```

&nbsp;

## 2. POST /login

Description:

- Log in using customer's email and password

Request:

- body:

```json
{
  "email": "customer1@gmail.com",
  "password": "customer1"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg0Njk5NjIyfQ.xJtWivYDAKenjRi8JxaPGdYTPdtj73-fOlSHHPbL4ns",
  "email": "customer1@gmail.com"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "email / password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "email or password is invalid"
}
```

&nbsp;

## 3. GET /taxonomies

Description:

- Get all taxonomies

Request:

- headers:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg0Njk5NjIyfQ.xJtWivYDAKenjRi8JxaPGdYTPdtj73-fOlSHHPbL4ns"
}
```

_Response (200 - OK)_

```json
[
 {
        "id": 1010000,
        "name": "Baseball",
        "parent_id": 1000000,
        "short_name": null,
        "slug": "baseball",
        "images": {
            "1200x525": "https://seatgeek.com/images/performers-landscape/generic-baseball-270f67/677220/1200x525.jpg",
            "1200x627": "https://seatgeek.com/images/performers-landscape/generic-baseball-80baea/677220/1200x627.jpg",
            "136x136": "https://seatgeek.com/images/performers-landscape/generic-baseball-f1a0bc/677220/136x136.jpg",
            "500_700": "https://seatgeek.com/images/performers-landscape/generic-baseball-267601/677220/500_700.jpg",
            "800x320": "https://seatgeek.com/images/performers-landscape/generic-baseball-a113cb/677220/800x320.jpg",
            "banner": "https://seatgeek.com/images/performers-landscape/generic-baseball-85ce55/677220/banner.jpg",
            "block": "https://seatgeek.com/images/performers-landscape/generic-baseball-1d17bf/677220/block.jpg",
            "criteo_130_160": "https://seatgeek.com/images/performers-landscape/generic-baseball-d1f9fa/677220/criteo_130_160.jpg",
            "criteo_170_235": "https://seatgeek.com/images/performers-landscape/generic-baseball-30e389/677220/criteo_170_235.jpg",
            "criteo_205_100": "https://seatgeek.com/images/performers-landscape/generic-baseball-fd743e/677220/criteo_205_100.jpg",
            "criteo_400_300": "https://seatgeek.com/images/performers-landscape/generic-baseball-e57b98/677220/criteo_400_300.jpg",
            "fb_100x72": "https://seatgeek.com/images/performers-landscape/generic-baseball-8fec46/677220/fb_100x72.jpg",
            "fb_600_315": "https://seatgeek.com/images/performers-landscape/generic-baseball-5f13f7/677220/fb_600_315.jpg",
            "huge": "https://seatgeek.com/images/performers-landscape/generic-baseball-db0cd2/677220/huge.jpg",
            "ipad_event_modal": "https://seatgeek.com/images/performers-landscape/generic-baseball-ceb899/677220/ipad_event_modal.jpg",
            "ipad_header": "https://seatgeek.com/images/performers-landscape/generic-baseball-89f845/677220/ipad_header.jpg",
            "ipad_mini_explore": "https://seatgeek.com/images/performers-landscape/generic-baseball-e71742/677220/ipad_mini_explore.jpg",
            "mongo": "https://seatgeek.com/images/performers-landscape/generic-baseball-f83ff0/677220/mongo.jpg",
            "square_mid": "https://seatgeek.com/images/performers-landscape/generic-baseball-c06ae4/677220/square_mid.jpg",
            "triggit_fb_ad": "https://seatgeek.com/images/performers-landscape/generic-baseball-e0f8e0/677220/triggit_fb_ad.jpg"
        },
        "image": "https://seatgeek.com/images/performers-landscape/generic-baseball-db0cd2/677220/huge.jpg",
        "stats": {
            "event_count": 853,
            "performer_count": 134,
            "next_event_datetime_utc": "2023-06-08T01:45:00Z"
        },
        "rank": 0,
        "last_full_index_at": "2023-06-08T00:22:37Z",
        "is_visible": true
    },
    {
        "id": 1020000,
        "name": "Football",
        "parent_id": 1000000,
        "short_name": null,
        "slug": "football",
        "images": {
            "1200x525": "https://seatgeek.com/images/performers-landscape/generic-football-4120e2/677211/1200x525.jpg",
            "1200x627": "https://seatgeek.com/images/performers-landscape/generic-football-596e92/677211/1200x627.jpg",
            "136x136": "https://seatgeek.com/images/performers-landscape/generic-football-d4fafd/677211/136x136.jpg",
            "500_700": "https://seatgeek.com/images/performers-landscape/generic-football-fcd773/677211/500_700.jpg",
            "800x320": "https://seatgeek.com/images/performers-landscape/generic-football-3d793e/677211/800x320.jpg",
            "banner": "https://seatgeek.com/images/performers-landscape/generic-football-9806bc/677211/banner.jpg",
            "block": "https://seatgeek.com/images/performers-landscape/generic-football-c5c7ba/677211/block.jpg",
            "criteo_130_160": "https://seatgeek.com/images/performers-landscape/generic-football-bab268/677211/criteo_130_160.jpg",
            "criteo_170_235": "https://seatgeek.com/images/performers-landscape/generic-football-6c2673/677211/criteo_170_235.jpg",
            "criteo_205_100": "https://seatgeek.com/images/performers-landscape/generic-football-a39390/677211/criteo_205_100.jpg",
            "criteo_400_300": "https://seatgeek.com/images/performers-landscape/generic-football-72cd01/677211/criteo_400_300.jpg",
            "fb_100x72": "https://seatgeek.com/images/performers-landscape/generic-football-3f4507/677211/fb_100x72.jpg",
            "fb_600_315": "https://seatgeek.com/images/performers-landscape/generic-football-72649d/677211/fb_600_315.jpg",
            "huge": "https://seatgeek.com/images/performers-landscape/generic-football-6b0503/677211/huge.jpg",
            "ipad_event_modal": "https://seatgeek.com/images/performers-landscape/generic-football-426f9c/677211/ipad_event_modal.jpg",
            "ipad_header": "https://seatgeek.com/images/performers-landscape/generic-football-210956/677211/ipad_header.jpg",
            "ipad_mini_explore": "https://seatgeek.com/images/performers-landscape/generic-football-4da16d/677211/ipad_mini_explore.jpg",
            "mongo": "https://seatgeek.com/images/performers-landscape/generic-football-f83d18/677211/mongo.jpg",
            "square_mid": "https://seatgeek.com/images/performers-landscape/generic-football-59e97a/677211/square_mid.jpg",
            "triggit_fb_ad": "https://seatgeek.com/images/performers-landscape/generic-football-9ee9a0/677211/triggit_fb_ad.jpg"
        },
        "image": "https://seatgeek.com/images/performers-landscape/generic-football-6b0503/677211/huge.jpg",
        "stats": {
            "event_count": 159,
            "performer_count": 567,
            "next_event_datetime_utc": "2023-06-09T01:00:00Z"
        },
        "rank": 0,
        "last_full_index_at": "2023-06-08T00:22:37Z",
        "is_visible": true
    },
  ...,
]
```

&nbsp;

## 4. GET /events/:name

Description:

- Get event based on the event's name, venue, or performer

Request:

- headers:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg0Njk5NjIyfQ.xJtWivYDAKenjRi8JxaPGdYTPdtj73-fOlSHHPbL4ns"
}
```

- params:

```json
{
  "name": "sports"
}
```

_Response (200 - OK)_

```json
[
 {
        "id": 5843739,
        "type": "minor_league_baseball",
        "venue": {
            "state": "VA",
            "venue": "Virginia Credit Union Stadium",
            "location": {
                "lat": 38.2202,
                "lon": -77.4959
            },
            "address": "42 Jackie Robinson Way",
            "country": "US"
        },
        "title": "Charleston RiverDogs at Fredericksburg Nationals",
        "price": 35,
        "date": "2023-06-06",
        "performer": "Fredericksburg Nationals",
        "image": "https://seatgeek.com/images/performers-landscape/fredericksburg-nationals-6c89db/773586/huge.jpg"
    },
    {
        "id": 5766517,
        "type": "pga",
        "venue": {
            "state": "ON",
            "venue": "Oakdale Golf & Country Club",
            "location": {
                "lat": 43.7318,
                "lon": -79.5153
            },
            "address": "2388 Jane St.",
            "country": "Canada"
        },
        "title": "RBC Canadian Open - Wednesday",
        "price": 27,
        "date": "2023-06-06",
        "performer": "PGA Tour",
        "image": "https://seatgeek.com/images/performers-landscape/pga-tour-aa1f89/10453/huge.jpg"
    },
  ...,
]
```

&nbsp;

## 5. GET /hotels

Description:

- Get hotel based on nearest location

Request:

- headers:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg0Njk5NjIyfQ.xJtWivYDAKenjRi8JxaPGdYTPdtj73-fOlSHHPbL4ns",
  "latitude": "-6.9215529",
  "longitude": "107.6110212"
}
```

_Response (200 - OK)_

```json
[
  {
    "name": "IBIS STYLES BANDUNG BRAGA",
    "hotelId": "RTBDOBRA",
    "geoCode": {
      "latitude": -6.92061,
      "longitude": 107.61013
    }
  },
  {
    "name": "PRAMA GRAND PREANGER BANDUNG",
    "hotelId": "YHBDOPGB",
    "geoCode": {
      "latitude": -6.9221,
      "longitude": 107.6148
    }
  },
  {
    "name": "HYATT REGENCY BANDUNG",
    "hotelId": "HYBDOIIB",
    "geoCode": {
      "latitude": -6.90896,
      "longitude": 107.61366
    }
  },
  {
    "name": "HOLIDAY INN",
    "hotelId": "HIBDO8B8",
    "geoCode": {
      "latitude": -6.90401,
      "longitude": 107.61037
    }
  },
  {
    "name": "NOVOTEL BANDUNG",
    "hotelId": "RTBDONOV",
    "geoCode": {
      "latitude": -6.90491,
      "longitude": 107.604
    }
  }
]
```

&nbsp;

## 6. GET /eventDetail/:id

Description:

- Get hevent detail based on id

Request:

- headers:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg0Njk5NjIyfQ.xJtWivYDAKenjRi8JxaPGdYTPdtj73-fOlSHHPbL4ns"
}
```

- params:

```json
{
  "id": "5887967"
}
```

_Response (200 - OK)_

```json
{
  "type": "minor_league_baseball",
  "id": 5887967,
  "title": "Fort Wayne TinCaps at Quad Cities River Bandits",
  "date": "2023-06-07",
  "venue": {
    "state": "IA",
    "country": "US",
    "address": "209 S. Gaines St."
  },
  "performer": {
    "name": "Quad Cities River Bandits",
    "image": "https://seatgeek.com/images/performers-landscape/quad-cities-river-bandits-d8f9a2/14633/huge.jpg"
  },
  "price": 25
}
```

&nbsp;

## Global Error

_Response (401 - Unauthenticated)_

```json
{
  "message": "unauthenticated"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "internal server error"
}
```
