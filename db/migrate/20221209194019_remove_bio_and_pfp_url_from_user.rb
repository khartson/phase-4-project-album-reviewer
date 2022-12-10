class RemoveBioAndPfpUrlFromUser < ActiveRecord::Migration[6.1]
  def change
    remove_columns :users, :bio, :pfp_url
  end
end
