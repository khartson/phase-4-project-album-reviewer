class AddAlbumArtUrlToAlbums < ActiveRecord::Migration[6.1]
  def change
    add_column :albums, :album_art_url, :string
  end
end
