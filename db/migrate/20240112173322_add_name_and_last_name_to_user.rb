class AddNameAndLastNameToUser < ActiveRecord::Migration[7.0]
  def change
    change_table :users, bulk: true do |t|
      t.string :first_name, null: true
      t.string :middle_name, null: true
      t.string :last_name, null: true
    end
  end
end
