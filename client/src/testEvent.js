export const testData = `{
    "events": [
        {
            "name": "Hamilton",
            "type": "event",
            "id": "Z7r9jZ1Ae00At",
            "test": false,
            "url": "http://www.ticketsnow.com/InventoryBrowse/TicketList.aspx?PID=2924169",
            "locale": "en-us",
            "images": [
                {
                    "ratio": "4_3",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_CUSTOM.jpg",
                    "width": 305,
                    "height": 225,
                    "fallback": false
                },
                {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_EVENT_DETAIL_PAGE_16_9.jpg",
                    "width": 205,
                    "height": 115,
                    "fallback": false
                },
                {
                    "ratio": "3_2",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RETINA_PORTRAIT_3_2.jpg",
                    "width": 640,
                    "height": 427,
                    "fallback": false
                },
                {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RECOMENDATION_16_9.jpg",
                    "width": 100,
                    "height": 56,
                    "fallback": false
                },
                {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                    "width": 2048,
                    "height": 1152,
                    "fallback": false
                },
                {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RETINA_LANDSCAPE_16_9.jpg",
                    "width": 1136,
                    "height": 639,
                    "fallback": false
                },
                {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_TABLET_LANDSCAPE_16_9.jpg",
                    "width": 1024,
                    "height": 576,
                    "fallback": false
                },
                {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RETINA_PORTRAIT_16_9.jpg",
                    "width": 640,
                    "height": 360,
                    "fallback": false
                },
                {
                    "ratio": "3_2",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_TABLET_LANDSCAPE_3_2.jpg",
                    "width": 1024,
                    "height": 683,
                    "fallback": false
                },
                {
                    "ratio": "3_2",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_ARTIST_PAGE_3_2.jpg",
                    "width": 305,
                    "height": 203,
                    "fallback": false
                }
            ],
            "sales": {
                "public": {
                    "startTBD": true,
                    "startTBA": false
                }
            },
            "dates": {
                "start": {
                    "localDate": "2021-08-17",
                    "localTime": "20:00:00",
                    "dateTime": "2021-08-18T02:00:00Z",
                    "dateTBD": false,
                    "dateTBA": false,
                    "timeTBA": false,
                    "noSpecificTime": false
                },
                "status": {
                    "code": "offsale"
                },
                "spanMultipleDays": false
            },
            "classifications": [
                {
                    "primary": true,
                    "segment": {
                        "id": "KZFzniwnSyZfZ7v7na",
                        "name": "Arts & Theatre"
                    },
                    "genre": {
                        "id": "KnvZfZ7v7l1",
                        "name": "Theatre"
                    },
                    "subGenre": {
                        "id": "KZazBEonSMnZfZ7vAve",
                        "name": "Musical"
                    },
                    "family": false
                }
            ],
            "outlets": [
                {
                    "url": "https://www.ticketmaster.com/hamilton-calgary-alberta-08-17-2021/event/Z7r9jZ1Ae00At",
                    "type": "tmMarketPlace"
                }
            ],
            "seatmap": {
                "staticUrl": "http://resale.ticketmaster.com.au/akamai-content/maps/2897-1-4-main.gif"
            },
            "_links": {
                "self": {
                    "href": "/discovery/v2/events/Z7r9jZ1Ae00At?locale=en-us"
                },
                "attractions": [
                    {
                        "href": "/discovery/v2/attractions/K8vZ9174wRf?locale=en-us"
                    }
                ],
                "venues": [
                    {
                        "href": "/discovery/v2/venues/ZFr9jZda1F?locale=en-us"
                    }
                ]
            },
            "_embedded": {
                "venues": [
                    {
                        "name": "Southern Alberta Jubilee Auditorium",
                        "type": "venue",
                        "id": "ZFr9jZda1F",
                        "test": false,
                        "locale": "en-us",
                        "postalCode": "T2N 1M4",
                        "timezone": "America/Denver",
                        "city": {
                            "name": "Calgary"
                        },
                        "state": {
                            "name": "Alberta",
                            "stateCode": "AB"
                        },
                        "country": {
                            "name": "Canada",
                            "countryCode": "CA"
                        },
                        "address": {
                            "line1": "1415 14th Avenue NW"
                        },
                        "location": {
                            "longitude": "0",
                            "latitude": "0"
                        },
                        "upcomingEvents": {
                            "_total": 42,
                            "tmr": 32,
                            "ticketmaster": 10
                        },
                        "_links": {
                            "self": {
                                "href": "/discovery/v2/venues/ZFr9jZda1F?locale=en-us"
                            }
                        }
                    }
                ],
                "attractions": [
                    {
                        "name": "Hamilton (Touring)",
                        "type": "attraction",
                        "id": "K8vZ9174wRf",
                        "test": false,
                        "url": "https://www.ticketmaster.com/hamilton-touring-tickets/artist/2336213",
                        "locale": "en-us",
                        "images": [
                            {
                                "ratio": "4_3",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_CUSTOM.jpg",
                                "width": 305,
                                "height": 225,
                                "fallback": false
                            },
                            {
                                "ratio": "16_9",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_EVENT_DETAIL_PAGE_16_9.jpg",
                                "width": 205,
                                "height": 115,
                                "fallback": false
                            },
                            {
                                "ratio": "3_2",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RETINA_PORTRAIT_3_2.jpg",
                                "width": 640,
                                "height": 427,
                                "fallback": false
                            },
                            {
                                "ratio": "16_9",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RECOMENDATION_16_9.jpg",
                                "width": 100,
                                "height": 56,
                                "fallback": false
                            },
                            {
                                "ratio": "16_9",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                "width": 2048,
                                "height": 1152,
                                "fallback": false
                            },
                            {
                                "ratio": "16_9",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RETINA_LANDSCAPE_16_9.jpg",
                                "width": 1136,
                                "height": 639,
                                "fallback": false
                            },
                            {
                                "ratio": "16_9",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_TABLET_LANDSCAPE_16_9.jpg",
                                "width": 1024,
                                "height": 576,
                                "fallback": false
                            },
                            {
                                "ratio": "16_9",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RETINA_PORTRAIT_16_9.jpg",
                                "width": 640,
                                "height": 360,
                                "fallback": false
                            },
                            {
                                "ratio": "3_2",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_TABLET_LANDSCAPE_3_2.jpg",
                                "width": 1024,
                                "height": 683,
                                "fallback": false
                            },
                            {
                                "ratio": "3_2",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_ARTIST_PAGE_3_2.jpg",
                                "width": 305,
                                "height": 203,
                                "fallback": false
                            }
                        ],
                        "classifications": [
                            {
                                "primary": true,
                                "segment": {
                                    "id": "KZFzniwnSyZfZ7v7na",
                                    "name": "Arts & Theatre"
                                },
                                "genre": {
                                    "id": "KnvZfZ7v7l1",
                                    "name": "Theatre"
                                },
                                "subGenre": {
                                    "id": "KZazBEonSMnZfZ7vAve",
                                    "name": "Musical"
                                },
                                "type": {
                                    "id": "KZAyXgnZfZ7v7nI",
                                    "name": "Undefined"
                                },
                                "subType": {
                                    "id": "KZFzBErXgnZfZ7v7lJ",
                                    "name": "Undefined"
                                },
                                "family": false
                            }
                        ],
                        "upcomingEvents": {
                            "_total": 446,
                            "tmr": 210,
                            "ticketmaster": 236
                        },
                        "_links": {
                            "self": {
                                "href": "/discovery/v2/attractions/K8vZ9174wRf?locale=en-us"
                            }
                        }
                    }
                ]
            }
        },
        {
            "name": "Hamilton",
            "type": "event",
            "id": "Z7r9jZ1Ae00AY",
            "test": false,
            "url": "http://www.ticketsnow.com/InventoryBrowse/TicketList.aspx?PID=2924170",
            "locale": "en-us",
            "images": [
                {
                    "ratio": "4_3",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_CUSTOM.jpg",
                    "width": 305,
                    "height": 225,
                    "fallback": false
                },
                {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_EVENT_DETAIL_PAGE_16_9.jpg",
                    "width": 205,
                    "height": 115,
                    "fallback": false
                },
                {
                    "ratio": "3_2",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RETINA_PORTRAIT_3_2.jpg",
                    "width": 640,
                    "height": 427,
                    "fallback": false
                },
                {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RECOMENDATION_16_9.jpg",
                    "width": 100,
                    "height": 56,
                    "fallback": false
                },
                {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                    "width": 2048,
                    "height": 1152,
                    "fallback": false
                },
                {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RETINA_LANDSCAPE_16_9.jpg",
                    "width": 1136,
                    "height": 639,
                    "fallback": false
                },
                {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_TABLET_LANDSCAPE_16_9.jpg",
                    "width": 1024,
                    "height": 576,
                    "fallback": false
                },
                {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RETINA_PORTRAIT_16_9.jpg",
                    "width": 640,
                    "height": 360,
                    "fallback": false
                },
                {
                    "ratio": "3_2",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_TABLET_LANDSCAPE_3_2.jpg",
                    "width": 1024,
                    "height": 683,
                    "fallback": false
                },
                {
                    "ratio": "3_2",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_ARTIST_PAGE_3_2.jpg",
                    "width": 305,
                    "height": 203,
                    "fallback": false
                }
            ],
            "sales": {
                "public": {
                    "startTBD": true,
                    "startTBA": false
                }
            },
            "dates": {
                "start": {
                    "localDate": "2021-08-18",
                    "localTime": "20:00:00",
                    "dateTime": "2021-08-19T02:00:00Z",
                    "dateTBD": false,
                    "dateTBA": false,
                    "timeTBA": false,
                    "noSpecificTime": false
                },
                "status": {
                    "code": "offsale"
                },
                "spanMultipleDays": false
            },
            "classifications": [
                {
                    "primary": true,
                    "segment": {
                        "id": "KZFzniwnSyZfZ7v7na",
                        "name": "Arts & Theatre"
                    },
                    "genre": {
                        "id": "KnvZfZ7v7l1",
                        "name": "Theatre"
                    },
                    "subGenre": {
                        "id": "KZazBEonSMnZfZ7vAve",
                        "name": "Musical"
                    },
                    "family": false
                }
            ],
            "outlets": [
                {
                    "url": "https://www.ticketmaster.com/hamilton-calgary-alberta-08-18-2021/event/Z7r9jZ1Ae00AY",
                    "type": "tmMarketPlace"
                }
            ],
            "seatmap": {
                "staticUrl": "http://resale.ticketmaster.com.au/akamai-content/maps/2897-1-4-main.gif"
            },
            "_links": {
                "self": {
                    "href": "/discovery/v2/events/Z7r9jZ1Ae00AY?locale=en-us"
                },
                "attractions": [
                    {
                        "href": "/discovery/v2/attractions/K8vZ9174wRf?locale=en-us"
                    }
                ],
                "venues": [
                    {
                        "href": "/discovery/v2/venues/ZFr9jZda1F?locale=en-us"
                    }
                ]
            },
            "_embedded": {
                "venues": [
                    {
                        "name": "Southern Alberta Jubilee Auditorium",
                        "type": "venue",
                        "id": "ZFr9jZda1F",
                        "test": false,
                        "locale": "en-us",
                        "postalCode": "T2N 1M4",
                        "timezone": "America/Denver",
                        "city": {
                            "name": "Calgary"
                        },
                        "state": {
                            "name": "Alberta",
                            "stateCode": "AB"
                        },
                        "country": {
                            "name": "Canada",
                            "countryCode": "CA"
                        },
                        "address": {
                            "line1": "1415 14th Avenue NW"
                        },
                        "location": {
                            "longitude": "0",
                            "latitude": "0"
                        },
                        "upcomingEvents": {
                            "_total": 42,
                            "tmr": 32,
                            "ticketmaster": 10
                        },
                        "_links": {
                            "self": {
                                "href": "/discovery/v2/venues/ZFr9jZda1F?locale=en-us"
                            }
                        }
                    }
                ],
                "attractions": [
                    {
                        "name": "Hamilton (Touring)",
                        "type": "attraction",
                        "id": "K8vZ9174wRf",
                        "test": false,
                        "url": "https://www.ticketmaster.com/hamilton-touring-tickets/artist/2336213",
                        "locale": "en-us",
                        "images": [
                            {
                                "ratio": "4_3",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_CUSTOM.jpg",
                                "width": 305,
                                "height": 225,
                                "fallback": false
                            },
                            {
                                "ratio": "16_9",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_EVENT_DETAIL_PAGE_16_9.jpg",
                                "width": 205,
                                "height": 115,
                                "fallback": false
                            },
                            {
                                "ratio": "3_2",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RETINA_PORTRAIT_3_2.jpg",
                                "width": 640,
                                "height": 427,
                                "fallback": false
                            },
                            {
                                "ratio": "16_9",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RECOMENDATION_16_9.jpg",
                                "width": 100,
                                "height": 56,
                                "fallback": false
                            },
                            {
                                "ratio": "16_9",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                "width": 2048,
                                "height": 1152,
                                "fallback": false
                            },
                            {
                                "ratio": "16_9",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RETINA_LANDSCAPE_16_9.jpg",
                                "width": 1136,
                                "height": 639,
                                "fallback": false
                            },
                            {
                                "ratio": "16_9",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_TABLET_LANDSCAPE_16_9.jpg",
                                "width": 1024,
                                "height": 576,
                                "fallback": false
                            },
                            {
                                "ratio": "16_9",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RETINA_PORTRAIT_16_9.jpg",
                                "width": 640,
                                "height": 360,
                                "fallback": false
                            },
                            {
                                "ratio": "3_2",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_TABLET_LANDSCAPE_3_2.jpg",
                                "width": 1024,
                                "height": 683,
                                "fallback": false
                            },
                            {
                                "ratio": "3_2",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_ARTIST_PAGE_3_2.jpg",
                                "width": 305,
                                "height": 203,
                                "fallback": false
                            }
                        ],
                        "classifications": [
                            {
                                "primary": true,
                                "segment": {
                                    "id": "KZFzniwnSyZfZ7v7na",
                                    "name": "Arts & Theatre"
                                },
                                "genre": {
                                    "id": "KnvZfZ7v7l1",
                                    "name": "Theatre"
                                },
                                "subGenre": {
                                    "id": "KZazBEonSMnZfZ7vAve",
                                    "name": "Musical"
                                },
                                "type": {
                                    "id": "KZAyXgnZfZ7v7nI",
                                    "name": "Undefined"
                                },
                                "subType": {
                                    "id": "KZFzBErXgnZfZ7v7lJ",
                                    "name": "Undefined"
                                },
                                "family": false
                            }
                        ],
                        "upcomingEvents": {
                            "_total": 446,
                            "tmr": 210,
                            "ticketmaster": 236
                        },
                        "_links": {
                            "self": {
                                "href": "/discovery/v2/attractions/K8vZ9174wRf?locale=en-us"
                            }
                        }
                    }
                ]
            }
        },
        {
            "name": "Hamilton",
            "type": "event",
            "id": "Z7r9jZ1Ae00Aw",
            "test": false,
            "url": "http://www.ticketsnow.com/InventoryBrowse/TicketList.aspx?PID=2924172",
            "locale": "en-us",
            "images": [
                {
                    "ratio": "4_3",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_CUSTOM.jpg",
                    "width": 305,
                    "height": 225,
                    "fallback": false
                },
                {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_EVENT_DETAIL_PAGE_16_9.jpg",
                    "width": 205,
                    "height": 115,
                    "fallback": false
                },
                {
                    "ratio": "3_2",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RETINA_PORTRAIT_3_2.jpg",
                    "width": 640,
                    "height": 427,
                    "fallback": false
                },
                {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RECOMENDATION_16_9.jpg",
                    "width": 100,
                    "height": 56,
                    "fallback": false
                },
                {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                    "width": 2048,
                    "height": 1152,
                    "fallback": false
                },
                {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RETINA_LANDSCAPE_16_9.jpg",
                    "width": 1136,
                    "height": 639,
                    "fallback": false
                },
                {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_TABLET_LANDSCAPE_16_9.jpg",
                    "width": 1024,
                    "height": 576,
                    "fallback": false
                },
                {
                    "ratio": "16_9",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RETINA_PORTRAIT_16_9.jpg",
                    "width": 640,
                    "height": 360,
                    "fallback": false
                },
                {
                    "ratio": "3_2",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_TABLET_LANDSCAPE_3_2.jpg",
                    "width": 1024,
                    "height": 683,
                    "fallback": false
                },
                {
                    "ratio": "3_2",
                    "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_ARTIST_PAGE_3_2.jpg",
                    "width": 305,
                    "height": 203,
                    "fallback": false
                }
            ],
            "sales": {
                "public": {
                    "startTBD": true,
                    "startTBA": false
                }
            },
            "dates": {
                "start": {
                    "localDate": "2021-08-19",
                    "localTime": "20:00:00",
                    "dateTime": "2021-08-20T02:00:00Z",
                    "dateTBD": false,
                    "dateTBA": false,
                    "timeTBA": false,
                    "noSpecificTime": false
                },
                "status": {
                    "code": "offsale"
                },
                "spanMultipleDays": false
            },
            "classifications": [
                {
                    "primary": true,
                    "segment": {
                        "id": "KZFzniwnSyZfZ7v7na",
                        "name": "Arts & Theatre"
                    },
                    "genre": {
                        "id": "KnvZfZ7v7l1",
                        "name": "Theatre"
                    },
                    "subGenre": {
                        "id": "KZazBEonSMnZfZ7vAve",
                        "name": "Musical"
                    },
                    "family": false
                }
            ],
            "outlets": [
                {
                    "url": "https://www.ticketmaster.com/hamilton-calgary-alberta-08-19-2021/event/Z7r9jZ1Ae00Aw",
                    "type": "tmMarketPlace"
                }
            ],
            "seatmap": {
                "staticUrl": "http://resale.ticketmaster.com.au/akamai-content/maps/2897-1-4-main.gif"
            },
            "_links": {
                "self": {
                    "href": "/discovery/v2/events/Z7r9jZ1Ae00Aw?locale=en-us"
                },
                "attractions": [
                    {
                        "href": "/discovery/v2/attractions/K8vZ9174wRf?locale=en-us"
                    }
                ],
                "venues": [
                    {
                        "href": "/discovery/v2/venues/ZFr9jZda1F?locale=en-us"
                    }
                ]
            },
            "_embedded": {
                "venues": [
                    {
                        "name": "Southern Alberta Jubilee Auditorium",
                        "type": "venue",
                        "id": "ZFr9jZda1F",
                        "test": false,
                        "locale": "en-us",
                        "postalCode": "T2N 1M4",
                        "timezone": "America/Denver",
                        "city": {
                            "name": "Calgary"
                        },
                        "state": {
                            "name": "Alberta",
                            "stateCode": "AB"
                        },
                        "country": {
                            "name": "Canada",
                            "countryCode": "CA"
                        },
                        "address": {
                            "line1": "1415 14th Avenue NW"
                        },
                        "location": {
                            "longitude": "0",
                            "latitude": "0"
                        },
                        "upcomingEvents": {
                            "_total": 42,
                            "tmr": 32,
                            "ticketmaster": 10
                        },
                        "_links": {
                            "self": {
                                "href": "/discovery/v2/venues/ZFr9jZda1F?locale=en-us"
                            }
                        }
                    }
                ],
                "attractions": [
                    {
                        "name": "Hamilton (Touring)",
                        "type": "attraction",
                        "id": "K8vZ9174wRf",
                        "test": false,
                        "url": "https://www.ticketmaster.com/hamilton-touring-tickets/artist/2336213",
                        "locale": "en-us",
                        "images": [
                            {
                                "ratio": "4_3",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_CUSTOM.jpg",
                                "width": 305,
                                "height": 225,
                                "fallback": false
                            },
                            {
                                "ratio": "16_9",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_EVENT_DETAIL_PAGE_16_9.jpg",
                                "width": 205,
                                "height": 115,
                                "fallback": false
                            },
                            {
                                "ratio": "3_2",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RETINA_PORTRAIT_3_2.jpg",
                                "width": 640,
                                "height": 427,
                                "fallback": false
                            },
                            {
                                "ratio": "16_9",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RECOMENDATION_16_9.jpg",
                                "width": 100,
                                "height": 56,
                                "fallback": false
                            },
                            {
                                "ratio": "16_9",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                                "width": 2048,
                                "height": 1152,
                                "fallback": false
                            },
                            {
                                "ratio": "16_9",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RETINA_LANDSCAPE_16_9.jpg",
                                "width": 1136,
                                "height": 639,
                                "fallback": false
                            },
                            {
                                "ratio": "16_9",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_TABLET_LANDSCAPE_16_9.jpg",
                                "width": 1024,
                                "height": 576,
                                "fallback": false
                            },
                            {
                                "ratio": "16_9",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RETINA_PORTRAIT_16_9.jpg",
                                "width": 640,
                                "height": 360,
                                "fallback": false
                            },
                            {
                                "ratio": "3_2",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_TABLET_LANDSCAPE_3_2.jpg",
                                "width": 1024,
                                "height": 683,
                                "fallback": false
                            },
                            {
                                "ratio": "3_2",
                                "url": "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_ARTIST_PAGE_3_2.jpg",
                                "width": 305,
                                "height": 203,
                                "fallback": false
                            }
                        ],
                        "classifications": [
                            {
                                "primary": true,
                                "segment": {
                                    "id": "KZFzniwnSyZfZ7v7na",
                                    "name": "Arts & Theatre"
                                },
                                "genre": {
                                    "id": "KnvZfZ7v7l1",
                                    "name": "Theatre"
                                },
                                "subGenre": {
                                    "id": "KZazBEonSMnZfZ7vAve",
                                    "name": "Musical"
                                },
                                "type": {
                                    "id": "KZAyXgnZfZ7v7nI",
                                    "name": "Undefined"
                                },
                                "subType": {
                                    "id": "KZFzBErXgnZfZ7v7lJ",
                                    "name": "Undefined"
                                },
                                "family": false
                            }
                        ],
                        "upcomingEvents": {
                            "_total": 446,
                            "tmr": 210,
                            "ticketmaster": 236
                        },
                        "_links": {
                            "self": {
                                "href": "/discovery/v2/attractions/K8vZ9174wRf?locale=en-us"
                            }
                        }
                    }
                ]
            }
        }
    ]
}`