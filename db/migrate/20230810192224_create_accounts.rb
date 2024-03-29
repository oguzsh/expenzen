class CreateAccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :accounts do |t|
      t.string :name, null: false
      t.string :account_type, null: false
      t.decimal :balance, null: false
      t.references :user, null: false

      t.timestamps
    end
  end
end
