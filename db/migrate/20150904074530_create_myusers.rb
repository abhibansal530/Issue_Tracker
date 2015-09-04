class CreateMyusers < ActiveRecord::Migration
  def change
    create_table :myusers do |t|
      t.string :email
      t.string :name
      t.string :password

      t.timestamps null: false
    end
  end
end
