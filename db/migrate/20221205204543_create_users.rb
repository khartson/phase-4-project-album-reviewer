class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :name
      t.string :bio
      t.string :pfp_url
      t.string :timestamps

      t.timestamps
    end
  end
end
