class AddSoldOutToProducts < ActiveRecord::Migration
  def self.up
    add_column :products, :sold_out_at, :datetime, :null => true
  end

  def self.down
    remove_column :products, :sold_out_at
  end
end
