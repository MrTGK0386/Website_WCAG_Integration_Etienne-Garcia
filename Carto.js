{
    "album": {
      "external_urls": {
        "spotify": STRING
      },
      "album_type": STRING,
      "total_tracks": INT,
      "id": STRING,
      "images": [
        {
          "height": INT,
          "url": STRING,
          "width": INT
        },
      ],
      "name": STRING,
      "release_date": DATE,
      "release_date_precision": STRING,
      "type": STRING,
      "genres": [STRING],
      "label": STRING,
      "popularity": INT,
      "artists": [
        {
          "external_urls": {
            "spotify": STRING
          },
          "href": STRING,
          "id": STRING,
          "name": STRING,
          "type": STRING,
          "uri": STRING
        }
      ],
      "tracks": [
        {
          "id": STRING,
          "name": STRING,
          "track_number": INT,
          "disc_number": INT,
          "duration_ms": INT,
          "explicit": BOOLEAN,
          "external_urls": {
            "spotify": STRING
          },
          "preview_url": STRING,
          "type": STRING,
          "artists": [
            {
              "external_urls": {
                "spotify": STRING
              },
              "href": STRING,
              "id": STRING,
              "name": STRING,
              "type": STRING,
              "uri": STRING
            }
          ]
        }
      ]
    },
    "artists": [
      {
        "external_urls": {
          "spotify": STRING
        },
        "followers": {
          "href": STRING,
          "total": INT
        },
        "genres": [
          STRING
        ],
        "id": STRING,
        "images": [
          {
            "height": INT,
            "url": STRING,
            "width": INT
          }
        ],
        "name": STRING,
        "popularity": INT,
        "type": STRING
      }
    ],
    "disc_number": INT,
    "duration_ms": INT,
    "explicit": BOOLEAN,
    "external_urls": {
      "spotify": STRING
    },
    "id": STRING,
    "name": STRING,
    "popularity": INT,
    "preview_url": STRING,
    "track_number": INT,
    "type": STRING
  }