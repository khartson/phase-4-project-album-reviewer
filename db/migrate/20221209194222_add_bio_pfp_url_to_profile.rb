class AddBioPfpUrlToProfile < ActiveRecord::Migration[6.1]
  def change
    add_column :profiles, :pfp_url, :string
    add_column :profiles, :bio, :string
  end
end
