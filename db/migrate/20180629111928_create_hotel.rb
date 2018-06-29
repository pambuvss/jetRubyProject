class CreateHotel < ActiveRecord::Migration[5.2]
  def change
    create_table :hotels do |t|
    	t.string :name, null:false 
        t.integer :star, null:false
        t.boolean :breakf, null:false
        t.text :descr, null:false
        t.string :photo, null:false 
        t.string :addr, null:false
        t.float :rate, null:false
        t.float :price, null:false

        t.timestamps
    end
  end
end
