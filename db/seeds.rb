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
artists = Artist.create([
  { name: "The Fall of Troy", location: "WAS, US", image_url: 'https://media.altpress.com/uploads/2020/08/FALL-OF-TROY.jpg'},
  { name: "Agalloch", location: "WAS, US", image_url: "https://upload.wikimedia.org/wikipedia/en/1/13/The_Mantle.jpg"},
  { name: "Dance Gavin Dance", location: "CA, US", image_url:"https://www.pvconcerthall.com/assets/img/dancegavindance_eventimage-1580ea2ae4.jpg"},
  { name: "Streetlight Manifesto", location: "NJ, US", image_url: "https://s3.amazonaws.com/bit-photos/large/11965309.jpeg"},
  { name: "Peter Cat Recording Company", location: "Delhi, India", image_url: "https://sungenre.com/wp-content/uploads/2019/06/peter-cat-recording-co-bismillah.jpg"},
  { name: "Pierce the Veil", location: "CA, US", image_url: "https://s1.ticketm.net/dam/a/341/3fcb5538-bae3-4be3-b94c-1a3404de7341_263031_TABLET_LANDSCAPE_LARGE_16_9.jpg"},
  { name: "Between the Buried and Me", location: "NC, US", image_url: "https://i.scdn.co/image/ab6761610000e5eb87fc314a9b6b9f18e6e32278"},
])
