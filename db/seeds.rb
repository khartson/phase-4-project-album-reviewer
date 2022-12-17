# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
kyle = User.create!({ username: "khartson2017", password: 'hello', 
                     profile_attributes: {
                      name: "Kyle",
                      bio: 'Fall of Troy superfan', 
                      pfp_url: 'https://external-preview.redd.it/A9P8zspGcFahsizLp_5bB5Zk6gHUmU2rlkO8buxpjdg.jpg?auto=webp&s=6d7728a892b380d052b794504eadd2784f0b84d1'
                    }
                  })

seth = User.create!({ username: "seth20", password: "hello",
                      profile_attributes: {
                        name: "Seth",
                        bio: "Coder, music fan",
                        pfp_url: "https://upload.wikimedia.org/wikipedia/en/1/13/The_Mantle.jpg"
                      }})

artists = Artist.create([
  { name: "The Fall of Troy", location: "WAS, US", image_url: 'https://media.altpress.com/uploads/2020/08/FALL-OF-TROY.jpg'},
  { name: "Agalloch", location: "WAS, US", image_url: "https://upload.wikimedia.org/wikipedia/en/1/13/The_Mantle.jpg"},
  { name: "Dance Gavin Dance", location: "CA, US", image_url:"https://www.pvconcerthall.com/assets/img/dancegavindance_eventimage-1580ea2ae4.jpg"},
  { name: "Streetlight Manifesto", location: "NJ, US", image_url: "https://s3.amazonaws.com/bit-photos/large/11965309.jpeg"},
  { name: "Peter Cat Recording Company", location: "Delhi, India", image_url: "https://sungenre.com/wp-content/uploads/2019/06/peter-cat-recording-co-bismillah.jpg"},
  { name: "Pierce the Veil", location: "CA, US", image_url: "https://s1.ticketm.net/dam/a/341/3fcb5538-bae3-4be3-b94c-1a3404de7341_263031_TABLET_LANDSCAPE_LARGE_16_9.jpg"},
  { name: "Between the Buried and Me", location: "NC, US", image_url: "https://i.scdn.co/image/ab6761610000e5eb87fc314a9b6b9f18e6e32278"},
])

albums = Album.create([
  { title: "Doppelganger", artist_id: 1, album_art_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/F.C.P.R.E.M.I.X._%28The_Fall_of_Troy_single_-_cover_art%29.jpg/220px-F.C.P.R.E.M.I.X._%28The_Fall_of_Troy_single_-_cover_art%29.jpg'},
  { title: "Manipulator", artist_id: 1, album_art_url: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Fotmanipulator.jpg'},
  { title: "OK", artist_id: 1, album_art_url: "https://upload.wikimedia.org/wikipedia/en/d/de/TheFallofTroyOKAlbumCover.jpg"},
  { title: "Mkiltearth", artist_id: 1, album_art_url: 'https://f4.bcbits.com/img/a0050301723_10.jpg'},
  { title: "The Fall of Troy", artist_id: 1, album_art_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Fall_Of_Troy.jpg/220px-Fall_Of_Troy.jpg'},
  { title: "Phantom on the Horizon", artist_id: 1, album_art_url: 'https://i.scdn.co/image/ab67616d00001e02d40942a127d0ecf17adc1746'},
  { title: "In the Unlikely Event", artist_id: 1, album_art_url: 'https://e.snmc.io/i/1200/s/2acd2ab2abfff943ebbd5ca680685e92/2749487'},
  { title: "The Mantle", artist_id: 2, album_art_url: "https://upload.wikimedia.org/wikipedia/en/1/13/The_Mantle.jpg"},
  { title: "Ashes Against the Grain", artist_id: 2, album_art_url: 'https://upload.wikimedia.org/wikipedia/en/e/e1/Ashes_Against_the_Grain.jpg'},
  { title: "Mothership", artist_id: 3, album_art_url: 'https://upload.wikimedia.org/wikipedia/en/f/f2/DGD_Mothership.jpeg'},
  { title: "Downtown Battle Mountain 2", artist_id: 3, album_art_url: 'https://upload.wikimedia.org/wikipedia/en/f/fe/Downtownbattlemountainii.jpg'},
  { title: "The Hands that Thieve", artist_id: 4, album_art_url: 'https://upload.wikimedia.org/wikipedia/en/e/ee/The_Hands_That_Theve.png'},
  { title: "Bismillah", artist_id: 5, album_art_url: 'https://f4.bcbits.com/img/a0285204730_10.jpg'},
  { title: "Collide with the Sky", artist_id: 6, album_art_url: 'https://m.media-amazon.com/images/I/61L6K5Igt-L._SY580_.jpg'},
  { title: "Colors", artist_id: 7, album_art_url: 'https://upload.wikimedia.org/wikipedia/en/c/cb/Colors1.jpg'},
])

reviews = Review.create([
  { user_id: kyle.id, rating: 5, album_id: 1, content: "Best album of all time"},
  { user_id: kyle.id, rating: 5, album_id: 2, content: "Solid album" },
  { user_id: seth.id, rating: 5, album_id: 1, content: "GOAT album for sure"},
])