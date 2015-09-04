class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :owner_id
      t.string :name
      t.text :description
      t.string :permission

      t.timestamps null: false
    end
  end
end
