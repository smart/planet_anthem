class CreateProducts < ActiveRecord::Migration
  def self.up
    create_table :products do |t|
      t.integer :number
      t.string :description
      t.integer :cents
      t.integer :qoh
      t.timestamps
    end
  end

  def self.down
    drop_table :products
  end
end
