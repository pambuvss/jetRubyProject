class ChangeHotels < ActiveRecord::Migration[5.2]
  def change
      remove_column :hotels, :addr
      add_column :hotels, :addr1, :string
      add_column :hotels, :addr2, :string
      add_column :hotels, :addr3, :string
      add_column :hotels, :addr4, :string
  end
end
